import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpackagetrackingpixels",
  "toolDescription": "Get tracking pixels",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/{package_id}/tracking-pixels",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "after": "after",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool