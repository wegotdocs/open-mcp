import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth_user_partial_update",
  "toolDescription": "Reads and updates UserModel fields\nAccepts GET, PUT, PATCH methods.\n\nDefault accepted fields: username, first_name, last_name\nDefault display fields: pk, username, email, first_name, last_name\nRead-only fields: pk, email\n\nReturns UserModel",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/auth/user/",
  "method": "patch",
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
      "team_name": "team_name",
      "is_siteuser": "is_siteuser",
      "role": "role",
      "team_seats": "team_seats",
      "is_new_release": "is_new_release",
      "groups_data": "groups_data",
      "all_teams": "all_teams",
      "last_login": "last_login",
      "is_superuser": "is_superuser",
      "is_staff": "is_staff",
      "date_joined": "date_joined",
      "ulid": "ulid",
      "alt_id": "alt_id",
      "employee_code": "employee_code",
      "name": "name",
      "email": "email",
      "email_verified_at": "email_verified_at",
      "welcome_note": "welcome_note",
      "remember_token": "remember_token",
      "alt_email": "alt_email",
      "phone": "phone",
      "alt_phone": "alt_phone",
      "avatar": "avatar",
      "_timezone": "_timezone",
      "country": "country",
      "state": "state",
      "manager_note": "manager_note",
      "hire_date": "hire_date",
      "term_date": "term_date",
      "is_active": "is_active",
      "status": "status",
      "accepted_policies": "accepted_policies",
      "has_payment_method": "has_payment_method",
      "eligible_for_billing": "eligible_for_billing",
      "is_billed": "is_billed",
      "last_billing_month": "last_billing_month",
      "last_billing_year": "last_billing_year",
      "last_active": "last_active",
      "created_at": "created_at",
      "updated_at": "updated_at",
      "deleted_at": "deleted_at",
      "team": "team",
      "user_role": "user_role",
      "position": "position",
      "work_buddy": "work_buddy",
      "manager": "manager",
      "last_seen_release": "last_seen_release",
      "deleted_by": "deleted_by",
      "created_by": "created_by",
      "updated_by": "updated_by",
      "favorite_scorecard": "favorite_scorecard",
      "groups": "groups",
      "user_permissions": "user_permissions"
    }
  },
  inputParamsSchema
}

export default tool