import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "demographics_create",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/demographics/",
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
      "family_status": "family_status",
      "gender": "gender",
      "race": "race",
      "religion": "religion",
      "sexual_orientation": "sexual_orientation",
      "veteran": "veteran",
      "birth_date": "birth_date",
      "user": "user"
    }
  },
  inputParamsSchema
}

export default tool