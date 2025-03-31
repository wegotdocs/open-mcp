import { z } from "zod"

export const toolName = `setsharedtimetrackingconfiguration`
export const toolDescription = `Set time tracking settings`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/configuration/timetracking/options`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "b_defaultUnit": z.enum(["minute","hour","day","week"]).describe("The default unit of time applied to logged time."), "b_timeFormat": z.enum(["pretty","days","hours"]).describe("The format that will appear on an issue's *Time Spent* field."), "b_workingDaysPerWeek": z.number().describe("The number of days in a working week."), "b_workingHoursPerDay": z.number().describe("The number of hours in a working day.") }).shape