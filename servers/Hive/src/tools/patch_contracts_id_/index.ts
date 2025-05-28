import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_contracts_id_",
  "toolDescription": "contracts partial update",
  "baseUrl": "http://localhost:8000",
  "path": "/contracts/{id}/",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "header": {
      "Content-Type": "Content-Type",
      "Accept": "Accept"
    }
  },
  inputParamsSchema
}

export default tool