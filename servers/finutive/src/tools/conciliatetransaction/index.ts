import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "conciliatetransaction",
  "toolDescription": "Conciliate transaction",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/banks/transactions/{transaction_id}/conciliate",
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
      "transaction_id": "transaction_id"
    },
    "body": {
      "element_id": "element_id",
      "element_type": "element_type",
      "autoconciliated": "autoconciliated"
    }
  },
  inputParamsSchema
}

export default tool