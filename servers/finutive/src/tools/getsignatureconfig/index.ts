import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsignatureconfig",
  "toolDescription": "Get signature configuration",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/communications/signature-config",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool