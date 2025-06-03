import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "votenpsmanager",
  "toolDescription": "Submit manager NPS vote",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/nps/managers/{manager_id}",
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
      "business_id": "business_id",
      "manager_id": "manager_id"
    },
    "body": {
      "rating": "rating",
      "comments": "comments"
    }
  },
  inputParamsSchema
}

export default tool