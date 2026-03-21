export const testGenPrompt = (feature: string) => `
You are a senior SDET writing Playwright tests.

Follow these STRICT rules:

1. Use TypeScript
2. Use Playwright test syntax (@playwright/test)
3. Use async/await
4. Use Page Object Model

5. Assume this import exists:
   import { LoginPage } from '../../pages/auth/LoginPage';

6. Use proper assertions:
   import { test, expect } from '@playwright/test';

7. Test must:
   - Be clean and readable
   - Have meaningful test name
   - Use realistic steps
   - Not include comments unless necessary

8. DO NOT:
   - Add explanations
   - Add markdown
   - Return anything except code

9. Output format:
   - A complete runnable test file

Feature:
${feature}
`;
