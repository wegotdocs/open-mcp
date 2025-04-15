import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_test_nodes_available",
  "toolDescription": "Test if registered cluster nodes are available Tests availability by sending 'ping' request to all cluster nodes.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/test-nodes-available",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool