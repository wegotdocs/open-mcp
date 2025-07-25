import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcollection",
  "toolDescription": "Create collection",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/collections/{owner}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "pattern": "pattern",
      "public_domain": "public_domain",
      "backend_domain": "backend_domain",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool