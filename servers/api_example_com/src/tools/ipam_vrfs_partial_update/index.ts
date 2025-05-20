import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ipam_vrfs_partial_update",
  "toolDescription": "Patch a VRF object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/ipam/vrfs/{id}/",
  "method": "patch",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "rd": "rd",
      "tenant": "tenant",
      "enforce_unique": "enforce_unique",
      "description": "description",
      "comments": "comments",
      "import_targets": "import_targets",
      "export_targets": "export_targets",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool