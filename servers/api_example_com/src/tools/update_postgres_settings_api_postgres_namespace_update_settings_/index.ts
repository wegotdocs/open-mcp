import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_postgres_settings_api_postgres_namespace_update_settings_",
  "toolDescription": "Update Postgres Settings",
  "baseUrl": "https://api.example.com",
  "path": "/api/postgres/{namespace}/update-settings",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    }
  },
  inputParamsSchema
}

export default tool