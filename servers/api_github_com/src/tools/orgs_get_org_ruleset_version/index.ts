import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_get_org_ruleset_version",
  "toolDescription": "Get organization ruleset version",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/rulesets/{ruleset_id}/history/{version_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "ruleset_id": "ruleset_id",
      "version_id": "version_id"
    }
  },
  inputParamsSchema
}

export default tool