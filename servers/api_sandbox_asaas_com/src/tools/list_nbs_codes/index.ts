import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_nbs_codes",
  "toolDescription": "List NBS codes",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/fiscalInfo/nbsCodes",
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
      "offset": "offset",
      "limit": "limit",
      "codeDescription": "codeDescription"
    }
  },
  inputParamsSchema
}

export default tool