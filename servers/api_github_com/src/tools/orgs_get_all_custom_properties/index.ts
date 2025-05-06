import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_get_all_custom_properties",
  "toolDescription": "Get all custom properties for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/properties/schema",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    }
  },
  inputParamsSchema
}

export default tool