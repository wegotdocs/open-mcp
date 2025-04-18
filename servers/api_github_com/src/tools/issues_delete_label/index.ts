import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_delete_label",
  "toolDescription": "Delete a label",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/labels/{name}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool