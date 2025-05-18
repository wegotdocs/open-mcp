import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinfolin",
  "toolDescription": "Récupération des informations linéaires d’un document d’urbanisme",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/info-lin",
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