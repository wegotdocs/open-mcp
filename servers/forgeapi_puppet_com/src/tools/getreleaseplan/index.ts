import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getreleaseplan",
  "toolDescription": "Fetch module release plan",
  "baseUrl": "https://forgeapi.puppet.com",
  "path": "/v3/releases/{release_slug}/plans/{plan_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "release_slug": "release_slug",
      "plan_name": "plan_name"
    }
  },
  inputParamsSchema
}

export default tool