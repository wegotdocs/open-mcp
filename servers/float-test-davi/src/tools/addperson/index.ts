import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addperson",
  "toolDescription": "Add a new person",
  "baseUrl": "https://api.float.com/v3",
  "path": "/people",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "expand": "expand"
    },
    "body": {
      "people_id": "people_id",
      "name": "name",
      "email": "email",
      "job_title": "job_title",
      "role_id": "role_id",
      "department": "department",
      "notes": "notes",
      "avatar_file": "avatar_file",
      "auto_email": "auto_email",
      "employee_type": "employee_type",
      "work_days_hours": "work_days_hours",
      "active": "active",
      "people_type_id": "people_type_id",
      "tags": "tags",
      "start_date": "start_date",
      "end_date": "end_date",
      "default_hourly_rate": "default_hourly_rate",
      "region_id": "region_id",
      "created": "created",
      "modified": "modified",
      "contracts": "contracts",
      "account": "account",
      "managers": "managers"
    }
  },
  inputParamsSchema
}

export default tool