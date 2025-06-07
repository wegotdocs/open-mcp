import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_ebs_encryption_api_aws_ebs_encryption_get",
  "toolDescription": "Check Ebs Encryption",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/ebs-encryption",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool