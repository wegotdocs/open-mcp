import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createatomworkerlog",
  "toolDescription": "Creates an AtomWorkerLog object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/AtomWorkerLog",
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
      "workerId": "workerId"
    }
  },
  inputParamsSchema
}

export default tool