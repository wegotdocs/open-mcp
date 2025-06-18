import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettimetablebyid",
  "toolDescription": "Retrieve a timetable entry by ID",
  "baseUrl": "https://virtserver.swaggerhub.com/MConneely/UniversityAPI/1.0.0",
  "path": "/timetable/{timetableId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "timetableId": "timetableId"
    }
  },
  inputParamsSchema
}

export default tool