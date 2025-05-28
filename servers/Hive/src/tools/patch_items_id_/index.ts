import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_items_id_",
  "toolDescription": "items partial update",
  "baseUrl": "http://localhost:8000",
  "path": "/items/{id}/",
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