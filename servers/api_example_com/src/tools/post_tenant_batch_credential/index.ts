import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_tenant_batch_credential",
  "toolDescription": "Batch credential request",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/batch_credential",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "tenant": "tenant"
    }
  },
  inputParamsSchema
}

export default tool