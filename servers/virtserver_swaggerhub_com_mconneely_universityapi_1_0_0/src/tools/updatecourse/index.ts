import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecourse",
  "toolDescription": "Update an existing course",
  "baseUrl": "https://virtserver.swaggerhub.com/MConneely/UniversityAPI/1.0.0",
  "path": "/courses/{courseId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "courseId": "courseId"
    },
    "body": {
      "name": "name",
      "description": "description",
      "credits": "credits"
    }
  },
  inputParamsSchema
}

export default tool