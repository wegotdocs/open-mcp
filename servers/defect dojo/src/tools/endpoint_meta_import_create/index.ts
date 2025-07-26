import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "endpoint_meta_import_create",
  "toolDescription": "Imports a CSV file into a product to propagate arbitrary meta and tags on endpoints.\n\nBy Names:\n- Provide `product_name` of existing product\n\nBy ID:\n- Provide the id of the product in the `product` parameter\n\nIn this scenario Defect Dojo wi",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/endpoint_meta_import/",
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