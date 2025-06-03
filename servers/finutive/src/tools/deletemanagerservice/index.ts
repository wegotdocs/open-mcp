import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletemanagerservice",
  "toolDescription": "Delete manager service assignment",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/services/{service_id}/managers/{manager_id}",
  "method": "delete",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "service_id": "service_id",
      "manager_id": "manager_id"
    }
  },
  inputParamsSchema
}

export default tool