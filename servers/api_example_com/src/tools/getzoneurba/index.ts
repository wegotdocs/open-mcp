import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getzoneurba",
  "toolDescription": "Récupération des zonages d’un document d’urbanisme",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/zone-urba",
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