import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_company_employees",
  "toolDescription": "Create an employee",
  "baseUrl": "https://api.personio.de/v1",
  "path": "/company/employees",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool