import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_traces",
  "toolDescription": "Delete traces",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/observability/v1/traces",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "node_id": "node_id",
      "node_ids": "node_ids"
    }
  },
  inputParamsSchema
}

export default tool