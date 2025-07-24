import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getorganizationmembers",
  "toolDescription": "Get organization members",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/organizations/{organization_name}/members",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "after": "after",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool