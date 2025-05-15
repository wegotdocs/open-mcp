import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateaccountcloudattachmentproperties",
  "toolDescription": "Modifies or updates an AccountCloudAttachmentProperties object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/AccountCloudAttachmentProperties/{id}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "accountDiskUsage": "accountDiskUsage",
      "as2Workload": "as2Workload",
      "atomInputSize": "atomInputSize",
      "atomOutputOverflowSize": "atomOutputOverflowSize",
      "atomWorkingOverflowSize": "atomWorkingOverflowSize",
      "cloudAccountExecutionLimit": "cloudAccountExecutionLimit",
      "cloudAccountExecutionWarningOffset": "cloudAccountExecutionWarningOffset",
      "containerId": "containerId",
      "downloadRunnerlogs": "downloadRunnerlogs",
      "enableAccountDataArchiving": "enableAccountDataArchiving",
      "enableAtomWorkerWarmup": "enableAtomWorkerWarmup",
      "flowControlParallelProcessTypeOverride": "flowControlParallelProcessTypeOverride",
      "httpRequestRate": "httpRequestRate",
      "httpWorkload": "httpWorkload",
      "listenerMaxConcurrentExecutions": "listenerMaxConcurrentExecutions",
      "maxConnectorTrackDocs": "maxConnectorTrackDocs",
      "minNumberofAtomWorkers": "minNumberofAtomWorkers",
      "numberofAtomWorkers": "numberofAtomWorkers",
      "queueIncomingMessageRateLimit": "queueIncomingMessageRateLimit",
      "sessionId": "sessionId",
      "statusCode": "statusCode",
      "testModeMaxDocBytes": "testModeMaxDocBytes",
      "testModeMaxDocs": "testModeMaxDocs",
      "workerElasticScalingThreshold": "workerElasticScalingThreshold",
      "workerMaxExecutionTime": "workerMaxExecutionTime",
      "workerMaxGeneralExecutionTime": "workerMaxGeneralExecutionTime",
      "workerMaxQueuedExecutions": "workerMaxQueuedExecutions",
      "workerMaxRunningExecutions": "workerMaxRunningExecutions",
      "workerQueuedExecutionTimeout": "workerQueuedExecutionTimeout"
    }
  },
  inputParamsSchema
}

export default tool