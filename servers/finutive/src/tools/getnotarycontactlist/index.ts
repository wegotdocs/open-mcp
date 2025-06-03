import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnotarycontactlist",
  "toolDescription": "Get list of all notary contacts from business",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/notary-contacts",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "query": {
      "request": "request"
    }
  },
  inputParamsSchema
}

export default tool