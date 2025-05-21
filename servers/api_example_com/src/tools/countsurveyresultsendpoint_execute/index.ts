import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "countsurveyresultsendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/survey-results/count",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "surveyId": "surveyId"
    }
  },
  inputParamsSchema
}

export default tool