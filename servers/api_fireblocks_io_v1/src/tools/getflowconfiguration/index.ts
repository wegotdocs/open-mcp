import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getflowconfiguration",
  "toolDescription": "Retrieve workflow configuration",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/payments/workflow_config/{configId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "configId": "configId"
    }
  },
  inputParamsSchema
}

export default tool