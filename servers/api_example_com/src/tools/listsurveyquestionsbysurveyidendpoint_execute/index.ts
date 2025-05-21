import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listsurveyquestionsbysurveyidendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/survey-questions/survey/{surveyId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "surveyId": "surveyId"
    }
  },
  inputParamsSchema
}

export default tool