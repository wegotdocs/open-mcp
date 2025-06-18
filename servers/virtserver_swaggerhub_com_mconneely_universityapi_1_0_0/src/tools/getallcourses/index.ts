import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getallcourses",
  "toolDescription": "Retrieve all courses",
  "baseUrl": "https://virtserver.swaggerhub.com/MConneely/UniversityAPI/1.0.0",
  "path": "/courses",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool