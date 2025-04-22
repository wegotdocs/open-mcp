import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_organizations",
  "toolDescription": "Get list of available organizations",
  "baseUrl": "https://api.clickhouse.cloud",
  "path": "/v1/organizations",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool