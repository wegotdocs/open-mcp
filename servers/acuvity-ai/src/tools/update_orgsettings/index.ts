import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_orgsettings",
  "toolDescription": "Update a organization given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/orgsettings/{id}",
  "method": "put",
  "security": [
    {
      "key": "X-Namespace",
      "value": "<mcp-env-var>X_NAMESPACE</mcp-env-var>",
      "in": "header",
      "envVarName": "X_NAMESPACE"
    }
  ],
  "paramsMap": {
    "body": {
      "CA": "CA",
      "CACommonNames": "CACommonNames",
      "ID": "ID",
      "accessPolicy": "accessPolicy",
      "allowSupportAccess": "allowSupportAccess",
      "askConsent": "askConsent",
      "assignPolicy": "assignPolicy",
      "contentPolicy": "contentPolicy",
      "createTime": "createTime",
      "disableURLDiscovery": "disableURLDiscovery",
      "fingerprints": "fingerprints",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "namespace": "namespace",
      "profile": "profile",
      "propagate": "propagate",
      "providersWithoutConsent": "providersWithoutConsent",
      "safeUsageURL": "safeUsageURL",
      "storeInputFiles": "storeInputFiles",
      "storeOutputFiles": "storeOutputFiles",
      "subjectKeyIDs": "subjectKeyIDs",
      "updateTime": "updateTime",
      "useRegoCodeOnly": "useRegoCodeOnly"
    }
  },
  inputParamsSchema
}

export default tool