import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpublickeyinfo",
  "toolDescription": "Get the public key for a derivation path",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/public_key_info",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "derivationPath": "derivationPath",
      "algorithm": "algorithm",
      "compressed": "compressed"
    }
  },
  inputParamsSchema
}

export default tool