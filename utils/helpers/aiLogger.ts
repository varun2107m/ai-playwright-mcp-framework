export const logPrompt = (prompt: string) => {
    console.log("\n🧠 [AI PROMPT]");
    console.log(prompt);
  };
  
  export const logStep = (step: string) => {
    console.log(`⚙️ [AI STEP]: ${step}`);
  };
  
  export const logAction = (action: string) => {
    console.log(`👉 [AI ACTION]: ${action}`);
  };
  
  export const logResult = (result: string) => {
    console.log(`✅ [AI RESULT]: ${result}`);
  };
  
  export const logError = (error: any) => {
    console.error("❌ [AI ERROR]:", error);
  };
  