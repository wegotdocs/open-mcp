import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_aliases_id_protection_bypass",
  "toolDescription": "Update the protection bypass for the alias (used for user access & comment access for deployments). Used as shareable links and user scoped access for Vercel Authentication and also to allow external (logged in) people to comment on preview",
  "baseUrl": "https://api.vercel.com",
  "path": "/aliases/{id}/protection-bypass",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool