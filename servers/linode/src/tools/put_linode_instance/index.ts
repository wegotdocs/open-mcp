export { inputParams } from "./schema/root.js"

export const toolName = `put_linode_instance`
export const toolDescription = `Update a Linode`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/linode/instances/{linodeId}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "alerts",
    "backups",
    "capabilities",
    "created",
    "disk_encryption",
    "has_user_data",
    "host_uuid",
    "hypervisor",
    "id",
    "image",
    "ipv4",
    "ipv6",
    "label",
    "lke_cluster_id",
    "placement_group",
    "region",
    "specs",
    "status",
    "tags",
    "type",
    "updated",
    "watchdog_enabled"
  ]
}
export const flatMap = {}