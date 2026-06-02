export interface NavLink {
  label: string;
  path: string;
}

export interface NavGroup {
  label: string;
  items: NavLink[];
}

export interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface CheckItem {
  title: string;
  oneLiner: string;
  detail: string;
}

export interface BentoCell {
  title: string;
  hint: string;
  path: string;
  size: 'sm' | 'lg';
}

export interface StepItem {
  num: string;
  title: string;
  body: string;
}

export interface StepperBlock {
  eyebrow: string;
  title: string;
  steps: StepItem[];
}

export interface PerkItem {
  title: string;
  body: string;
}

export interface TestimonialItem {
  quote: string;
  amount: string;
  who: string;
}

export interface SosTeaser {
  label: string;
  deadline: string;
  path: string;
}

export interface PageHeroContent {
  eyebrow: string;
  title: string;
  lead: string;
}

export interface ChipGroup {
  title: string;
  items: string[];
}

export interface Banner {
  title: string;
  body: string;
}

export interface ServicePage {
  hero: PageHeroContent;
  tipi: ChipGroup;
  documenti: ChipGroup;
  estinto: Banner;
}

export interface SosIntro {
  hook: string;
  detail: string;
}

export interface SosPage {
  hero: PageHeroContent;
  deadline: string;
  intro: SosIntro;
  origine: ChipGroup;
}

export interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FooterColumn {
  title: string;
  items: NavLink[];
}

export interface LegalSection {
  h: string;
  p: string[];
}

export interface LegalPage {
  title: string;
  updated: string;
  sections: LegalSection[];
}

export interface NarrativeBlock {
  eyebrow: string;
  headline: string;
  body: string;
}

export interface ProblemNumberHero {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface ProblemNumbersBlock {
  eyebrow: string;
  title: string;
  lead: string;
  hero: ProblemNumberHero;
  support: StatItem[];
}

export interface BeforeAfterRow {
  label: string;
  before: string;
  after: string;
}

export interface StoryBridgeBlock {
  eyebrow: string;
  headline: string;
  body: string;
}

export interface BeforeAfterBlock {
  eyebrow: string;
  title: string;
  beforeLabel: string;
  afterLabel: string;
  rows: BeforeAfterRow[];
  bridge?: StoryBridgeBlock;
}

export interface ServiceChecksBlock {
  eyebrow: string;
  title: string;
  bridge: StoryBridgeBlock;
}

export type ServiceLayout = 'mutui' | 'conti' | 'leasing' | 'finanziamenti';

export type ServiceSectionId =
  | 'narrative'
  | 'beforeAfter'
  | 'checks'
  | 'tipi'
  | 'outcomes'
  | 'stakes'
  | 'estinto'
  | 'stepper'
  | 'stats'
  | 'authority';

export interface StoryChapter {
  title: string;
  body: string;
  year?: string;
}

export interface StakesBlock {
  eyebrow: string;
  title: string;
  items: { title: string; body: string }[];
}

export interface AuthorityBlock {
  eyebrow: string;
  title: string;
  norms: string[];
  sentenze: string[];
}

export interface OutcomeItem {
  title: string;
  body: string;
  icon?: string;
}

export interface DiagnosisOption {
  label: string;
  value: string;
}

export interface DiagnosisQuestion {
  id: string;
  prompt: string;
  options: DiagnosisOption[];
}

export interface DiagnosisResult {
  title: string;
  body: string;
  path: string;
  cta: string;
}

export type PageAccent = 'gold' | 'navy' | 'emerald' | 'coral';

export interface ServicePageExtended extends ServicePage {
  accent: PageAccent;
  layout: ServiceLayout;
  sectionOrder: ServiceSectionId[];
  narrative: NarrativeBlock;
  beforeAfter: BeforeAfterBlock;
  checks: ServiceChecksBlock;
  stakes: StakesBlock;
  outcomesIntro: { eyebrow: string; title: string; lead: string };
  outcomes: OutcomeItem[];
}

export interface SosPageExtended extends SosPage {
  stakes: StakesBlock;
  timeline: StoryChapter[];
}
