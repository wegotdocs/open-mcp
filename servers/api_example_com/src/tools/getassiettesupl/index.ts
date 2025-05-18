import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getassiettesupl",
  "toolDescription": "Récupération des assiettes linéaires de servitudes d’utilité publique",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/assiette-sup-l",
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