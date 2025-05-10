import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createequipment",
  "toolDescription": "Create Equipment",
  "baseUrl": "https://api.example.com",
  "path": "/v2/equips",
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
      "name": "name",
      "tags": "tags",
      "refs": "refs",
      "props": "props",
      "virtualMeterRefs": "virtualMeterRefs"
    }
  },
  inputParamsSchema
}

export default tool