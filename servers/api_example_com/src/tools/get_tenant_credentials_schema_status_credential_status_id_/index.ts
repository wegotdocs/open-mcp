import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tenant_credentials_schema_status_credential_status_id_",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/credentials/{schema}/status/{credential_status_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "tenant": "tenant",
      "schema": "schema",
      "credential_status_id": "credential_status_id"
    }
  },
  inputParamsSchema
}

export default tool