import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_remove_custom_property",
  "toolDescription": "Remove a custom property for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/properties/schema/{custom_property_name}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "custom_property_name": "custom_property_name"
    }
  },
  inputParamsSchema
}

export default tool