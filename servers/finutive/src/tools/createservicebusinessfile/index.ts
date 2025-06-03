import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createservicebusinessfile",
  "toolDescription": "Create service business file",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/services/{service_id}/businesses/{business_id}/file",
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
      "id": "id",
      "file_id": "file_id",
      "phase": "phase",
      "responsible": "responsible",
      "comment": "comment",
      "name_custom_file": "name_custom_file",
      "color_custom_file": "color_custom_file"
    }
  },
  inputParamsSchema
}

export default tool