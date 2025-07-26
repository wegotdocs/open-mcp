import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "risk_acceptance_update",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/risk_acceptance/{id}/",
  "method": "put",
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
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "recommendation": "recommendation",
      "recommendation_details": "recommendation_details",
      "decision": "decision",
      "decision_details": "decision_details",
      "accepted_by": "accepted_by",
      "expiration_date": "expiration_date",
      "expiration_date_warned": "expiration_date_warned",
      "expiration_date_handled": "expiration_date_handled",
      "reactivate_expired": "reactivate_expired",
      "restart_sla_expired": "restart_sla_expired",
      "owner": "owner",
      "accepted_findings": "accepted_findings"
    }
  },
  inputParamsSchema
}

export default tool