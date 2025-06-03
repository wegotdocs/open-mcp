import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "downloaddocument",
  "toolDescription": "Download document with ephemeral token",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/documents/ephemeral/{tokenId}",
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
    "path": {
      "tokenId": "tokenId"
    }
  },
  inputParamsSchema
}

export default tool