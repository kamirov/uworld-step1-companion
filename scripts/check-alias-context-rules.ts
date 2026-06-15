import { shouldRejectAliasByContext } from "../src/content/aliasContextRules.ts";
import type { TermMatch } from "../src/content/termTypes.ts";

function mensesTerm(alias: string): TermMatch {
  return { alias, kind: "symptom", id: "menses" };
}

function isRejected(text: string, matchText: string, alias = matchText): boolean {
  const index = text.indexOf(matchText);
  if (index < 0) {
    throw new Error(`Could not find ${JSON.stringify(matchText)} in ${JSON.stringify(text)}`);
  }
  return shouldRejectAliasByContext({
    text,
    index,
    matchText,
    term: mensesTerm(alias),
  });
}

function assertRejected(text: string, matchText: string, alias = matchText): void {
  if (!isRejected(text, matchText, alias)) {
    throw new Error(`Expected context rejection for ${JSON.stringify(text)}`);
  }
}

function assertAllowed(text: string, matchText: string, alias = matchText): void {
  if (isRejected(text, matchText, alias)) {
    throw new Error(`Expected context allowance for ${JSON.stringify(text)}`);
  }
}

assertRejected("during this period", "period");
assertRejected("in this period", "period");
assertRejected("over that period", "period");
assertRejected("within the current period", "period");
assertRejected("previous periods", "periods");

assertAllowed("menstrual period", "menstrual period");
assertAllowed("first menstrual period", "first menstrual period");
assertAllowed("painful period", "period");
assertAllowed("missed period", "period");
assertAllowed("menses", "menses");
assertAllowed("menstruation", "menstruation");

console.log("Alias context rules OK");
