import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleterecord",
  "toolDescription": "Elimina un record in un database remoto",
  "baseUrl": "https://admin.openbuilder.net/custom",
  "path": "/aimid/delete_record",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "project_id": "project_id",
      "entity": "entity",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool