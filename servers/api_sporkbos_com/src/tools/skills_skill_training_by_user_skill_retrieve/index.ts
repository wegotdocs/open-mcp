import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "skills_skill_training_by_user_skill_retrieve",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/skills/skill-training-by-user-skill/",
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
      "skill": "skill",
      "user": "user"
    }
  },
  inputParamsSchema
}

export default tool