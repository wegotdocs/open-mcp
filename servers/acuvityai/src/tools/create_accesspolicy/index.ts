import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_accesspolicy",
  "toolDescription": "Creates a new access policy.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/accesspolicies",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "accessDeniedMessage": "accessDeniedMessage",
      "action": "action",
      "alertDefinition": "alertDefinition",
      "contentPolicies": "contentPolicies",
      "createTime": "createTime",
      "description": "description",
      "disabled": "disabled",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "match": "match",
      "minimalLogging": "minimalLogging",
      "name": "name",
      "namespace": "namespace",
      "offbandAnalysis": "offbandAnalysis",
      "permissive": "permissive",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool