import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_journal_entries_create",
  "toolDescription": "Post a list of journal entry objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/journal-entries/",
  "method": "post",
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
    "body": {
      "assigned_object_type": "assigned_object_type",
      "assigned_object_id": "assigned_object_id",
      "created_by": "created_by",
      "kind": "kind",
      "comments": "comments",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool