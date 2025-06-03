import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfolder",
  "toolDescription": "create folder",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/documents/folder",
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
      "parent_id": "parent_id",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool