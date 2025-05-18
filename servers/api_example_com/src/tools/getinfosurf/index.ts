import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinfosurf",
  "toolDescription": "Récupération des informations surfaciques d’un document d’urbanisme",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/info-surf",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "geom": "geom",
      "partition": "partition"
    }
  },
  inputParamsSchema
}

export default tool