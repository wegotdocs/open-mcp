import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmanagerservices",
  "toolDescription": "Get manager services",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/services/managers",
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
    "query": {
      "search": "search",
      "pageable": "pageable",
      "managers_ids": "managers_ids",
      "services_ids": "services_ids"
    }
  },
  inputParamsSchema
}

export default tool