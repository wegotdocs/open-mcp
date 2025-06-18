import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getstudies",
  "toolDescription": "List studies",
  "baseUrl": "{scheme}://{baseHost}",
  "path": "/api/v1/studies",
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
      "institution": "institution",
      "institutions[]": "institutions[]",
      "institutionLegacy": "institutionLegacy",
      "institutionsLegacy[]": "institutionsLegacy[]",
      "dicomStudyId": "dicomStudyId",
      "patientId": "patientId",
      "modality": "modality",
      "source": "source",
      "studyInstanceUid": "studyInstanceUid",
      "limit": "limit",
      "page": "page",
      "date": "date",
      "accessionNumber": "accessionNumber",
      "storageArea[]": "storageArea[]"
    }
  },
  inputParamsSchema
}

export default tool