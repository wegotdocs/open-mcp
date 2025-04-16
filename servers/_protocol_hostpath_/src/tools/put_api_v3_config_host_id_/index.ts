import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v3_config_host_id_",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/config/host/{id}",
  "method": "put",
  "security": [
    {
      "key": "X-Api-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    },
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "id": "b_id",
      "bindAddress": "bindAddress",
      "port": "port",
      "sslPort": "sslPort",
      "enableSsl": "enableSsl",
      "launchBrowser": "launchBrowser",
      "authenticationMethod": "authenticationMethod",
      "authenticationRequired": "authenticationRequired",
      "analyticsEnabled": "analyticsEnabled",
      "username": "username",
      "password": "password",
      "passwordConfirmation": "passwordConfirmation",
      "logLevel": "logLevel",
      "logSizeLimit": "logSizeLimit",
      "consoleLogLevel": "consoleLogLevel",
      "branch": "branch",
      "apiKey": "apiKey",
      "sslCertPath": "sslCertPath",
      "sslCertPassword": "sslCertPassword",
      "urlBase": "urlBase",
      "instanceName": "instanceName",
      "applicationUrl": "applicationUrl",
      "updateAutomatically": "updateAutomatically",
      "updateMechanism": "updateMechanism",
      "updateScriptPath": "updateScriptPath",
      "proxyEnabled": "proxyEnabled",
      "proxyType": "proxyType",
      "proxyHostname": "proxyHostname",
      "proxyPort": "proxyPort",
      "proxyUsername": "proxyUsername",
      "proxyPassword": "proxyPassword",
      "proxyBypassFilter": "proxyBypassFilter",
      "proxyBypassLocalAddresses": "proxyBypassLocalAddresses",
      "certificateValidation": "certificateValidation",
      "backupFolder": "backupFolder",
      "backupInterval": "backupInterval",
      "backupRetention": "backupRetention",
      "trustCgnatIpAddresses": "trustCgnatIpAddresses"
    }
  },
  inputParamsSchema
}

export default tool