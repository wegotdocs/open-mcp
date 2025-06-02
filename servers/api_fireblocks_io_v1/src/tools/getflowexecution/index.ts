import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getflowexecution",
  "toolDescription": "Get workflow execution details",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/payments/workflow_execution/{workflowExecutionId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "workflowExecutionId": "workflowExecutionId"
    }
  },
  inputParamsSchema
}

export default tool