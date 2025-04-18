import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_create_or_update_custom_properties",
  "toolDescription": "Create or update custom properties for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/properties/schema",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "properties": "properties"
    }
  },
  inputParamsSchema
}

export default tool