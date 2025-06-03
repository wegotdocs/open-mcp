import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepersonaldata",
  "toolDescription": "Update personal data",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/users/data",
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
    "body": {
      "firstName": "firstName",
      "lastName": "lastName",
      "phone": "phone",
      "language": "language",
      "role": "role",
      "avatar": "avatar"
    }
  },
  inputParamsSchema
}

export default tool