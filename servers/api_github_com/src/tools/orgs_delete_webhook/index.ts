import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_delete_webhook",
  "toolDescription": "Delete an organization webhook",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/hooks/{hook_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "hook_id": "hook_id"
    }
  },
  inputParamsSchema
}

export default tool