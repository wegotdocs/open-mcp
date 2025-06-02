import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getvaspbydid",
  "toolDescription": "Get VASP details",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/travel_rule/vasp/{did}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "did": "did"
    },
    "query": {
      "fields": "fields"
    }
  },
  inputParamsSchema
}

export default tool