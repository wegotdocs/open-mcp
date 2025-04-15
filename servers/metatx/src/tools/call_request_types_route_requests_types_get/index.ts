import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "call_request_types_route_requests_types_get",
  "toolDescription": "Call Request Types Route",
  "baseUrl": "https://engineapi.moonstream.to/metatx",
  "path": "/requests/types",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool