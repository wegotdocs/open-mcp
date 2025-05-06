import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "private_registries_get_org_public_key",
  "toolDescription": "Get private registries public key for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/private-registries/public-key",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    }
  },
  inputParamsSchema
}

export default tool