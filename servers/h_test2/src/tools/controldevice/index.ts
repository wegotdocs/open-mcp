import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "controldevice",
  "toolDescription": "控制单个设备",
  "baseUrl": "https://api.smarthome.com/v1",
  "path": "/devices/{deviceId}/control",
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
      "deviceId": "deviceId"
    },
    "body": {
      "action": "action",
      "parameters": "parameters"
    }
  },
  inputParamsSchema
}

export default tool