import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "notifications_partial_update",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/notifications/{id}/",
  "method": "patch",
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
      "product": "product",
      "user": "user",
      "product_type_added": "product_type_added",
      "product_added": "product_added",
      "engagement_added": "engagement_added",
      "test_added": "test_added",
      "scan_added": "scan_added",
      "jira_update": "jira_update",
      "upcoming_engagement": "upcoming_engagement",
      "stale_engagement": "stale_engagement",
      "auto_close_engagement": "auto_close_engagement",
      "close_engagement": "close_engagement",
      "user_mentioned": "user_mentioned",
      "code_review": "code_review",
      "review_requested": "review_requested",
      "other": "other",
      "sla_breach": "sla_breach",
      "sla_breach_combined": "sla_breach_combined",
      "risk_acceptance_expiration": "risk_acceptance_expiration",
      "template": "template",
      "scan_added_empty": "scan_added_empty"
    }
  },
  inputParamsSchema
}

export default tool