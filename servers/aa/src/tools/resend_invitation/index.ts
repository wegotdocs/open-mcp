import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "resend_invitation",
  "toolDescription": "Resend User Invitation To Organization",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/organizations/{org_id}/workspaces/{workspace_id}/invite/resend",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "org_id": "org_id",
      "workspace_id": "workspace_id"
    },
    "body": {
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool