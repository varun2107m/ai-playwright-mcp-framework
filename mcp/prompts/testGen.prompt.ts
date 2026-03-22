import { baseRules, stabilityRules } from "./base.prompt";
import { qaRules } from "./qaRules.prompt";

export const testGenPrompt = (feature: string) => `
${baseRules}
${qaRules}
${stabilityRules}

Generate a Playwright test for the following feature:

Feature: ${feature}

Instructions:
- Identify key user flows
- Cover both positive and negative scenarios
- Add proper assertions for each step

Validation Rules:
- Validate URL after navigation
- Validate visible elements
- Validate text content

Best Practices:
- Use stable selectors (id, data-test)
- Avoid brittle selectors
- Use Page Object Model if available

Output:
- Provide complete Playwright test code

Save the test file under: tests/ui/ai-generated/
Use file name format: ${feature}.spec.ts
`;
