import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwebstreamingconversation",
  "toolDescription": "Send to Signal answers by streaming using embeddings of content of webs and OpenAI APIs",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/chat/webConversation/streaming",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "useCaseId": "useCaseId"
    },
    "header": {
      "connectionId": "connectionId"
    }
  },
  inputParamsSchema
}

export default tool