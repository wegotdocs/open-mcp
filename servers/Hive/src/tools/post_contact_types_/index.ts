import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_contact_types_",
  "toolDescription": "contact-types create",
  "baseUrl": "http://localhost:8000",
  "path": "/contact-types/",
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
    "header": {
      "Content-Type": "Content-Type",
      "Accept": "Accept"
    }
  },
  inputParamsSchema
}

export default tool