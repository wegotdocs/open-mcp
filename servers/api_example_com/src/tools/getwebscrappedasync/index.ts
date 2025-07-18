import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwebscrappedasync",
  "toolDescription": "Get web content using web scraping strategy",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/scraping",
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
      "url": "url",
      "strategy": "strategy"
    }
  },
  inputParamsSchema
}

export default tool