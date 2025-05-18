import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsecteurcc",
  "toolDescription": "Récupération des secteurs d’une carte communale",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/secteur-cc",
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