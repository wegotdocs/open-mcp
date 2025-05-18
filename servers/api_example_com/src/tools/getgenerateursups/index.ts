import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getgenerateursups",
  "toolDescription": "Récupération des générateurs surfaciques des servitudes d’utilité publique",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/generateur-sup-s",
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