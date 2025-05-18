import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprescriptionpct",
  "toolDescription": "Récupération des prescriptions ponctuelles d’un document d’urbanisme",
  "baseUrl": "https://api.example.com",
  "path": "/api/gpu/prescription-pct",
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