import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatevacationconfiguration",
  "toolDescription": "Updates a vacation configuration",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/vacation-configurations/{vacationConfigurationId}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "vacationConfigurationId": "vacationConfigurationId"
    },
    "body": {
      "name": "name",
      "requestVacationFrom": "requestVacationFrom",
      "renewalPeriod": "renewalPeriod",
      "dayType": "dayType",
      "maxDaysOff": "maxDaysOff",
      "creationDateNextYear": "creationDateNextYear",
      "maxDateToTakeVacations": "maxDateToTakeVacations",
      "needsValidation": "needsValidation",
      "employeeRequestDenyExcessDaysOff": "employeeRequestDenyExcessDaysOff",
      "hoursQuantityConfigured": "hoursQuantityConfigured",
      "halfDayVacationConfiguration": "halfDayVacationConfiguration",
      "allowFreeHoursSelection": "allowFreeHoursSelection",
      "enjoyMonthPeriod": "enjoyMonthPeriod",
      "employeeRequestEnabled": "employeeRequestEnabled",
      "notAllowedDateRanges": "notAllowedDateRanges",
      "configurationType": "configurationType",
      "year": "year"
    }
  },
  inputParamsSchema
}

export default tool