import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listproviders",
  "toolDescription": "List Providers",
  "baseUrl": "https://staging-adh.disc-me.cloud/okadoc/api",
  "path": "/doctors",
  "method": "get",
  "security": [],
  "paramsMap": {
    "header": {
      "okadoc-auth-key": "okadoc-auth-key"
    }
  },
  inputParamsSchema
}

export default tool