import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createplan",
  "toolDescription": "Create plan",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/plans/plan",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "useGroupId": "useGroupId"
    },
    "body": {
      "crossProjectReleases": "crossProjectReleases",
      "customFields": "customFields",
      "exclusionRules": "exclusionRules",
      "issueSources": "issueSources",
      "leadAccountId": "leadAccountId",
      "name": "name",
      "permissions": "permissions",
      "scheduling": "scheduling"
    }
  },
  inputParamsSchema
}

export default tool