import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_azure_security_recommendations_api_cloud_azure_security_reco",
  "toolDescription": "Get Azure Security Recommendations",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/azure/security/recommendations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "subscription_id": "subscription_id"
    }
  },
  inputParamsSchema
}

export default tool