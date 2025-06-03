import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v3_0_casemanagement_cases_id_",
  "toolDescription": "Update a case",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/caseManagement/cases/{id}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "associatedItemIds": "associatedItemIds",
      "description": "description",
      "findings": "findings",
      "name": "name",
      "priority": "priority",
      "relatedCaseIds": "relatedCaseIds",
      "status": "status",
      "holder": "holder",
      "externalTicketId": "externalTicketId",
      "externalTicketUpdatedDateTime": "externalTicketUpdatedDateTime"
    },
    "header": {
      "If-Match": "If-Match"
    }
  },
  inputParamsSchema
}

export default tool