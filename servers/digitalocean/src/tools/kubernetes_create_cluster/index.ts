import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kubernetes_create_cluster",
  "toolDescription": "Create a New Kubernetes Cluster",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/kubernetes/clusters",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "region": "region",
      "version": "version",
      "cluster_subnet": "cluster_subnet",
      "service_subnet": "service_subnet",
      "vpc_uuid": "vpc_uuid",
      "ipv4": "ipv4",
      "endpoint": "endpoint",
      "tags": "tags",
      "node_pools": "node_pools",
      "maintenance_policy": "maintenance_policy",
      "auto_upgrade": "auto_upgrade",
      "status": "status",
      "created_at": "created_at",
      "updated_at": "updated_at",
      "surge_upgrade": "surge_upgrade",
      "ha": "ha",
      "registry_enabled": "registry_enabled",
      "control_plane_firewall": "control_plane_firewall",
      "cluster_autoscaler_configuration": "cluster_autoscaler_configuration",
      "routing_agent": "routing_agent"
    }
  },
  inputParamsSchema
}

export default tool