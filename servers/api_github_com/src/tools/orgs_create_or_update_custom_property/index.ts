import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_create_or_update_custom_property",
  "toolDescription": "Create or update a custom property for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/properties/schema/{custom_property_name}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "custom_property_name": "custom_property_name"
    },
    "body": {
      "value_type": "value_type",
      "required": "required",
      "default_value": "default_value",
      "description": "description",
      "allowed_values": "allowed_values",
      "values_editable_by": "values_editable_by"
    }
  },
  inputParamsSchema
}

export default tool