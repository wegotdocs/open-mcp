import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v3_0_containersecurity_kubernetesclusters_id_",
  "toolDescription": "Modify cluster settings (Kubernetes)",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/containerSecurity/kubernetesClusters/{id}",
  "method": "patch",
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
      "description": "description",
      "policyId": "policyId",
      "resourceId": "resourceId",
      "groupId": "groupId",
      "customizableTagIds": "customizableTagIds"
    }
  },
  inputParamsSchema
}

export default tool