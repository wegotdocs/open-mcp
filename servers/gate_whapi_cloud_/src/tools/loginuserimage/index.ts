import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "loginuserimage",
  "toolDescription": "Login user with QR-image",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/users/login/image",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "wakeup": "wakeup",
      "size": "size",
      "width": "width",
      "height": "height",
      "color_light": "color_light",
      "color_dark": "color_dark"
    }
  },
  inputParamsSchema
}

export default tool