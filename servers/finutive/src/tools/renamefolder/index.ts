import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "renamefolder",
  "toolDescription": "rename folder",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/documents/folder/{folder_id}/name",
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
      "folder_id": "folder_id"
    },
    "body": {
      "new_name": "new_name"
    }
  },
  inputParamsSchema
}

export default tool