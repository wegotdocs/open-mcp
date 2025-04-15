import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_get_knowledge_base",
  "toolDescription": "Retrieve Information About an Existing Knowledge Base",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/knowledge_bases/{uuid}",
  "method": "get",
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
      "uuid": "uuid"
    }
  },
  inputParamsSchema
}

export default tool