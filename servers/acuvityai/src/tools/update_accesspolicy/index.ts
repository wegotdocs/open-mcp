import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_accesspolicy",
  "toolDescription": "Updates the access policy with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/accesspolicies/{id}",
  "method": "put",
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