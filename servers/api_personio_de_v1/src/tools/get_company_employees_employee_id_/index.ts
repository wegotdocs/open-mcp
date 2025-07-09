import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_company_employees_employee_id_",
  "toolDescription": "Show employee by ID",
  "baseUrl": "https://api.personio.de/v1",
  "path": "/company/employees/{employee_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "employee_id": "employee_id"
    }
  },
  inputParamsSchema
}

export default tool