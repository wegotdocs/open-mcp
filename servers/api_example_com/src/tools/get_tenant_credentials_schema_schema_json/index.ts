import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tenant_credentials_schema_schema_json",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/credentials/{schema}/schema.json",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "tenant": "tenant",
      "schema": "schema"
    }
  },
  inputParamsSchema
}

export default tool