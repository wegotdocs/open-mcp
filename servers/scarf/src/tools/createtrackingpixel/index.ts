import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createtrackingpixel",
  "toolDescription": "Create tracking pixel",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/tracking-pixels/{owner}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "package_id": "package_id",
      "importance": "importance",
      "track_companies": "track_companies",
      "short_description": "short_description",
      "long_description": "long_description"
    }
  },
  inputParamsSchema
}

export default tool