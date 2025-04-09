export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_clients_client_uuid_nodes_node_`
export const toolDescription = `Unregister a cluster node from the client`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/nodes/{node}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "node"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}