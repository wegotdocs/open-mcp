import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executemigrations",
  "toolDescription": "",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/migrations/initializer/execute",
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
    "query": {
      "token": "token"
    },
    "body": {
      "business_name": "business_name",
      "phone": "phone",
      "user_name": "user_name",
      "tipology": "tipology",
      "email": "email",
      "english": "english",
      "gclid": "gclid",
      "one_off": "one_off",
      "deal_labels": "deal_labels",
      "monthly_value": "monthly_value",
      "opportunity": "opportunity",
      "notes": "notes",
      "notes_docs": "notes_docs",
      "mailhost": "mailhost",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool