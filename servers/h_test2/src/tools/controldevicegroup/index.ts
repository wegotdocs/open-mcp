import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "controldevicegroup",
  "toolDescription": "设备组控制",
  "baseUrl": "https://api.smarthome.com/v1",
  "path": "/devices/group-control",
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
    "body": {
      "action": "action",
      "deviceIds": "deviceIds",
      "parameters": "parameters"
    }
  },
  inputParamsSchema
}

export default tool