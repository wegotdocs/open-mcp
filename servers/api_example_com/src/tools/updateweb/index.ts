import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateweb",
  "toolDescription": "Update web.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/web/{webId}",
  "method": "put",
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
      "webId": "webId"
    },
    "body": {
      "name": "name",
      "description": "description",
      "url": "url",
      "active": "active",
      "scrapingStrategyId": "scrapingStrategyId"
    }
  },
  inputParamsSchema
}

export default tool