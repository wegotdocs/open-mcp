import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hris_update_employee",
  "toolDescription": "Updates an employee",
  "baseUrl": "https://api.stackone.com",
  "path": "/unified/hris/employees/{id}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "first_name": "first_name",
      "last_name": "last_name",
      "name": "name",
      "display_name": "display_name",
      "avatar_url": "avatar_url",
      "personal_email": "personal_email",
      "personal_phone_number": "personal_phone_number",
      "work_email": "work_email",
      "work_phone_number": "work_phone_number",
      "job_id": "job_id",
      "job_title": "job_title",
      "department_id": "department_id",
      "team_id": "team_id",
      "department": "department",
      "manager_id": "manager_id",
      "gender": "gender",
      "preferred_language": "preferred_language",
      "ethnicity": "ethnicity",
      "date_of_birth": "date_of_birth",
      "birthday": "birthday",
      "marital_status": "marital_status",
      "avatar": "avatar",
      "hire_date": "hire_date",
      "start_date": "start_date",
      "employment_type": "employment_type",
      "employment_contract_type": "employment_contract_type",
      "employment_status": "employment_status",
      "termination_date": "termination_date",
      "company_id": "company_id",
      "citizenships": "citizenships",
      "employment": "employment",
      "custom_fields": "custom_fields",
      "benefits": "benefits",
      "employee_number": "employee_number",
      "national_identity_numbers": "national_identity_numbers",
      "home_location": "home_location",
      "work_location": "work_location",
      "passthrough": "passthrough"
    },
    "header": {
      "x-account-id": "x-account-id"
    }
  },
  inputParamsSchema
}

export default tool