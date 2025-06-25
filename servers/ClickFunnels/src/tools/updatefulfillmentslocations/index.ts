import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatefulfillmentslocations",
  "toolDescription": "Update Location",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/fulfillments/locations/{id}",
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
      "id": "id"
    },
    "body": {
      "fulfillments_location": "fulfillments_location"
    }
  },
  inputParamsSchema
}

export default tool