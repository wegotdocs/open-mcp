import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_secret",
  "toolDescription": "Create Secret",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/vault/v1/secrets",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "body": {
      "header": "header",
      "secret": "secret"
    }
  },
  inputParamsSchema
}

export default tool