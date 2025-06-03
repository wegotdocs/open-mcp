import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettimetrackerlist",
  "toolDescription": "Get list of all timetracker records based on dates",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/timetracker",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "query": {
      "manager_ids": "manager_ids",
      "start_date": "start_date",
      "end_date": "end_date"
    }
  },
  inputParamsSchema
}

export default tool