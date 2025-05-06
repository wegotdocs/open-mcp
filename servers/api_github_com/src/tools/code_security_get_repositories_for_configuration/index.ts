import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_security_get_repositories_for_configuration",
  "toolDescription": "Get repositories associated with a code security configuration",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/code-security/configurations/{configuration_id}/repositories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "configuration_id": "configuration_id"
    },
    "query": {
      "per_page": "per_page",
      "before": "before",
      "after": "after",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool