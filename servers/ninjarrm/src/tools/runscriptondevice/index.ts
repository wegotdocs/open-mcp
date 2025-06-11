import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "runscriptondevice",
  "toolDescription": "Run script or built-in action",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/device/{id}/script/run",
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
      "id": "id"
    },
    "body": {
      "type": "type",
      "id": "b_id",
      "uid": "uid",
      "parameters": "parameters",
      "runAs": "runAs"
    }
  },
  inputParamsSchema
}

export default tool