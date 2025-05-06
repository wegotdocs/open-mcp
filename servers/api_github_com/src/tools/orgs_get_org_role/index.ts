import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_get_org_role",
  "toolDescription": "Get an organization role",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/organization-roles/{role_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "role_id": "role_id"
    }
  },
  inputParamsSchema
}

export default tool