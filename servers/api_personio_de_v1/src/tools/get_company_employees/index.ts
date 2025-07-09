import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_company_employees",
  "toolDescription": "List Employees",
  "baseUrl": "https://api.personio.de/v1",
  "path": "/company/employees",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool