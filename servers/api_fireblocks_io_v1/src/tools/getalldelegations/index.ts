import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getalldelegations",
  "toolDescription": "List staking positions details",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/staking/positions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "chainDescriptor": "chainDescriptor"
    }
  },
  inputParamsSchema
}

export default tool