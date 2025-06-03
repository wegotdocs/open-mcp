import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postaccountterms",
  "toolDescription": "",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/gdpr/{term_id}/accept",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "term_id": "term_id"
    }
  },
  inputParamsSchema
}

export default tool