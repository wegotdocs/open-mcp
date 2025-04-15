import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_create_agent",
  "toolDescription": "Create an Agent",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/agents",
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
      "anthropic_key_uuid": "anthropic_key_uuid",
      "description": "description",
      "instruction": "instruction",
      "knowledge_base_uuid": "knowledge_base_uuid",
      "model_uuid": "model_uuid",
      "name": "name",
      "open_ai_key_uuid": "open_ai_key_uuid",
      "project_id": "project_id",
      "region": "region",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool