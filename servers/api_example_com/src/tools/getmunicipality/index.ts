import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmunicipality",
  "toolDescription": "Récupération des informations sur une commune (est au RNU? est supprimée?)",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/municipality",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "geom": "geom",
      "insee": "insee"
    }
  },
  inputParamsSchema
}

export default tool