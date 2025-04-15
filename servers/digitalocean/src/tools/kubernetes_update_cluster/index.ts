import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kubernetes_update_cluster",
  "toolDescription": "Update a Kubernetes Cluster",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/kubernetes/clusters/{cluster_id}",
  "method": "put",
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
      "name": "name",
      "tags": "tags",
      "maintenance_policy": "maintenance_policy",
      "auto_upgrade": "auto_upgrade",
      "surge_upgrade": "surge_upgrade",
      "ha": "ha",
      "control_plane_firewall": "control_plane_firewall",
      "cluster_autoscaler_configuration": "cluster_autoscaler_configuration",
      "routing_agent": "routing_agent"
    }
  },
  inputParamsSchema
}

export default tool