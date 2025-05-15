import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpackagedcomponentmanifest",
  "toolDescription": "Retrieves an instance of a PackagedComponentManifest object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/PackagedComponentManifest/{packageId}",
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
      "packageId": "packageId"
    }
  },
  inputParamsSchema
}

export default tool