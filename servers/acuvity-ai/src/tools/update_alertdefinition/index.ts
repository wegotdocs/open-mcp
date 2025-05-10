import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_alertdefinition",
  "toolDescription": "Updates the alert definition with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/alertdefinitions/{id}",
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
      "cooldown": "cooldown",
      "createTime": "createTime",
      "description": "description",
      "friendlyName": "friendlyName",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "message": "message",
      "name": "name",
      "namespace": "namespace",
      "propagate": "propagate",
      "severity": "severity",
      "sinks": "sinks",
      "trigger": "trigger",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool