import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatebusinessdetails",
  "toolDescription": "Update business details",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businesses/{businessId}/details",
  "method": "patch",
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
      "businessId": "businessId"
    },
    "body": {
      "gocardless": "gocardless",
      "language": "language",
      "paid": "paid",
      "is_discarded": "is_discarded",
      "is_recurrent": "is_recurrent",
      "name": "name",
      "sage": "sage",
      "opportunity": "opportunity",
      "document_id": "document_id",
      "organization_id": "organization_id"
    }
  },
  inputParamsSchema
}

export default tool