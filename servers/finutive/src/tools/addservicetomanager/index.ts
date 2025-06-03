import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addservicetomanager",
  "toolDescription": "Add service to manager",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/managers/service",
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
    "body": {
      "manager_id": "manager_id",
      "service_id": "service_id"
    }
  },
  inputParamsSchema
}

export default tool