import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_download_zipball_archive",
  "toolDescription": "Download a repository archive (zip)",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/zipball/{ref}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "ref": "ref"
    }
  },
  inputParamsSchema
}

export default tool