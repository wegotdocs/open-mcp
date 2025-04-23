import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_run_evaluations_id_runs_post",
  "toolDescription": "Create Run",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/evaluations/{id}/runs",
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
      "id": "id"
    },
    "body": {
      "dataset": "dataset",
      "version": "version",
      "orchestrated": "orchestrated",
      "use_existing_logs": "use_existing_logs"
    }
  },
  inputParamsSchema
}

export default tool