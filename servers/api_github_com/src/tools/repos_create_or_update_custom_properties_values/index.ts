import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_or_update_custom_properties_values",
  "toolDescription": "Create or update custom property values for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/properties/values",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "properties": "properties"
    }
  },
  inputParamsSchema
}

export default tool