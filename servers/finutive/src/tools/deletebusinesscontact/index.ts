import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletebusinesscontact",
  "toolDescription": "Delete specified Business Contact",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businessContacts/{business_contact_id}/delete",
  "method": "delete",
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
      "business_contact_id": "business_contact_id"
    }
  },
  inputParamsSchema
}

export default tool