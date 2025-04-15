import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_create_knowledge_base_data_source",
  "toolDescription": "Add Data Source to a Knowledge Base",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources",
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
      "knowledge_base_uuid": "knowledge_base_uuid"
    },
    "body": {
      "knowledge_base_uuid": "b_knowledge_base_uuid",
      "spaces_data_source": "spaces_data_source",
      "web_crawler_data_source": "web_crawler_data_source"
    }
  },
  inputParamsSchema
}

export default tool