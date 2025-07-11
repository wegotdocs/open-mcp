import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_contacts_id_",
  "toolDescription": "Atualiza um contato",
  "baseUrl": "https://api.rds-crm.com/v1",
  "path": "/contacts/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "job_title": "job_title",
      "emails": "emails",
      "phones": "phones",
      "birthday": "birthday",
      "social_profiles": "social_profiles",
      "organization_id": "organization_id",
      "notes": "notes",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool