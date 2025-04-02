import { z } from "zod";
export const toolName = `apps_update`;
export const toolDescription = `Update an App`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/apps/{id}`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "id"
    ],
    "cookie": [],
    "body": [
        "spec",
        "update_all_source_versions"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "id": z.string().describe("The ID of the app"), "spec": z.object({ "name": z.string().regex(new RegExp("^[a-z][a-z0-9-]{0,30}[a-z0-9]$")).min(2).max(32).describe("The name of the app. Must be unique across all apps in the same account."), "region": z.enum(["ams", "nyc", "fra", "sfo", "sgp", "blr", "tor", "lon", "syd"]).describe("The slug form of the geographical origin of the app. Default: `nearest available`").optional(), "domains": z.array(z.object({ "domain": z.string().regex(new RegExp("^((xn--)?[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\\.)+[a-zA-Z]{2,}\\.?$")).min(4).max(253).describe("The hostname for the domain"), "type": z.enum(["UNSPECIFIED", "DEFAULT", "PRIMARY", "ALIAS"]).describe("- DEFAULT: The default `.ondigitalocean.app` domain assigned to this app\n- PRIMARY: The primary domain for this app that is displayed as the default in the control panel, used in bindable environment variables, and any other places that reference an app's live URL. Only one domain may be set as primary.\n- ALIAS: A non-primary domain"), "wildcard": z.boolean().describe("Indicates whether the domain includes all sub-domains, in addition to the given domain").optional(), "zone": z.string().describe("Optional. If the domain uses DigitalOcean DNS and you would like App\nPlatform to automatically manage it for you, set this to the name of the\ndomain on your account.\n\nFor example, If the domain you are adding is `app.domain.com`, the zone\ncould be `domain.com`.").optional(), "minimum_tls_version": z.enum(["1.2", "1.3"]).describe("The minimum version of TLS a client application can use to access resources for the domain.  Must be one of the following values wrapped within quotations: `\"1.2\"` or `\"1.3\"`.").optional() })).describe("A set of hostnames where the application will be available.").optional(), "services": z.array(z.string()).describe("Workloads which expose publicly-accessible HTTP services.").optional(), "static_sites": z.array(z.string()).describe("Content which can be rendered to static web assets.").optional(), "jobs": z.array(z.string()).describe("Pre and post deployment workloads which do not expose publicly-accessible HTTP routes.").optional(), "workers": z.array(z.string()).describe("Workloads which do not expose publicly-accessible HTTP services.").optional(), "functions": z.array(z.object({ "cors": z.string().optional(), "name": z.string().regex(new RegExp("^[a-z][a-z0-9-]{0,30}[a-z0-9]$")).min(2).max(32).describe("The name. Must be unique across all components within the same app."), "source_dir": z.string().describe("An optional path to the working directory to use for the build. For Dockerfile builds, this will be used as the build context. Must be relative to the root of the repo.").optional(), "alerts": z.array(z.object({ "rule": z.enum(["UNSPECIFIED_RULE", "CPU_UTILIZATION", "MEM_UTILIZATION", "RESTART_COUNT", "DEPLOYMENT_FAILED", "DEPLOYMENT_LIVE", "DOMAIN_FAILED", "DOMAIN_LIVE", "FUNCTIONS_ACTIVATION_COUNT", "FUNCTIONS_AVERAGE_DURATION_MS", "FUNCTIONS_ERROR_RATE_PER_MINUTE", "FUNCTIONS_AVERAGE_WAIT_TIME_MS", "FUNCTIONS_ERROR_COUNT", "FUNCTIONS_GB_RATE_PER_SECOND"]), "disabled": z.boolean().describe("Is the alert disabled?").optional(), "operator": z.enum(["UNSPECIFIED_OPERATOR", "GREATER_THAN", "LESS_THAN"]), "value": z.number().describe("Threshold value for alert").optional(), "window": z.enum(["UNSPECIFIED_WINDOW", "FIVE_MINUTES", "TEN_MINUTES", "THIRTY_MINUTES", "ONE_HOUR"]) })).optional(), "envs": z.array(z.object({ "key": z.string().regex(new RegExp("^[_A-Za-z][_A-Za-z0-9]*$")).describe("The variable name"), "scope": z.enum(["UNSET", "RUN_TIME", "BUILD_TIME", "RUN_AND_BUILD_TIME"]).describe("- RUN_TIME: Made available only at run-time\n- BUILD_TIME: Made available only at build-time\n- RUN_AND_BUILD_TIME: Made available at both build and run-time"), "type": z.enum(["GENERAL", "SECRET"]).describe("- GENERAL: A plain-text environment variable\n- SECRET: A secret encrypted environment variable"), "value": z.string().describe("The value. If the type is `SECRET`, the value will be encrypted on first submission. On following submissions, the encrypted value should be used.").optional() })).describe("A list of environment variables made available to the component.").optional(), "git": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "repo_clone_url": z.string().describe("The clone URL of the repo. Example: `https://github.com/digitalocean/sample-golang.git`").optional() }).optional(), "github": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "deploy_on_push": z.boolean().describe("Whether to automatically deploy new commits made to the repo").optional(), "repo": z.string().describe("The name of the repo in the format owner/repo. Example: `digitalocean/sample-golang`").optional() }).optional(), "gitlab": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "deploy_on_push": z.boolean().describe("Whether to automatically deploy new commits made to the repo").optional(), "repo": z.string().describe("The name of the repo in the format owner/repo. Example: `digitalocean/sample-golang`").optional() }).optional(), "bitbucket": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "deploy_on_push": z.boolean().describe("Whether to automatically deploy new commits made to the repo").optional(), "repo": z.string().describe("The name of the repo in the format owner/repo. Example: `digitalocean/sample-golang`").optional() }).optional(), "log_destinations": z.array(z.object({ "name": z.string().regex(new RegExp("^[A-Za-z0-9()\\[\\]'\"][-A-Za-z0-9_. \\/()\\[\\]]{0,40}[A-Za-z0-9()\\[\\]'\"]$")).min(2).max(42), "papertrail": z.object({ "endpoint": z.string().describe("Papertrail syslog endpoint.") }).describe("Papertrail configuration.").optional(), "datadog": z.object({ "endpoint": z.string().describe("Datadog HTTP log intake endpoint.").optional(), "api_key": z.string().describe("Datadog API key.") }).describe("DataDog configuration.").optional(), "logtail": z.object({ "token": z.string().describe("Logtail token.").optional() }).describe("Logtail configuration.").optional(), "open_search": z.object({ "endpoint": z.string().describe("OpenSearch API Endpoint. Only HTTPS is supported. Format: https://<host>:<port>.\nCannot be specified if `cluster_name` is also specified.").optional(), "basic_auth": z.object({ "user": z.string().describe("Username to authenticate with. Only required when `endpoint` is set.\nDefaults to `doadmin` when `cluster_name` is set.").optional(), "password": z.any().describe("Password for user defined in User. Is required when `endpoint` is set.\nCannot be set if using a DigitalOcean DBaaS OpenSearch cluster.").optional() }).describe("Configure Username and/or Password for Basic authentication.").optional(), "index_name": z.string().describe("The index name to use for the logs. If not set, the default index name is \"logs\"."), "cluster_name": z.string().describe("The name of a DigitalOcean DBaaS OpenSearch cluster to use as a log forwarding destination.\nCannot be specified if `endpoint` is also specified.").optional() }).describe("OpenSearch configuration.").optional() })).describe("A list of configured log forwarding destinations.").optional() })).describe("Workloads which expose publicly-accessible HTTP services via Functions Components.").optional(), "databases": z.array(z.object({ "cluster_name": z.string().describe("The name of the underlying DigitalOcean DBaaS cluster. This is required for production databases. For dev databases, if cluster_name is not set, a new cluster will be provisioned.").optional(), "db_name": z.string().describe("The name of the MySQL or PostgreSQL database to configure.").optional(), "db_user": z.string().describe("The name of the MySQL or PostgreSQL user to configure.").optional(), "engine": z.enum(["UNSET", "MYSQL", "PG", "REDIS", "MONGODB", "KAFKA", "OPENSEARCH"]).describe("- MYSQL: MySQL\n- PG: PostgreSQL\n- REDIS: Redis\n- MONGODB: MongoDB\n- KAFKA: Kafka\n- OPENSEARCH: OpenSearch"), "name": z.string().regex(new RegExp("^[a-z][a-z0-9-]{0,30}[a-z0-9]$")).min(2).max(32).describe("The database's name. The name must be unique across all components within the same app and cannot use capital letters."), "production": z.boolean().describe("Whether this is a production or dev database.").optional(), "version": z.string().describe("The version of the database engine").optional() })).describe("Database instances which can provide persistence to workloads within the\napplication.").optional(), "ingress": z.object({ "rules": z.array(z.object({ "match": z.object({ "path": z.object({ "prefix": z.string().max(256).describe("Prefix-based match. For example, `/api` will match `/api`, `/api/`, and any nested paths such as `/api/v1/endpoint`.") }).describe("The path to match on.") }).describe("The match configuration for the rule.").optional(), "cors": z.object({ "allow_origins": z.array(z.object({ "exact": z.string().min(1).max(256).describe("Exact string match. Only 1 of `exact`, `prefix`, or `regex` must be set.").optional(), "regex": z.string().min(1).max(256).describe("RE2 style regex-based match. Only 1 of `exact`, `prefix`, or `regex` must be set. For more information about RE2 syntax, see: https://github.com/google/re2/wiki/Syntax").optional() })).describe("The set of allowed CORS origins.").optional(), "allow_methods": z.array(z.string()).describe("The set of allowed HTTP methods. This configures the `Access-Control-Allow-Methods` header.").optional(), "allow_headers": z.array(z.string()).describe("The set of allowed HTTP request headers. This configures the `Access-Control-Allow-Headers` header.").optional(), "expose_headers": z.array(z.string()).describe("The set of HTTP response headers that browsers are allowed to access. This configures the `Access-Control-Expose-Headers` header.").optional(), "max_age": z.string().describe("An optional duration specifying how long browsers can cache the results of a preflight request. This configures the `Access-Control-Max-Age` header.").optional(), "allow_credentials": z.boolean().describe("Whether browsers should expose the response to the client-side JavaScript code when the request’s credentials mode is include. This configures the `Access-Control-Allow-Credentials` header.").optional() }).optional(), "component": z.object({ "name": z.string().describe("The name of the component to route to."), "preserve_path_prefix": z.string().describe("An optional flag to preserve the path that is forwarded to the backend service. By default, the HTTP request path will be trimmed from the left when forwarded to the component. For example, a component with `path=/api` will have requests to `/api/list` trimmed to `/list`. If this value is `true`, the path will remain `/api/list`. Note: this is not applicable for Functions Components and is mutually exclusive with `rewrite`.").optional(), "rewrite": z.string().describe("An optional field that will rewrite the path of the component to be what is specified here. By default, the HTTP request path will be trimmed from the left when forwarded to the component. For example, a component with `path=/api` will have requests to `/api/list` trimmed to `/list`. If you specified the rewrite to be `/v1/`, requests to `/api/list` would be rewritten to `/v1/list`. Note: this is mutually exclusive with `preserve_path_prefix`.").optional() }).describe("The component to route to. Only one of `component` or `redirect` may be set.").optional(), "redirect": z.object({ "uri": z.string().describe("An optional URI path to redirect to. Note: if this is specified the whole URI of the original request will be overwritten to this value, irrespective of the original request URI being matched.").optional(), "authority": z.string().describe("The authority/host to redirect to. This can be a hostname or IP address. Note: use `port` to set the port.").optional(), "port": z.number().int().describe("The port to redirect to.").optional(), "scheme": z.string().describe("The scheme to redirect to. Supported values are `http` or `https`. Default: `https`.").optional(), "redirect_code": z.number().int().describe("The redirect code to use. Defaults to `302`. Supported values are 300, 301, 302, 303, 304, 307, 308.").optional() }).describe("The redirect configuration for the rule. Only one of `component` or `redirect` may be set.").optional() })).describe("Rules for configuring HTTP ingress for component routes, CORS, rewrites, and redirects.").optional() }).describe("Specification for app ingress configurations.").optional(), "egress": z.object({ "type": z.enum(["AUTOASSIGN", "DEDICATED_IP"]) }).describe("Specification for app egress configurations.").optional(), "maintenance": z.object({ "enabled": z.boolean().describe("Indicates whether maintenance mode should be enabled for the app.").optional(), "archive": z.boolean().describe("Indicates whether the app should be archived. Setting this to true implies that enabled is set to true.").optional(), "offline_page_url": z.string().describe("A custom offline page to display when maintenance mode is enabled or the app is archived.").optional() }).describe("Specification to configure maintenance settings for the app, such as maintenance mode and archiving the app.").optional() }).describe("The desired configuration of an application."), "update_all_source_versions": z.boolean().describe("Whether or not to update the source versions (for example fetching a new commit or image digest) of all components. By default (when this is false) only newly added sources will be updated to avoid changes like updating the scale of a component from also updating the respective code.") }).shape;
