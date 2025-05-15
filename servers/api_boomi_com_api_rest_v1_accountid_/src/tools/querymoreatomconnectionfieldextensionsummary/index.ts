import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "querymoreatomconnectionfieldextensionsummary",
  "toolDescription": "Retrieves additional results for an AtomConnectionFieldExtensionSummary query",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/AtomConnectionFieldExtensionSummary/queryMore",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool