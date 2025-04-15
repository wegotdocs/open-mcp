import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_clients_client_uuid_nodes_node_",
  "toolDescription": "Unregister a cluster node from the client",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/nodes/{node}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "node": "node"
    }
  },
  inputParamsSchema
}

export default tool