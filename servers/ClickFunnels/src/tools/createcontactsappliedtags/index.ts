import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcontactsappliedtags",
  "toolDescription": "Create Applied Tag",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/contacts/{contact_id}/applied_tags",
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
    "path": {
      "contact_id": "contact_id"
    },
    "body": {
      "contacts_applied_tag": "contacts_applied_tag"
    }
  },
  inputParamsSchema
}

export default tool