import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "clear_aws_cache_api_aws_clear_cache_post",
  "toolDescription": "Clear Aws Cache",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/clear-cache",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool