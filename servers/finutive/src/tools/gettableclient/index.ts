import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettableclient",
  "toolDescription": "Get list of stakeholders to render stakeholders section",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/stakeholders/table_list",
  "method": "get",
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
      "businessId": "businessId"
    },
    "query": {
      "search": "search",
      "type": "type",
      "length": "length",
      "start": "start",
      "readAll": "readAll",
      "order_column": "order_column",
      "order_dir": "order_dir",
      "activity_line": "activity_line",
      "accounting_account": "accounting_account",
      "sage_accounting_account": "sage_accounting_account",
      "tax_regime": "tax_regime"
    }
  },
  inputParamsSchema
}

export default tool