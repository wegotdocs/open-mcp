import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "read_secret",
  "toolDescription": "Read Secret",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/vault/v1/secrets/{secret_id}",
  "method": "get",
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