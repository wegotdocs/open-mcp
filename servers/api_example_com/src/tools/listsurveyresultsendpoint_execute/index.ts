import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listsurveyresultsendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/survey-results/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "surveyId": "surveyId",
      "status": "status",
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool