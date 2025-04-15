import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_update_knowledge_base",
  "toolDescription": "Update a Knowledge Base",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/knowledge_bases/{uuid}",
  "method": "put",
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
    },
    "body": {
      "database_id": "database_id",
      "embedding_model_uuid": "embedding_model_uuid",
      "name": "name",
      "project_id": "project_id",
      "tags": "tags",
      "uuid": "b_uuid"
    }
  },
  inputParamsSchema
}

export default tool