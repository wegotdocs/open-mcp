import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdatelineactivities",
  "toolDescription": "Create or update line activities",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/lineActivities",
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
      "business_id": "business_id"
    },
    "body": {
      "business_id": "b_business_id",
      "line_activities": "line_activities"
    }
  },
  inputParamsSchema
}

export default tool