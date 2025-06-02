import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploadcontracttemplate",
  "toolDescription": "Upload contract template",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/templates",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "description": "description",
      "longDescription": "longDescription",
      "bytecode": "bytecode",
      "sourcecode": "sourcecode",
      "type": "type",
      "docs": "docs",
      "abi": "abi",
      "attributes": "attributes"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool