import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_tracetagvalues",
  "toolDescription": "send a traces tag values request.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/tracetagvalues",
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
      "end": "end",
      "endRelative": "endRelative",
      "limit": "limit",
      "maxStaleValues": "maxStaleValues",
      "namespace": "namespace",
      "query": "query",
      "result": "result",
      "start": "start",
      "startRelative": "startRelative",
      "tagKey": "tagKey"
    }
  },
  inputParamsSchema
}

export default tool