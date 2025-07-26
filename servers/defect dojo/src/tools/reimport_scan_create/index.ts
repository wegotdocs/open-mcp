import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reimport_scan_create",
  "toolDescription": "Reimports a scan report into an existing test.\n\nBy ID:\n- Create a Product (or use an existing product)\n- Create an Engagement inside the product\n- Import a scan report and find the id of the Test\n- Provide this in the `test` parameter\n\nBy N",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/reimport-scan/",
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
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool