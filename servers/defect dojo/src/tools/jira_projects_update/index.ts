import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "jira_projects_update",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/jira_projects/{id}/",
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
      "project_key": "project_key",
      "issue_template_dir": "issue_template_dir",
      "component": "component",
      "custom_fields": "custom_fields",
      "default_assignee": "default_assignee",
      "jira_labels": "jira_labels",
      "add_vulnerability_id_to_jira_label": "add_vulnerability_id_to_jira_label",
      "push_all_issues": "push_all_issues",
      "enable_engagement_epic_mapping": "enable_engagement_epic_mapping",
      "epic_issue_type_name": "epic_issue_type_name",
      "push_notes": "push_notes",
      "product_jira_sla_notification": "product_jira_sla_notification",
      "risk_acceptance_expiration_notification": "risk_acceptance_expiration_notification",
      "enabled": "enabled",
      "jira_instance": "jira_instance",
      "product": "product",
      "engagement": "engagement"
    }
  },
  inputParamsSchema
}

export default tool