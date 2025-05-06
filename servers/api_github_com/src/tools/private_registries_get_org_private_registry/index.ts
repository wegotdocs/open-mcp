import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "private_registries_get_org_private_registry",
  "toolDescription": "Get a private registry for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/private-registries/{secret_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "secret_name": "secret_name"
    }
  },
  inputParamsSchema
}

export default tool