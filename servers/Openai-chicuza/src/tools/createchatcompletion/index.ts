import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createchatcompletion",
  "toolDescription": "**Starting a new project?** We recommend trying [Responses](/docs/api-reference/responses) \nto take advantage of the latest OpenAI platform features. Compare\n[Chat Completions with Responses](/docs/guides/responses-vs-chat-completions?api-m",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/chat/completions",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool