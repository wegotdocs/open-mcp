import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_get_event",
  "toolDescription": "Get an issue event",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/issues/events/{event_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "event_id": "event_id"
    }
  },
  inputParamsSchema
}

export default tool