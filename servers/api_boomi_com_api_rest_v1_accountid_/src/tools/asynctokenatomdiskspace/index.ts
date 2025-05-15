import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "asynctokenatomdiskspace",
  "toolDescription": "Retrieves an AtomDiskSpace object by token",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/async/AtomDiskSpace/response/{token}",
  "method": "get",
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
      "token": "token"
    }
  },
  inputParamsSchema
}

export default tool