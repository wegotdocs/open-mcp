import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_secret",
  "toolDescription": "Delete Secret",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/vault/v1/secrets/{secret_id}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool