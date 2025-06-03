import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "indefinitecontract",
  "toolDescription": "Convert to indefinite contract",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/laboral/contracts/{contract_id}/indefinite",
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
      "contract_id": "contract_id"
    },
    "body": {
      "observations": "observations",
      "effective_date": "effective_date"
    }
  },
  inputParamsSchema
}

export default tool