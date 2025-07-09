import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_company_attendances_id_",
  "toolDescription": "This endpoint is responsible for deleting attendance data for the company employees.",
  "baseUrl": "https://api.personio.de/v1",
  "path": "/company/attendances/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool