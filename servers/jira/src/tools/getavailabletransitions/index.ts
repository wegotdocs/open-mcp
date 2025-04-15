import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getavailabletransitions",
  "toolDescription": "Get available transitions",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/bulk/issues/transition",
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
      "issueIdsOrKeys": "issueIdsOrKeys",
      "endingBefore": "endingBefore",
      "startingAfter": "startingAfter"
    }
  },
  inputParamsSchema
}

export default tool