import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateatomsecuritypolicies",
  "toolDescription": "Modifies or updates an AtomSecurityPolicies object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/AtomSecurityPolicies/{id}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "atomId": "atomId",
      "browser": "browser",
      "common": "common",
      "runner": "runner",
      "worker": "worker"
    }
  },
  inputParamsSchema
}

export default tool