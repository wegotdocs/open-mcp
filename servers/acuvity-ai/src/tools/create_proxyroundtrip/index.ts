import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_proxyroundtrip",
  "toolDescription": "Creates a new proxy roundtrip.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/proxyroundtrips",
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
      "alerts": "alerts",
      "annotations": "annotations",
      "client": "client",
      "clientVersion": "clientVersion",
      "decision": "decision",
      "destination": "destination",
      "extractions": "extractions",
      "hash": "hash",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "latency": "latency",
      "namespace": "namespace",
      "pipelineName": "pipelineName",
      "principal": "principal",
      "provider": "provider",
      "reasons": "reasons",
      "summary": "summary",
      "time": "time",
      "trace": "trace",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool