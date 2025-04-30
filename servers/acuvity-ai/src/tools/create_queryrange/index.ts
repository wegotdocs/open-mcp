import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_queryrange",
  "toolDescription": "Creates a new queryrange.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/queryranges",
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
      "direction": "direction",
      "end": "end",
      "endRelative": "endRelative",
      "limit": "limit",
      "namespace": "namespace",
      "query": "query",
      "result": "result",
      "resultType": "resultType",
      "start": "start",
      "startRelative": "startRelative"
    }
  },
  inputParamsSchema
}

export default tool