import { askAI } from './ai.service';
import { testGenPrompt } from '../prompts/testGen.prompt';
import { logPrompt, logStep, logResult, logError } from '../../utils/helpers/aiLogger';

export async function generateTest(feature: string): Promise<string> {
  const traceId = `AI-${Date.now()}`;
  const startTime = Date.now();

  try {
    // Step 1: Create prompt
    const prompt = testGenPrompt(feature);

    logPrompt(`[${traceId}] ${prompt}`);
    logStep(`[${traceId}] Generating test for feature: ${feature}`);

    // Step 2: Call AI
    logStep(`[${traceId}] Sending prompt to AI...`);
    const result = await askAI(prompt);
    logStep(`[${traceId}] Received response from AI`);

    // Step 3: Validate response
    if (!result) {
      logError(`[${traceId}] AI did not return any test code`);
      throw new Error("AI did not return any test code");
    }

    // Step 4: Log success
    logResult(`[${traceId}] Test generated successfully`);
    logResult(`[${traceId}] Response length: ${result.length} characters`);

    const duration = Date.now() - startTime;
    logResult(`[${traceId}] Completed in ${duration} ms`);

    return result;

  } catch (error) {
    logError({
      traceId,
      feature,
      error
    });
    throw error;
  }
}

