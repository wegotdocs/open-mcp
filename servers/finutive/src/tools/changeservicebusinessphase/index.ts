import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "changeservicebusinessphase",
  "toolDescription": "Change service business phase",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/services/{service_id}/businesses/{business_id}/phase",
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
      "business_id": "business_id"
    },
    "body": {
      "file_id": "file_id",
      "phase": "phase",
      "comment": "comment"
    }
  },
  inputParamsSchema
}

export default tool