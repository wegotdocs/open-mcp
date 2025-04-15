import { z } from "zod"

export const inputParamsSchema = {
  "rules": z.array(z.object({ "match": z.object({ "path": z.object({ "prefix": z.string().max(256).describe("Prefix-based match. For example, `/api` will match `/api`, `/api/`, and any nested paths such as `/api/v1/endpoint`.") }).describe("The path to match on.") }).describe("The match configuration for the rule.").optional(), "cors": z.object({ "allow_origins": z.array(z.object({ "exact": z.string().min(1).max(256).describe("Exact string match. Only 1 of `exact`, `prefix`, or `regex` must be set.").optional(), "regex": z.string().min(1).max(256).describe("RE2 style regex-based match. Only 1 of `exact`, `prefix`, or `regex` must be set. For more information about RE2 syntax, see: https://github.com/google/re2/wiki/Syntax").optional() })).describe("The set of allowed CORS origins.").optional(), "allow_methods": z.array(z.string()).describe("The set of allowed HTTP methods. This configures the `Access-Control-Allow-Methods` header.").optional(), "allow_headers": z.array(z.string()).describe("The set of allowed HTTP request headers. This configures the `Access-Control-Allow-Headers` header.").optional(), "expose_headers": z.array(z.string()).describe("The set of HTTP response headers that browsers are allowed to access. This configures the `Access-Control-Expose-Headers` header.").optional(), "max_age": z.string().describe("An optional duration specifying how long browsers can cache the results of a preflight request. This configures the `Access-Control-Max-Age` header.").optional(), "allow_credentials": z.boolean().describe("Whether browsers should expose the response to the client-side JavaScript code when the request’s credentials mode is include. This configures the `Access-Control-Allow-Credentials` header.").optional() }).optional(), "component": z.object({ "name": z.string().describe("The name of the component to route to."), "preserve_path_prefix": z.string().describe("An optional flag to preserve the path that is forwarded to the backend service. By default, the HTTP request path will be trimmed from the left when forwarded to the component. For example, a component with `path=/api` will have requests to `/api/list` trimmed to `/list`. If this value is `true`, the path will remain `/api/list`. Note: this is not applicable for Functions Components and is mutually exclusive with `rewrite`.").optional(), "rewrite": z.string().describe("An optional field that will rewrite the path of the component to be what is specified here. By default, the HTTP request path will be trimmed from the left when forwarded to the component. For example, a component with `path=/api` will have requests to `/api/list` trimmed to `/list`. If you specified the rewrite to be `/v1/`, requests to `/api/list` would be rewritten to `/v1/list`. Note: this is mutually exclusive with `preserve_path_prefix`.").optional() }).describe("The component to route to. Only one of `component` or `redirect` may be set.").optional(), "redirect": z.object({ "uri": z.string().describe("An optional URI path to redirect to. Note: if this is specified the whole URI of the original request will be overwritten to this value, irrespective of the original request URI being matched.").optional(), "authority": z.string().describe("The authority/host to redirect to. This can be a hostname or IP address. Note: use `port` to set the port.").optional(), "port": z.number().int().describe("The port to redirect to.").optional(), "scheme": z.string().describe("The scheme to redirect to. Supported values are `http` or `https`. Default: `https`.").optional(), "redirect_code": z.number().int().describe("The redirect code to use. Defaults to `302`. Supported values are 300, 301, 302, 303, 304, 307, 308.").optional() }).describe("The redirect configuration for the rule. Only one of `component` or `redirect` may be set.").optional() })).describe("Rules for configuring HTTP ingress for component routes, CORS, rewrites, and redirects.").optional()
}