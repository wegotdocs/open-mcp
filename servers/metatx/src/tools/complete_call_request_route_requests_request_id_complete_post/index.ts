import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "complete_call_request_route_requests_request_id_complete_post",
  "toolDescription": "Complete Call Request Route",
  "baseUrl": "https://engineapi.moonstream.to/metatx",
  "path": "/requests/{request_id}/complete",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "request_id": "request_id"
    },
    "body": {
      "tx_hash": "tx_hash"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool