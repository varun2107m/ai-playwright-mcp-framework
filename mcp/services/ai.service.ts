import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function askAI(prompt: string): Promise<string> {
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }]
  });

  const output = res.choices[0].message.content;

  if (!output) {
    throw new Error("No response from AI");
  }

  return output;
}

