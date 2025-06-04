import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sign_delete",
  "toolDescription": "delete a verification job",
  "baseUrl": "https://6-dot-authentiqio.appspot.com",
  "path": "/scope/{job}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "job": "job"
    }
  },
  inputParamsSchema
}

export default tool