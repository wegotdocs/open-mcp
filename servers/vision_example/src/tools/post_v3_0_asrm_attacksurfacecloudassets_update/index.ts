import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_asrm_attacksurfacecloudassets_update",
  "toolDescription": "Update cloud asset tags",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/asrm/attackSurfaceCloudAssets/update",
  "method": "post",
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