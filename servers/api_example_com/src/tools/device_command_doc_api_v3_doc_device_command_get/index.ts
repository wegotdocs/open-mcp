import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "device_command_doc_api_v3_doc_device_command_get",
  "toolDescription": "設備通訊指令",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/doc/device_command",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool