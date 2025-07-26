import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "jira_product_configurations_list",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/jira_product_configurations/",
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
      "component": "component",
      "enable_engagement_epic_mapping": "enable_engagement_epic_mapping",
      "enabled": "enabled",
      "engagement": "engagement",
      "id": "id",
      "jira_instance": "jira_instance",
      "limit": "limit",
      "offset": "offset",
      "prefetch": "prefetch",
      "product": "product",
      "project_key": "project_key",
      "push_all_issues": "push_all_issues",
      "push_notes": "push_notes"
    }
  },
  inputParamsSchema
}

export default tool