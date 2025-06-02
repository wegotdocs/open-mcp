import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "launchflowexecution",
  "toolDescription": "Execute the payments workflow",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/payments/workflow_execution/{workflowExecutionId}/actions/execute",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "workflowExecutionId": "workflowExecutionId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool