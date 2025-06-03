import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "saveservicebusinessfilesettings",
  "toolDescription": "Save service business file settings",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/services/{service_id}/businesses/{business_id}/settings",
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
      "service_id": "service_id",
      "business_id": "business_id"
    },
    "body": {
      "files": "files"
    }
  },
  inputParamsSchema
}

export default tool