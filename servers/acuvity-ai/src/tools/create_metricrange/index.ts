import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_metricrange",
  "toolDescription": "Creates a metric range query.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/metricranges",
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
      "namespace": "namespace",
      "query": "query",
      "result": "result",
      "resultType": "resultType",
      "start": "start",
      "startRelative": "startRelative",
      "step": "step"
    }
  },
  inputParamsSchema
}

export default tool