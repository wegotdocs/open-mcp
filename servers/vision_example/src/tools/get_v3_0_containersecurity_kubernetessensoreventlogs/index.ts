import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_containersecurity_kubernetessensoreventlogs",
  "toolDescription": "Get runtime sensor events (Kubernetes)",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/containerSecurity/kubernetesSensorEventLogs",
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
      "startDateTime": "startDateTime",
      "endDateTime": "endDateTime"
    },
    "header": {
      "TMV1-Filter": "TMV1-Filter"
    }
  },
  inputParamsSchema
}

export default tool