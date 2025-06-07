import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_outdated_images_report_api_images_outdated_report_get",
  "toolDescription": "Get Outdated Images Report",
  "baseUrl": "https://api.example.com",
  "path": "/api/images/outdated-report",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool