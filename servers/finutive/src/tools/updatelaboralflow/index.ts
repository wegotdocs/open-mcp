import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatelaboralflow",
  "toolDescription": "Update labor flow",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/laboral/flows/{flow_id}",
  "method": "put",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "business_id": "business_id",
      "flow_id": "flow_id"
    },
    "body": {
      "actual_step": "actual_step",
      "next_step": "next_step",
      "value": "value",
      "toggles": "toggles",
      "manager_tips": "manager_tips",
      "no_send_notification": "no_send_notification",
      "date": "date",
      "linked_file": "linked_file"
    }
  },
  inputParamsSchema
}

export default tool