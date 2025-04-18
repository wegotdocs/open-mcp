import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_custom_properties_values",
  "toolDescription": "Get all custom property values for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/properties/values",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    }
  },
  inputParamsSchema
}

export default tool