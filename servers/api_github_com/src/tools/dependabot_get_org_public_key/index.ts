import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dependabot_get_org_public_key",
  "toolDescription": "Get an organization public key",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/dependabot/secrets/public-key",
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