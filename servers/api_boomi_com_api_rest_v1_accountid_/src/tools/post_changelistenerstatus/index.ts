import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_changelistenerstatus",
  "toolDescription": "Update listeners status",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/ChangeListenerStatus",
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
    "body": {
      "action": "action",
      "containerId": "containerId",
      "listenerId": "listenerId"
    }
  },
  inputParamsSchema
}

export default tool