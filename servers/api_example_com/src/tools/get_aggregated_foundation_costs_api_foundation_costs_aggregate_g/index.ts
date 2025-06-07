import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_aggregated_foundation_costs_api_foundation_costs_aggregate_g",
  "toolDescription": "Get Aggregated Foundation Costs",
  "baseUrl": "https://api.example.com",
  "path": "/api/foundation/costs/aggregate",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool