import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "jira_configurations_update",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/jira_configurations/{id}/",
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
      "configuration_name": "configuration_name",
      "url": "url",
      "username": "username",
      "password": "password",
      "default_issue_type": "default_issue_type",
      "issue_template_dir": "issue_template_dir",
      "epic_name_id": "epic_name_id",
      "open_status_key": "open_status_key",
      "close_status_key": "close_status_key",
      "info_mapping_severity": "info_mapping_severity",
      "low_mapping_severity": "low_mapping_severity",
      "medium_mapping_severity": "medium_mapping_severity",
      "high_mapping_severity": "high_mapping_severity",
      "critical_mapping_severity": "critical_mapping_severity",
      "finding_text": "finding_text",
      "accepted_mapping_resolution": "accepted_mapping_resolution",
      "false_positive_mapping_resolution": "false_positive_mapping_resolution",
      "global_jira_sla_notification": "global_jira_sla_notification",
      "finding_jira_sync": "finding_jira_sync"
    }
  },
  inputParamsSchema
}

export default tool