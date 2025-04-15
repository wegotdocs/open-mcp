import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kubernetes_get_credentials",
  "toolDescription": "Retrieve Credentials for a Kubernetes Cluster",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/kubernetes/clusters/{cluster_id}/credentials",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "cluster_id": "cluster_id"
    },
    "query": {
      "expiry_seconds": "expiry_seconds"
    }
  },
  inputParamsSchema
}

export default tool