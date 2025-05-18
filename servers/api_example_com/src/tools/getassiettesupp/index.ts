import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getassiettesupp",
  "toolDescription": "Récupération des assiettes ponctuelles de servitudes d’utilité publique",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/assiette-sup-p",
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