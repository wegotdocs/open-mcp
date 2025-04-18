import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_enable_or_disable_security_product_on_all_org_repos",
  "toolDescription": "Enable or disable a security feature for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/{security_product}/{enablement}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "security_product": "security_product",
      "enablement": "enablement"
    },
    "body": {
      "query_suite": "query_suite"
    }
  },
  inputParamsSchema
}

export default tool