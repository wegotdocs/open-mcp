import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_protocol_mappers_prot",
  "toolDescription": "Get mappers by name for a specific protocol",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/protocol/{protocol}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "protocol": "protocol"
    }
  },
  inputParamsSchema
}

export default tool