import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_update",
  "toolDescription": "User -- Update",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/users/{id}",
  "method": "patch",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "admin_office_ids": "admin_office_ids",
      "emails": "emails",
      "extension": "extension",
      "first_name": "first_name",
      "forwarding_numbers": "forwarding_numbers",
      "international_dialing_enabled": "international_dialing_enabled",
      "is_super_admin": "is_super_admin",
      "job_title": "job_title",
      "keep_paid_numbers": "keep_paid_numbers",
      "last_name": "last_name",
      "license": "license",
      "office_id": "office_id",
      "phone_numbers": "phone_numbers",
      "presence_status": "presence_status",
      "state": "state"
    }
  },
  inputParamsSchema
}

export default tool