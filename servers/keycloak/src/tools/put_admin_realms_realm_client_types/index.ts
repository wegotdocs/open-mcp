import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_client_types",
  "toolDescription": "Update a client type",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-types",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "client-types": "client-types",
      "global-client-types": "global-client-types"
    }
  },
  inputParamsSchema
}

export default tool