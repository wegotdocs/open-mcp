import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_taxes",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/taxes",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "query": {
      "context": "context",
      "page": "page",
      "per_page": "per_page",
      "offset": "offset",
      "order": "order",
      "orderby": "orderby",
      "class": "class"
    }
  },
  inputParamsSchema
}

export default tool