import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getactesup",
  "toolDescription": "Récupération des actes des servitudes d’utilité publique",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/acte-sup",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "partition": "partition"
    }
  },
  inputParamsSchema
}

export default tool