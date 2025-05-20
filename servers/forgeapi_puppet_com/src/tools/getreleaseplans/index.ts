import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getreleaseplans",
  "toolDescription": "List module release plans",
  "baseUrl": "https://forgeapi.puppet.com",
  "path": "/v3/releases/{release_slug}/plans",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "release_slug": "release_slug"
    }
  },
  inputParamsSchema
}

export default tool