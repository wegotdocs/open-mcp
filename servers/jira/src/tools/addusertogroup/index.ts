import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addusertogroup",
  "toolDescription": "Add user to group",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/group/user",
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
      "groupname": "groupname",
      "groupId": "groupId"
    },
    "body": {
      "accountId": "accountId",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool