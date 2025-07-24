import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuserorganizations",
  "toolDescription": "List user organizatons",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/users/{username}/organizations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "organization_id": "organization_id",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool