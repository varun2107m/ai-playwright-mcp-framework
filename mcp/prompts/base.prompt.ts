export const baseRules = `
Always return output in this JSON format:

{
  "testName": "string",
  "steps": ["step1", "step2"],
  "assertions": ["assertion1"],
  "playwrightCode": "complete test code"
}

Rules:
- Always include assertions
- Always validate:
  - URL
  - element visibility
  - text content
- Use stable selectors (id, data-test)
- Avoid weak assertions
`;

export const stabilityRules = `
- Wait for elements before interacting
- Use expect().toBeVisible() before actions
- Avoid fixed timeouts
`;