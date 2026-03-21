import { generateTest } from '../mcp/services/testGenerator.service';
import fs from 'fs';

const feature = process.argv[2];

(async () => {
  const code = await generateTest(feature);

  if (!code) {
    console.error("❌ No test generated");
    return;
  }

  fs.writeFileSync(`tests/ui/e2e/ai-${Date.now()}.spec.ts`, code);
})();

