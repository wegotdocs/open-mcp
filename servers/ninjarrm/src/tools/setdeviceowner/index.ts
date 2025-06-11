import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setdeviceowner",
  "toolDescription": "Set device owner",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/device/{id}/owner/{ownerUid}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id",
      "ownerUid": "ownerUid"
    }
  },
  inputParamsSchema
}

export default tool