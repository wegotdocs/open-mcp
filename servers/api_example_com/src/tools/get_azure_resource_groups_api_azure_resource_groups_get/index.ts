import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_azure_resource_groups_api_azure_resource_groups_get",
  "toolDescription": "Get Azure Resource Groups",
  "baseUrl": "https://api.example.com",
  "path": "/api/azure/resource-groups",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool