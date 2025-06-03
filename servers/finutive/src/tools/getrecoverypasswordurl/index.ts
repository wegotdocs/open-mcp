import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrecoverypasswordurl",
  "toolDescription": "Get recovery password URL",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businesses/{business_id}/users/{user_id}/recovery-password",
  "method": "get",
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
      "business_id": "business_id",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool