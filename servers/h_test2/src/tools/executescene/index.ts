import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executescene",
  "toolDescription": "执行场景模式",
  "baseUrl": "https://api.smarthome.com/v1",
  "path": "/scenes",
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
      "sceneName": "sceneName",
      "parameters": "parameters"
    }
  },
  inputParamsSchema
}

export default tool