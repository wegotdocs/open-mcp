import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getstudentbyid",
  "toolDescription": "Retrieve a student by ID",
  "baseUrl": "https://virtserver.swaggerhub.com/MConneely/UniversityAPI/1.0.0",
  "path": "/students/{studentId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "studentId": "studentId"
    }
  },
  inputParamsSchema
}

export default tool