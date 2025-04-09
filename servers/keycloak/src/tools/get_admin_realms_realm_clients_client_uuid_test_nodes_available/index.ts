export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_clients_client_uuid_test_nodes_available`
export const toolDescription = `Test if registered cluster nodes are available Tests availability by sending 'ping' request to all cluster nodes.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/test-nodes-available`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}