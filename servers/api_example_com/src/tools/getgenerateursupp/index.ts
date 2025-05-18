import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getgenerateursupp",
  "toolDescription": "Récupération des générateurs ponctuels des servitudes d’utilité publique",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/generateur-sup-p",
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