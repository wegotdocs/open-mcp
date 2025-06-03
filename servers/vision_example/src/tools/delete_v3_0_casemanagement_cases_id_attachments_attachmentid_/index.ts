import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_v3_0_casemanagement_cases_id_attachments_attachmentid_",
  "toolDescription": "Delete an attachment",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/caseManagement/cases/{id}/attachments/{attachmentId}",
  "method": "delete",
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
      "id": "id",
      "attachmentId": "attachmentId"
    }
  },
  inputParamsSchema
}

export default tool