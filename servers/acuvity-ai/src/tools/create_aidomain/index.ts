import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_aidomain",
  "toolDescription": "Creates a new AI domain.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/aidomains",
  "method": "post",
  "security": [
    {
      "key": "X-Namespace",
      "value": "<mcp-env-var>X_NAMESPACE</mcp-env-var>",
      "in": "header",
      "envVarName": "X_NAMESPACE"
    }
  ],
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