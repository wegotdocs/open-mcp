import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateorganization",
  "toolDescription": "Update organization",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/organizations/{organization_name}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "description": "description",
      "website": "website",
      "billing_email": "billing_email"
    }
  },
  inputParamsSchema
}

export default tool