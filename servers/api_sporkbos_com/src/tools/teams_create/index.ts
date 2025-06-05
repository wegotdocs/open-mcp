import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_create",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/teams/",
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
      "owner": "owner",
      "logo": "logo",
      "is_sandbox": "is_sandbox",
      "team_fee": "team_fee",
      "name": "name",
      "description": "description",
      "phone": "phone",
      "alt_phone": "alt_phone",
      "website": "website",
      "address": "address",
      "city": "city",
      "country": "country",
      "state": "state",
      "zip": "zip",
      "_timezone": "_timezone",
      "industry": "industry",
      "is_active": "is_active",
      "status": "status",
      "deactivate_reason": "deactivate_reason",
      "welcome_note": "welcome_note",
      "customer_note": "customer_note",
      "deactivation_scheduled_at": "deactivation_scheduled_at",
      "company_founded": "company_founded"
    }
  },
  inputParamsSchema
}

export default tool