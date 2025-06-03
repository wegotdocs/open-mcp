import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putservicetaginbusiness",
  "toolDescription": "Add tag to business service",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/services/{service_id}/businesses/{business_id}/tags/{tag_id}",
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
      "service_id": "service_id",
      "business_id": "business_id",
      "tag_id": "tag_id"
    },
    "body": {
      "file_id": "file_id"
    }
  },
  inputParamsSchema
}

export default tool