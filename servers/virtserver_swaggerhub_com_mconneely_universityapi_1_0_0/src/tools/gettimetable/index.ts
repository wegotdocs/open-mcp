import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettimetable",
  "toolDescription": "Retrieve the timetable",
  "baseUrl": "https://virtserver.swaggerhub.com/MConneely/UniversityAPI/1.0.0",
  "path": "/timetable",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool