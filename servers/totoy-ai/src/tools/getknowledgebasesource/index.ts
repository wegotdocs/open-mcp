import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getknowledgebasesource",
  "toolDescription": "Retrieves a Knowledge Base Source.",
  "baseUrl": "https://api.totoy.ai/v1",
  "path": "/knowledge-bases/{knowledge_base_id}/sources/{source_id}",
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
      "knowledge_base_id": "knowledge_base_id",
      "source_id": "source_id"
    }
  },
  inputParamsSchema
}

export default tool