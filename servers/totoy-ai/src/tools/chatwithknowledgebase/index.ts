import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "chatwithknowledgebase",
  "toolDescription": "Creates a Knowledge Base Chat Response for the given Messages.",
  "baseUrl": "https://api.totoy.ai/v1",
  "path": "/knowledge-bases/{knowledge_base_id}/chat",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "knowledge_base_id": "knowledge_base_id"
    },
    "body": {
      "output_language": "output_language",
      "language_level": "language_level",
      "messages": "messages",
      "markdown_response": "markdown_response"
    }
  },
  inputParamsSchema
}

export default tool