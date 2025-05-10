import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_pagedataview",
  "toolDescription": "Creates a new page data view.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/pagedataviews",
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