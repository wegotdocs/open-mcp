import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getchaininfo",
  "toolDescription": "Get chain-specific staking summary",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/staking/chains/{chainDescriptor}/chainInfo",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "chainDescriptor": "chainDescriptor"
    }
  },
  inputParamsSchema
}

export default tool