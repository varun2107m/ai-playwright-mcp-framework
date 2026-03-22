import { baseRules, stabilityRules } from "./base.prompt";
import { qaRules } from "./qaRules.prompt";

export const loginTestPrompt = `
${baseRules}
${stabilityRules}

Go to the login page and:

1. Identify username and password fields
2. Test these scenarios:
   - Empty username/password
   - Invalid credentials
   - Valid login

3. Validate:
   - Proper error messages for invalid cases
   - Successful navigation after login (URL + page elements)

4. Generate Playwright test using:
   - clear test name
   - proper assertions
   - stable selectors

Save test under: tests/ai-generated/
`;
