import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "billing_get_github_packages_billing_org",
  "toolDescription": "Get GitHub Packages billing for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/settings/billing/packages",
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