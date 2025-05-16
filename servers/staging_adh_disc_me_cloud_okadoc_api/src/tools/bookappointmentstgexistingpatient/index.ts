import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bookappointmentstgexistingpatient",
  "toolDescription": "Book Appointment Stg Existing Patient",
  "baseUrl": "https://staging-adh.disc-me.cloud/okadoc/api",
  "path": "/book",
  "method": "post",
  "security": [],
  "paramsMap": {
    "header": {
      "okadoc-auth-key": "okadoc-auth-key"
    }
  },
  inputParamsSchema
}

export default tool