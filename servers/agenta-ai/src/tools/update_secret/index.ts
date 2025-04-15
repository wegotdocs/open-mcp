import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_secret",
  "toolDescription": "Update Secret",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/vault/v1/secrets/{secret_id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "secret_id": "secret_id"
    },
    "body": {
      "header": "header",
      "secret": "secret"
    }
  },
  inputParamsSchema
}

export default tool