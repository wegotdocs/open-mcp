import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "key_revoke",
  "toolDescription": "Revoke an Identity (Key) with a revocation secret",
  "baseUrl": "https://6-dot-authentiqio.appspot.com",
  "path": "/key/{PK}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "PK": "PK"
    },
    "query": {
      "secret": "secret"
    }
  },
  inputParamsSchema
}

export default tool