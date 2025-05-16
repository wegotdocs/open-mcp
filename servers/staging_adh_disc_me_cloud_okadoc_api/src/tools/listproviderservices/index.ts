import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listproviderservices",
  "toolDescription": "List Provider Services",
  "baseUrl": "https://staging-adh.disc-me.cloud/okadoc/api",
  "path": "/services",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "doctorID": "doctorID",
      "facilityID": "facilityID"
    },
    "header": {
      "okadoc-auth-key": "okadoc-auth-key"
    }
  },
  inputParamsSchema
}

export default tool