import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_proxyconf",
  "toolDescription": "Get a particular proxyconf.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/proxyconfs",
  "method": "post",
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
      "ID": "ID",
      "PACConfigs": "PACConfigs",
      "accessPolicy": "accessPolicy",
      "agentConfig": "agentConfig",
      "assignPolicy": "assignPolicy",
      "contentPolicy": "contentPolicy",
      "customDataSets": "customDataSets",
      "customDataTypes": "customDataTypes",
      "extractors": "extractors",
      "namespace": "namespace",
      "orgSettings": "orgSettings",
      "providers": "providers",
      "tokens": "tokens",
      "webExtensionConfig": "webExtensionConfig"
    }
  },
  inputParamsSchema
}

export default tool