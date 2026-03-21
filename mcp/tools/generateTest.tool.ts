import { z } from "zod";

export const generateTestTool = {
  name: "generate_test",
  description: "Generate Playwright test",

  schema: z.object({
    feature: z.string(),
  }),

  handler: async ({ feature }: { feature: string }) => {
    return {
      result: `Generated test for: ${feature}`,
    };
  },
};

