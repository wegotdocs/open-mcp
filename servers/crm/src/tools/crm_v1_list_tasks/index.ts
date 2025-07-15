import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_list_tasks",
  "toolDescription": "Listar tarefas",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/tasks",
  "method": "get",
  "security": [
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "page": "page",
      "limit": "limit",
      "deal_id": "deal_id",
      "done": "done",
      "type": "type",
      "user_id": "user_id",
      "date_start": "date_start",
      "date_end": "date_end",
      "done_date_start": "done_date_start",
      "done_date_end": "done_date_end"
    }
  },
  inputParamsSchema
}

export default tool