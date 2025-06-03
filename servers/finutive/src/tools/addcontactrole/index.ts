import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addcontactrole",
  "toolDescription": "Add a new relationship between existing Contact Role (User) and Business",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/addConection",
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
      "business_id": "business_id",
      "business_contact_id": "business_contact_id",
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool