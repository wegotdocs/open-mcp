import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addexchangeaccount",
  "toolDescription": "Add an Exchange Account",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/exchange_accounts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "exchangeType": "exchangeType",
      "name": "name",
      "creds": "creds",
      "key": "key",
      "mainAccountId": "mainAccountId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool