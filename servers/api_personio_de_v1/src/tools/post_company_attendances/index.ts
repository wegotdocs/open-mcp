import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_company_attendances",
  "toolDescription": "This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the",
  "baseUrl": "https://api.personio.de/v1",
  "path": "/company/attendances",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "attendances": "attendances"
    }
  },
  inputParamsSchema
}

export default tool