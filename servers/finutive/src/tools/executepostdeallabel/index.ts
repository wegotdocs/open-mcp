import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executepostdeallabel",
  "toolDescription": "Create a new deal label",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/deal_labels",
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
      "id": "id",
      "name": "name",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool