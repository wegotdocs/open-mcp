import { z } from "zod"

export const inputParamsSchema = {
  "theme": z.string().describe("Theme preference: light, dark, or system").optional(),
  "language": z.string().describe("Language preference").optional(),
  "timezone": z.string().describe("User's timezone").optional(),
  "dateFormat": z.string().describe("Date format preference").optional(),
  "timeFormat": z.string().describe("Time format: 12h or 24h").optional(),
  "defaultEnvironment": z.union([z.string(), z.null()]).describe("Default environment to select").optional(),
  "dashboardRefreshInterval": z.number().int().describe("Dashboard auto-refresh interval in seconds").optional(),
  "defaultView": z.string().describe("Default dashboard view: grid or list").optional(),
  "showNotifications": z.boolean().describe("Show in-app notifications").optional(),
  "emailNotifications": z.boolean().describe("Receive email notifications").optional(),
  "slackNotifications": z.boolean().describe("Receive Slack notifications").optional(),
  "alertThreshold": z.string().describe("Alert threshold level").optional(),
  "sessionTimeout": z.number().int().describe("Session timeout in minutes").optional(),
  "codeTheme": z.string().describe("Code editor theme").optional(),
  "gitBranch": z.string().describe("Default git branch").optional(),
  "autoSave": z.boolean().describe("Auto-save file changes").optional(),
  "customSettings": z.union([z.record(z.any()), z.null()]).describe("Additional custom preferences").optional()
}