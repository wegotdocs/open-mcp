import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getworkflowtransitionruleconfigurations",
  "toolDescription": "Get workflow transition rule configurations",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/workflow/rule/config",
  "method": "get",
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
      "startAt": "startAt",
      "maxResults": "maxResults",
      "types": "types",
      "keys": "keys",
      "workflowNames": "workflowNames",
      "withTags": "withTags",
      "draft": "draft",
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool