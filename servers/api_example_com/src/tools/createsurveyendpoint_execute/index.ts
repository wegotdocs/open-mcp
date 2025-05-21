import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createsurveyendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/surveys",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "title": "title",
      "description": "description",
      "type": "type",
      "condition": "condition",
      "conditionData": "conditionData",
      "recurringType": "recurringType",
      "scheduledDate": "scheduledDate",
      "surveyTarget": "surveyTarget",
      "clientId": "clientId",
      "groupId": "groupId",
      "isActive": "isActive",
      "isDraft": "isDraft",
      "createdByUserId": "createdByUserId",
      "questions": "questions"
    }
  },
  inputParamsSchema
}

export default tool