import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_create_knowledge_base",
  "toolDescription": "Create a Knowledge Base",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/knowledge_bases",
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
    "body": {
      "database_id": "database_id",
      "datasources": "datasources",
      "embedding_model_uuid": "embedding_model_uuid",
      "name": "name",
      "project_id": "project_id",
      "region": "region",
      "tags": "tags",
      "vpc_uuid": "vpc_uuid"
    }
  },
  inputParamsSchema
}

export default tool