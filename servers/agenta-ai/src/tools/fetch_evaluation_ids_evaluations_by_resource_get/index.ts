import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fetch_evaluation_ids_evaluations_by_resource_get",
  "toolDescription": "Fetch Evaluation Ids",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/evaluations/by_resource",
  "method": "get",
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
      "resource_type": "resource_type",
      "resource_ids": "resource_ids"
    }
  },
  inputParamsSchema
}

export default tool