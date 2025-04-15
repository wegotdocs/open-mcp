import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "calculaterfactorget",
  "toolDescription": "Determine your eligibility for the LEW",
  "baseUrl": "https://api.epa.gov/lew",
  "path": "/v1/rfactor",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "start_date": "start_date",
      "end_date": "end_date",
      "location": "location"
    },
    "header": {
      "X-Api-Key": "X-Api-Key"
    }
  },
  inputParamsSchema
}

export default tool