import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createstudent",
  "toolDescription": "Create a new student account",
  "baseUrl": "https://virtserver.swaggerhub.com/MConneely/UniversityAPI/1.0.0",
  "path": "/students",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "email": "email",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool