import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "message_create",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/message/",
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
      "id": "id",
      "created_by": "created_by",
      "updated_by": "updated_by",
      "deleted_by": "deleted_by",
      "ulid": "ulid",
      "created_at": "created_at",
      "updated_at": "updated_at",
      "deleted_at": "deleted_at",
      "shared_with": "shared_with",
      "is_email": "is_email",
      "is_sms": "is_sms",
      "is_notification": "is_notification",
      "subject": "subject",
      "body": "body",
      "is_team_event": "is_team_event",
      "schedule_option": "schedule_option",
      "scheduled_datetime": "scheduled_datetime",
      "is_draft": "is_draft",
      "is_sent": "is_sent",
      "team": "team",
      "shared_users": "shared_users",
      "shared_groups": "shared_groups",
      "shared_positions": "shared_positions"
    }
  },
  inputParamsSchema
}

export default tool