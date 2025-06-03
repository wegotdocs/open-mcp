import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_casemanagement_cases_id_contents_contentid_",
  "toolDescription": "Get case element",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/caseManagement/cases/{id}/contents/{contentId}",
  "method": "get",
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
      "contentId": "contentId"
    }
  },
  inputParamsSchema
}

export default tool