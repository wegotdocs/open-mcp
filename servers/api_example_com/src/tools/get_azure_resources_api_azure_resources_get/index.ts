import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_azure_resources_api_azure_resources_get",
  "toolDescription": "Get Azure Resources",
  "baseUrl": "https://api.example.com",
  "path": "/api/azure/resources",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "resource_group": "resource_group",
      "resource_type": "resource_type"
    }
  },
  inputParamsSchema
}

export default tool