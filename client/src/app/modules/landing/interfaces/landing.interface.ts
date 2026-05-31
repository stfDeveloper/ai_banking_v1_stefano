export interface KpiItem {
  value: string;
  label: string;
}

export interface KpiNumberItem {
  value: string;
  label: string;
  unit?: string;
  prefix?: string;
  suffix?: string;
}

export interface MethodCard {
  key: string;
  title: string;
  body: string;
}

export interface FlowStep {
  num: string;
  title: string;
  body: string;
  cta?: string;
}

export interface FindingItem {
  title: string;
  body: string;
  tag: string;
}

export interface AudienceCard {
  title: string;
  body: string;
  items: string[];
}

export interface SosItem {
  key: string;
  title: string;
  deadline: string;
  body: string;
  cta: string;
}

export interface TestimonialItem {
  quote: string;
  amount: string;
  name: string;
  context: string;
}

export interface PillItem {
  title: string;
  duration: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ContractRow {
  k: string;
  v: string;
}

export interface DemoDiscrepancy {
  label: string;
  severity: string;
  visible: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  items: FooterLink[];
}
