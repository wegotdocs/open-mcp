import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_extractor",
  "toolDescription": "Update an extractor given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/extractors/{id}",
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
      "SSEManagement": "SSEManagement",
      "analyzers": "analyzers",
      "anonymization": "anonymization",
      "behavior": "behavior",
      "block": "block",
      "cancelBehavior": "cancelBehavior",
      "createTime": "createTime",
      "deanonymize": "deanonymize",
      "description": "description",
      "honorPriorDecision": "honorPriorDecision",
      "ignore": "ignore",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "method": "method",
      "name": "name",
      "namespace": "namespace",
      "path": "path",
      "propagate": "propagate",
      "script": "script",
      "type": "type",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool