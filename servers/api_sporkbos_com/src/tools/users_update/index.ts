import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_update",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/users/{id}/",
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
      "id": "id"
    },
    "body": {
      "id": "b_id",
      "created_by": "created_by",
      "updated_by": "updated_by",
      "deleted_by": "deleted_by",
      "ulid": "ulid",
      "created_at": "created_at",
      "updated_at": "updated_at",
      "deleted_at": "deleted_at",
      "avatar": "avatar",
      "workload": "workload",
      "user_demographics": "user_demographics",
      "alt_id": "alt_id",
      "team": "team",
      "user_role": "user_role",
      "role": "role",
      "position": "position",
      "manager": "manager",
      "welcome_note": "welcome_note",
      "manager_note": "manager_note",
      "hire_date": "hire_date",
      "term_date": "term_date",
      "has_payment_method": "has_payment_method",
      "last_login": "last_login",
      "is_superuser": "is_superuser",
      "is_staff": "is_staff",
      "date_joined": "date_joined",
      "employee_code": "employee_code",
      "name": "name",
      "email": "email",
      "email_verified_at": "email_verified_at",
      "remember_token": "remember_token",
      "alt_email": "alt_email",
      "phone": "phone",
      "alt_phone": "alt_phone",
      "_timezone": "_timezone",
      "country": "country",
      "state": "state",
      "is_active": "is_active",
      "status": "status",
      "accepted_policies": "accepted_policies",
      "eligible_for_billing": "eligible_for_billing",
      "is_billed": "is_billed",
      "last_billing_month": "last_billing_month",
      "last_billing_year": "last_billing_year",
      "last_active": "last_active",
      "work_buddy": "work_buddy",
      "last_seen_release": "last_seen_release",
      "favorite_scorecard": "favorite_scorecard",
      "groups": "groups",
      "user_permissions": "user_permissions"
    }
  },
  inputParamsSchema
}

export default tool