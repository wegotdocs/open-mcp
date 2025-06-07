import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_eks_clusters_api_aws_eks_clusters_get",
  "toolDescription": "Get Eks Clusters",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/eks-clusters",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool