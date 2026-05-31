import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

type TranslationValue = string | number | TranslationDict | TranslationValue[];

interface TranslationDict {
  [key: string]: TranslationValue;
}

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly http = inject(HttpClient);

  private readonly dict = signal<TranslationDict>({});
  private readonly currentLocale = signal<string>('it');

  load(locale: string): Observable<TranslationDict> {
    return this.http.get<TranslationDict>(`/assets/i18n/${locale}.json`).pipe(
      tap((data) => {
        this.dict.set(data);
        this.currentLocale.set(locale);
      })
    );
  }

  locale(): string {
    return this.currentLocale();
  }

  translate(key: string): TranslationValue {
    if (!key) {
      return '';
    }
    const parts = key.split('.');
    let cursor: TranslationValue = this.dict();
    for (const part of parts) {
      if (cursor && typeof cursor === 'object' && !Array.isArray(cursor) && part in (cursor as TranslationDict)) {
        cursor = (cursor as TranslationDict)[part];
      } else {
        return key;
      }
    }
    return cursor ?? key;
  }

  text(key: string): string {
    const value = this.translate(key);
    return typeof value === 'string' ? value : key;
  }

  list<T = TranslationValue>(key: string): T[] {
    const value = this.translate(key);
    return Array.isArray(value) ? (value as T[]) : [];
  }
}
