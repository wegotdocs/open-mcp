import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_get_custom_property",
  "toolDescription": "Get a custom property for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/properties/schema/{custom_property_name}",
  "method": "get",
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