import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getexchangeaccountscredentialspublickey",
  "toolDescription": "Get public key to encrypt exchange credentials",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/exchange_accounts/credentials_public_key",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool