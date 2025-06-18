import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_thumbnails_studyidurlparam_seriesidurlparam_filenameu",
  "toolDescription": "",
  "baseUrl": "{scheme}://{baseHost}",
  "path": "/thumbnails/{studyIdUrlParam}/{seriesIdUrlParam}/{filenameUrlParam}",
  "method": "parameters",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool