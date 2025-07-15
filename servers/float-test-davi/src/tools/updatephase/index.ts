import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatephase",
  "toolDescription": "Update a phase's details",
  "baseUrl": "https://api.float.com/v3",
  "path": "/phases/{phase_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "phase_id": "phase_id"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool