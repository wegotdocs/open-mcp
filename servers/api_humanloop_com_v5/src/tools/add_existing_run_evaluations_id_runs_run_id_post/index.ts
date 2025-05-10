import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_existing_run_evaluations_id_runs_run_id_post",
  "toolDescription": "Add Existing Run",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/evaluations/{id}/runs/{run_id}",
  "method": "post",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id",
      "run_id": "run_id"
    }
  },
  inputParamsSchema
}

export default tool