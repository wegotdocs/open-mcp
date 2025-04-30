import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_metriclabelvalue",
  "toolDescription": "Requests all metrics for a label.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/metriclabelvalues",
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
      "label": "label",
      "limit": "limit",
      "namespace": "namespace",
      "query": "query",
      "result": "result",
      "start": "start",
      "startRelative": "startRelative"
    }
  },
  inputParamsSchema
}

export default tool