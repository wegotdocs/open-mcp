import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getphase",
  "toolDescription": "Retrieve a single phase.",
  "baseUrl": "https://api.float.com/v3",
  "path": "/phases/{phase_id}",
  "method": "get",
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