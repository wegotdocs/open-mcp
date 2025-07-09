import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_company_attendances_id_",
  "toolDescription": "This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.",
  "baseUrl": "https://api.personio.de/v1",
  "path": "/company/attendances/{id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "break": "break",
      "comment": "comment",
      "date": "date",
      "end_time": "end_time",
      "start_time": "start_time"
    }
  },
  inputParamsSchema
}

export default tool