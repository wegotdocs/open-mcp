import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kubernetes_destroy_associatedresourcesselective",
  "toolDescription": "Selectively Delete a Cluster and its Associated Resources",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources/selective",
  "method": "delete",
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
    "body": {
      "load_balancers": "load_balancers",
      "volumes": "volumes",
      "volume_snapshots": "volume_snapshots"
    }
  },
  inputParamsSchema
}

export default tool