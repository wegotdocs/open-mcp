import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_apiauthorization",
  "toolDescription": "Updates the apiauthorizations with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/apiauthorizations/{id}",
  "method": "put",
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
      "createTime": "createTime",
      "description": "description",
      "disabled": "disabled",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "name": "name",
      "namespace": "namespace",
      "permissions": "permissions",
      "role": "role",
      "subject": "subject",
      "targetNamespaces": "targetNamespaces",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool