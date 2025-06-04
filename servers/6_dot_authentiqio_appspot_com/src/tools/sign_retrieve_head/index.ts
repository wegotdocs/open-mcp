import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sign_retrieve_head",
  "toolDescription": "HEAD to get the status of a verification job",
  "baseUrl": "https://6-dot-authentiqio.appspot.com",
  "path": "/scope/{job}",
  "method": "head",
  "security": [],
  "paramsMap": {
    "path": {
      "job": "job"
    }
  },
  inputParamsSchema
}

export default tool