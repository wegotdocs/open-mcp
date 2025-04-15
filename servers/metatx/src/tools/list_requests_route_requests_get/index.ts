import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_requests_route_requests_get",
  "toolDescription": "List Requests Route",
  "baseUrl": "https://engineapi.moonstream.to/metatx",
  "path": "/requests",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "contract_id": "contract_id",
      "contract_address": "contract_address",
      "caller": "caller",
      "limit": "limit",
      "offset": "offset",
      "show_expired": "show_expired",
      "live_after": "live_after"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool