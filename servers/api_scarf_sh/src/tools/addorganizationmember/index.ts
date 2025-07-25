import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addorganizationmember",
  "toolDescription": "Add organization member",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/organizations/{organization_name}/members",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "username": "username",
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool