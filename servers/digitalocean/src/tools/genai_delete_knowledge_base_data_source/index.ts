import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_delete_knowledge_base_data_source",
  "toolDescription": "Delete a Data Source from a Knowledge Base",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}",
  "method": "delete",
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
      "knowledge_base_uuid": "knowledge_base_uuid",
      "data_source_uuid": "data_source_uuid"
    }
  },
  inputParamsSchema
}

export default tool