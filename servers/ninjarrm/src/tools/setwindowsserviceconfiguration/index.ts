import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setwindowsserviceconfiguration",
  "toolDescription": "Modify Windows Service configuration",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/device/{id}/windows-service/{serviceId}/configure",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "sessionKey",
      "value": "<mcp-env-var>SESSIONKEY</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONKEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id",
      "serviceId": "serviceId"
    },
    "body": {
      "startType": "startType",
      "userName": "userName"
    }
  },
  inputParamsSchema
}

export default tool