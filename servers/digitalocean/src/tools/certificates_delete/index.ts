import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "certificates_delete",
  "toolDescription": "Delete a Certificate",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/certificates/{certificate_id}",
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
      "certificate_id": "certificate_id"
    }
  },
  inputParamsSchema
}

export default tool