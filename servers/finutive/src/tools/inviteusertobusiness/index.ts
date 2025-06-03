import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "inviteusertobusiness",
  "toolDescription": "Invite user to business",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/invite",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "business_id": "business_id"
    },
    "body": {
      "firstname": "firstname",
      "lastname": "lastname",
      "email": "email",
      "role": "role",
      "tools": "tools"
    }
  },
  inputParamsSchema
}

export default tool