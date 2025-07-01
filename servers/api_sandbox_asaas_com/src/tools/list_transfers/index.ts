import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_transfers",
  "toolDescription": "List transfers",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/transfers",
  "method": "get",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "dateCreatedLe[ge]": "dateCreatedLe[ge]",
      "dateCreatedLe[le]": "dateCreatedLe[le]",
      "transferDate[ge]": "transferDate[ge]",
      "transferDate[le]": "transferDate[le]",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool