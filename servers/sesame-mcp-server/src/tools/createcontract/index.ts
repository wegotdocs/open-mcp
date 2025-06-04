import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcontract",
  "toolDescription": "Create a contract",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/contracts",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "employeeId": "employeeId",
      "startAt": "startAt",
      "endAt": "endAt",
      "code": "code",
      "comment": "comment",
      "jobChargeId": "jobChargeId",
      "contractTypeId": "contractTypeId",
      "agreementId": "agreementId",
      "degreeId": "degreeId",
      "workDayTypeId": "workDayTypeId",
      "socialSecurityNumber": "socialSecurityNumber",
      "trialPeriod": "trialPeriod",
      "cbo": "cbo",
      "remoteWork": "remoteWork",
      "seniorityDate": "seniorityDate",
      "jobLevel": "jobLevel",
      "jobPositionDescription": "jobPositionDescription",
      "weeklyHours": "weeklyHours",
      "maxLegalWeeklyHours": "maxLegalWeeklyHours",
      "maxLegalAnnualHours": "maxLegalAnnualHours",
      "percentageWorkDay": "percentageWorkDay",
      "fte": "fte",
      "workDays": "workDays"
    }
  },
  inputParamsSchema
}

export default tool