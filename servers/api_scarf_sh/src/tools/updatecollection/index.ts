import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecollection",
  "toolDescription": "Update collection",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/collections/{owner}/{collection_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "pattern": "pattern",
      "public_domain": "public_domain",
      "backend_domain": "backend_domain"
    }
  },
  inputParamsSchema
}

export default tool