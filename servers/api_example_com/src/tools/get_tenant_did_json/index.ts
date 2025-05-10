import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tenant_did_json",
  "toolDescription": "Fetch DID Document for a tenant suitable for did:web",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/did.json",
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