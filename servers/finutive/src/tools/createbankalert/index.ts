import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createbankalert",
  "toolDescription": "Create bank alert",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/banks/alerts",
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
      "id": "id",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool