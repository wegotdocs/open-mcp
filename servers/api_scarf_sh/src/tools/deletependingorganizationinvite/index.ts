import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletependingorganizationinvite",
  "toolDescription": "Delete pending organization invite",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/organizations/{organization_name}/members/invites",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "body": {
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool