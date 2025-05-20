import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_custom_field_choice_sets_create",
  "toolDescription": "Post a list of custom field choice set objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/custom-field-choice-sets/",
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