import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "validatefulltravelruletransaction",
  "toolDescription": "Validate Full Travel Rule Transaction",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/travel_rule/transaction/validate/full",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "notation": "notation"
    },
    "body": {
      "originatorVASPdid": "originatorVASPdid",
      "beneficiaryVASPdid": "beneficiaryVASPdid",
      "transactionAsset": "transactionAsset",
      "transactionAmount": "transactionAmount",
      "originatorVASPname": "originatorVASPname",
      "beneficiaryVASPname": "beneficiaryVASPname",
      "transactionBlockchainInfo": "transactionBlockchainInfo",
      "originator": "originator",
      "beneficiary": "beneficiary",
      "encrypted": "encrypted",
      "protocol": "protocol",
      "skipBeneficiaryDataValidation": "skipBeneficiaryDataValidation",
      "travelRuleBehavior": "travelRuleBehavior",
      "originatorRef": "originatorRef",
      "beneficiaryRef": "beneficiaryRef",
      "travelRuleBehaviorRef": "travelRuleBehaviorRef",
      "originatorProof": "originatorProof",
      "beneficiaryProof": "beneficiaryProof",
      "beneficiaryDid": "beneficiaryDid",
      "originatorDid": "originatorDid",
      "isNonCustodial": "isNonCustodial",
      "notificationEmail": "notificationEmail",
      "pii": "pii",
      "pii_url": "pii_url"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool