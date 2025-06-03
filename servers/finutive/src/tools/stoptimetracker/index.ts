import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "stoptimetracker",
  "toolDescription": "Stop time tracking for logged in user",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/timetracker/stop",
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
      "timetracker_id": "timetracker_id"
    }
  },
  inputParamsSchema
}

export default tool