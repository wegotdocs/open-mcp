import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createflowexecution",
  "toolDescription": "Create workflow execution",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/payments/workflow_execution",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "configId": "configId",
      "preScreening": "preScreening",
      "params": "params",
      "externalCorrelationData": "externalCorrelationData"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool