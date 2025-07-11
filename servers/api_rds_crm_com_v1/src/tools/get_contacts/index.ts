import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_contacts",
  "toolDescription": "Lista contatos",
  "baseUrl": "https://api.rds-crm.com/v1",
  "path": "/contacts",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "q": "q",
      "title": "title",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool