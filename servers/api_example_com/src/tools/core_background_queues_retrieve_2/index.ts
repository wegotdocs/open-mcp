import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "core_background_queues_retrieve_2",
  "toolDescription": "Retrieve a list of RQ Queues.\nNote: Queue names are not URL safe so not returning a detail view.",
  "baseUrl": "https://api.example.com",
  "path": "/api/core/background-queues/{name}/",
  "method": "get",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool