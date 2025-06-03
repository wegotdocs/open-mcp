import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_threatintel_feeds_filterdefinition",
  "toolDescription": "Retrieve supported filter keys and values for Trend Threat Intelligence Feed queries.",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/threatintel/feeds/filterDefinition",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool