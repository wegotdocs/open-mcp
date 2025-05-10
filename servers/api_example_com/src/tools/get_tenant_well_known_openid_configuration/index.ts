import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tenant_well_known_openid_configuration",
  "toolDescription": "Fetch OpenID Provider Metadata",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/.well-known/openid-configuration",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "tenant": "tenant"
    }
  },
  inputParamsSchema
}

export default tool