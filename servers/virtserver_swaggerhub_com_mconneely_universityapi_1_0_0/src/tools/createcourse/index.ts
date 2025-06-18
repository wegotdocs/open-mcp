import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcourse",
  "toolDescription": "Create a new course",
  "baseUrl": "https://virtserver.swaggerhub.com/MConneely/UniversityAPI/1.0.0",
  "path": "/courses",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "description": "description",
      "credits": "credits"
    }
  },
  inputParamsSchema
}

export default tool