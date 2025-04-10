export { inputParams } from "./schema/root.js"

export const toolName = `alerts_create`
export const toolDescription = `Create a new alert`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/teams/{team}/alerts`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "team"
  ],
  "cookie": [],
  "body": [
    "alert_name",
    "prompt_filters",
    "alert_enabled",
    "notification_email",
    "notification_summary_enabled",
    "notification_summary_frequency",
    "webhook_enabled",
    "webhook_url",
    "prompt_question_enabled",
    "prompt_question",
    "restrict_to_category_ids",
    "ignore_category_ids",
    "restrict_to_podcast_ids",
    "ignore_podcast_ids"
  ]
}
export const flatMap = {}