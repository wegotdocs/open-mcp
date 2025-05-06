import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "security_advisories_get_global_advisory",
  "toolDescription": "Get a global security advisory",
  "baseUrl": "https://api.github.com",
  "path": "/advisories/{ghsa_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "ghsa_id": "ghsa_id"
    }
  },
  inputParamsSchema
}

export default tool