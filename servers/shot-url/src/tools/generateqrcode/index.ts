import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generateqrcode",
  "toolDescription": "短縮URLのQRコード生成",
  "baseUrl": "https://api.example.com",
  "path": "/shorts/{key}/qrcode",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "key": "key"
    }
  },
  inputParamsSchema
}

export default tool