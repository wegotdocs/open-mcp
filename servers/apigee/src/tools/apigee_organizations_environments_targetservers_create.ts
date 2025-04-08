import { z } from "zod"

export const toolName = `apigee_organizations_environments_targetservers_create`
export const toolDescription = `Creates a TargetServer in the specified environment.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/targetservers`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [
    "name"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "environmentsId"
  ],
  "cookie": [],
  "body": [
    "protocol",
    "b_name",
    "sSLInfo",
    "host",
    "isEnabled",
    "description",
    "port"
  ]
}
export const flatMap = {
  "b_name": "name"
}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "name": z.string().optional(),
  "protocol": z.enum(["PROTOCOL_UNSPECIFIED","HTTP","HTTP2","GRPC_TARGET","GRPC","EXTERNAL_CALLOUT"]).describe("Immutable. The protocol used by this TargetServer.").optional(),
  "b_name": z.string().describe("Required. The resource id of this target server. Values must match the regular expression ").optional(),
  "sSLInfo": z.object({ "enforce": z.boolean().describe("TLS is strictly enforced.").optional(), "clientAuthEnabled": z.boolean().describe("Optional. Enables two-way TLS.").optional(), "protocols": z.array(z.string()).describe("The TLS versioins to be used.").optional(), "keyAlias": z.string().describe("Required if `client_auth_enabled` is true. The resource ID for the alias containing the private key and cert.").optional(), "commonName": z.object({ "wildcardMatch": z.boolean().describe("Indicates whether the cert should be matched against as a wildcard cert.").optional(), "value": z.string().describe("The TLS Common Name string of the certificate.").optional() }).describe("The TLS Common Name of the certificate.").optional(), "enabled": z.boolean().describe("Required. Enables TLS. If false, neither one-way nor two-way TLS will be enabled.").optional(), "ignoreValidationErrors": z.boolean().describe("If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.").optional(), "trustStore": z.string().describe("The resource ID of the truststore.").optional(), "ciphers": z.array(z.string()).describe("The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.").optional(), "keyStore": z.string().describe("Required if `client_auth_enabled` is true. The resource ID of the keystore.").optional() }).describe("Optional. Specifies TLS configuration info for this TargetServer. The JSON name is `sSLInfo` for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.").optional(),
  "host": z.string().describe("Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123.").optional(),
  "isEnabled": z.boolean().describe("Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.").optional(),
  "description": z.string().describe("Optional. A human-readable description of this TargetServer.").optional(),
  "port": z.number().int().describe("Required. The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.").optional()
}