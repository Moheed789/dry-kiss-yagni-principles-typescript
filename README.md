# DRY, KISS, and YAGNI

This project has small TypeScript examples for three useful coding ideas. The examples are simple, but the ideas also help us make good choices in larger projects.

The code examples show the basic idea. This guide explains when each idea helps, when to be careful, and how the three ideas work together.

## What you need

- Node.js 24 or newer

To check your Node.js version, run `node --version` in a terminal.

## Run the examples

Open a terminal in the project folder and run one of these commands:

```bash
npm run dry
npm run kiss
npm run yagni
```

Each command runs one example and prints its result. Use these commands to run the examples one at a time.

---

## DRY: Keep one copy of a rule

DRY means **Don't Repeat Yourself**. When the same rule is copied into many places, each copy must be changed when the rule changes. It is easy to miss one. That can make the program give different answers in different places.

The goal is not just to write fewer lines. The goal is to keep one rule in one clear place, so it is easier to change and check.

### Example in this project

In `examples/dry.ts`, the first two lines calculate a 10% discount separately:

```ts
const firstOrderPrice = 1000 - 1000 * 0.1;
const secondOrderPrice = 2000 - 2000 * 0.1;
```

If the discount changes to 15%, both lines need an update. If one is missed, orders may get different discounts by mistake. The `applyDiscount` function puts the rule in one place. The program can then use that function for many prices.

### Similar code is not always the same rule

Two lines may look alike but serve different needs. For example, a student may pass a class with 50 marks, while a certificate may need 60 marks. These rules should stay separate if they can change for different reasons.

Before joining repeated code, ask: **“Will these places always need the same change?”** If the answer is no, keeping them separate may be clearer.

### DRY can help when

- The same tax, discount, check, or access rule is used in many places.
- Forgetting to update one copy could cause a mistake.
- A named function makes the rule easier to understand and reuse.

### Be careful when

- The code only looks similar, but has a different purpose.
- A shared function needs many extra settings to handle every case.
- The shared code makes it harder to see what is happening.

---

## KISS: Keep the solution simple

KISS means **Keep It Simple**. Use only as much code and structure as the problem needs. Simple code is easier to read, explain, and change.

Simple does not always mean fewer lines. A short line can still be hard to understand. Clear names and easy steps are more useful than clever code.

### Example in this project

In `examples/kiss.ts`, `complicatedIsAdult` uses `if/else` to return `true` or `false`. The `isAdult` function does the same check in a simpler way:

```ts
function isAdult(age: number): boolean {
  return age >= 18;
}
```

The check `age >= 18` already gives `true` or `false`, so another `if/else` is not needed. The name `isAdult` also tells us what the function checks.

Do not put a whole program into one long line just to make it shorter. Split code into clear steps if that makes it easier to follow.

### Look out for extra complexity

A small task may not need many layers, settings, or tools. For example, a basic API may not need microservices or a plugin system at the start. Add that kind of structure when the project has a real need for it.

After writing code, ask:

- Do the names explain what the code does?
- Can I understand the result without opening many files?
- Did I add a step or setting that the task does not need?
- Can I explain this code to another student in simple words?

---

## YAGNI: Build a feature when it is needed

YAGNI means **You Aren't Gonna Need It**. Do not build extra features based only on a guess that someone may need them later. Every feature takes time to build, understand, and fix.

YAGNI does not mean ignoring future changes. It means solving today's real need and adding more when there is a clear reason.

### Example in this project

In `examples/yagni.ts`, the task is to show whether a student passed or failed. The `showResult` function does that job. It does not build an attendance chart, email alert, or ranking system because this task does not need those features.

If a teacher asks for an attendance report later, the feature can be added then. The request will help us understand what the report should show. Building it too early may mean extra work on the wrong feature.

### YAGNI does not mean

- Leaving the current task unfinished.
- Skipping something the feature needs to work correctly.
- Making the code impossible to change later.

Keep the code clear and easy to change. Just wait to build extra features until they are needed.

---

## How the three ideas work together

Imagine you are making a student result program:

1. **YAGNI:** The current task only needs Pass or Fail. Do not add rankings or email alerts yet.
2. **KISS:** Write the Pass or Fail check in a clear way.
3. **DRY:** If the same pass rule is used in many places, keep it in one place. But do not join rules that have different pass marks.

The ideas help balance each other. DRY can lead to extra code if we try to join things that are not really the same. KISS reminds us to keep the solution clear. YAGNI helps us focus on what the task needs now.

## Questions for class

1. If the discount changes from 10% to 15%, which version in `dry.ts` is easier to update? Why?
2. If two pieces of code look alike, how can we tell whether they follow the same rule?
3. What kind of value does `age >= 18` give back?
4. What problems could come from building a ranking system when we only need Pass or Fail?
5. If a new need comes up later, can we add a feature then?

## Quick reminder

- **DRY:** Do not copy the same rule into many places.
- **KISS:** Keep the solution clear and simple.
- **YAGNI:** Do not build extra features before they are needed.

The goal is not to write the fewest lines. The goal is to write code that people can understand, change, and use without extra work.
