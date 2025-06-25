import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatefulfillments",
  "toolDescription": "Update Fulfillment",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/fulfillments/{id}",
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
      "fulfillment": "fulfillment"
    }
  },
  inputParamsSchema
}

export default tool