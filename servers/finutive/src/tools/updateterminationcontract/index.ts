import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateterminationcontract",
  "toolDescription": "Update termination contract",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/laboral/contracts/terminations/{termination_contract_id}",
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
      "termination_contract_id": "termination_contract_id"
    },
    "body": {
      "user_id": "user_id",
      "firstname": "firstname",
      "surname1": "surname1",
      "surname2": "surname2",
      "dni": "dni",
      "deletion_type": "deletion_type",
      "dismissal_type": "dismissal_type",
      "dismissal_cause": "dismissal_cause",
      "advice_type": "advice_type",
      "forewarning": "forewarning",
      "pending_holidays": "pending_holidays",
      "handicapped": "handicapped",
      "holidays_enjoyed_current_year": "holidays_enjoyed_current_year",
      "effective_date": "effective_date",
      "timezone_offset": "timezone_offset",
      "observations": "observations"
    }
  },
  inputParamsSchema
}

export default tool