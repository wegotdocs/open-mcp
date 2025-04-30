import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_alert",
  "toolDescription": "Updates the alert with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/alerts/{id}",
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
      "alertDefinition": "alertDefinition",
      "alertDefinitionName": "alertDefinitionName",
      "alertEvents": "alertEvents",
      "counter": "counter",
      "createTime": "createTime",
      "end": "end",
      "namespace": "namespace",
      "start": "start",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool