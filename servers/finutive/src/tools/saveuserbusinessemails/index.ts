import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "saveuserbusinessemails",
  "toolDescription": "Save user business emails",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businesses/{business_id}/users/{user_id}/emails",
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
      "business_id": "business_id",
      "user_id": "user_id"
    },
    "body": {
      "alternative_emails": "alternative_emails"
    }
  },
  inputParamsSchema
}

export default tool