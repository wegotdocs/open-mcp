import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatemanagercontactdata",
  "toolDescription": "Update manager contact data",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/managers/{managerId}/contact-data",
  "method": "put",
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
    },
    "body": {
      "calendly": "calendly",
      "phone": "phone",
      "whatsapp": "whatsapp"
    }
  },
  inputParamsSchema
}

export default tool