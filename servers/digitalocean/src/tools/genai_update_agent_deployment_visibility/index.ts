import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_update_agent_deployment_visibility",
  "toolDescription": "Update Agent Status",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/agents/{uuid}/deployment_visibility",
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
      "uuid": "b_uuid",
      "visibility": "visibility"
    }
  },
  inputParamsSchema
}

export default tool