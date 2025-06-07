import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_deployment_image_api_foundation_deployments_namespace_dep",
  "toolDescription": "Update Deployment Image",
  "baseUrl": "https://api.example.com",
  "path": "/api/foundation/deployments/{namespace}/{deployment_name}/image",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace",
      "deployment_name": "deployment_name"
    }
  },
  inputParamsSchema
}

export default tool