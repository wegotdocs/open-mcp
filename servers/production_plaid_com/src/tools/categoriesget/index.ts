import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "categoriesget",
  "toolDescription": "Get categories",
  "baseUrl": "https://production.plaid.com",
  "path": "/categories/get",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool