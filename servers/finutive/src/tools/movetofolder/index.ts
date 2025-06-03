import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "movetofolder",
  "toolDescription": "move document",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/documents/move-to-folder",
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
      "items": "items",
      "folder_id": "folder_id",
      "folder_special_type": "folder_special_type",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool