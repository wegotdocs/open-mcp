import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_clients_client_uuid_protocol_mappers_add",
  "toolDescription": "Create multiple mappers",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/add-models",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool