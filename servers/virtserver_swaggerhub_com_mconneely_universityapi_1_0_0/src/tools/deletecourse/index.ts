import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletecourse",
  "toolDescription": "Delete a course",
  "baseUrl": "https://virtserver.swaggerhub.com/MConneely/UniversityAPI/1.0.0",
  "path": "/courses/{courseId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "courseId": "courseId"
    }
  },
  inputParamsSchema
}

export default tool