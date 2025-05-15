import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the Runtime that is hosting the shared web server."),
  "apiType": z.enum(["basic","intermediate","advanced"]).describe("The level of user management and API management functionality applicable to the shared web server.Options are basic, intermediate, and advanced. The default is intermediate.").optional(),
  "atomId": z.string().describe("The ID of the Runtime that is hosting the shared web server.").optional(),
  "auth": z.enum(["none","basic"]).describe("The authentication required by the web server. Options are none and basic. If minAuth is set to basic, you must also set auth to basic.").optional(),
  "authToken": z.string().describe("If you configure BASIC authentication, this is an authentication token for connecting to the shared web server. You cannot update this with the UPDATE operation.").optional(),
  "checkForwardedHeaders": z.boolean().describe("Information regarding the external host, might be forwarded in headers. The embedded Java technology is capable of examining these headers and extracting external host information for response and callback purposes. Set this to true to enable the server to check for this information. The default is false.").optional(),
  "externalHost": z.string().describe("The external host name or IP for the listener.").optional(),
  "externalHttpPort": z.number().int().describe("The external HTTP port routes to the shared web server listener.").optional(),
  "externalHttpsPort": z.number().int().describe("The external HTTPS port routes to the shared web server listener.").optional(),
  "httpPort": z.number().int().describe("The HTTP port on which the web server listens. The default port is 9090.").optional(),
  "httpsPort": z.number().int().describe("The SSL \\(HTTPS\\) port on which the web server listens, if applicable. The default port is 9093.").optional(),
  "internalHost": z.string().describe("For multi-homed boxes, the IP address you want to use for binding to a specific interface.").optional(),
  "maxThreads": z.number().int().describe("The maximum number of handler threads that the listen process spawn. It queues other requests.").optional(),
  "minAuth": z.enum(["none","basic"]).describe("The minimum authentication required by the web server. Options are none and basic. The are multi-tenant, so the default is set to basic. The default for local Runtimes and Runtime clusters is none.").optional(),
  "overrideUrl": z.boolean().describe("Allows manual overriding of the exposed URL used to connect to the shared web server. This value is for informational purposes for any tenant. By default, this is false, meaning the URL is constructed based on the host name or external host name and port or SSL port settings. Set this to true to specify a custom URL attribute value.").optional(),
  "sslCertificateId": z.string().describe("The component ID for the SSL certificate used by the server, if applicable.").optional(),
  "url": z.string().describe("The URL for connecting to the shared web server.").optional()
}