import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_orgstorage",
  "toolDescription": "Creates a new orgstorage.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/orgstorages",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
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
      "importHash": "importHash",
      "importLabel": "importLabel",
      "key": "key",
      "namespace": "namespace",
      "updateTime": "updateTime",
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool