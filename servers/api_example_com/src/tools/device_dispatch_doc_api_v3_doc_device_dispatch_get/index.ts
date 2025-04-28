import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "device_dispatch_doc_api_v3_doc_device_dispatch_get",
  "toolDescription": "設備派送流程",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/doc/device_dispatch",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool