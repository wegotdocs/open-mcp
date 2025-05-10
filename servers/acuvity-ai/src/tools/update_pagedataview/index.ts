import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_pagedataview",
  "toolDescription": "Updates the page data view with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/pagedataviews/{id}",
  "method": "put",
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
      "name": "name",
      "namespace": "namespace",
      "pageID": "pageID",
      "predicates": "predicates",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool