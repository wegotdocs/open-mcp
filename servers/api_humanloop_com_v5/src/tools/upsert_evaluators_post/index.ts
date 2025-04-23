import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upsert_evaluators_post",
  "toolDescription": "Upsert Evaluator",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/evaluators",
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
    "body": {
      "path": "path",
      "id": "id",
      "version_name": "version_name",
      "version_description": "version_description",
      "spec": "spec"
    }
  },
  inputParamsSchema
}

export default tool