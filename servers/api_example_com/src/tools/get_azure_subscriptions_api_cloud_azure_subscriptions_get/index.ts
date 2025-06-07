import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_azure_subscriptions_api_cloud_azure_subscriptions_get",
  "toolDescription": "Get Azure Subscriptions",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/azure/subscriptions",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool