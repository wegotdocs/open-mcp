import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_orgstorage",
  "toolDescription": "Update an orgstorage given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/orgstorages/{id}",
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