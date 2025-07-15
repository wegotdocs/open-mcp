import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletephase",
  "toolDescription": "Delete a phase",
  "baseUrl": "https://api.float.com/v3",
  "path": "/phases/{phase_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "phase_id": "phase_id"
    }
  },
  inputParamsSchema
}

export default tool