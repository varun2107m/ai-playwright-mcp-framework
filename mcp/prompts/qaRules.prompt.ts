export const qaRules = `
As a QA

Follow these strict rules:

ASSERTIONS:
- Always validate URL after navigation
- Always validate visible elements
- Always validate text content where applicable
- Do NOT rely only on "element is visible"

SELECTORS:
- Prefer stable selectors:
  - data-test
  - id
- Avoid brittle selectors like nth-child

TEST QUALITY:
- Each scenario must have clear validation
- Cover both positive and negative cases
- Keep tests readable and structured

STABILITY:
- Do not use fixed waits
- Wait for elements before interacting

STRICT MODE:
- If any rule is not followed, regenerate the test
- Do not generate incomplete tests

OUTPUT:
- Generate clean, maintainable Playwright code
`;