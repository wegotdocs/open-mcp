import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepackageroute",
  "toolDescription": "Update package route (only for File Packages)",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/{package_id}/routes/{route_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "type": "type",
      "incoming_path": "incoming_path",
      "outgoing_url": "outgoing_url"
    }
  },
  inputParamsSchema
}

export default tool