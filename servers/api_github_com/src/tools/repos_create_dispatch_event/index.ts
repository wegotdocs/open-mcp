import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_dispatch_event",
  "toolDescription": "Create a repository dispatch event",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/dispatches",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "event_type": "event_type",
      "client_payload": "client_payload"
    }
  },
  inputParamsSchema
}

export default tool