import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprescriptionlin",
  "toolDescription": "Récupération des prescriptions linéaires d’un document d’urbanisme",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/prescription-lin",
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