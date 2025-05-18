import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getgenerateursupl",
  "toolDescription": "Récupération des générateurs linéaires des servitudes d’utilité publique",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/generateur-sup-l",
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