import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_attribute_attributes_companyid_post",
  "toolDescription": "Create attribute",
  "baseUrl": "https://api.example.com",
  "path": "/attributes/{companyId}",
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
      "companyId": "companyId"
    },
    "body": {
      "customId": "customId",
      "source": "source",
      "active": "active",
      "name": "name",
      "type": "type",
      "required": "required",
      "values": "values"
    }
  },
  inputParamsSchema
}

export default tool