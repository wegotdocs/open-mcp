import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_postgres_settings_api_postgres_namespace_settings_get",
  "toolDescription": "Get Postgres Settings",
  "baseUrl": "https://api.example.com",
  "path": "/api/postgres/{namespace}/settings",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    }
  },
  inputParamsSchema
}

export default tool