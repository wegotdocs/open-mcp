import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "risk_acceptance_list",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/risk_acceptance/",
  "method": "get",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "accepted_by": "accepted_by",
      "accepted_findings": "accepted_findings",
      "decision": "decision",
      "decision_details": "decision_details",
      "expiration_date": "expiration_date",
      "expiration_date_handled": "expiration_date_handled",
      "expiration_date_warned": "expiration_date_warned",
      "limit": "limit",
      "name": "name",
      "notes": "notes",
      "o": "o",
      "offset": "offset",
      "owner": "owner",
      "reactivate_expired": "reactivate_expired",
      "recommendation": "recommendation",
      "recommendation_details": "recommendation_details",
      "restart_sla_expired": "restart_sla_expired"
    }
  },
  inputParamsSchema
}

export default tool