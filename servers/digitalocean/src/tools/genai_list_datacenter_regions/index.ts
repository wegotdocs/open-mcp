import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_list_datacenter_regions",
  "toolDescription": "List Datacenter Regions",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/regions",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "serves_inference": "serves_inference",
      "serves_batch": "serves_batch"
    }
  },
  inputParamsSchema
}

export default tool