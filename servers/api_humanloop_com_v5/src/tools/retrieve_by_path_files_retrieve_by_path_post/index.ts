import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieve_by_path_files_retrieve_by_path_post",
  "toolDescription": "Retrieve by path",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/files/retrieve-by-path",
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
    "query": {
      "environment": "environment"
    },
    "body": {
      "path": "path"
    }
  },
  inputParamsSchema
}

export default tool