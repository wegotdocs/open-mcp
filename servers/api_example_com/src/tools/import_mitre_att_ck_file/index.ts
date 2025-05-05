import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "import_mitre_att_ck_file",
  "toolDescription": "You can import a MITRE Att&ck catalog either by providing a json file or by passing the url pointing to a json of the catalog",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/pattern/import/attack",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "THEHIVE-SESSION",
      "value": "<mcp-env-var>THEHIVE_SESSION</mcp-env-var>",
      "in": "cookie",
      "envVarName": "THEHIVE_SESSION"
    }
  ],
  "paramsMap": {
    "body": {
      "url": "url",
      "catalog": "catalog",
      "variant": "variant"
    }
  },
  inputParamsSchema
}

export default tool