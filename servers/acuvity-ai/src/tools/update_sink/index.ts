import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_sink",
  "toolDescription": "Updates the sink with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/sinks/{id}",
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
      "description": "description",
      "email": "email",
      "friendlyName": "friendlyName",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "name": "name",
      "namespace": "namespace",
      "pagerDuty": "pagerDuty",
      "propagate": "propagate",
      "slack": "slack",
      "splunk": "splunk",
      "type": "type",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool