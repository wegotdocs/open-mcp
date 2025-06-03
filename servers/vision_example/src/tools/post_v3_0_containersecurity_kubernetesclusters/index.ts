import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_containersecurity_kubernetesclusters",
  "toolDescription": "Register a cluster (Kubernetes)",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/containerSecurity/kubernetesClusters",
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
    "body": {
      "name": "name",
      "groupId": "groupId",
      "description": "description",
      "policyId": "policyId",
      "resourceId": "resourceId"
    }
  },
  inputParamsSchema
}

export default tool