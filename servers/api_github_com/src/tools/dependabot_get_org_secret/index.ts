import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dependabot_get_org_secret",
  "toolDescription": "Get an organization secret",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/dependabot/secrets/{secret_name}",
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