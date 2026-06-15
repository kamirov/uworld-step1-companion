import type { TermMatch } from "./termTypes";

export interface AliasContextRuleContext {
  text: string;
  index: number;
  matchText: string;
  term: TermMatch;
}

type AliasContextRule = (ctx: AliasContextRuleContext) => boolean;

const TEMPORAL_PERIOD_LEFT_CONTEXT_RE =
  /(?:^|[^\p{L}\p{N}_])(?:this|that|these|those|current|previous|prior|next|same|given)\s*$/u;

function normalizeRuleText(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u00AD\u200B-\u200D\u2060\uFEFF]/g, "");
}

function ruleKey(term: TermMatch): string {
  return `${term.kind}:${term.id}:${normalizeRuleText(term.alias).replace(/\s+/g, " ").trim()}`;
}

function hasTemporalPeriodLeftContext(ctx: AliasContextRuleContext): boolean {
  const leftContext = normalizeRuleText(ctx.text.slice(0, ctx.index));
  return TEMPORAL_PERIOD_LEFT_CONTEXT_RE.test(leftContext);
}

const ALIAS_CONTEXT_RULES: Record<string, readonly AliasContextRule[]> = {
  "symptom:menses:period": [hasTemporalPeriodLeftContext],
  "symptom:menses:periods": [hasTemporalPeriodLeftContext],
};

export function shouldRejectAliasByContext(ctx: AliasContextRuleContext): boolean {
  const rules = ALIAS_CONTEXT_RULES[ruleKey(ctx.term)];
  return rules?.some((rule) => rule(ctx)) ?? false;
}
