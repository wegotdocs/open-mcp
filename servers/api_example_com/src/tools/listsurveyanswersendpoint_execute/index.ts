import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listsurveyanswersendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/survey-answers/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "surveyResultId": "surveyResultId",
      "surveyQuestionId": "surveyQuestionId"
    }
  },
  inputParamsSchema
}

export default tool