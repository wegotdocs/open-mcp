import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "rescheduleappointmentstg",
  "toolDescription": "Reschedule Appointment Stg",
  "baseUrl": "https://staging-adh.disc-me.cloud/okadoc/api",
  "path": "/reschedule",
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