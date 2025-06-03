import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setsatisfactionsurvey",
  "toolDescription": "Set satisfaction survey response",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/nps/satisfaction-survey",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "business_id": "business_id"
    },
    "body": {
      "question1": "question1",
      "question2": "question2",
      "question_services": "question_services",
      "other_services": "other_services",
      "question_not_satisfied": "question_not_satisfied",
      "other_not_satisfied": "other_not_satisfied",
      "question_anything_else": "question_anything_else",
      "question_videocall": "question_videocall",
      "vote": "vote"
    }
  },
  inputParamsSchema
}

export default tool