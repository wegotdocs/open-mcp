import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_apiauthorization",
  "toolDescription": "Creates a new api authorization policy.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/apiauthorizations",
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