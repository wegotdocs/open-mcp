import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "commentnpsservice",
  "toolDescription": "Add comment to service NPS",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/nps/businesses/{business_id}/services/{service_id}/comment",
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
      "business_id": "business_id",
      "service_id": "service_id"
    },
    "body": {
      "explanation": "explanation",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool