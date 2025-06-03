import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatesignatureconfig",
  "toolDescription": "Update signature configuration",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/communications/signature-config",
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
    "body": {
      "name": "name",
      "role": "role",
      "calendly": "calendly",
      "phone": "phone",
      "service": "service"
    }
  },
  inputParamsSchema
}

export default tool