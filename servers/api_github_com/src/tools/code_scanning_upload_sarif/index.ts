import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_scanning_upload_sarif",
  "toolDescription": "Upload an analysis as SARIF data",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/code-scanning/sarifs",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "commit_sha": "commit_sha",
      "ref": "ref",
      "sarif": "sarif",
      "checkout_uri": "checkout_uri",
      "started_at": "started_at",
      "tool_name": "tool_name",
      "validate": "validate"
    }
  },
  inputParamsSchema
}

export default tool