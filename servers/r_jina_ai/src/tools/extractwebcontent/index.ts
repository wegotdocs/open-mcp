import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extractwebcontent",
  "toolDescription": "Extract web content",
  "baseUrl": "https://r.jina.ai",
  "path": "/",
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
      "url": "url"
    },
    "header": {
      "X-Return-Format": "X-Return-Format",
      "X-Target-Selector": "X-Target-Selector",
      "X-Timeout": "X-Timeout",
      "X-Wait-For-Selector": "X-Wait-For-Selector"
    }
  },
  inputParamsSchema
}

export default tool