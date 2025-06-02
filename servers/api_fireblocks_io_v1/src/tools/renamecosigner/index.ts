import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "renamecosigner",
  "toolDescription": "Rename cosigner",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/cosigners/{cosignerId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "cosignerId": "cosignerId"
    },
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool