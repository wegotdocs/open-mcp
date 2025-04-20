import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generateshorturl",
  "toolDescription": "短縮URLの生成",
  "baseUrl": "https://api.example.com",
  "path": "/shorts/generate",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "key": "key",
      "url": "url"
    }
  },
  inputParamsSchema
}

export default tool