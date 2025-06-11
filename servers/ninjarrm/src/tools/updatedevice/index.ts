import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatedevice",
  "toolDescription": "Update device information",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/device/{id}",
  "method": "patch",
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
      "displayName": "displayName",
      "userData": "userData",
      "nodeRoleId": "nodeRoleId",
      "policyId": "policyId",
      "organizationId": "organizationId",
      "locationId": "locationId",
      "warranty": "warranty"
    }
  },
  inputParamsSchema
}

export default tool