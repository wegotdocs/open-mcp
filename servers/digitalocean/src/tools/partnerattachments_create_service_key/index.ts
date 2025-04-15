import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "partnerattachments_create_service_key",
  "toolDescription": "Regenerate the service key for the partner attachment",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/partner_network_connect/attachments/{pa_id}/service_key",
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
      "pa_id": "pa_id"
    }
  },
  inputParamsSchema
}

export default tool