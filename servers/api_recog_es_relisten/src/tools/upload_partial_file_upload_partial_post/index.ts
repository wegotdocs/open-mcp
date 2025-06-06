import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upload_partial_file_upload_partial_post",
  "toolDescription": "Create an episode",
  "baseUrl": "https://api.recog.es/relisten",
  "path": "/upload/partial",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "resultid": "resultid",
      "lang": "lang",
      "langCult": "langCult",
      "country": "country",
      "specialty": "specialty",
      "subSpecialty": "subSpecialty",
      "subSubSpecialty": "subSubSpecialty",
      "consultationType": "consultationType",
      "initialContext": "initialContext",
      "isMulti": "isMulti",
      "contentType": "contentType",
      "errorCode": "errorCode",
      "tags": "tags",
      "groupId": "groupId"
    }
  },
  inputParamsSchema
}

export default tool