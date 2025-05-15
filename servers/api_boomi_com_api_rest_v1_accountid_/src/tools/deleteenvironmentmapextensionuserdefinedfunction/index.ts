import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteenvironmentmapextensionuserdefinedfunction",
  "toolDescription": "Deletes an EnvironmentMapExtensionUserDefinedFunction object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/EnvironmentMapExtensionUserDefinedFunction/{id}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool