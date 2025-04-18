import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_security_get_configurations_for_org",
  "toolDescription": "Get code security configurations for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/code-security/configurations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "target_type": "target_type",
      "per_page": "per_page",
      "before": "before",
      "after": "after"
    }
  },
  inputParamsSchema
}

export default tool