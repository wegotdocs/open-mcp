import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addknowledgebasesources",
  "toolDescription": "Adds Sources to a Knowledge Base.",
  "baseUrl": "https://api.totoy.ai/v1",
  "path": "/knowledge-bases/{knowledge_base_id}/sources",
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
    }
  },
  inputParamsSchema
}

export default tool