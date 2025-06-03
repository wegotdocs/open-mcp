import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_casemanagement_cases",
  "toolDescription": "Create a case",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/caseManagement/cases",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "associatedItemIds": "associatedItemIds",
      "description": "description",
      "externalTicketAlias": "externalTicketAlias",
      "externalTicketId": "externalTicketId",
      "findings": "findings",
      "name": "name",
      "priority": "priority",
      "relatedCaseIds": "relatedCaseIds",
      "status": "status",
      "holder": "holder",
      "externalTicketCreatedDateTime": "externalTicketCreatedDateTime"
    }
  },
  inputParamsSchema
}

export default tool