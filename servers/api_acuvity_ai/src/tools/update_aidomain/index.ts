import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_aidomain",
  "toolDescription": "Update an AI domain given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/aidomains/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "compliances": "compliances",
      "createTime": "createTime",
      "dataResidency": "dataResidency",
      "dataSharing": "dataSharing",
      "dataSharingConsent": "dataSharingConsent",
      "description": "description",
      "domain": "domain",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "isAIDomain": "isAIDomain",
      "models": "models",
      "namespace": "namespace",
      "propagate": "propagate",
      "providerName": "providerName",
      "providerRetentionPolicies": "providerRetentionPolicies",
      "providerTrainingPolicies": "providerTrainingPolicies",
      "riskExplanation": "riskExplanation",
      "riskScore": "riskScore",
      "thirdPartyModelUsage": "thirdPartyModelUsage",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool