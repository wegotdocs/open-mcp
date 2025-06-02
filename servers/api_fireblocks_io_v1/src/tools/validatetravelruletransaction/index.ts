import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "validatetravelruletransaction",
  "toolDescription": "Validate Travel Rule Transaction",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/travel_rule/transaction/validate",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "notation": "notation"
    },
    "body": {
      "transactionAsset": "transactionAsset",
      "destination": "destination",
      "transactionAmount": "transactionAmount",
      "originatorVASPdid": "originatorVASPdid",
      "originatorEqualsBeneficiary": "originatorEqualsBeneficiary",
      "travelRuleBehavior": "travelRuleBehavior",
      "beneficiaryVASPdid": "beneficiaryVASPdid",
      "beneficiaryVASPname": "beneficiaryVASPname",
      "beneficiaryName": "beneficiaryName",
      "beneficiaryAccountNumber": "beneficiaryAccountNumber",
      "beneficiaryAddress": "beneficiaryAddress"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool