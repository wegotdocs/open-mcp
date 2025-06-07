import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_ebs_volumes_with_k8s_info_api_aws_ebs_volumes_get",
  "toolDescription": "Get Ebs Volumes With K8S Info",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/ebs-volumes",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool