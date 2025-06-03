import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_audit_logs",
  "toolDescription": "Get entries from audit logs",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/audit/logs",
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
    "query": {
      "startDateTime": "startDateTime",
      "endDateTime": "endDateTime",
      "dateTimeTarget": "dateTimeTarget",
      "orderBy": "orderBy",
      "top": "top",
      "labels": "labels"
    },
    "header": {
      "Accept": "Accept",
      "TMV1-Filter": "TMV1-Filter"
    }
  },
  inputParamsSchema
}

export default tool