import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getapikeygenerateweb3key",
  "toolDescription": "/api/v1/api_keys/generate_web3_key",
  "baseUrl": "https://api.venice.ai/api/v1",
  "path": "/api_keys/generate_web3_key",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool