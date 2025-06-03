import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_casemanagement_cases_id_riskindicatorevents_close",
  "toolDescription": "Close risk events related to case",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/caseManagement/cases/{id}/riskIndicatorEvents/close",
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
    "path": {
      "id": "id"
    },
    "body": {
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool