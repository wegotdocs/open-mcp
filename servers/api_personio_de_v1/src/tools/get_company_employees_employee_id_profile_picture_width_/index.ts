import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_company_employees_employee_id_profile_picture_width_",
  "toolDescription": "Show employee profile picture",
  "baseUrl": "https://api.personio.de/v1",
  "path": "/company/employees/{employee_id}/profile-picture/{width}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "employee_id": "employee_id",
      "width": "width"
    }
  },
  inputParamsSchema
}

export default tool