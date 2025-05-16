import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findprovideravailabilitiesstg",
  "toolDescription": "Find Provider Availabilities Stg",
  "baseUrl": "https://staging-adh.disc-me.cloud/okadoc/api",
  "path": "/availability",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "doctorID": "doctorID",
      "facilityID": "facilityID",
      "from": "from",
      "to": "to"
    },
    "header": {
      "okadoc-auth-key": "okadoc-auth-key"
    }
  },
  inputParamsSchema
}

export default tool