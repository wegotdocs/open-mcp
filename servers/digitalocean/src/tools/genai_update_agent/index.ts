import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_update_agent",
  "toolDescription": "Update an Agent",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/agents/{uuid}",
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
      "anthropic_key_uuid": "anthropic_key_uuid",
      "description": "description",
      "instruction": "instruction",
      "k": "k",
      "max_tokens": "max_tokens",
      "model_uuid": "model_uuid",
      "name": "name",
      "open_ai_key_uuid": "open_ai_key_uuid",
      "project_id": "project_id",
      "retrieval_method": "retrieval_method",
      "tags": "tags",
      "temperature": "temperature",
      "top_p": "top_p",
      "uuid": "b_uuid"
    }
  },
  inputParamsSchema
}

export default tool