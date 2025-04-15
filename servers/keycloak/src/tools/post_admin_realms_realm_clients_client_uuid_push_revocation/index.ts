import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_clients_client_uuid_push_revocation",
  "toolDescription": "Push the client's revocation policy to its admin URL If the client has an admin URL, push revocation policy to it.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/push-revocation",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool