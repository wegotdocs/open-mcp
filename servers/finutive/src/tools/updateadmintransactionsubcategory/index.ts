import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateadmintransactionsubcategory",
  "toolDescription": "Update transaction subcategory",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/banks/transactions/subcategories/{subcategory_id}",
  "method": "put",
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
      "subcategory_id": "subcategory_id"
    },
    "body": {
      "name": "name",
      "icon": "icon",
      "color": "color",
      "keywords": "keywords",
      "priority": "priority",
      "afterbanks_equivalent": "afterbanks_equivalent",
      "applicable_to": "applicable_to",
      "suggestion_to_conciliate": "suggestion_to_conciliate"
    }
  },
  inputParamsSchema
}

export default tool