import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_supported_providers_api_cloud_cloud_providers_get",
  "toolDescription": "Get Supported Providers",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/cloud/providers",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool