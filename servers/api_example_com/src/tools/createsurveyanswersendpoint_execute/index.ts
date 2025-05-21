import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createsurveyanswersendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/survey-answers",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "surveyResultId": "surveyResultId",
      "userId": "userId",
      "surveyAnswers": "surveyAnswers"
    }
  },
  inputParamsSchema
}

export default tool