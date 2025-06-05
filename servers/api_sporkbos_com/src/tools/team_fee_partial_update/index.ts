import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "team_fee_partial_update",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/team-fee/{id}/",
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
      "engagement_fee": "engagement_fee",
      "owner_fee": "owner_fee",
      "admin_fee": "admin_fee",
      "hr_fee": "hr_fee",
      "manager_fee": "manager_fee",
      "employee_fee": "employee_fee",
      "staff_fee": "staff_fee",
      "guest_fee": "guest_fee",
      "team": "team"
    }
  },
  inputParamsSchema
}

export default tool