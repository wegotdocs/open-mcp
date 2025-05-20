import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_custom_field_choice_sets_update",
  "toolDescription": "Put a custom field choice set object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/custom-field-choice-sets/{id}/",
  "method": "put",
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
      "description": "description",
      "base_choices": "base_choices",
      "extra_choices": "extra_choices",
      "order_alphabetically": "order_alphabetically"
    }
  },
  inputParamsSchema
}

export default tool