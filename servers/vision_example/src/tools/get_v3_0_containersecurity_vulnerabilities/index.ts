import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_containersecurity_vulnerabilities",
  "toolDescription": "Get container image vulnerabilities (Kubernetes, Amazon ECS)",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/containerSecurity/vulnerabilities",
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
      "top": "top",
      "orderBy": "orderBy",
      "firstDetectedStartDateTime": "firstDetectedStartDateTime",
      "firstDetectedEndDateTime": "firstDetectedEndDateTime",
      "lastDetectedStartDateTime": "lastDetectedStartDateTime",
      "lastDetectedEndDateTime": "lastDetectedEndDateTime"
    },
    "header": {
      "TMV1-Filter": "TMV1-Filter"
    }
  },
  inputParamsSchema
}

export default tool