import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executeputbusinessdeallabel",
  "toolDescription": "Associate deal labels with a business",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/deal_labels/businesses/{business_id}",
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
      "deal_label_ids": "deal_label_ids",
      "gclid": "gclid",
      "one_off": "one_off",
      "monthly_value": "monthly_value"
    }
  },
  inputParamsSchema
}

export default tool