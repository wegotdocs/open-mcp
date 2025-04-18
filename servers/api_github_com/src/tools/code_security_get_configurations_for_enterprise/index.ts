import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_security_get_configurations_for_enterprise",
  "toolDescription": "Get code security configurations for an enterprise",
  "baseUrl": "https://api.github.com",
  "path": "/enterprises/{enterprise}/code-security/configurations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "enterprise": "enterprise"
    },
    "query": {
      "per_page": "per_page",
      "before": "before",
      "after": "after"
    }
  },
  inputParamsSchema
}

export default tool