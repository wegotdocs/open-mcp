import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findbyiso",
  "toolDescription": "Find country by Iso",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/locations/countries/by-iso/{countryIso}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "countryIso": "countryIso"
    }
  },
  inputParamsSchema
}

export default tool