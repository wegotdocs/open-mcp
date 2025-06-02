import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcosigner",
  "toolDescription": "Get cosigner",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/cosigners/{cosignerId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "cosignerId": "cosignerId"
    }
  },
  inputParamsSchema
}

export default tool