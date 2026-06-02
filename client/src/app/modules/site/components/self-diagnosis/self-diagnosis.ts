import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import {
  DiagnosisQuestion,
  DiagnosisResult,
} from '../../interfaces/site.interface';

@Component({
  selector: 'app-self-diagnosis',
  standalone: true,
  imports: [CommonModule, RouterLink, TPipe, RevealDirective],
  templateUrl: './self-diagnosis.html',
  styleUrl: './self-diagnosis.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelfDiagnosisComponent {
  private readonly i18n = inject(I18nService);

  readonly questions = this.i18n.list<DiagnosisQuestion>('site.diagnosis.questions');
  readonly step = signal(0);
  readonly answers = signal<Record<string, string>>({});
  readonly finished = signal(false);

  readonly currentQuestion = computed(() => this.questions[this.step()] ?? null);

  readonly showBack = computed(() => this.step() > 0 || this.finished());

  readonly result = computed<DiagnosisResult | null>(() => {
    if (!this.finished()) {
      return null;
    }
    const a = this.answers();
    if (a['situazione'] === 'atto') {
      const atto = a['atto'];
      if (atto && atto !== 'nessuno') {
        return this.lookupResult(atto);
      }
    }
    const rapporto = a['rapporto'];
    return rapporto ? this.lookupResult(rapporto) : null;
  });

  select(value: string): void {
    const q = this.currentQuestion();
    if (!q) {
      return;
    }
    this.answers.update((prev) => ({ ...prev, [q.id]: value }));

    if (this.step() >= this.questions.length - 1) {
      this.finished.set(true);
      return;
    }

    if (q.id === 'situazione' && value !== 'atto') {
      this.finished.set(true);
      return;
    }

    this.step.update((s) => s + 1);
  }

  back(): void {
    if (this.finished()) {
      this.finished.set(false);
      const a = this.answers();
      if (a['situazione'] && a['situazione'] !== 'atto') {
        const next = { ...a };
        delete next['situazione'];
        this.answers.set(next);
        this.step.set(1);
        return;
      }
      const last = this.questions[this.questions.length - 1];
      if (last) {
        const next = { ...a };
        delete next[last.id];
        this.answers.set(next);
        this.step.set(this.questions.length - 1);
      }
      return;
    }

    if (this.step() <= 0) {
      return;
    }

    const q = this.currentQuestion();
    if (q) {
      this.answers.update((prev) => {
        const next = { ...prev };
        delete next[q.id];
        return next;
      });
    }
    this.step.update((s) => s - 1);
  }

  restart(): void {
    this.step.set(0);
    this.answers.set({});
    this.finished.set(false);
  }

  private lookupResult(key: string): DiagnosisResult | null {
    const value = this.i18n.translate('site.diagnosis.results.' + key);
    return value && typeof value === 'object' && !Array.isArray(value)
      ? (value as unknown as DiagnosisResult)
      : null;
  }
}
