import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_update_label",
  "toolDescription": "Update a label",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/labels/{name}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "name": "name"
    },
    "body": {
      "new_name": "new_name",
      "color": "color",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool