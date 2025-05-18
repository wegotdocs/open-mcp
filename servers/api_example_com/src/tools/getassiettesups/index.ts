import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getassiettesups",
  "toolDescription": "Récupération des assiettes surfaciques de servitudes d’utilité publique",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/assiette-sup-s",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "geom": "geom",
      "partition": "partition",
      "categorie": "categorie"
    }
  },
  inputParamsSchema
}

export default tool