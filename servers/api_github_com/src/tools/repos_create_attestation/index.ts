import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_attestation",
  "toolDescription": "Create an attestation",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/attestations",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "bundle": "bundle"
    }
  },
  inputParamsSchema
}

export default tool