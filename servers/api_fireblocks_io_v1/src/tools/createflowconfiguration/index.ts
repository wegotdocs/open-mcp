import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createflowconfiguration",
  "toolDescription": "Create payment flow configuration",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/payments/workflow_config",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "configName": "configName",
      "preScreening": "preScreening",
      "configOperations": "configOperations",
      "externalCorrelationData": "externalCorrelationData"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool