import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assignservicetomanager",
  "toolDescription": "Assign service to manager",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/services/{service_id}/managers/{manager_id}",
  "method": "post",
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
    },
    "body": {
      "max_clients": "max_clients",
      "is_responsible": "is_responsible",
      "responsible_id": "responsible_id"
    }
  },
  inputParamsSchema
}

export default tool