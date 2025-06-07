import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_sha_images_report_api_images_sha_report_get",
  "toolDescription": "Get Sha Images Report",
  "baseUrl": "https://api.example.com",
  "path": "/api/images/sha-report",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool