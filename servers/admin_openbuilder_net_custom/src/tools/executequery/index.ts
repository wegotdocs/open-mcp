import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executequery",
  "toolDescription": "Esegue una query SQL su un database remoto",
  "baseUrl": "https://admin.openbuilder.net/custom",
  "path": "/aimid/execute_query",
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
      "query": "query",
      "params": "params"
    }
  },
  inputParamsSchema
}

export default tool