import { askAI } from './ai.service';
import { testGenPrompt } from '../prompts/testGen.prompt';

export async function generateTest(feature: string): Promise<string> {
  const result = await askAI(testGenPrompt(feature));

  if (!result) {
    throw new Error("AI did not return any test code");
  }

  return result;
}