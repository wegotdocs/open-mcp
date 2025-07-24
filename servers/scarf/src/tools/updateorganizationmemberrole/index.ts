import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateorganizationmemberrole",
  "toolDescription": "Update member role",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/organizations/{organization_name}/members/{organization_member}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool