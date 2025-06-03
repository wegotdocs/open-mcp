import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmanagercontactdata",
  "toolDescription": "Get manager contact data",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/managers/{managerId}/contact-data",
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
      "managerId": "managerId"
    }
  },
  inputParamsSchema
}

export default tool