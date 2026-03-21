import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { generateTestTool } from "./tools/generateTest.tool.js";

// Note: MCP SDK changed naming from `StdioTransport` to `StdioServerTransport`.

const server = new Server({
  name: "playwright-mcp",
  version: "1.0.0",
});

// Handle ALL tool calls manually
// SDK setRequestHandler signature is: (requestSchema, handler)
// We'll keep manual dispatch by ignoring the schema typing and handling `request.method`.
server.setRequestHandler(
  // Minimal schema placeholder; the handler will still receive the real request.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { _meta: { schema: "any" } } as any,
  async (request: any) => {
    if (request.method === "generate_test") {
      const { feature } = request.params;
      return await generateTestTool.handler({ feature });
    }

    return { error: "Unknown method" };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);

console.log("MCP Server started 🚀");
