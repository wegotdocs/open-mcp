import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteflowconfiguration",
  "toolDescription": "Delete workflow configuration",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/payments/workflow_config/{configId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "configId": "configId"
    }
  },
  inputParamsSchema
}

export default tool