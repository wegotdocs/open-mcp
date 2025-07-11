import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_deals",
  "toolDescription": "Lista oportunidades",
  "baseUrl": "https://api.rds-crm.com/v1",
  "path": "/deals",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "query": "query",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool