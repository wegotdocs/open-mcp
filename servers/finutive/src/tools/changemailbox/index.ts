import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "changemailbox",
  "toolDescription": "Change mailbox",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/communications/mailbox",
  "method": "put",
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
      "mailbox": "mailbox"
    }
  },
  inputParamsSchema
}

export default tool