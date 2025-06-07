import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "terminate_instance_api_cloud_cloud_provider_instances_instance_i",
  "toolDescription": "Terminate Instance",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/cloud/{provider}/instances/{instance_id}/terminate",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "provider": "provider",
      "instance_id": "instance_id"
    },
    "query": {
      "region": "region",
      "subscription_id": "subscription_id",
      "resource_group": "resource_group"
    }
  },
  inputParamsSchema
}

export default tool