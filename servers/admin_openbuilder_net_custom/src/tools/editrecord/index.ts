import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "editrecord",
  "toolDescription": "Modifica un record esistente in un database remoto",
  "baseUrl": "https://admin.openbuilder.net/custom",
  "path": "/aimid/edit_record",
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
      "id": "id",
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool