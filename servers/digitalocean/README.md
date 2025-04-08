# @open-mcp/digitalocean

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/digitalocean add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/digitalocean add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/digitalocean add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "digitalocean": {
      "command": "npx",
      "args": ["-y", "@open-mcp/digitalocean"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/digitalocean
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/digitalocean`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### oneclicks_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "type": z.enum(["droplet","kubernetes"]).describe("Restrict results to a certain type of 1-Click.").optional()
}
```

### oneclicks_install_kubernetes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "addon_slugs": z.array(z.string()).describe("An array of 1-Click Application slugs to be installed to the Kubernetes cluster."),
  "cluster_uuid": z.string().describe("A unique ID for the Kubernetes cluster to which the 1-Click Applications will be installed.")
}
```

### account_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### sshkeys_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### sshkeys_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.number().int().describe("A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.").readonly().optional(),
  "fingerprint": z.string().describe("A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account.").readonly().optional(),
  "public_key": z.string().describe("The entire public key string that was uploaded. Embedded into the root user's \`authorized_keys\` file if you include this key during Droplet creation."),
  "name": z.string().describe("A human-readable display name for this key, used to easily identify the SSH keys when they are displayed.")
}
```

### sshkeys_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "ssh_key_identifier": z.union([z.number().int().describe("A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.").readonly(), z.string().describe("A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account.").readonly()]).describe("Either the ID or the fingerprint of an existing SSH key.")
}
```

### sshkeys_update

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "ssh_key_identifier": z.union([z.number().int().describe("A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.").readonly(), z.string().describe("A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account.").readonly()]).describe("Either the ID or the fingerprint of an existing SSH key."),
  "name": z.string().describe("A human-readable display name for this key, used to easily identify the SSH keys when they are displayed.").optional()
}
```

### sshkeys_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "ssh_key_identifier": z.union([z.number().int().describe("A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.").readonly(), z.string().describe("A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account.").readonly()]).describe("Either the ID or the fingerprint of an existing SSH key.")
}
```

### actions_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### actions_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "action_id": z.number().int().gte(1).describe("A unique numeric ID that can be used to identify and reference an action.")
}
```

### apps_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "with_projects": z.boolean().describe("Whether the project_id of listed apps should be fetched and included.").optional()
}
```

### apps_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "spec": z.object({ "name": z.string().regex(new RegExp("^[a-z][a-z0-9-]{0,30}[a-z0-9]$")).min(2).max(32).describe("The name of the app. Must be unique across all apps in the same account."), "region": z.enum(["ams","nyc","fra","sfo","sgp","blr","tor","lon","syd"]).describe("The slug form of the geographical origin of the app. Default: \`nearest available\`").optional(), "domains": z.array(z.object({ "domain": z.string().regex(new RegExp("^((xn--)?[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\\.)+[a-zA-Z]{2,}\\.?$")).min(4).max(253).describe("The hostname for the domain"), "type": z.enum(["UNSPECIFIED","DEFAULT","PRIMARY","ALIAS"]).describe("- DEFAULT: The default \`.ondigitalocean.app\` domain assigned to this app\n- PRIMARY: The primary domain for this app that is displayed as the default in the control panel, used in bindable environment variables, and any other places that reference an app's live URL. Only one domain may be set as primary.\n- ALIAS: A non-primary domain"), "wildcard": z.boolean().describe("Indicates whether the domain includes all sub-domains, in addition to the given domain").optional(), "zone": z.string().describe("Optional. If the domain uses DigitalOcean DNS and you would like App\nPlatform to automatically manage it for you, set this to the name of the\ndomain on your account.\n\nFor example, If the domain you are adding is \`app.domain.com\`, the zone\ncould be \`domain.com\`.").optional(), "minimum_tls_version": z.enum(["1.2","1.3"]).describe("The minimum version of TLS a client application can use to access resources for the domain.  Must be one of the following values wrapped within quotations: \`\"1.2\"\` or \`\"1.3\"\`.").optional() })).describe("A set of hostnames where the application will be available.").optional(), "services": z.array(z.string()).describe("Workloads which expose publicly-accessible HTTP services.").optional(), "static_sites": z.array(z.string()).describe("Content which can be rendered to static web assets.").optional(), "jobs": z.array(z.string()).describe("Pre and post deployment workloads which do not expose publicly-accessible HTTP routes.").optional(), "workers": z.array(z.string()).describe("Workloads which do not expose publicly-accessible HTTP services.").optional(), "functions": z.array(z.object({ "cors": z.string().optional(), "name": z.string().regex(new RegExp("^[a-z][a-z0-9-]{0,30}[a-z0-9]$")).min(2).max(32).describe("The name. Must be unique across all components within the same app."), "source_dir": z.string().describe("An optional path to the working directory to use for the build. For Dockerfile builds, this will be used as the build context. Must be relative to the root of the repo.").optional(), "alerts": z.array(z.object({ "rule": z.enum(["UNSPECIFIED_RULE","CPU_UTILIZATION","MEM_UTILIZATION","RESTART_COUNT","DEPLOYMENT_FAILED","DEPLOYMENT_LIVE","DOMAIN_FAILED","DOMAIN_LIVE","FUNCTIONS_ACTIVATION_COUNT","FUNCTIONS_AVERAGE_DURATION_MS","FUNCTIONS_ERROR_RATE_PER_MINUTE","FUNCTIONS_AVERAGE_WAIT_TIME_MS","FUNCTIONS_ERROR_COUNT","FUNCTIONS_GB_RATE_PER_SECOND"]), "disabled": z.boolean().describe("Is the alert disabled?").optional(), "operator": z.enum(["UNSPECIFIED_OPERATOR","GREATER_THAN","LESS_THAN"]), "value": z.number().describe("Threshold value for alert").optional(), "window": z.enum(["UNSPECIFIED_WINDOW","FIVE_MINUTES","TEN_MINUTES","THIRTY_MINUTES","ONE_HOUR"]) })).optional(), "envs": z.array(z.object({ "key": z.string().regex(new RegExp("^[_A-Za-z][_A-Za-z0-9]*$")).describe("The variable name"), "scope": z.enum(["UNSET","RUN_TIME","BUILD_TIME","RUN_AND_BUILD_TIME"]).describe("- RUN_TIME: Made available only at run-time\n- BUILD_TIME: Made available only at build-time\n- RUN_AND_BUILD_TIME: Made available at both build and run-time"), "type": z.enum(["GENERAL","SECRET"]).describe("- GENERAL: A plain-text environment variable\n- SECRET: A secret encrypted environment variable"), "value": z.string().describe("The value. If the type is \`SECRET\`, the value will be encrypted on first submission. On following submissions, the encrypted value should be used.").optional() })).describe("A list of environment variables made available to the component.").optional(), "git": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "repo_clone_url": z.string().describe("The clone URL of the repo. Example: \`https://github.com/digitalocean/sample-golang.git\`").optional() }).optional(), "github": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "deploy_on_push": z.boolean().describe("Whether to automatically deploy new commits made to the repo").optional(), "repo": z.string().describe("The name of the repo in the format owner/repo. Example: \`digitalocean/sample-golang\`").optional() }).optional(), "gitlab": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "deploy_on_push": z.boolean().describe("Whether to automatically deploy new commits made to the repo").optional(), "repo": z.string().describe("The name of the repo in the format owner/repo. Example: \`digitalocean/sample-golang\`").optional() }).optional(), "bitbucket": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "deploy_on_push": z.boolean().describe("Whether to automatically deploy new commits made to the repo").optional(), "repo": z.string().describe("The name of the repo in the format owner/repo. Example: \`digitalocean/sample-golang\`").optional() }).optional(), "log_destinations": z.array(z.object({ "name": z.string().regex(new RegExp("^[A-Za-z0-9()\\[\\]'\"][-A-Za-z0-9_. \\/()\\[\\]]{0,40}[A-Za-z0-9()\\[\\]'\"]$")).min(2).max(42), "papertrail": z.object({ "endpoint": z.string().describe("Papertrail syslog endpoint.") }).describe("Papertrail configuration.").optional(), "datadog": z.object({ "endpoint": z.string().describe("Datadog HTTP log intake endpoint.").optional(), "api_key": z.string().describe("Datadog API key.") }).describe("DataDog configuration.").optional(), "logtail": z.object({ "token": z.string().describe("Logtail token.").optional() }).describe("Logtail configuration.").optional(), "open_search": z.object({ "endpoint": z.string().describe("OpenSearch API Endpoint. Only HTTPS is supported. Format: https://<host>:<port>.\nCannot be specified if \`cluster_name\` is also specified.").optional(), "basic_auth": z.object({ "user": z.string().describe("Username to authenticate with. Only required when \`endpoint\` is set.\nDefaults to \`doadmin\` when \`cluster_name\` is set.").optional(), "password": z.any().describe("Password for user defined in User. Is required when \`endpoint\` is set.\nCannot be set if using a DigitalOcean DBaaS OpenSearch cluster.").optional() }).describe("Configure Username and/or Password for Basic authentication.").optional(), "index_name": z.string().describe("The index name to use for the logs. If not set, the default index name is \"logs\"."), "cluster_name": z.string().describe("The name of a DigitalOcean DBaaS OpenSearch cluster to use as a log forwarding destination.\nCannot be specified if \`endpoint\` is also specified.").optional() }).describe("OpenSearch configuration.").optional() })).describe("A list of configured log forwarding destinations.").optional() })).describe("Workloads which expose publicly-accessible HTTP services via Functions Components.").optional(), "databases": z.array(z.object({ "cluster_name": z.string().describe("The name of the underlying DigitalOcean DBaaS cluster. This is required for production databases. For dev databases, if cluster_name is not set, a new cluster will be provisioned.").optional(), "db_name": z.string().describe("The name of the MySQL or PostgreSQL database to configure.").optional(), "db_user": z.string().describe("The name of the MySQL or PostgreSQL user to configure.").optional(), "engine": z.enum(["UNSET","MYSQL","PG","REDIS","MONGODB","KAFKA","OPENSEARCH"]).describe("- MYSQL: MySQL\n- PG: PostgreSQL\n- REDIS: Redis\n- MONGODB: MongoDB\n- KAFKA: Kafka\n- OPENSEARCH: OpenSearch"), "name": z.string().regex(new RegExp("^[a-z][a-z0-9-]{0,30}[a-z0-9]$")).min(2).max(32).describe("The database's name. The name must be unique across all components within the same app and cannot use capital letters."), "production": z.boolean().describe("Whether this is a production or dev database.").optional(), "version": z.string().describe("The version of the database engine").optional() })).describe("Database instances which can provide persistence to workloads within the\napplication.").optional(), "ingress": z.object({ "rules": z.array(z.object({ "match": z.object({ "path": z.object({ "prefix": z.string().max(256).describe("Prefix-based match. For example, \`/api\` will match \`/api\`, \`/api/\`, and any nested paths such as \`/api/v1/endpoint\`.") }).describe("The path to match on.") }).describe("The match configuration for the rule.").optional(), "cors": z.object({ "allow_origins": z.array(z.object({ "exact": z.string().min(1).max(256).describe("Exact string match. Only 1 of \`exact\`, \`prefix\`, or \`regex\` must be set.").optional(), "regex": z.string().min(1).max(256).describe("RE2 style regex-based match. Only 1 of \`exact\`, \`prefix\`, or \`regex\` must be set. For more information about RE2 syntax, see: https://github.com/google/re2/wiki/Syntax").optional() })).describe("The set of allowed CORS origins.").optional(), "allow_methods": z.array(z.string()).describe("The set of allowed HTTP methods. This configures the \`Access-Control-Allow-Methods\` header.").optional(), "allow_headers": z.array(z.string()).describe("The set of allowed HTTP request headers. This configures the \`Access-Control-Allow-Headers\` header.").optional(), "expose_headers": z.array(z.string()).describe("The set of HTTP response headers that browsers are allowed to access. This configures the \`Access-Control-Expose-Headers\` header.").optional(), "max_age": z.string().describe("An optional duration specifying how long browsers can cache the results of a preflight request. This configures the \`Access-Control-Max-Age\` header.").optional(), "allow_credentials": z.boolean().describe("Whether browsers should expose the response to the client-side JavaScript code when the request’s credentials mode is include. This configures the \`Access-Control-Allow-Credentials\` header.").optional() }).optional(), "component": z.object({ "name": z.string().describe("The name of the component to route to."), "preserve_path_prefix": z.string().describe("An optional flag to preserve the path that is forwarded to the backend service. By default, the HTTP request path will be trimmed from the left when forwarded to the component. For example, a component with \`path=/api\` will have requests to \`/api/list\` trimmed to \`/list\`. If this value is \`true\`, the path will remain \`/api/list\`. Note: this is not applicable for Functions Components and is mutually exclusive with \`rewrite\`.").optional(), "rewrite": z.string().describe("An optional field that will rewrite the path of the component to be what is specified here. By default, the HTTP request path will be trimmed from the left when forwarded to the component. For example, a component with \`path=/api\` will have requests to \`/api/list\` trimmed to \`/list\`. If you specified the rewrite to be \`/v1/\`, requests to \`/api/list\` would be rewritten to \`/v1/list\`. Note: this is mutually exclusive with \`preserve_path_prefix\`.").optional() }).describe("The component to route to. Only one of \`component\` or \`redirect\` may be set.").optional(), "redirect": z.object({ "uri": z.string().describe("An optional URI path to redirect to. Note: if this is specified the whole URI of the original request will be overwritten to this value, irrespective of the original request URI being matched.").optional(), "authority": z.string().describe("The authority/host to redirect to. This can be a hostname or IP address. Note: use \`port\` to set the port.").optional(), "port": z.number().int().describe("The port to redirect to.").optional(), "scheme": z.string().describe("The scheme to redirect to. Supported values are \`http\` or \`https\`. Default: \`https\`.").optional(), "redirect_code": z.number().int().describe("The redirect code to use. Defaults to \`302\`. Supported values are 300, 301, 302, 303, 304, 307, 308.").optional() }).describe("The redirect configuration for the rule. Only one of \`component\` or \`redirect\` may be set.").optional() })).describe("Rules for configuring HTTP ingress for component routes, CORS, rewrites, and redirects.").optional() }).describe("Specification for app ingress configurations.").optional(), "egress": z.object({ "type": z.enum(["AUTOASSIGN","DEDICATED_IP"]) }).describe("Specification for app egress configurations.").optional(), "maintenance": z.object({ "enabled": z.boolean().describe("Indicates whether maintenance mode should be enabled for the app.").optional(), "archive": z.boolean().describe("Indicates whether the app should be archived. Setting this to true implies that enabled is set to true.").optional(), "offline_page_url": z.string().describe("A custom offline page to display when maintenance mode is enabled or the app is archived.").optional() }).describe("Specification to configure maintenance settings for the app, such as maintenance mode and archiving the app.").optional() }).describe("The desired configuration of an application."),
  "project_id": z.string().describe("The ID of the project the app should be assigned to. If omitted, it will be assigned to your default project.").optional(),
  "Accept": z.enum(["application/json","application/yaml"]).describe("The content-type that should be used by the response. By default, the response will be \`application/json\`. \`application/yaml\` is also supported.").optional(),
  "Content-Type": z.enum(["application/json","application/yaml"]).describe("The content-type used for the request. By default, the requests are assumed to use \`application/json\`. \`application/yaml\` is also supported.").optional()
}
```

### apps_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the app")
}
```

### apps_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the app"),
  "name": z.string().describe("The name of the app to retrieve.").optional()
}
```

### apps_update

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string().describe("The ID of the app"),
  "spec": z.object({ "name": z.string().regex(new RegExp("^[a-z][a-z0-9-]{0,30}[a-z0-9]$")).min(2).max(32).describe("The name of the app. Must be unique across all apps in the same account."), "region": z.enum(["ams","nyc","fra","sfo","sgp","blr","tor","lon","syd"]).describe("The slug form of the geographical origin of the app. Default: \`nearest available\`").optional(), "domains": z.array(z.object({ "domain": z.string().regex(new RegExp("^((xn--)?[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\\.)+[a-zA-Z]{2,}\\.?$")).min(4).max(253).describe("The hostname for the domain"), "type": z.enum(["UNSPECIFIED","DEFAULT","PRIMARY","ALIAS"]).describe("- DEFAULT: The default \`.ondigitalocean.app\` domain assigned to this app\n- PRIMARY: The primary domain for this app that is displayed as the default in the control panel, used in bindable environment variables, and any other places that reference an app's live URL. Only one domain may be set as primary.\n- ALIAS: A non-primary domain"), "wildcard": z.boolean().describe("Indicates whether the domain includes all sub-domains, in addition to the given domain").optional(), "zone": z.string().describe("Optional. If the domain uses DigitalOcean DNS and you would like App\nPlatform to automatically manage it for you, set this to the name of the\ndomain on your account.\n\nFor example, If the domain you are adding is \`app.domain.com\`, the zone\ncould be \`domain.com\`.").optional(), "minimum_tls_version": z.enum(["1.2","1.3"]).describe("The minimum version of TLS a client application can use to access resources for the domain.  Must be one of the following values wrapped within quotations: \`\"1.2\"\` or \`\"1.3\"\`.").optional() })).describe("A set of hostnames where the application will be available.").optional(), "services": z.array(z.string()).describe("Workloads which expose publicly-accessible HTTP services.").optional(), "static_sites": z.array(z.string()).describe("Content which can be rendered to static web assets.").optional(), "jobs": z.array(z.string()).describe("Pre and post deployment workloads which do not expose publicly-accessible HTTP routes.").optional(), "workers": z.array(z.string()).describe("Workloads which do not expose publicly-accessible HTTP services.").optional(), "functions": z.array(z.object({ "cors": z.string().optional(), "name": z.string().regex(new RegExp("^[a-z][a-z0-9-]{0,30}[a-z0-9]$")).min(2).max(32).describe("The name. Must be unique across all components within the same app."), "source_dir": z.string().describe("An optional path to the working directory to use for the build. For Dockerfile builds, this will be used as the build context. Must be relative to the root of the repo.").optional(), "alerts": z.array(z.object({ "rule": z.enum(["UNSPECIFIED_RULE","CPU_UTILIZATION","MEM_UTILIZATION","RESTART_COUNT","DEPLOYMENT_FAILED","DEPLOYMENT_LIVE","DOMAIN_FAILED","DOMAIN_LIVE","FUNCTIONS_ACTIVATION_COUNT","FUNCTIONS_AVERAGE_DURATION_MS","FUNCTIONS_ERROR_RATE_PER_MINUTE","FUNCTIONS_AVERAGE_WAIT_TIME_MS","FUNCTIONS_ERROR_COUNT","FUNCTIONS_GB_RATE_PER_SECOND"]), "disabled": z.boolean().describe("Is the alert disabled?").optional(), "operator": z.enum(["UNSPECIFIED_OPERATOR","GREATER_THAN","LESS_THAN"]), "value": z.number().describe("Threshold value for alert").optional(), "window": z.enum(["UNSPECIFIED_WINDOW","FIVE_MINUTES","TEN_MINUTES","THIRTY_MINUTES","ONE_HOUR"]) })).optional(), "envs": z.array(z.object({ "key": z.string().regex(new RegExp("^[_A-Za-z][_A-Za-z0-9]*$")).describe("The variable name"), "scope": z.enum(["UNSET","RUN_TIME","BUILD_TIME","RUN_AND_BUILD_TIME"]).describe("- RUN_TIME: Made available only at run-time\n- BUILD_TIME: Made available only at build-time\n- RUN_AND_BUILD_TIME: Made available at both build and run-time"), "type": z.enum(["GENERAL","SECRET"]).describe("- GENERAL: A plain-text environment variable\n- SECRET: A secret encrypted environment variable"), "value": z.string().describe("The value. If the type is \`SECRET\`, the value will be encrypted on first submission. On following submissions, the encrypted value should be used.").optional() })).describe("A list of environment variables made available to the component.").optional(), "git": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "repo_clone_url": z.string().describe("The clone URL of the repo. Example: \`https://github.com/digitalocean/sample-golang.git\`").optional() }).optional(), "github": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "deploy_on_push": z.boolean().describe("Whether to automatically deploy new commits made to the repo").optional(), "repo": z.string().describe("The name of the repo in the format owner/repo. Example: \`digitalocean/sample-golang\`").optional() }).optional(), "gitlab": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "deploy_on_push": z.boolean().describe("Whether to automatically deploy new commits made to the repo").optional(), "repo": z.string().describe("The name of the repo in the format owner/repo. Example: \`digitalocean/sample-golang\`").optional() }).optional(), "bitbucket": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "deploy_on_push": z.boolean().describe("Whether to automatically deploy new commits made to the repo").optional(), "repo": z.string().describe("The name of the repo in the format owner/repo. Example: \`digitalocean/sample-golang\`").optional() }).optional(), "log_destinations": z.array(z.object({ "name": z.string().regex(new RegExp("^[A-Za-z0-9()\\[\\]'\"][-A-Za-z0-9_. \\/()\\[\\]]{0,40}[A-Za-z0-9()\\[\\]'\"]$")).min(2).max(42), "papertrail": z.object({ "endpoint": z.string().describe("Papertrail syslog endpoint.") }).describe("Papertrail configuration.").optional(), "datadog": z.object({ "endpoint": z.string().describe("Datadog HTTP log intake endpoint.").optional(), "api_key": z.string().describe("Datadog API key.") }).describe("DataDog configuration.").optional(), "logtail": z.object({ "token": z.string().describe("Logtail token.").optional() }).describe("Logtail configuration.").optional(), "open_search": z.object({ "endpoint": z.string().describe("OpenSearch API Endpoint. Only HTTPS is supported. Format: https://<host>:<port>.\nCannot be specified if \`cluster_name\` is also specified.").optional(), "basic_auth": z.object({ "user": z.string().describe("Username to authenticate with. Only required when \`endpoint\` is set.\nDefaults to \`doadmin\` when \`cluster_name\` is set.").optional(), "password": z.any().describe("Password for user defined in User. Is required when \`endpoint\` is set.\nCannot be set if using a DigitalOcean DBaaS OpenSearch cluster.").optional() }).describe("Configure Username and/or Password for Basic authentication.").optional(), "index_name": z.string().describe("The index name to use for the logs. If not set, the default index name is \"logs\"."), "cluster_name": z.string().describe("The name of a DigitalOcean DBaaS OpenSearch cluster to use as a log forwarding destination.\nCannot be specified if \`endpoint\` is also specified.").optional() }).describe("OpenSearch configuration.").optional() })).describe("A list of configured log forwarding destinations.").optional() })).describe("Workloads which expose publicly-accessible HTTP services via Functions Components.").optional(), "databases": z.array(z.object({ "cluster_name": z.string().describe("The name of the underlying DigitalOcean DBaaS cluster. This is required for production databases. For dev databases, if cluster_name is not set, a new cluster will be provisioned.").optional(), "db_name": z.string().describe("The name of the MySQL or PostgreSQL database to configure.").optional(), "db_user": z.string().describe("The name of the MySQL or PostgreSQL user to configure.").optional(), "engine": z.enum(["UNSET","MYSQL","PG","REDIS","MONGODB","KAFKA","OPENSEARCH"]).describe("- MYSQL: MySQL\n- PG: PostgreSQL\n- REDIS: Redis\n- MONGODB: MongoDB\n- KAFKA: Kafka\n- OPENSEARCH: OpenSearch"), "name": z.string().regex(new RegExp("^[a-z][a-z0-9-]{0,30}[a-z0-9]$")).min(2).max(32).describe("The database's name. The name must be unique across all components within the same app and cannot use capital letters."), "production": z.boolean().describe("Whether this is a production or dev database.").optional(), "version": z.string().describe("The version of the database engine").optional() })).describe("Database instances which can provide persistence to workloads within the\napplication.").optional(), "ingress": z.object({ "rules": z.array(z.object({ "match": z.object({ "path": z.object({ "prefix": z.string().max(256).describe("Prefix-based match. For example, \`/api\` will match \`/api\`, \`/api/\`, and any nested paths such as \`/api/v1/endpoint\`.") }).describe("The path to match on.") }).describe("The match configuration for the rule.").optional(), "cors": z.object({ "allow_origins": z.array(z.object({ "exact": z.string().min(1).max(256).describe("Exact string match. Only 1 of \`exact\`, \`prefix\`, or \`regex\` must be set.").optional(), "regex": z.string().min(1).max(256).describe("RE2 style regex-based match. Only 1 of \`exact\`, \`prefix\`, or \`regex\` must be set. For more information about RE2 syntax, see: https://github.com/google/re2/wiki/Syntax").optional() })).describe("The set of allowed CORS origins.").optional(), "allow_methods": z.array(z.string()).describe("The set of allowed HTTP methods. This configures the \`Access-Control-Allow-Methods\` header.").optional(), "allow_headers": z.array(z.string()).describe("The set of allowed HTTP request headers. This configures the \`Access-Control-Allow-Headers\` header.").optional(), "expose_headers": z.array(z.string()).describe("The set of HTTP response headers that browsers are allowed to access. This configures the \`Access-Control-Expose-Headers\` header.").optional(), "max_age": z.string().describe("An optional duration specifying how long browsers can cache the results of a preflight request. This configures the \`Access-Control-Max-Age\` header.").optional(), "allow_credentials": z.boolean().describe("Whether browsers should expose the response to the client-side JavaScript code when the request’s credentials mode is include. This configures the \`Access-Control-Allow-Credentials\` header.").optional() }).optional(), "component": z.object({ "name": z.string().describe("The name of the component to route to."), "preserve_path_prefix": z.string().describe("An optional flag to preserve the path that is forwarded to the backend service. By default, the HTTP request path will be trimmed from the left when forwarded to the component. For example, a component with \`path=/api\` will have requests to \`/api/list\` trimmed to \`/list\`. If this value is \`true\`, the path will remain \`/api/list\`. Note: this is not applicable for Functions Components and is mutually exclusive with \`rewrite\`.").optional(), "rewrite": z.string().describe("An optional field that will rewrite the path of the component to be what is specified here. By default, the HTTP request path will be trimmed from the left when forwarded to the component. For example, a component with \`path=/api\` will have requests to \`/api/list\` trimmed to \`/list\`. If you specified the rewrite to be \`/v1/\`, requests to \`/api/list\` would be rewritten to \`/v1/list\`. Note: this is mutually exclusive with \`preserve_path_prefix\`.").optional() }).describe("The component to route to. Only one of \`component\` or \`redirect\` may be set.").optional(), "redirect": z.object({ "uri": z.string().describe("An optional URI path to redirect to. Note: if this is specified the whole URI of the original request will be overwritten to this value, irrespective of the original request URI being matched.").optional(), "authority": z.string().describe("The authority/host to redirect to. This can be a hostname or IP address. Note: use \`port\` to set the port.").optional(), "port": z.number().int().describe("The port to redirect to.").optional(), "scheme": z.string().describe("The scheme to redirect to. Supported values are \`http\` or \`https\`. Default: \`https\`.").optional(), "redirect_code": z.number().int().describe("The redirect code to use. Defaults to \`302\`. Supported values are 300, 301, 302, 303, 304, 307, 308.").optional() }).describe("The redirect configuration for the rule. Only one of \`component\` or \`redirect\` may be set.").optional() })).describe("Rules for configuring HTTP ingress for component routes, CORS, rewrites, and redirects.").optional() }).describe("Specification for app ingress configurations.").optional(), "egress": z.object({ "type": z.enum(["AUTOASSIGN","DEDICATED_IP"]) }).describe("Specification for app egress configurations.").optional(), "maintenance": z.object({ "enabled": z.boolean().describe("Indicates whether maintenance mode should be enabled for the app.").optional(), "archive": z.boolean().describe("Indicates whether the app should be archived. Setting this to true implies that enabled is set to true.").optional(), "offline_page_url": z.string().describe("A custom offline page to display when maintenance mode is enabled or the app is archived.").optional() }).describe("Specification to configure maintenance settings for the app, such as maintenance mode and archiving the app.").optional() }).describe("The desired configuration of an application."),
  "update_all_source_versions": z.boolean().describe("Whether or not to update the source versions (for example fetching a new commit or image digest) of all components. By default (when this is false) only newly added sources will be updated to avoid changes like updating the scale of a component from also updating the respective code.").optional()
}
```

### apps_restart

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "components": z.array(z.string()).optional()
}
```

### apps_get_logs_active_deployment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "component_name": z.string().describe("An optional component name. If set, logs will be limited to this component only."),
  "follow": z.boolean().describe("Whether the logs should follow live updates.").optional(),
  "type": z.enum(["UNSPECIFIED","BUILD","DEPLOY","RUN","RUN_RESTARTED"]).describe("The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime"),
  "pod_connection_timeout": z.string().describe("An optional time duration to wait if the underlying component instance is not immediately available. Default: \`3m\`.").optional()
}
```

### apps_get_exec_active_deployment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "component_name": z.string().describe("An optional component name. If set, logs will be limited to this component only.")
}
```

### apps_list_deployments

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional()
}
```

### apps_create_deployment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "force_build": z.boolean().optional()
}
```

### apps_get_deployment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "deployment_id": z.string().describe("The deployment ID")
}
```

### apps_cancel_deployment

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "deployment_id": z.string().describe("The deployment ID")
}
```

### apps_get_logs

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "deployment_id": z.string().describe("The deployment ID"),
  "component_name": z.string().describe("An optional component name. If set, logs will be limited to this component only."),
  "follow": z.boolean().describe("Whether the logs should follow live updates.").optional(),
  "type": z.enum(["UNSPECIFIED","BUILD","DEPLOY","RUN","RUN_RESTARTED"]).describe("The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime"),
  "pod_connection_timeout": z.string().describe("An optional time duration to wait if the underlying component instance is not immediately available. Default: \`3m\`.").optional()
}
```

### apps_get_logs_aggregate

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "deployment_id": z.string().describe("The deployment ID"),
  "follow": z.boolean().describe("Whether the logs should follow live updates.").optional(),
  "type": z.enum(["UNSPECIFIED","BUILD","DEPLOY","RUN","RUN_RESTARTED"]).describe("The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime"),
  "pod_connection_timeout": z.string().describe("An optional time duration to wait if the underlying component instance is not immediately available. Default: \`3m\`.").optional()
}
```

### apps_get_exec

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "deployment_id": z.string().describe("The deployment ID"),
  "component_name": z.string().describe("An optional component name. If set, logs will be limited to this component only.")
}
```

### apps_get_logs_active_deployment_aggregate

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "follow": z.boolean().describe("Whether the logs should follow live updates.").optional(),
  "type": z.enum(["UNSPECIFIED","BUILD","DEPLOY","RUN","RUN_RESTARTED"]).describe("The type of logs to retrieve\n- BUILD: Build-time logs\n- DEPLOY: Deploy-time logs\n- RUN: Live run-time logs\n- RUN_RESTARTED: Logs of crashed/restarted instances during runtime"),
  "pod_connection_timeout": z.string().describe("An optional time duration to wait if the underlying component instance is not immediately available. Default: \`3m\`.").optional()
}
```

### apps_list_instancesizes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### apps_get_instancesize

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "slug": z.string().describe("The slug of the instance size")
}
```

### apps_list_regions

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### apps_validate_appspec

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "spec": z.object({ "name": z.string().regex(new RegExp("^[a-z][a-z0-9-]{0,30}[a-z0-9]$")).min(2).max(32).describe("The name of the app. Must be unique across all apps in the same account."), "region": z.enum(["ams","nyc","fra","sfo","sgp","blr","tor","lon","syd"]).describe("The slug form of the geographical origin of the app. Default: \`nearest available\`").optional(), "domains": z.array(z.object({ "domain": z.string().regex(new RegExp("^((xn--)?[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\\.)+[a-zA-Z]{2,}\\.?$")).min(4).max(253).describe("The hostname for the domain"), "type": z.enum(["UNSPECIFIED","DEFAULT","PRIMARY","ALIAS"]).describe("- DEFAULT: The default \`.ondigitalocean.app\` domain assigned to this app\n- PRIMARY: The primary domain for this app that is displayed as the default in the control panel, used in bindable environment variables, and any other places that reference an app's live URL. Only one domain may be set as primary.\n- ALIAS: A non-primary domain"), "wildcard": z.boolean().describe("Indicates whether the domain includes all sub-domains, in addition to the given domain").optional(), "zone": z.string().describe("Optional. If the domain uses DigitalOcean DNS and you would like App\nPlatform to automatically manage it for you, set this to the name of the\ndomain on your account.\n\nFor example, If the domain you are adding is \`app.domain.com\`, the zone\ncould be \`domain.com\`.").optional(), "minimum_tls_version": z.enum(["1.2","1.3"]).describe("The minimum version of TLS a client application can use to access resources for the domain.  Must be one of the following values wrapped within quotations: \`\"1.2\"\` or \`\"1.3\"\`.").optional() })).describe("A set of hostnames where the application will be available.").optional(), "services": z.array(z.string()).describe("Workloads which expose publicly-accessible HTTP services.").optional(), "static_sites": z.array(z.string()).describe("Content which can be rendered to static web assets.").optional(), "jobs": z.array(z.string()).describe("Pre and post deployment workloads which do not expose publicly-accessible HTTP routes.").optional(), "workers": z.array(z.string()).describe("Workloads which do not expose publicly-accessible HTTP services.").optional(), "functions": z.array(z.object({ "cors": z.string().optional(), "name": z.string().regex(new RegExp("^[a-z][a-z0-9-]{0,30}[a-z0-9]$")).min(2).max(32).describe("The name. Must be unique across all components within the same app."), "source_dir": z.string().describe("An optional path to the working directory to use for the build. For Dockerfile builds, this will be used as the build context. Must be relative to the root of the repo.").optional(), "alerts": z.array(z.object({ "rule": z.enum(["UNSPECIFIED_RULE","CPU_UTILIZATION","MEM_UTILIZATION","RESTART_COUNT","DEPLOYMENT_FAILED","DEPLOYMENT_LIVE","DOMAIN_FAILED","DOMAIN_LIVE","FUNCTIONS_ACTIVATION_COUNT","FUNCTIONS_AVERAGE_DURATION_MS","FUNCTIONS_ERROR_RATE_PER_MINUTE","FUNCTIONS_AVERAGE_WAIT_TIME_MS","FUNCTIONS_ERROR_COUNT","FUNCTIONS_GB_RATE_PER_SECOND"]), "disabled": z.boolean().describe("Is the alert disabled?").optional(), "operator": z.enum(["UNSPECIFIED_OPERATOR","GREATER_THAN","LESS_THAN"]), "value": z.number().describe("Threshold value for alert").optional(), "window": z.enum(["UNSPECIFIED_WINDOW","FIVE_MINUTES","TEN_MINUTES","THIRTY_MINUTES","ONE_HOUR"]) })).optional(), "envs": z.array(z.object({ "key": z.string().regex(new RegExp("^[_A-Za-z][_A-Za-z0-9]*$")).describe("The variable name"), "scope": z.enum(["UNSET","RUN_TIME","BUILD_TIME","RUN_AND_BUILD_TIME"]).describe("- RUN_TIME: Made available only at run-time\n- BUILD_TIME: Made available only at build-time\n- RUN_AND_BUILD_TIME: Made available at both build and run-time"), "type": z.enum(["GENERAL","SECRET"]).describe("- GENERAL: A plain-text environment variable\n- SECRET: A secret encrypted environment variable"), "value": z.string().describe("The value. If the type is \`SECRET\`, the value will be encrypted on first submission. On following submissions, the encrypted value should be used.").optional() })).describe("A list of environment variables made available to the component.").optional(), "git": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "repo_clone_url": z.string().describe("The clone URL of the repo. Example: \`https://github.com/digitalocean/sample-golang.git\`").optional() }).optional(), "github": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "deploy_on_push": z.boolean().describe("Whether to automatically deploy new commits made to the repo").optional(), "repo": z.string().describe("The name of the repo in the format owner/repo. Example: \`digitalocean/sample-golang\`").optional() }).optional(), "gitlab": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "deploy_on_push": z.boolean().describe("Whether to automatically deploy new commits made to the repo").optional(), "repo": z.string().describe("The name of the repo in the format owner/repo. Example: \`digitalocean/sample-golang\`").optional() }).optional(), "bitbucket": z.object({ "branch": z.string().describe("The name of the branch to use").optional(), "deploy_on_push": z.boolean().describe("Whether to automatically deploy new commits made to the repo").optional(), "repo": z.string().describe("The name of the repo in the format owner/repo. Example: \`digitalocean/sample-golang\`").optional() }).optional(), "log_destinations": z.array(z.object({ "name": z.string().regex(new RegExp("^[A-Za-z0-9()\\[\\]'\"][-A-Za-z0-9_. \\/()\\[\\]]{0,40}[A-Za-z0-9()\\[\\]'\"]$")).min(2).max(42), "papertrail": z.object({ "endpoint": z.string().describe("Papertrail syslog endpoint.") }).describe("Papertrail configuration.").optional(), "datadog": z.object({ "endpoint": z.string().describe("Datadog HTTP log intake endpoint.").optional(), "api_key": z.string().describe("Datadog API key.") }).describe("DataDog configuration.").optional(), "logtail": z.object({ "token": z.string().describe("Logtail token.").optional() }).describe("Logtail configuration.").optional(), "open_search": z.object({ "endpoint": z.string().describe("OpenSearch API Endpoint. Only HTTPS is supported. Format: https://<host>:<port>.\nCannot be specified if \`cluster_name\` is also specified.").optional(), "basic_auth": z.object({ "user": z.string().describe("Username to authenticate with. Only required when \`endpoint\` is set.\nDefaults to \`doadmin\` when \`cluster_name\` is set.").optional(), "password": z.any().describe("Password for user defined in User. Is required when \`endpoint\` is set.\nCannot be set if using a DigitalOcean DBaaS OpenSearch cluster.").optional() }).describe("Configure Username and/or Password for Basic authentication.").optional(), "index_name": z.string().describe("The index name to use for the logs. If not set, the default index name is \"logs\"."), "cluster_name": z.string().describe("The name of a DigitalOcean DBaaS OpenSearch cluster to use as a log forwarding destination.\nCannot be specified if \`endpoint\` is also specified.").optional() }).describe("OpenSearch configuration.").optional() })).describe("A list of configured log forwarding destinations.").optional() })).describe("Workloads which expose publicly-accessible HTTP services via Functions Components.").optional(), "databases": z.array(z.object({ "cluster_name": z.string().describe("The name of the underlying DigitalOcean DBaaS cluster. This is required for production databases. For dev databases, if cluster_name is not set, a new cluster will be provisioned.").optional(), "db_name": z.string().describe("The name of the MySQL or PostgreSQL database to configure.").optional(), "db_user": z.string().describe("The name of the MySQL or PostgreSQL user to configure.").optional(), "engine": z.enum(["UNSET","MYSQL","PG","REDIS","MONGODB","KAFKA","OPENSEARCH"]).describe("- MYSQL: MySQL\n- PG: PostgreSQL\n- REDIS: Redis\n- MONGODB: MongoDB\n- KAFKA: Kafka\n- OPENSEARCH: OpenSearch"), "name": z.string().regex(new RegExp("^[a-z][a-z0-9-]{0,30}[a-z0-9]$")).min(2).max(32).describe("The database's name. The name must be unique across all components within the same app and cannot use capital letters."), "production": z.boolean().describe("Whether this is a production or dev database.").optional(), "version": z.string().describe("The version of the database engine").optional() })).describe("Database instances which can provide persistence to workloads within the\napplication.").optional(), "ingress": z.object({ "rules": z.array(z.object({ "match": z.object({ "path": z.object({ "prefix": z.string().max(256).describe("Prefix-based match. For example, \`/api\` will match \`/api\`, \`/api/\`, and any nested paths such as \`/api/v1/endpoint\`.") }).describe("The path to match on.") }).describe("The match configuration for the rule.").optional(), "cors": z.object({ "allow_origins": z.array(z.object({ "exact": z.string().min(1).max(256).describe("Exact string match. Only 1 of \`exact\`, \`prefix\`, or \`regex\` must be set.").optional(), "regex": z.string().min(1).max(256).describe("RE2 style regex-based match. Only 1 of \`exact\`, \`prefix\`, or \`regex\` must be set. For more information about RE2 syntax, see: https://github.com/google/re2/wiki/Syntax").optional() })).describe("The set of allowed CORS origins.").optional(), "allow_methods": z.array(z.string()).describe("The set of allowed HTTP methods. This configures the \`Access-Control-Allow-Methods\` header.").optional(), "allow_headers": z.array(z.string()).describe("The set of allowed HTTP request headers. This configures the \`Access-Control-Allow-Headers\` header.").optional(), "expose_headers": z.array(z.string()).describe("The set of HTTP response headers that browsers are allowed to access. This configures the \`Access-Control-Expose-Headers\` header.").optional(), "max_age": z.string().describe("An optional duration specifying how long browsers can cache the results of a preflight request. This configures the \`Access-Control-Max-Age\` header.").optional(), "allow_credentials": z.boolean().describe("Whether browsers should expose the response to the client-side JavaScript code when the request’s credentials mode is include. This configures the \`Access-Control-Allow-Credentials\` header.").optional() }).optional(), "component": z.object({ "name": z.string().describe("The name of the component to route to."), "preserve_path_prefix": z.string().describe("An optional flag to preserve the path that is forwarded to the backend service. By default, the HTTP request path will be trimmed from the left when forwarded to the component. For example, a component with \`path=/api\` will have requests to \`/api/list\` trimmed to \`/list\`. If this value is \`true\`, the path will remain \`/api/list\`. Note: this is not applicable for Functions Components and is mutually exclusive with \`rewrite\`.").optional(), "rewrite": z.string().describe("An optional field that will rewrite the path of the component to be what is specified here. By default, the HTTP request path will be trimmed from the left when forwarded to the component. For example, a component with \`path=/api\` will have requests to \`/api/list\` trimmed to \`/list\`. If you specified the rewrite to be \`/v1/\`, requests to \`/api/list\` would be rewritten to \`/v1/list\`. Note: this is mutually exclusive with \`preserve_path_prefix\`.").optional() }).describe("The component to route to. Only one of \`component\` or \`redirect\` may be set.").optional(), "redirect": z.object({ "uri": z.string().describe("An optional URI path to redirect to. Note: if this is specified the whole URI of the original request will be overwritten to this value, irrespective of the original request URI being matched.").optional(), "authority": z.string().describe("The authority/host to redirect to. This can be a hostname or IP address. Note: use \`port\` to set the port.").optional(), "port": z.number().int().describe("The port to redirect to.").optional(), "scheme": z.string().describe("The scheme to redirect to. Supported values are \`http\` or \`https\`. Default: \`https\`.").optional(), "redirect_code": z.number().int().describe("The redirect code to use. Defaults to \`302\`. Supported values are 300, 301, 302, 303, 304, 307, 308.").optional() }).describe("The redirect configuration for the rule. Only one of \`component\` or \`redirect\` may be set.").optional() })).describe("Rules for configuring HTTP ingress for component routes, CORS, rewrites, and redirects.").optional() }).describe("Specification for app ingress configurations.").optional(), "egress": z.object({ "type": z.enum(["AUTOASSIGN","DEDICATED_IP"]) }).describe("Specification for app egress configurations.").optional(), "maintenance": z.object({ "enabled": z.boolean().describe("Indicates whether maintenance mode should be enabled for the app.").optional(), "archive": z.boolean().describe("Indicates whether the app should be archived. Setting this to true implies that enabled is set to true.").optional(), "offline_page_url": z.string().describe("A custom offline page to display when maintenance mode is enabled or the app is archived.").optional() }).describe("Specification to configure maintenance settings for the app, such as maintenance mode and archiving the app.").optional() }).describe("The desired configuration of an application."),
  "app_id": z.string().describe("An optional ID of an existing app. If set, the spec will be treated as a proposed update to the specified app. The existing app is not modified using this method.").optional()
}
```

### apps_list_alerts

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID")
}
```

### apps_assign_alertdestinations

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "alert_id": z.string().describe("The alert ID"),
  "emails": z.array(z.string()).optional(),
  "slack_webhooks": z.array(z.object({ "url": z.string().optional(), "channel": z.string().optional() })).optional()
}
```

### apps_create_rollback

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "deployment_id": z.string().describe("The ID of the deployment to rollback to.").optional(),
  "skip_pin": z.boolean().describe("Whether to skip pinning the rollback deployment. If false, the rollback deployment will be pinned and any new deployments including Auto Deploy on Push hooks will be disabled until the rollback is either manually committed or reverted via the CommitAppRollback or RevertAppRollback endpoints respectively. If true, the rollback will be immediately committed and the app will remain unpinned.").optional()
}
```

### apps_validate_rollback

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "deployment_id": z.string().describe("The ID of the deployment to rollback to.").optional(),
  "skip_pin": z.boolean().describe("Whether to skip pinning the rollback deployment. If false, the rollback deployment will be pinned and any new deployments including Auto Deploy on Push hooks will be disabled until the rollback is either manually committed or reverted via the CommitAppRollback or RevertAppRollback endpoints respectively. If true, the rollback will be immediately committed and the app will remain unpinned.").optional()
}
```

### apps_commit_rollback

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID")
}
```

### apps_revert_rollback

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID")
}
```

### apps_get_metrics_bandwidth_daily

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app ID"),
  "date": z.string().datetime({ offset: true }).describe("Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday.").optional()
}
```

### apps_list_metrics_bandwidth_daily

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_ids": z.array(z.string()).max(100).describe("A list of app IDs to query bandwidth metrics for."),
  "date": z.string().datetime({ offset: true }).describe("Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday.").optional()
}
```

### cdn_list_endpoints

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### cdn_create_endpoint

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string().uuid().describe("A unique ID that can be used to identify and reference a CDN endpoint.").readonly().optional(),
  "origin": z.string().describe("The fully qualified domain name (FQDN) for the origin server which provides the content for the CDN. This is currently restricted to a Space."),
  "endpoint": z.string().describe("The fully qualified domain name (FQDN) from which the CDN-backed content is served.").readonly().optional(),
  "ttl": z.union([z.literal(60), z.literal(600), z.literal(3600), z.literal(86400), z.literal(604800)]).describe("The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded.").optional(),
  "certificate_id": z.string().uuid().describe("The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided.").optional(),
  "custom_domain": z.string().describe("The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint.").optional(),
  "created_at": z.string().datetime({ offset: true }).describe("A time value given in ISO8601 combined date and time format that represents when the CDN endpoint was created.").readonly().optional()
}
```

### cdn_get_endpoint

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cdn_id": z.string().uuid().describe("A unique identifier for a CDN endpoint.")
}
```

### cdn_update_endpoints

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cdn_id": z.string().uuid().describe("A unique identifier for a CDN endpoint."),
  "ttl": z.union([z.literal(60), z.literal(600), z.literal(3600), z.literal(86400), z.literal(604800)]).describe("The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded.").optional(),
  "certificate_id": z.string().uuid().describe("The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided.").optional(),
  "custom_domain": z.string().describe("The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint.").optional()
}
```

### cdn_delete_endpoint

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cdn_id": z.string().uuid().describe("A unique identifier for a CDN endpoint.")
}
```

### cdn_purge_cache

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cdn_id": z.string().uuid().describe("A unique identifier for a CDN endpoint."),
  "files": z.array(z.string()).describe("An array of strings containing the path to the content to be purged from the CDN cache.")
}
```

### certificates_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
  "name": z.string().describe("Name of expected certificate").optional()
}
```

### certificates_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### certificates_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "certificate_id": z.string().uuid().describe("A unique identifier for a certificate.")
}
```

### certificates_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "certificate_id": z.string().uuid().describe("A unique identifier for a certificate.")
}
```

### balance_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### billinghistory_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### invoices_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### invoices_get_byuuid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "invoice_uuid": z.string().describe("UUID of the invoice"),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### invoices_get_csvbyuuid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "invoice_uuid": z.string().describe("UUID of the invoice")
}
```

### invoices_get_pdfbyuuid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "invoice_uuid": z.string().describe("UUID of the invoice")
}
```

### invoices_get_summarybyuuid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "invoice_uuid": z.string().describe("UUID of the invoice")
}
```

### databases_list_options

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### databases_list_clusters

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "tag_name": z.string().describe("Limits the results to database clusters with a specific tag.").optional()
}
```

### databases_create_cluster

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### databases_get_cluster

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_destroy_cluster

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_get_config

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_patch_config

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "config": z.union([z.object({ "backup_hour": z.number().int().gte(0).lte(23).describe("The hour of day (in UTC) when backup for the service starts. New backup only starts if previous backup has already completed.").optional(), "backup_minute": z.number().int().gte(0).lte(59).describe("The minute of the backup hour when backup for the service starts. New backup  only starts if previous backup has already completed.").optional(), "sql_mode": z.string().regex(new RegExp("^[A-Z_]*(,[A-Z_]+)*$")).max(1024).describe("Global SQL mode. If empty, uses MySQL server defaults. Must only include uppercase alphabetic characters, underscores, and commas.").optional(), "connect_timeout": z.number().int().gte(2).lte(3600).describe("The number of seconds that the mysqld server waits for a connect packet before responding with bad handshake.").optional(), "default_time_zone": z.string().min(2).max(100).describe("Default server time zone, in the form of an offset from UTC (from -12:00 to +12:00), a time zone name (EST), or 'SYSTEM' to use the MySQL server default.").optional(), "group_concat_max_len": z.number().int().gte(4).lte(18446744073709552000).describe("The maximum permitted result length, in bytes, for the GROUP_CONCAT() function.").optional(), "information_schema_stats_expiry": z.number().int().gte(900).lte(31536000).describe("The time, in seconds, before cached statistics expire.").optional(), "innodb_ft_min_token_size": z.number().int().gte(0).lte(16).describe("The minimum length of words that an InnoDB FULLTEXT index stores.").optional(), "innodb_ft_server_stopword_table": z.string().regex(new RegExp("^.+/.+$")).max(1024).describe("The InnoDB FULLTEXT index stopword list for all InnoDB tables.").optional(), "innodb_lock_wait_timeout": z.number().int().gte(1).lte(3600).describe("The time, in seconds, that an InnoDB transaction waits for a row lock. before giving up.").optional(), "innodb_log_buffer_size": z.number().int().gte(1048576).lte(4294967295).describe("The size of the buffer, in bytes, that InnoDB uses to write to the log files. on disk.").optional(), "innodb_online_alter_log_max_size": z.number().int().gte(65536).lte(1099511627776).describe("The upper limit, in bytes, of the size of the temporary log files used during online DDL operations for InnoDB tables.").optional(), "innodb_print_all_deadlocks": z.boolean().describe("When enabled, records information about all deadlocks in InnoDB user transactions  in the error log. Disabled by default.").optional(), "innodb_rollback_on_timeout": z.boolean().describe("When enabled, transaction timeouts cause InnoDB to abort and roll back the entire transaction.").optional(), "interactive_timeout": z.number().int().gte(30).lte(604800).describe("The time, in seconds, the server waits for activity on an interactive. connection before closing it.").optional(), "internal_tmp_mem_storage_engine": z.enum(["TempTable","MEMORY"]).describe("The storage engine for in-memory internal temporary tables.").optional(), "net_read_timeout": z.number().int().gte(1).lte(3600).describe("The time, in seconds, to wait for more data from an existing connection. aborting the read.").optional(), "net_write_timeout": z.number().int().gte(1).lte(3600).describe("The number of seconds to wait for a block to be written to a connection before aborting the write.").optional(), "sql_require_primary_key": z.boolean().describe("Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. It is recommended to always have primary keys because various functionality may break if any large table is missing them.").optional(), "wait_timeout": z.number().int().gte(1).lte(2147483).describe("The number of seconds the server waits for activity on a noninteractive connection before closing it.").optional(), "max_allowed_packet": z.number().int().gte(102400).lte(1073741824).describe("The size of the largest message, in bytes, that can be received by the server. Default is 67108864 (64M).").optional(), "max_heap_table_size": z.number().int().gte(1048576).lte(1073741824).describe("The maximum size, in bytes, of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M)").optional(), "sort_buffer_size": z.number().int().gte(32768).lte(1073741824).describe("The sort buffer size, in bytes, for ORDER BY optimization. Default is 262144. (256K).").optional(), "tmp_table_size": z.number().int().gte(1048576).lte(1073741824).describe("The maximum size, in bytes, of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M).").optional(), "slow_query_log": z.boolean().describe("When enabled, captures slow queries. When disabled, also truncates the mysql.slow_log table. Default is false.").optional(), "long_query_time": z.number().gte(0).lte(3600).describe("The time, in seconds, for a query to take to execute before  being captured by slow_query_logs. Default is 10 seconds.").optional(), "binlog_retention_period": z.number().gte(600).lte(86400).describe("The minimum amount of time, in seconds, to keep binlog entries before deletion.  This may be extended for services that require binlog entries for longer than the default, for example if using the MySQL Debezium Kafka connector.").optional(), "innodb_change_buffer_max_size": z.number().int().gte(0).lte(50).describe("Specifies the maximum size of the InnoDB change buffer as a percentage of the buffer pool.").optional(), "innodb_flush_neighbors": z.union([z.literal(0), z.literal(1), z.literal(2)]).describe("Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent.\n  - 0 &mdash; disables this functionality, dirty pages in the same extent are not flushed.\n  - 1 &mdash; flushes contiguous dirty pages in the same extent.\n  - 2 &mdash; flushes dirty pages in the same extent.").optional(), "innodb_read_io_threads": z.number().int().gte(1).lte(64).describe("The number of I/O threads for read operations in InnoDB. Changing this parameter will lead to a restart of the MySQL service.").optional(), "innodb_write_io_threads": z.number().int().gte(1).lte(64).describe("The number of I/O threads for write operations in InnoDB. Changing this parameter will lead to a restart of the MySQL service.").optional(), "innodb_thread_concurrency": z.number().int().gte(0).lte(1000).describe("Defines the maximum number of threads permitted inside of InnoDB. A value of 0 (the default) is interpreted as infinite concurrency (no limit). This variable is intended for performance  tuning on high concurrency systems.").optional(), "net_buffer_length": z.number().int().gte(1024).lte(1048576).describe("Start sizes of connection buffer and result buffer, must be multiple of 1024. Changing this parameter will lead to a restart of the MySQL service.").optional(), "log_output": z.enum(["INSIGHTS","TABLE","INSIGHTS,TABLE","NONE"]).describe("Defines the destination for logs. Can be \`INSIGHTS\`, \`TABLE\`, or both (\`INSIGHTS,TABLE\`), or \`NONE\` to disable logs. To specify both destinations, use \`INSIGHTS,TABLE\` (order matters). Default is NONE.") }), z.object({ "autovacuum_freeze_max_age": z.number().int().gte(200000000).lte(1500000000).describe("Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. This parameter will cause the server to be restarted.").optional(), "autovacuum_max_workers": z.number().int().gte(1).lte(20).describe("Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. The default is three. This parameter can only be set at server start.").optional(), "autovacuum_naptime": z.number().int().gte(0).lte(86400).describe("Specifies the minimum delay, in seconds, between autovacuum runs on any given database. The default is one minute.").optional(), "autovacuum_vacuum_threshold": z.number().int().gte(0).lte(2147483647).describe("Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. The default is 50 tuples.").optional(), "autovacuum_analyze_threshold": z.number().int().gte(0).lte(2147483647).describe("Specifies the minimum number of inserted, updated, or deleted tuples needed to trigger an ANALYZE in any one table. The default is 50 tuples.").optional(), "autovacuum_vacuum_scale_factor": z.number().gte(0).lte(1).describe("Specifies a fraction, in a decimal value, of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM. The default is 0.2 (20% of table size).").optional(), "autovacuum_analyze_scale_factor": z.number().gte(0).lte(1).describe("Specifies a fraction, in a decimal value, of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE. The default is 0.2 (20% of table size).").optional(), "autovacuum_vacuum_cost_delay": z.number().int().gte(-1).lte(100).describe("Specifies the cost delay value, in milliseconds, that will be used in automatic VACUUM operations. If -1, uses the regular vacuum_cost_delay value, which is 20 milliseconds.").optional(), "autovacuum_vacuum_cost_limit": z.number().int().gte(-1).lte(10000).describe("Specifies the cost limit value that will be used in automatic VACUUM operations. If -1 is specified (which is the default), the regular vacuum_cost_limit value will be used.").optional(), "backup_hour": z.number().int().gte(0).lte(23).describe("The hour of day (in UTC) when backup for the service starts. New backup only starts if previous backup has already completed.").optional(), "backup_minute": z.number().int().gte(0).lte(59).describe("The minute of the backup hour when backup for the service starts. New backup is only started if previous backup has already completed.").optional(), "bgwriter_delay": z.number().int().gte(10).lte(10000).describe("Specifies the delay, in milliseconds, between activity rounds for the background writer. Default is 200 ms.").optional(), "bgwriter_flush_after": z.number().int().gte(0).lte(2048).describe("The amount of kilobytes that need to be written by the background writer before attempting to force the OS to issue these writes to underlying storage. Specified in kilobytes, default is 512.  Setting of 0 disables forced writeback.").optional(), "bgwriter_lru_maxpages": z.number().int().gte(0).lte(1073741823).describe("The maximum number of buffers that the background writer can write. Setting this to zero disables background writing. Default is 100.").optional(), "bgwriter_lru_multiplier": z.number().gte(0).lte(10).describe("The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is 2.0.").optional(), "deadlock_timeout": z.number().int().gte(500).lte(1800000).describe("The amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition.").optional(), "default_toast_compression": z.enum(["lz4","pglz"]).describe("Specifies the default TOAST compression method for values of compressible columns (the default is lz4).").optional(), "idle_in_transaction_session_timeout": z.number().int().gte(0).lte(604800000).describe("Time out sessions with open transactions after this number of milliseconds").optional(), "jit": z.boolean().describe("Activates, in a boolean, the system-wide use of Just-in-Time Compilation (JIT).").optional(), "log_autovacuum_min_duration": z.number().int().gte(-1).lte(2147483647).describe("Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. Setting this to zero logs all autovacuum actions. Minus-one (the default) disables logging autovacuum actions.").optional(), "log_error_verbosity": z.enum(["TERSE","DEFAULT","VERBOSE"]).describe("Controls the amount of detail written in the server log for each message that is logged.").optional(), "log_line_prefix": z.enum(["pid=%p,user=%u,db=%d,app=%a,client=%h","%m [%p] %q[user=%u,db=%d,app=%a]","%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h"]).describe("Selects one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze, etc.").optional(), "log_min_duration_statement": z.number().int().gte(-1).lte(86400000).describe("Log statements that take more than this number of milliseconds to run. If -1, disables.").optional(), "max_files_per_process": z.number().int().gte(1000).lte(4096).describe("PostgreSQL maximum number of files that can be open per process.").optional(), "max_prepared_transactions": z.number().int().gte(0).lte(10000).describe("PostgreSQL maximum prepared transactions. Once increased, this parameter cannot be lowered from its set value.").optional(), "max_pred_locks_per_transaction": z.number().int().gte(64).lte(640).describe("PostgreSQL maximum predicate locks per transaction.").optional(), "max_locks_per_transaction": z.number().int().gte(64).lte(6400).describe("PostgreSQL maximum locks per transaction. Once increased, this parameter cannot be lowered from its set value.").optional(), "max_stack_depth": z.number().int().gte(2097152).lte(6291456).describe("Maximum depth of the stack in bytes.").optional(), "max_standby_archive_delay": z.number().int().gte(1).lte(43200000).describe("Max standby archive delay in milliseconds.").optional(), "max_standby_streaming_delay": z.number().int().gte(1).lte(43200000).describe("Max standby streaming delay in milliseconds.").optional(), "max_replication_slots": z.number().int().gte(8).lte(64).describe("PostgreSQL maximum replication slots.").optional(), "max_logical_replication_workers": z.number().int().gte(4).lte(64).describe("PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers).").optional(), "max_parallel_workers": z.number().int().gte(0).lte(96).describe("Sets the maximum number of workers that the system can support for parallel queries.").optional(), "max_parallel_workers_per_gather": z.number().int().gte(0).lte(96).describe("Sets the maximum number of workers that can be started by a single Gather or Gather Merge node.").optional(), "max_worker_processes": z.number().int().gte(8).lte(96).describe("Sets the maximum number of background processes that the system can support. Once increased, this parameter cannot be lowered from its set value.").optional(), "pg_partman_bgw.role": z.string().regex(new RegExp("^[_A-Za-z0-9][-._A-Za-z0-9]{0,63}$")).max(64).describe("Controls which role to use for pg_partman's scheduled background tasks. Must consist of alpha-numeric characters, dots, underscores, or dashes. May not start with dash or dot. Maximum of 64 characters.").optional(), "pg_partman_bgw.interval": z.number().int().gte(3600).lte(604800).describe("Sets the time interval to run pg_partman's scheduled tasks.").optional(), "pg_stat_statements.track": z.enum(["all","top","none"]).describe("Controls which statements are counted. Specify 'top' to track top-level statements (those issued directly by clients), 'all' to also track nested statements (such as statements invoked within functions), or 'none' to disable statement statistics collection. The default value is top.").optional(), "temp_file_limit": z.number().int().gte(-1).lte(2147483647).describe("PostgreSQL temporary file limit in KiB. If -1, sets to unlimited.").optional(), "timezone": z.string().max(64).describe("PostgreSQL service timezone").optional(), "track_activity_query_size": z.number().int().gte(1024).lte(10240).describe("Specifies the number of bytes reserved to track the currently executing command for each active session.").optional(), "track_commit_timestamp": z.enum(["off","on"]).describe("Record commit time of transactions.").optional(), "track_functions": z.enum(["all","pl","none"]).describe("Enables tracking of function call counts and time used.").optional(), "track_io_timing": z.enum(["off","on"]).describe("Enables timing of database I/O calls. This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.").optional(), "max_wal_senders": z.number().int().gte(20).lte(64).describe("PostgreSQL maximum WAL senders. Once increased, this parameter cannot be lowered from its set value.").optional(), "wal_sender_timeout": z.number().int().gte(0).lte(10800000).describe("Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. Setting this value to zero disables the timeout. Must be either 0 or between 5000 and 10800000.").optional(), "wal_writer_delay": z.number().int().gte(10).lte(200).describe("WAL flush interval in milliseconds. Note that setting this value to lower than the default 200ms may negatively impact performance").optional(), "shared_buffers_percentage": z.number().gte(20).lte(60).describe("Percentage of total RAM that the database server uses for shared memory buffers.  Valid range is 20-60 (float), which corresponds to 20% - 60%.  This setting adjusts the shared_buffers configuration value.").optional(), "pgbouncer": z.object({ "server_reset_query_always": z.boolean().describe("Run server_reset_query (DISCARD ALL) in all pooling modes.").optional(), "ignore_startup_parameters": z.array(z.enum(["extra_float_digits","search_path"]).describe("Enum of parameters to ignore when given in startup packet.")).max(32).describe("List of parameters to ignore when given in startup packet.").optional(), "min_pool_size": z.number().int().gte(0).lte(10000).describe("If current server connections are below this number, adds more. Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.").optional(), "server_lifetime": z.number().int().gte(60).lte(86400).describe("The pooler closes any unused server connection that has been connected longer than this amount of seconds.").optional(), "server_idle_timeout": z.number().int().gte(0).lte(86400).describe("Drops server connections if they have been idle more than this many seconds.  If 0, timeout is disabled. ").optional(), "autodb_pool_size": z.number().int().gte(0).lte(10000).describe("If non-zero, automatically creates a pool of that size per user when a pool doesn't exist.").optional(), "autodb_pool_mode": z.enum(["session","transaction","statement"]).describe("PGBouncer pool mode").optional(), "autodb_max_db_connections": z.number().int().gte(0).lte(2147483647).describe("Only allows a maximum this many server connections per database (regardless of user). If 0, allows unlimited connections.").optional(), "autodb_idle_timeout": z.number().int().gte(0).lte(86400).describe("If the automatically-created database pools have been unused this many seconds, they are freed. If 0, timeout is disabled.").optional() }).describe("PGBouncer connection pooling settings").optional(), "work_mem": z.number().int().gte(1).lte(1024).describe("The maximum amount of memory, in MB, used by a query operation (such as a sort or hash table) before writing to temporary disk files. Default is 1MB + 0.075% of total RAM (up to 32MB).").optional(), "timescaledb": z.object({ "max_background_workers": z.number().int().gte(1).lte(4096).describe("The number of background workers for timescaledb operations.  Set to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time.").optional() }).describe("TimescaleDB extension configuration values").optional(), "synchronous_replication": z.enum(["off","quorum"]).describe("Synchronous replication type. Note that the service plan also needs to support synchronous replication.").optional(), "stat_monitor_enable": z.boolean().describe("Enable the pg_stat_monitor extension. <b>Enabling this extension will cause the cluster to be restarted.</b> When this extension is enabled, pg_stat_statements results for utility commands are unreliable.").optional(), "max_failover_replication_time_lag": z.number().int().gte(10).lte(9223372036854776000).describe("Number of seconds of master unavailability before triggering database failover to standby. The default value is 60.").optional() }), z.object({ "redis_maxmemory_policy": z.enum(["noeviction","allkeys-lru","allkeys-random","volatile-lru","volatile-random","volatile-ttl"]).describe("A string specifying the desired eviction policy for the Redis cluster.\n\n- \`noeviction\`: Don't evict any data, returns error when memory limit is reached.\n- \`allkeys-lru:\` Evict any key, least recently used (LRU) first.\n- \`allkeys-random\`: Evict keys in a random order.\n- \`volatile-lru\`: Evict keys with expiration only, least recently used (LRU) first.\n- \`volatile-random\`: Evict keys with expiration only in a random order.\n- \`volatile-ttl\`: Evict keys with expiration only, shortest time-to-live (TTL) first.").optional(), "redis_pubsub_client_output_buffer_limit": z.number().int().gte(32).lte(512).describe("Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.").optional(), "redis_number_of_databases": z.number().int().gte(1).lte(128).describe("Set number of redis databases. Changing this will cause a restart of redis service.").optional(), "redis_io_threads": z.number().int().gte(1).lte(32).describe("Redis IO thread count").optional(), "redis_lfu_log_factor": z.number().int().gte(0).lte(100).describe("Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies"), "redis_lfu_decay_time": z.number().int().gte(1).lte(120).describe("LFU maxmemory-policy counter decay time in minutes"), "redis_ssl": z.boolean().describe("Require SSL to access Redis.\n- When enabled, Redis accepts only SSL connections on port \`25061\`.\n- When disabled, port \`25060\` is opened for non-SSL connections, while port \`25061\` remains available for SSL connections.\n"), "redis_timeout": z.number().int().gte(0).lte(31536000).describe("Redis idle connection timeout in seconds"), "redis_notify_keyspace_events": z.string().regex(new RegExp("^[KEg\\$lshzxeA]*$")).max(32).describe("Set notify-keyspace-events option. Requires at least \`K\` or \`E\` and accepts any combination of the following options. Setting the parameter to \`\"\"\` disables notifications.\n- \`K\` &mdash; Keyspace events\n- \`E\` &mdash; Keyevent events\n- \`g\` &mdash; Generic commands (e.g. \`DEL\`, \`EXPIRE\`, \`RENAME\`, ...)\n- \`{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "config":  &mdash; String commands\n- \`l\` &mdash; List commands\n- \`s\` &mdash; Set commands\n- \`h\` &mdash; Hash commands\n- \`z\` &mdash; Sorted set commands\n- \`t\` &mdash; Stream commands\n- \`d\` &mdash; Module key type events\n- \`x\` &mdash; Expired events\n- \`e\` &mdash; Evicted events\n- \`m\` &mdash; Key miss events\n- \`n\` &mdash; New key events\n- \`A\` &mdash; Alias for \`\"g$lshztxed\"\`"), "redis_persistence": z.enum(["off","rdb"]).describe("Creates an RDB dump of the database every 10 minutes that can be used  to recover data after a node crash. The database does not create the  dump if no keys have changed since the last dump. When set to \`off\`,  the database cannot fork services, and data can be lost if a service  is restarted or powered off. DigitalOcean Managed Caching databases  do not support the Append Only File (AOF) persistence method.").optional(), "redis_acl_channels_default": z.enum(["allchannels","resetchannels"]).describe("Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Redis configuration acl-pubsub-default.").optional() }), z.object({ "default_read_concern": z.enum(["local","available","majority"]).describe("Specifies the default consistency behavior of reads from the database. Data that is returned from the query with may or may not have been acknowledged by all nodes in the replicaset depending on this value.  Learn more [here](https://www.mongodb.com/docs/manual/reference/read-concern/)."), "default_write_concern": z.string().describe("Describes the level of acknowledgment requested from MongoDB for write operations clusters. This field can set to either \`majority\` or a number \`0...n\` which will describe the number of nodes that must acknowledge the write operation before it is fully accepted. Setting to \`0\` will request no acknowledgement of the write operation.  Learn more [here](https://www.mongodb.com/docs/manual/reference/write-concern/)."), "transaction_lifetime_limit_seconds": z.number().int().gte(1).describe("Specifies the lifetime of multi-document transactions. Transactions that exceed this limit are considered expired and will be  aborted by a periodic cleanup process. The cleanup process runs every \`transactionLifetimeLimitSeconds/2 seconds\` or at least  once every 60 seconds. *Changing this parameter will lead to a restart of the MongoDB service.* Learn more [here](https://www.mongodb.com/docs/manual/reference/parameters/#mongodb-parameter-param.transactionLifetimeLimitSeconds)."), "slow_op_threshold_ms": z.number().int().gte(0).describe("Operations that run for longer than this threshold are considered slow which are then recorded to the diagnostic logs.  Higher log levels (verbosity) will record all operations regardless of this threshold on the primary node.  *Changing this parameter will lead to a restart of the MongoDB service.* Learn more [here](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-operationProfiling.slowOpThresholdMs)."), "verbosity": z.number().int().gte(0).lte(5).describe("The log message verbosity level. The verbosity level determines the amount of Informational and Debug messages MongoDB outputs. 0 includes informational messages while 1...5 increases the level to include debug messages. *Changing this parameter will lead to a restart of the MongoDB service.* Learn more [here](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-systemLog.verbosity).") }), z.object({ "compression_type": z.enum(["gzip","snappy","lz4","zstd","uncompressed","producer"]).describe("Specify the final compression type for a given topic. This configuration accepts the standard compression codecs ('gzip', 'snappy', 'lz4', 'zstd'). It additionally accepts 'uncompressed' which is equivalent to no compression; and 'producer' which means retain the original compression codec set by the producer.").optional(), "group_initial_rebalance_delay_ms": z.number().int().gte(0).lte(300000).describe("The amount of time, in milliseconds, the group coordinator will wait for more consumers to join a new group before performing the first rebalance. A longer delay means potentially fewer rebalances, but increases the time until processing begins. The default value for this is 3 seconds. During development and testing it might be desirable to set this to 0 in order to not delay test execution time.").optional(), "group_min_session_timeout_ms": z.number().int().gte(0).lte(60000).describe("The minimum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures.").optional(), "group_max_session_timeout_ms": z.number().int().gte(0).lte(1800000).describe("The maximum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures.").optional(), "connections_max_idle_ms": z.number().int().gte(1000).lte(3600000).describe("Idle connections timeout: the server socket processor threads close the connections that idle for longer than this.").optional(), "max_incremental_fetch_session_cache_slots": z.number().int().gte(1000).lte(10000).describe("The maximum number of incremental fetch sessions that the broker will maintain.").optional(), "message_max_bytes": z.number().int().gte(0).lte(100001200).describe("The maximum size of message that the server can receive.").optional(), "offsets_retention_minutes": z.number().int().gte(1).lte(2147483647).describe("Log retention window in minutes for offsets topic").optional(), "log_cleaner_delete_retention_ms": z.number().int().gte(0).lte(315569260000).describe("How long are delete records retained?").optional(), "log_cleaner_min_cleanable_ratio": z.number().gte(0.2).lte(0.9).describe("Controls log compactor frequency. Larger value means more frequent compactions but also more space wasted for logs. Consider setting log_cleaner_max_compaction_lag_ms to enforce compactions sooner, instead of setting a very high value for this option.").optional(), "log_cleaner_max_compaction_lag_ms": z.number().int().gte(30000).lte(9223372036854776000).describe("The maximum amount of time message will remain uncompacted. Only applicable for logs that are being compacted").optional(), "log_cleaner_min_compaction_lag_ms": z.number().int().gte(0).lte(9223372036854776000).describe("The minimum time a message will remain uncompacted in the log. Only applicable for logs that are being compacted.").optional(), "log_cleanup_policy": z.enum(["delete","compact","compact,delete"]).describe("The default cleanup policy for segments beyond the retention window").optional(), "log_flush_interval_messages": z.number().int().gte(1).lte(9223372036854776000).describe("The number of messages accumulated on a log partition before messages are flushed to disk").optional(), "log_flush_interval_ms": z.number().int().gte(0).lte(9223372036854776000).describe("The maximum time in ms that a message in any topic is kept in memory before flushed to disk. If not set, the value in log.flush.scheduler.interval.ms is used").optional(), "log_index_interval_bytes": z.number().int().gte(0).lte(104857600).describe("The interval with which Kafka adds an entry to the offset index").optional(), "log_index_size_max_bytes": z.number().int().gte(1048576).lte(104857600).describe("The maximum size in bytes of the offset index").optional(), "log_message_downconversion_enable": z.boolean().describe("This configuration controls whether down-conversion of message formats is enabled to satisfy consume requests.").optional(), "log_message_timestamp_type": z.enum(["CreateTime","LogAppendTime"]).describe("Define whether the timestamp in the message is message create time or log append time.").optional(), "log_message_timestamp_difference_max_ms": z.number().int().gte(0).lte(9223372036854776000).describe("The maximum difference allowed between the timestamp when a broker receives a message and the timestamp specified in the message").optional(), "log_preallocate": z.boolean().describe("Controls whether to preallocate a file when creating a new segment").optional(), "log_retention_bytes": z.number().int().gte(-1).lte(9223372036854776000).describe("The maximum size of the log before deleting messages").optional(), "log_retention_hours": z.number().int().gte(-1).lte(2147483647).describe("The number of hours to keep a log file before deleting it").optional(), "log_retention_ms": z.number().int().gte(-1).lte(9223372036854776000).describe("The number of milliseconds to keep a log file before deleting it (in milliseconds), If not set, the value in log.retention.minutes is used. If set to -1, no time limit is applied.").optional(), "log_roll_jitter_ms": z.number().int().gte(0).lte(9223372036854776000).describe("The maximum jitter to subtract from logRollTimeMillis (in milliseconds). If not set, the value in log.roll.jitter.hours is used").optional(), "log_roll_ms": z.number().int().gte(1).lte(9223372036854776000).describe("The maximum time before a new log segment is rolled out (in milliseconds).").optional(), "log_segment_bytes": z.number().int().gte(10485760).lte(1073741824).describe("The maximum size of a single log file").optional(), "log_segment_delete_delay_ms": z.number().int().gte(0).lte(3600000).describe("The amount of time to wait before deleting a file from the filesystem").optional(), "auto_create_topics_enable": z.boolean().describe("Enable auto creation of topics").optional(), "min_insync_replicas": z.number().int().gte(1).lte(7).describe("When a producer sets acks to 'all' (or '-1'), min_insync_replicas specifies the minimum number of replicas that must acknowledge a write for the write to be considered successful.").optional(), "num_partitions": z.number().int().gte(1).lte(1000).describe("Number of partitions for autocreated topics").optional(), "default_replication_factor": z.number().int().gte(1).lte(10).describe("Replication factor for autocreated topics").optional(), "replica_fetch_max_bytes": z.number().int().gte(1048576).lte(104857600).describe("The number of bytes of messages to attempt to fetch for each partition (defaults to 1048576). This is not an absolute maximum, if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made.").optional(), "replica_fetch_response_max_bytes": z.number().int().gte(10485760).lte(1048576000).describe("Maximum bytes expected for the entire fetch response (defaults to 10485760). Records are fetched in batches, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made. As such, this is not an absolute maximum.").optional(), "max_connections_per_ip": z.number().int().gte(256).lte(2147483647).describe("The maximum number of connections allowed from each ip address (defaults to 2147483647).").optional(), "producer_purgatory_purge_interval_requests": z.number().int().gte(10).lte(10000).describe("The purge interval (in number of requests) of the producer request purgatory (defaults to 1000).").optional(), "socket_request_max_bytes": z.number().int().gte(10485760).lte(209715200).describe("The maximum number of bytes in a socket request (defaults to 104857600).").optional(), "transaction_state_log_segment_bytes": z.number().int().gte(1048576).lte(2147483647).describe("The transaction topic segment bytes should be kept relatively small in order to facilitate faster log compaction and cache loads (defaults to 104857600 (100 mebibytes)).").optional(), "transaction_remove_expired_transaction_cleanup_interval_ms": z.number().int().gte(600000).lte(3600000).describe("The interval at which to remove transactions that have expired due to transactional.id.expiration.ms passing (defaults to 3600000 (1 hour)).").optional() }), z.object({ "http_max_content_length_bytes": z.number().int().gte(1).lte(2147483647).describe("Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes."), "http_max_header_size_bytes": z.number().int().gte(1024).lte(262144).describe("Maximum size of allowed headers, in bytes."), "http_max_initial_line_length_bytes": z.number().int().gte(1024).lte(65536).describe("Maximum length of an HTTP URL, in bytes."), "indices_query_bool_max_clause_count": z.number().int().gte(64).lte(4096).describe("Maximum number of clauses Lucene BooleanQuery can have.  Only increase it if necessary, as it may cause performance issues."), "indices_fielddata_cache_size_percentage": z.number().int().gte(3).lte(100).describe("Maximum amount of heap memory used for field data cache, expressed as a percentage. Decreasing the value too much will increase overhead of loading field data. Increasing the value too much will decrease amount of heap available for other operations.").optional(), "indices_memory_index_buffer_size_percentage": z.number().int().gte(3).lte(40).describe("Total amount of heap used for indexing buffer before writing segments to disk, expressed as a percentage. Too low value will slow down indexing; too high value will increase indexing performance but causes performance issues for query performance."), "indices_memory_min_index_buffer_size_mb": z.number().int().gte(3).lte(2048).describe("Minimum amount of heap used for indexing buffer before writing segments to disk, in mb. Works in conjunction with indices_memory_index_buffer_size_percentage, each being enforced."), "indices_memory_max_index_buffer_size_mb": z.number().int().gte(3).lte(2048).describe("Maximum amount of heap used for indexing buffer before writing segments to disk, in mb. Works in conjunction with indices_memory_index_buffer_size_percentage, each being enforced. The default is unbounded.").optional(), "indices_queries_cache_size_percentage": z.number().int().gte(3).lte(40).describe("Maximum amount of heap used for query cache.  Too low value will decrease query performance and increase performance for other operations; too high value will cause issues with other functionality."), "indices_recovery_max_mb_per_sec": z.number().int().gte(40).lte(400).describe("Limits total inbound and outbound recovery traffic for each node, expressed in mb per second. Applies to both peer recoveries as well as snapshot recoveries (i.e., restores from a snapshot)."), "indices_recovery_max_concurrent_file_chunks": z.number().int().gte(2).lte(5).describe("Maximum number of file chunks sent in parallel for each recovery."), "thread_pool_search_size": z.number().int().gte(1).lte(128).describe("Number of workers in the search operation thread pool.  Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.").optional(), "thread_pool_search_throttled_size": z.number().int().gte(1).lte(128).describe("Number of workers in the search throttled operation thread pool. This pool is used for searching frozen indices. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.").optional(), "thread_pool_get_size": z.number().int().gte(1).lte(128).describe("Number of workers in the get operation thread pool.  Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.").optional(), "thread_pool_analyze_size": z.number().int().gte(1).lte(128).describe("Number of workers in the analyze operation thread pool.  Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.").optional(), "thread_pool_write_size": z.number().int().gte(1).lte(128).describe("Number of workers in the write operation thread pool.  Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.").optional(), "thread_pool_force_merge_size": z.number().int().gte(1).lte(128).describe("Number of workers in the force merge operation thread pool. This pool is used for forcing a merge between shards of one or more indices. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.").optional(), "thread_pool_search_queue_size": z.number().int().gte(10).lte(2000).describe("Size of queue for operations in the search thread pool.").optional(), "thread_pool_search_throttled_queue_size": z.number().int().gte(10).lte(2000).describe("Size of queue for operations in the search throttled thread pool.").optional(), "thread_pool_get_queue_size": z.number().int().gte(10).lte(2000).describe("Size of queue for operations in the get thread pool.").optional(), "thread_pool_analyze_queue_size": z.number().int().gte(10).lte(2000).describe("Size of queue for operations in the analyze thread pool.").optional(), "thread_pool_write_queue_size": z.number().int().gte(10).lte(2000).describe("Size of queue for operations in the write thread pool.").optional(), "ism_enabled": z.boolean().describe("Specifies whether ISM is enabled or not."), "ism_history_enabled": z.boolean().describe("Specifies whether audit history is enabled or not. The logs from ISM are automatically indexed to a logs document."), "ism_history_max_age_hours": z.number().int().gte(1).lte(2147483647).describe("Maximum age before rolling over the audit history index, in hours."), "ism_history_max_docs": z.number().int().gte(1).lte(9223372036854776000).describe("Maximum number of documents before rolling over the audit history index."), "ism_history_rollover_check_period_hours": z.number().int().gte(1).lte(2147483647).describe("The time between rollover checks for the audit history index, in hours."), "ism_history_rollover_retention_period_days": z.number().int().gte(1).lte(2147483647).describe("Length of time long audit history indices are kept, in days."), "search_max_buckets": z.number().int().gte(1).lte(1000000).describe("Maximum number of aggregation buckets allowed in a single response."), "action_auto_create_index_enabled": z.boolean().describe("Specifices whether to allow automatic creation of indices."), "enable_security_audit": z.boolean().describe("Specifies whether to allow security audit logging."), "action_destructive_requires_name": z.boolean().describe("Specifies whether to require explicit index names when deleting indices.").optional(), "cluster_max_shards_per_node": z.number().int().gte(100).lte(10000).describe("Maximum number of shards allowed per data node.").optional(), "override_main_response_version": z.boolean().describe("Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work."), "script_max_compilations_rate": z.string().describe("Limits the number of inline script compilations within a period of time. Default is use-context"), "cluster_routing_allocation_node_concurrent_recoveries": z.number().int().gte(2).lte(16).describe("Maximum concurrent incoming/outgoing shard recoveries (normally replicas) are allowed to happen per node ."), "reindex_remote_whitelist": z.array(z.string()).describe("Allowlist of remote IP addresses for reindexing. Changing this value will cause all OpenSearch instances to restart.").optional(), "plugins_alerting_filter_by_backend_roles_enabled": z.boolean().describe("Enable or disable filtering of alerting by backend roles.") })]).optional()
}
```

### databases_get_ca

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_get_migrationstatus

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_update_onlinemigration

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "source": z.object({ "host": z.string().describe("The FQDN pointing to the database cluster's current primary node.").optional(), "port": z.number().int().describe("The port on which the database cluster is listening.").optional(), "dbname": z.string().describe("The name of the default database.").optional(), "username": z.string().describe("The default user for the database.").optional(), "password": z.string().describe("The randomly generated password for the default user.").optional() }),
  "disable_ssl": z.boolean().describe("Enables SSL encryption when connecting to the source database.").optional(),
  "ignore_dbs": z.array(z.string()).describe("List of databases that should be ignored during migration.").optional()
}
```

### databases_delete_onlinemigration

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "migration_id": z.string().describe("A unique identifier assigned to the online migration.")
}
```

### databases_update_region

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "region": z.string().describe("A slug identifier for the region to which the database cluster will be migrated.")
}
```

### databases_update_clustersize

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "size": z.string().describe("A slug identifier representing desired the size of the nodes in the database cluster."),
  "num_nodes": z.number().int().describe("The number of nodes in the database cluster. Valid values are are 1-3. In addition to the primary node, up to two standby nodes may be added for highly available configurations."),
  "storage_size_mib": z.number().int().describe("Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage.").optional()
}
```

### databases_list_firewall_rules

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_update_firewall_rules

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "rules": z.array(z.object({ "uuid": z.string().regex(new RegExp("^$|[0-9a-f]{8}\\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\\b[0-9a-f]{12}")).describe("A unique ID for the firewall rule itself.").optional(), "cluster_uuid": z.string().regex(new RegExp("^$|[0-9a-f]{8}\\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\\b[0-9a-f]{12}")).describe("A unique ID for the database cluster to which the rule is applied.").readonly().optional(), "type": z.enum(["droplet","k8s","ip_addr","tag","app"]).describe("The type of resource that the firewall rule allows to access the database cluster."), "value": z.string().describe("The ID of the specific resource, the name of a tag applied to a group of resources, or the IP address that the firewall rule allows to access the database cluster."), "created_at": z.string().datetime({ offset: true }).describe("A time value given in ISO8601 combined date and time format that represents when the firewall rule was created.").readonly().optional() })).optional()
}
```

### databases_update_maintenancewindow

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "day": z.string().describe("The day of the week on which to apply maintenance updates."),
  "hour": z.string().describe("The hour in UTC at which maintenance updates will be applied in 24 hour format."),
  "pending": z.boolean().describe("A boolean value indicating whether any maintenance is scheduled to be performed in the next window.").readonly().optional(),
  "description": z.array(z.string()).describe("A list of strings, each containing information about a pending maintenance update.").readonly().optional()
}
```

### databases_install_update

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_list_backups

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_list_replicas

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_create_replica

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_list_events_logs

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_get_replica

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "replica_name": z.string().describe("The name of the database replica.")
}
```

### databases_destroy_replica

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "replica_name": z.string().describe("The name of the database replica.")
}
```

### databases_promote_replica

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "replica_name": z.string().describe("The name of the database replica.")
}
```

### databases_list_users

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_add_user

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_get_user

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "username": z.string().describe("The name of the database user.")
}
```

### databases_delete_user

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "username": z.string().describe("The name of the database user.")
}
```

### databases_update_user

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "username": z.string().describe("The name of the database user.")
}
```

### databases_reset_auth

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "username": z.string().describe("The name of the database user."),
  "mysql_settings": z.object({ "auth_plugin": z.enum(["mysql_native_password","caching_sha2_password"]).describe("A string specifying the authentication method to be used for connections\nto the MySQL user account. The valid values are \`mysql_native_password\`\nor \`caching_sha2_password\`. If excluded when creating a new user, the\ndefault for the version of MySQL in use will be used. As of MySQL 8.0, the\ndefault is \`caching_sha2_password\`.\n") }).optional()
}
```

### databases_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_add

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "name": z.string().describe("The name of the database.")
}
```

### databases_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "database_name": z.string().describe("The name of the database.")
}
```

### databases_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "database_name": z.string().describe("The name of the database.")
}
```

### databases_list_connectionpools

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_add_connectionpool

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "name": z.string().describe("A unique name for the connection pool. Must be between 3 and 60 characters."),
  "mode": z.string().describe("The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement."),
  "size": z.number().int().describe("The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster."),
  "db": z.string().describe("The database for use with the connection pool."),
  "user": z.string().describe("The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user.").optional(),
  "connection": z.string().optional(),
  "private_connection": z.string().optional(),
  "standby_connection": z.string().optional(),
  "standby_private_connection": z.string().optional()
}
```

### databases_get_connectionpool

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "pool_name": z.string().describe("The name used to identify the connection pool.")
}
```

### databases_update_connectionpool

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "pool_name": z.string().describe("The name used to identify the connection pool."),
  "mode": z.string().describe("The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement."),
  "size": z.number().int().describe("The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster."),
  "db": z.string().describe("The database for use with the connection pool."),
  "user": z.string().describe("The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user.").optional()
}
```

### databases_delete_connectionpool

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "pool_name": z.string().describe("The name used to identify the connection pool.")
}
```

### databases_get_evictionpolicy

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_update_evictionpolicy

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "eviction_policy": z.enum(["noeviction","allkeys_lru","allkeys_random","volatile_lru","volatile_random","volatile_ttl"]).describe("A string specifying the desired eviction policy for the Redis cluster.\n\n- \`noeviction\`: Don't evict any data, returns error when memory limit is reached.\n- \`allkeys_lru:\` Evict any key, least recently used (LRU) first.\n- \`allkeys_random\`: Evict keys in a random order.\n- \`volatile_lru\`: Evict keys with expiration only, least recently used (LRU) first.\n- \`volatile_random\`: Evict keys with expiration only in a random order.\n- \`volatile_ttl\`: Evict keys with expiration only, shortest time-to-live (TTL) first.")
}
```

### databases_get_sql_mode

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_update_sql_mode

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "sql_mode": z.string().describe("A string specifying the configured SQL modes for the MySQL cluster.")
}
```

### databases_update_major_version

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "version": z.string().describe("A string representing the version of the database engine in use for the cluster.").optional()
}
```

### databases_list_kafka_topics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_create_kafka_topic

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_get_kafka_topic

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "topic_name": z.string().describe("The name used to identify the Kafka topic.")
}
```

### databases_update_kafka_topic

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "topic_name": z.string().describe("The name used to identify the Kafka topic.")
}
```

### databases_delete_kafka_topic

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "topic_name": z.string().describe("The name used to identify the Kafka topic.")
}
```

### databases_list_logsink

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_create_logsink

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_get_logsink

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "logsink_id": z.string().describe("A unique identifier for a logsink of a database cluster")
}
```

### databases_update_logsink

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "logsink_id": z.string().describe("A unique identifier for a logsink of a database cluster"),
  "config": z.union([z.object({ "server": z.string().describe("DNS name or IPv4 address of the rsyslog server"), "port": z.number().int().lte(65535).describe("The internal port on which the rsyslog server is listening"), "tls": z.boolean().describe("Use TLS (as the messages are not filtered and may contain sensitive information, it is highly recommended to set this to true if the remote server supports it)"), "format": z.enum(["rfc5424","rfc3164","custom"]).describe("Message format used by the server, this can be either rfc3164 (the old BSD style message format), \`rfc5424\` (current syslog message format) or custom"), "logline": z.string().describe("Conditional (required if \`format\` == \`custom\`).\n\nSyslog log line template for a custom format, supporting limited rsyslog style templating (using \`%tag%\`). Supported tags are: \`HOSTNAME\`, \`app-name\`, \`msg\`, \`msgid\`, \`pri\`, \`procid\`, \`structured-data\`, \`timestamp\` and \`timestamp:::date-rfc3339\`.\n").optional(), "sd": z.string().describe("content of the structured data block of rfc5424 message").optional(), "ca": z.string().describe("PEM encoded CA certificate").optional(), "key": z.string().describe("(PEM format) client key if the server requires client authentication").optional(), "cert": z.string().describe("(PEM format) client cert to use").optional() }), z.object({ "url": z.string().describe("Elasticsearch connection URL"), "index_prefix": z.string().describe("Elasticsearch index prefix"), "index_days_max": z.number().int().gte(1).lte(10000).describe("Maximum number of days of logs to keep"), "timeout": z.number().gte(10).lte(120).describe("Elasticsearch request timeout limit"), "ca": z.string().describe("PEM encoded CA certificate").optional() }), z.object({ "url": z.string().describe("Opensearch connection URL"), "index_prefix": z.string().describe("Opensearch index prefix"), "index_days_max": z.number().int().gte(1).lte(10000).describe("Maximum number of days of logs to keep"), "timeout": z.number().gte(10).lte(120).describe("Opensearch request timeout limit"), "ca": z.string().describe("PEM encoded CA certificate").optional() })])
}
```

### databases_delete_logsink

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "logsink_id": z.string().describe("A unique identifier for a logsink of a database cluster")
}
```

### databases_get_cluster_metrics_credentials

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### databases_update_cluster_metrics_credentials

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### databases_list_opeasearch_indexes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}
```

### databases_delete_opensearch_index

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "index_name": z.string().describe("The name of the OpenSearch index.")
}
```

### domains_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### domains_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().describe("The name of the domain itself. This should follow the standard domain format of domain.TLD. For instance, \`example.com\` is a valid domain name.").optional(),
  "ip_address": z.string().describe("This optional attribute may contain an IP address. When provided, an A record will be automatically created pointing to the apex domain.").optional(),
  "ttl": z.number().int().nullable().describe("This value is the time to live for the records on this domain, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.").readonly().optional(),
  "zone_file": z.string().nullable().describe("This attribute contains the complete contents of the zone file for the selected domain. Individual domain record resources should be used to get more granular control over records. However, this attribute can also be used to get information about the SOA record, which is created automatically and is not accessible as an individual record resource.").readonly().optional()
}
```

### domains_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "domain_name": z.string().describe("The name of the domain itself.")
}
```

### domains_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "domain_name": z.string().describe("The name of the domain itself.")
}
```

### domains_list_records

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "domain_name": z.string().describe("The name of the domain itself."),
  "name": z.string().describe("A fully qualified record name. For example, to only include records matching sub.example.com, send a GET request to \`/v2/domains/$DOMAIN_NAME/records?name=sub.example.com\`.").optional(),
  "type": z.enum(["A","AAAA","CAA","CNAME","MX","NS","SOA","SRV","TXT"]).describe("The type of the DNS record. For example: A, CNAME, TXT, ...").optional(),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### domains_create_record

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "domain_name": z.string().describe("The name of the domain itself.")
}
```

### domains_get_record

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "domain_name": z.string().describe("The name of the domain itself."),
  "domain_record_id": z.number().int().describe("The unique identifier of the domain record.")
}
```

### domains_patch_record

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "domain_name": z.string().describe("The name of the domain itself."),
  "domain_record_id": z.number().int().describe("The unique identifier of the domain record."),
  "id": z.number().int().describe("A unique identifier for each domain record.").readonly().optional(),
  "type": z.string().describe("The type of the DNS record. For example: A, CNAME, TXT, ..."),
  "name": z.string().describe("The host name, alias, or service being defined by the record.").optional(),
  "data": z.string().describe("Variable data depending on record type. For example, the \"data\" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates.").optional(),
  "priority": z.number().int().nullable().describe("The priority for SRV and MX records.").optional(),
  "port": z.number().int().nullable().describe("The port for SRV records.").optional(),
  "ttl": z.number().int().describe("This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.").optional(),
  "weight": z.number().int().nullable().describe("The weight for SRV records.").optional(),
  "flags": z.number().int().nullable().describe("An unsigned integer between 0-255 used for CAA records.").optional(),
  "tag": z.string().nullable().describe("The parameter tag for CAA records. Valid values are \"issue\", \"issuewild\", or \"iodef\"").optional()
}
```

### domains_update_record

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "domain_name": z.string().describe("The name of the domain itself."),
  "domain_record_id": z.number().int().describe("The unique identifier of the domain record."),
  "id": z.number().int().describe("A unique identifier for each domain record.").readonly().optional(),
  "type": z.string().describe("The type of the DNS record. For example: A, CNAME, TXT, ..."),
  "name": z.string().describe("The host name, alias, or service being defined by the record.").optional(),
  "data": z.string().describe("Variable data depending on record type. For example, the \"data\" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates.").optional(),
  "priority": z.number().int().nullable().describe("The priority for SRV and MX records.").optional(),
  "port": z.number().int().nullable().describe("The port for SRV records.").optional(),
  "ttl": z.number().int().describe("This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.").optional(),
  "weight": z.number().int().nullable().describe("The weight for SRV records.").optional(),
  "flags": z.number().int().nullable().describe("An unsigned integer between 0-255 used for CAA records.").optional(),
  "tag": z.string().nullable().describe("The parameter tag for CAA records. Valid values are \"issue\", \"issuewild\", or \"iodef\"").optional()
}
```

### domains_delete_record

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "domain_name": z.string().describe("The name of the domain itself."),
  "domain_record_id": z.number().int().describe("The unique identifier of the domain record.")
}
```

### droplets_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
  "tag_name": z.string().describe("Used to filter Droplets by a specific tag. Can not be combined with \`name\` or \`type\`.").optional(),
  "name": z.string().describe("Used to filter list response by Droplet name returning only exact matches. It is case-insensitive and can not be combined with \`tag_name\`.").optional(),
  "type": z.enum(["droplets","gpus"]).describe("When \`type\` is set to \`gpus\`, only GPU Droplets will be returned. By default, only non-GPU Droplets are returned. Can not be combined with \`tag_name\`.").optional()
}
```

### droplets_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### droplets_destroy_bytag

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "tag_name": z.string().describe("Specifies Droplets to be deleted by tag.")
}
```

### droplets_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance.")
}
```

### droplets_destroy

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance.")
}
```

### droplets_list_backups

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### droplets_get_backup_policy

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance.")
}
```

### droplets_list_backup_policies

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### droplets_list_supported_backup_policies

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### droplets_list_snapshots

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### dropletactions_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### dropletactions_post

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance.")
}
```

### dropletactions_post_bytag

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "tag_name": z.string().describe("Used to filter Droplets by a specific tag. Can not be combined with \`name\` or \`type\`.").optional()
}
```

### dropletactions_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance."),
  "action_id": z.number().int().gte(1).describe("A unique numeric ID that can be used to identify and reference an action.")
}
```

### droplets_list_kernels

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### droplets_list_firewalls

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### droplets_list_neighbors

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance.")
}
```

### droplets_list_associatedresources

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance.")
}
```

### droplets_destroy_withassociatedresourcesselective

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance."),
  "reserved_ips": z.array(z.string()).describe("An array of unique identifiers for the reserved IPs to be scheduled for deletion.").optional(),
  "snapshots": z.array(z.string()).describe("An array of unique identifiers for the snapshots to be scheduled for deletion.").optional(),
  "volumes": z.array(z.string()).describe("An array of unique identifiers for the volumes to be scheduled for deletion.").optional(),
  "volume_snapshots": z.array(z.string()).describe("An array of unique identifiers for the volume snapshots to be scheduled for deletion.").optional()
}
```

### droplets_destroy_withassociatedresourcesdangerous

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance."),
  "X-Dangerous": z.boolean().describe("Acknowledge this action will destroy the Droplet and all associated resources and _can not_ be reversed.")
}
```

### droplets_get_destroyassociatedresourcesstatus

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance.")
}
```

### droplets_destroy_retrywithassociatedresources

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance.")
}
```

### autoscalepools_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
  "name": z.string().describe("The name of the autoscale pool").optional()
}
```

### autoscalepools_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().describe("The human-readable name of the autoscale pool. This field cannot be updated"),
  "config": z.record(z.any()).and(z.object({ "target_number_instances": z.number().int().gte(1).lte(1000).describe("Fixed number of instances in an autoscale pool.") })).describe("The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration)."),
  "droplet_template": z.object({ "name": z.string().describe("The name(s) to be applied to all Droplets in the autoscale pool.").optional(), "region": z.enum(["nyc1","nyc2","nyc3","ams2","ams3","sfo1","sfo2","sfo3","sgp1","lon1","fra1","tor1","blr1","syd1"]).describe("The datacenter in which all of the Droplets will be created."), "size": z.string().describe("The Droplet size to be used for all Droplets in the autoscale pool."), "image": z.string().describe("The Droplet image to be used for all Droplets in the autoscale pool. You may specify the slug or the image ID."), "ssh_keys": z.array(z.string()).describe("The SSH keys to be installed on the Droplets in the autoscale pool. You can either specify the key ID or the fingerprint."), "tags": z.array(z.string()).describe("The tags to apply to each of the Droplets in the autoscale pool.").optional(), "vpc_uuid": z.string().describe("The VPC where the Droplets in the autoscale pool will be created. The VPC must be in the region where you want to create the Droplets.").optional(), "with_droplet_agent": z.boolean().describe("Installs the Droplet agent. This must be set to true to monitor Droplets for resource utilization scaling.").optional(), "project_id": z.string().describe("The project that the Droplets in the autoscale pool will belong to.").optional(), "ipv6": z.boolean().describe("Assigns a unique IPv6 address to each of the Droplets in the autoscale pool.").optional(), "user_data": z.string().describe("A string containing user data that cloud-init consumes to configure a Droplet on first boot. User data is often a cloud-config file or Bash script. It must be plain text and may not exceed 64 KiB in size.").optional() })
}
```

### autoscalepools_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool.")
}
```

### autoscalepools_update

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "name": z.string().describe("The human-readable name of the autoscale pool. This field cannot be updated"),
  "config": z.record(z.any()).and(z.object({ "target_number_instances": z.number().int().gte(1).lte(1000).describe("Fixed number of instances in an autoscale pool.") })).describe("The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration)."),
  "droplet_template": z.object({ "name": z.string().describe("The name(s) to be applied to all Droplets in the autoscale pool.").optional(), "region": z.enum(["nyc1","nyc2","nyc3","ams2","ams3","sfo1","sfo2","sfo3","sgp1","lon1","fra1","tor1","blr1","syd1"]).describe("The datacenter in which all of the Droplets will be created."), "size": z.string().describe("The Droplet size to be used for all Droplets in the autoscale pool."), "image": z.string().describe("The Droplet image to be used for all Droplets in the autoscale pool. You may specify the slug or the image ID."), "ssh_keys": z.array(z.string()).describe("The SSH keys to be installed on the Droplets in the autoscale pool. You can either specify the key ID or the fingerprint."), "tags": z.array(z.string()).describe("The tags to apply to each of the Droplets in the autoscale pool.").optional(), "vpc_uuid": z.string().describe("The VPC where the Droplets in the autoscale pool will be created. The VPC must be in the region where you want to create the Droplets.").optional(), "with_droplet_agent": z.boolean().describe("Installs the Droplet agent. This must be set to true to monitor Droplets for resource utilization scaling.").optional(), "project_id": z.string().describe("The project that the Droplets in the autoscale pool will belong to.").optional(), "ipv6": z.boolean().describe("Assigns a unique IPv6 address to each of the Droplets in the autoscale pool.").optional(), "user_data": z.string().describe("A string containing user data that cloud-init consumes to configure a Droplet on first boot. User data is often a cloud-config file or Bash script. It must be plain text and may not exceed 64 KiB in size.").optional() })
}
```

### autoscalepools_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool.")
}
```

### autoscalepools_delete_dangerous

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "X-Dangerous": z.boolean().describe("Acknowledge this action will destroy the autoscale pool and its associated resources and _can not_ be reversed.")
}
```

### autoscalepools_list_members

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### autoscalepools_list_history

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### firewalls_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### firewalls_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### firewalls_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall.")
}
```

### firewalls_update

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall.")
}
```

### firewalls_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall.")
}
```

### firewalls_assign_droplets

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall."),
  "droplet_ids": z.array(z.number().int()).describe("An array containing the IDs of the Droplets to be assigned to the firewall.").optional()
}
```

### firewalls_delete_droplets

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall."),
  "droplet_ids": z.array(z.number().int()).describe("An array containing the IDs of the Droplets to be removed from the firewall.").optional()
}
```

### firewalls_add_tags

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall."),
  "tags": z.string().optional()
}
```

### firewalls_delete_tags

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall."),
  "tags": z.string().optional()
}
```

### firewalls_add_rules

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall.")
}
```

### firewalls_delete_rules

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall.")
}
```

### floatingips_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### floatingips_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### floatingips_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "floating_ip": z.string().ip({ version: "v4" }).describe("A floating IP address.")
}
```

### floatingips_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "floating_ip": z.string().ip({ version: "v4" }).describe("A floating IP address.")
}
```

### floatingipsaction_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "floating_ip": z.string().ip({ version: "v4" }).describe("A floating IP address.")
}
```

### floatingipsaction_post

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "floating_ip": z.string().ip({ version: "v4" }).describe("A floating IP address.")
}
```

### floatingipsaction_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "floating_ip": z.string().ip({ version: "v4" }).describe("A floating IP address."),
  "action_id": z.number().int().gte(1).describe("A unique numeric ID that can be used to identify and reference an action.")
}
```

### functions_list_namespaces

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### functions_create_namespace

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "region": z.string().describe("The [datacenter region](https://docs.digitalocean.com/products/platform/availability-matrix/#available-datacenters) in which to create the namespace."),
  "label": z.string().describe("The namespace's unique name.")
}
```

### functions_get_namespace

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "namespace_id": z.string().describe("The ID of the namespace to be managed.")
}
```

### functions_delete_namespace

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "namespace_id": z.string().describe("The ID of the namespace to be managed.")
}
```

### functions_list_triggers

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "namespace_id": z.string().describe("The ID of the namespace to be managed.")
}
```

### functions_create_trigger

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "namespace_id": z.string().describe("The ID of the namespace to be managed."),
  "name": z.string().describe("The trigger's unique name within the namespace."),
  "function": z.string().describe("Name of function(action) that exists in the given namespace."),
  "type": z.string().describe("One of different type of triggers. Currently only SCHEDULED is supported."),
  "is_enabled": z.boolean().describe("Indicates weather the trigger is paused or unpaused."),
  "scheduled_details": z.object({ "cron": z.string().describe("valid cron expression string which is required for SCHEDULED type triggers."), "body": z.object({ "name": z.string().optional() }).nullable().describe("Optional data to be sent to function while triggering the function.").optional() }).describe("Trigger details for SCHEDULED type, where body is optional.\n")
}
```

### functions_get_trigger

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "namespace_id": z.string().describe("The ID of the namespace to be managed."),
  "trigger_name": z.string().describe("The name of the trigger to be managed.")
}
```

### functions_update_trigger

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "namespace_id": z.string().describe("The ID of the namespace to be managed."),
  "trigger_name": z.string().describe("The name of the trigger to be managed."),
  "is_enabled": z.boolean().describe("Indicates weather the trigger is paused or unpaused.").optional(),
  "scheduled_details": z.object({ "cron": z.string().describe("valid cron expression string which is required for SCHEDULED type triggers."), "body": z.object({ "name": z.string().optional() }).nullable().describe("Optional data to be sent to function while triggering the function.").optional() }).describe("Trigger details for SCHEDULED type, where body is optional.\n").optional()
}
```

### functions_delete_trigger

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "namespace_id": z.string().describe("The ID of the namespace to be managed."),
  "trigger_name": z.string().describe("The name of the trigger to be managed.")
}
```

### images_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "type": z.enum(["application","distribution"]).describe("Filters results based on image type which can be either \`application\` or \`distribution\`.").optional(),
  "private": z.boolean().describe("Used to filter only user images.").optional(),
  "tag_name": z.string().describe("Used to filter images by a specific tag.").optional(),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### images_create_custom

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### images_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "image_id": z.union([z.number().int(), z.string()]).describe("A unique number (id) or string (slug) used to identify and reference a\nspecific image.\n\n**Public** images can be identified by image \`id\` or \`slug\`.\n\n**Private** images *must* be identified by image \`id\`.\n")
}
```

### images_update

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "image_id": z.number().int().describe("A unique number that can be used to identify and reference a specific image."),
  "name": z.string().describe("The display name that has been given to an image.  This is what is shown in the control panel and is generally a descriptive title for the image in question.").optional(),
  "distribution": z.enum(["Arch Linux","CentOS","CoreOS","Debian","Fedora","Fedora Atomic","FreeBSD","Gentoo","openSUSE","RancherOS","Rocky Linux","Ubuntu","Unknown"]).describe("The name of a custom image's distribution. Currently, the valid values are  \`Arch Linux\`, \`CentOS\`, \`CoreOS\`, \`Debian\`, \`Fedora\`, \`Fedora Atomic\`,  \`FreeBSD\`, \`Gentoo\`, \`openSUSE\`, \`RancherOS\`, \`Rocky Linux\`, \`Ubuntu\`, and \`Unknown\`.  Any other value will be accepted but ignored, and \`Unknown\` will be used in its place.").optional(),
  "description": z.string().describe("An optional free-form text field to describe an image.").optional()
}
```

### images_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "image_id": z.number().int().describe("A unique number that can be used to identify and reference a specific image.")
}
```

### imageactions_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "image_id": z.number().int().describe("A unique number that can be used to identify and reference a specific image.")
}
```

### imageactions_post

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "image_id": z.number().int().describe("A unique number that can be used to identify and reference a specific image.")
}
```

### imageactions_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "image_id": z.number().int().describe("A unique number that can be used to identify and reference a specific image."),
  "action_id": z.number().int().gte(1).describe("A unique numeric ID that can be used to identify and reference an action.")
}
```

### kubernetes_list_clusters

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### kubernetes_create_cluster

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string().uuid().describe("A unique ID that can be used to identify and reference a Kubernetes cluster.").readonly().optional(),
  "name": z.string().describe("A human-readable name for a Kubernetes cluster."),
  "region": z.string().describe("The slug identifier for the region where the Kubernetes cluster is located."),
  "version": z.string().describe("The slug identifier for the version of Kubernetes used for the cluster. If set to a minor version (e.g. \"1.14\"), the latest version within it will be used (e.g. \"1.14.6-do.1\"); if set to \"latest\", the latest published version will be used. See the \`/v2/kubernetes/options\` endpoint to find all currently available versions."),
  "cluster_subnet": z.string().describe("The range of IP addresses for the overlay network of the Kubernetes cluster in CIDR notation.").optional(),
  "service_subnet": z.string().describe("The range of assignable IP addresses for services running in the Kubernetes cluster in CIDR notation.").optional(),
  "vpc_uuid": z.string().uuid().describe("A string specifying the UUID of the VPC to which the Kubernetes cluster is assigned.").optional(),
  "ipv4": z.string().describe("The public IPv4 address of the Kubernetes master node. This will not be set if high availability is configured on the cluster (v1.21+)").readonly().optional(),
  "endpoint": z.string().describe("The base URL of the API server on the Kubernetes master node.").readonly().optional(),
  "tags": z.array(z.string()).describe("An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged \`k8s\` and \`k8s:$K8S_CLUSTER_ID\`.").optional(),
  "node_pools": z.array(z.string()).describe("An object specifying the details of the worker nodes available to the Kubernetes cluster."),
  "maintenance_policy": z.object({ "start_time": z.string().describe("The start time in UTC of the maintenance window policy in 24-hour clock format / HH:MM notation (e.g., \`15:00\`).").optional(), "duration": z.string().describe("The duration of the maintenance window policy in human-readable format.").readonly().optional(), "day": z.enum(["any","monday","tuesday","wednesday","thursday","friday","saturday","sunday"]).describe("The day of the maintenance window policy. May be one of \`monday\` through \`sunday\`, or \`any\` to indicate an arbitrary week day.").optional() }).nullable().describe("An object specifying the maintenance window policy for the Kubernetes cluster.").optional(),
  "auto_upgrade": z.boolean().describe("A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window.").optional(),
  "status": z.object({ "state": z.enum(["running","provisioning","degraded","error","deleted","upgrading","deleting"]).describe("A string indicating the current status of the cluster.").optional(), "message": z.string().describe("An optional message providing additional information about the current cluster state.").optional() }).describe("An object containing a \`state\` attribute whose value is set to a string indicating the current status of the cluster.").readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).describe("A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was created.").readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).describe("A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was last updated.").readonly().optional(),
  "surge_upgrade": z.boolean().describe("A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes.").optional(),
  "ha": z.boolean().describe("A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled.").optional(),
  "registry_enabled": z.boolean().describe("A read-only boolean value indicating if a container registry is integrated with the cluster.").readonly().optional(),
  "control_plane_firewall": z.object({ "enabled": z.boolean().describe("Indicates whether the control plane firewall is enabled.").optional(), "allowed_addresses": z.array(z.string()).describe("An array of public addresses (IPv4 or CIDR) allowed to access the control plane.").optional() }).nullable().describe("An object specifying the control plane firewall for the Kubernetes cluster. Control plane firewall is in early availability (invite only).").optional(),
  "cluster_autoscaler_configuration": z.object({ "scale_down_utilization_threshold": z.number().describe("Used to customize when cluster autoscaler scales down non-empty nodes by setting the node utilization threshold.").optional(), "scale_down_unneeded_time": z.string().describe("Used to customize how long a node is unneeded before being scaled down.").optional() }).nullable().describe("An object specifying custom cluster autoscaler configuration.").optional(),
  "routing_agent": z.object({ "enabled": z.boolean().describe("Indicates whether the routing-agent component is enabled.").optional() }).nullable().describe("An object specifying whether the routing-agent component should be enabled for the Kubernetes cluster.").optional()
}
```

### kubernetes_get_cluster

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster.")
}
```

### kubernetes_update_cluster

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "name": z.string().describe("A human-readable name for a Kubernetes cluster."),
  "tags": z.array(z.string()).describe("An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged \`k8s\` and \`k8s:$K8S_CLUSTER_ID\`.").optional(),
  "maintenance_policy": z.object({ "start_time": z.string().describe("The start time in UTC of the maintenance window policy in 24-hour clock format / HH:MM notation (e.g., \`15:00\`).").optional(), "duration": z.string().describe("The duration of the maintenance window policy in human-readable format.").readonly().optional(), "day": z.enum(["any","monday","tuesday","wednesday","thursday","friday","saturday","sunday"]).describe("The day of the maintenance window policy. May be one of \`monday\` through \`sunday\`, or \`any\` to indicate an arbitrary week day.").optional() }).nullable().describe("An object specifying the maintenance window policy for the Kubernetes cluster.").optional(),
  "auto_upgrade": z.boolean().describe("A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window.").optional(),
  "surge_upgrade": z.boolean().describe("A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes.").optional(),
  "ha": z.boolean().describe("A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled.").optional(),
  "control_plane_firewall": z.object({ "enabled": z.boolean().describe("Indicates whether the control plane firewall is enabled.").optional(), "allowed_addresses": z.array(z.string()).describe("An array of public addresses (IPv4 or CIDR) allowed to access the control plane.").optional() }).nullable().describe("An object specifying the control plane firewall for the Kubernetes cluster. Control plane firewall is in early availability (invite only).").optional(),
  "cluster_autoscaler_configuration": z.object({ "scale_down_utilization_threshold": z.number().describe("Used to customize when cluster autoscaler scales down non-empty nodes by setting the node utilization threshold.").optional(), "scale_down_unneeded_time": z.string().describe("Used to customize how long a node is unneeded before being scaled down.").optional() }).nullable().describe("An object specifying custom cluster autoscaler configuration.").optional(),
  "routing_agent": z.object({ "enabled": z.boolean().describe("Indicates whether the routing-agent component is enabled.").optional() }).nullable().describe("An object specifying whether the routing-agent component should be enabled for the Kubernetes cluster.").optional()
}
```

### kubernetes_delete_cluster

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster.")
}
```

### kubernetes_list_associatedresources

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster.")
}
```

### kubernetes_destroy_associatedresourcesselective

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "load_balancers": z.array(z.string()).describe("A list of IDs for associated load balancers to destroy along with the cluster.").optional(),
  "volumes": z.array(z.string()).describe("A list of IDs for associated volumes to destroy along with the cluster.").optional(),
  "volume_snapshots": z.array(z.string()).describe("A list of IDs for associated volume snapshots to destroy along with the cluster.").optional()
}
```

### kubernetes_destroy_associatedresourcesdangerous

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster.")
}
```

### kubernetes_get_kubeconfig

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "expiry_seconds": z.number().int().gte(0).describe("The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry.").optional()
}
```

### kubernetes_get_credentials

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "expiry_seconds": z.number().int().gte(0).describe("The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry.").optional()
}
```

### kubernetes_get_availableupgrades

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster.")
}
```

### kubernetes_upgrade_cluster

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "version": z.string().describe("The slug identifier for the version of Kubernetes that the cluster will be upgraded to.").optional()
}
```

### kubernetes_list_nodepools

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster.")
}
```

### kubernetes_add_nodepool

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster.")
}
```

### kubernetes_get_nodepool

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "node_pool_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes node pool.")
}
```

### kubernetes_update_nodepool

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "node_pool_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes node pool.")
}
```

### kubernetes_delete_nodepool

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "node_pool_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes node pool.")
}
```

### kubernetes_delete_node

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "node_pool_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes node pool."),
  "node_id": z.string().uuid().describe("A unique ID that can be used to reference a node in a Kubernetes node pool."),
  "skip_drain": z.number().int().gte(0).lte(1).describe("Specifies whether or not to drain workloads from a node before it is deleted. Setting it to \`1\` causes node draining to be skipped. Omitting the query parameter or setting its value to \`0\` carries out draining prior to deletion.").optional(),
  "replace": z.number().int().gte(0).lte(1).describe("Specifies whether or not to replace a node after it has been deleted. Setting it to \`1\` causes the node to be replaced by a new one after deletion. Omitting the query parameter or setting its value to \`0\` deletes without replacement.").optional()
}
```

### kubernetes_recycle_node_pool

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "node_pool_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes node pool."),
  "nodes": z.array(z.string()).optional()
}
```

### kubernetes_get_clusteruser

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster.")
}
```

### kubernetes_list_options

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### kubernetes_run_clusterlint

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "include_groups": z.array(z.string()).describe("An array of check groups that will be run when clusterlint executes checks.").optional(),
  "include_checks": z.array(z.string()).describe("An array of checks that will be run when clusterlint executes checks.").optional(),
  "exclude_groups": z.array(z.string()).describe("An array of check groups that will be omitted when clusterlint executes checks.").optional(),
  "exclude_checks": z.array(z.string()).describe("An array of checks that will be run when clusterlint executes checks.").optional()
}
```

### kubernetes_get_clusterlintresults

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "run_id": z.string().uuid().describe("Specifies the clusterlint run whose results will be retrieved.").optional()
}
```

### kubernetes_add_registry

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_uuids": z.array(z.string()).describe("An array containing the UUIDs of Kubernetes clusters.").optional()
}
```

### kubernetes_remove_registry

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "cluster_uuids": z.array(z.string()).describe("An array containing the UUIDs of Kubernetes clusters.").optional()
}
```

### loadbalancers_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### loadbalancers_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### loadbalancers_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer.")
}
```

### loadbalancers_update

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer.")
}
```

### loadbalancers_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer.")
}
```

### loadbalancers_delete_cache

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer.")
}
```

### loadbalancers_add_droplets

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "droplet_ids": z.array(z.number().int()).describe("An array containing the IDs of the Droplets assigned to the load balancer.").optional()
}
```

### loadbalancers_remove_droplets

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "droplet_ids": z.array(z.number().int()).describe("An array containing the IDs of the Droplets assigned to the load balancer.").optional()
}
```

### loadbalancers_add_forwardingrules

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "forwarding_rules": z.array(z.object({ "entry_protocol": z.enum(["http","https","http2","http3","tcp","udp"]).describe("The protocol used for traffic to the load balancer. The possible values are: \`http\`, \`https\`, \`http2\`, \`http3\`, \`tcp\`, or \`udp\`. If you set the  \`entry_protocol\` to \`udp\`, the \`target_protocol\` must be set to \`udp\`.  When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.\n"), "entry_port": z.number().int().describe("An integer representing the port on which the load balancer instance will listen."), "target_protocol": z.enum(["http","https","http2","tcp","udp"]).describe("The protocol used for traffic from the load balancer to the backend Droplets. The possible values are: \`http\`, \`https\`, \`http2\`, \`tcp\`, or \`udp\`. If you set the \`target_protocol\` to \`udp\`, the \`entry_protocol\` must be set to  \`udp\`. When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.\n"), "target_port": z.number().int().describe("An integer representing the port on the backend Droplets to which the load balancer will send traffic."), "certificate_id": z.string().describe("The ID of the TLS certificate used for SSL termination if enabled.").optional(), "tls_passthrough": z.boolean().describe("A boolean value indicating whether SSL encrypted traffic will be passed through to the backend Droplets.").optional() }).describe("An object specifying a forwarding rule for a load balancer.")).min(1).optional()
}
```

### loadbalancers_remove_forwardingrules

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "forwarding_rules": z.array(z.object({ "entry_protocol": z.enum(["http","https","http2","http3","tcp","udp"]).describe("The protocol used for traffic to the load balancer. The possible values are: \`http\`, \`https\`, \`http2\`, \`http3\`, \`tcp\`, or \`udp\`. If you set the  \`entry_protocol\` to \`udp\`, the \`target_protocol\` must be set to \`udp\`.  When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.\n"), "entry_port": z.number().int().describe("An integer representing the port on which the load balancer instance will listen."), "target_protocol": z.enum(["http","https","http2","tcp","udp"]).describe("The protocol used for traffic from the load balancer to the backend Droplets. The possible values are: \`http\`, \`https\`, \`http2\`, \`tcp\`, or \`udp\`. If you set the \`target_protocol\` to \`udp\`, the \`entry_protocol\` must be set to  \`udp\`. When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.\n"), "target_port": z.number().int().describe("An integer representing the port on the backend Droplets to which the load balancer will send traffic."), "certificate_id": z.string().describe("The ID of the TLS certificate used for SSL termination if enabled.").optional(), "tls_passthrough": z.boolean().describe("A boolean value indicating whether SSL encrypted traffic will be passed through to the backend Droplets.").optional() }).describe("An object specifying a forwarding rule for a load balancer.")).min(1).optional()
}
```

### monitoring_list_alertpolicy

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### monitoring_create_alertpolicy

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "alerts": z.object({ "email": z.array(z.string()).describe("An email to notify on an alert trigger."), "slack": z.array(z.object({ "channel": z.string().describe("Slack channel to notify of an alert trigger."), "url": z.string().describe("Slack Webhook URL.") })).describe("Slack integration details.") }),
  "compare": z.enum(["GreaterThan","LessThan"]),
  "description": z.string(),
  "enabled": z.boolean(),
  "entities": z.array(z.string()),
  "tags": z.array(z.string()),
  "type": z.enum(["v1/insights/droplet/load_1","v1/insights/droplet/load_5","v1/insights/droplet/load_15","v1/insights/droplet/memory_utilization_percent","v1/insights/droplet/disk_utilization_percent","v1/insights/droplet/cpu","v1/insights/droplet/disk_read","v1/insights/droplet/disk_write","v1/insights/droplet/public_outbound_bandwidth","v1/insights/droplet/public_inbound_bandwidth","v1/insights/droplet/private_outbound_bandwidth","v1/insights/droplet/private_inbound_bandwidth","v1/insights/lbaas/avg_cpu_utilization_percent","v1/insights/lbaas/connection_utilization_percent","v1/insights/lbaas/droplet_health","v1/insights/lbaas/tls_connections_per_second_utilization_percent","v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx","v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx","v1/insights/lbaas/increase_in_http_error_rate_count_5xx","v1/insights/lbaas/increase_in_http_error_rate_count_4xx","v1/insights/lbaas/high_http_request_response_time","v1/insights/lbaas/high_http_request_response_time_50p","v1/insights/lbaas/high_http_request_response_time_95p","v1/insights/lbaas/high_http_request_response_time_99p","v1/dbaas/alerts/load_15_alerts","v1/dbaas/alerts/memory_utilization_alerts","v1/dbaas/alerts/disk_utilization_alerts","v1/dbaas/alerts/cpu_alerts","v1/droplet/autoscale_alerts/current_instances","v1/droplet/autoscale_alerts/target_instances","v1/droplet/autoscale_alerts/current_cpu_utilization","v1/droplet/autoscale_alerts/target_cpu_utilization","v1/droplet/autoscale_alerts/current_memory_utilization","v1/droplet/autoscale_alerts/target_memory_utilization","v1/droplet/autoscale_alerts/scale_up","v1/droplet/autoscale_alerts/scale_down"]),
  "value": z.number(),
  "window": z.enum(["5m","10m","30m","1h"])
}
```

### monitoring_get_alertpolicy

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "alert_uuid": z.string().describe("A unique identifier for an alert policy.")
}
```

### monitoring_update_alertpolicy

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "alert_uuid": z.string().describe("A unique identifier for an alert policy."),
  "alerts": z.object({ "email": z.array(z.string()).describe("An email to notify on an alert trigger."), "slack": z.array(z.object({ "channel": z.string().describe("Slack channel to notify of an alert trigger."), "url": z.string().describe("Slack Webhook URL.") })).describe("Slack integration details.") }),
  "compare": z.enum(["GreaterThan","LessThan"]),
  "description": z.string(),
  "enabled": z.boolean(),
  "entities": z.array(z.string()),
  "tags": z.array(z.string()),
  "type": z.enum(["v1/insights/droplet/load_1","v1/insights/droplet/load_5","v1/insights/droplet/load_15","v1/insights/droplet/memory_utilization_percent","v1/insights/droplet/disk_utilization_percent","v1/insights/droplet/cpu","v1/insights/droplet/disk_read","v1/insights/droplet/disk_write","v1/insights/droplet/public_outbound_bandwidth","v1/insights/droplet/public_inbound_bandwidth","v1/insights/droplet/private_outbound_bandwidth","v1/insights/droplet/private_inbound_bandwidth","v1/insights/lbaas/avg_cpu_utilization_percent","v1/insights/lbaas/connection_utilization_percent","v1/insights/lbaas/droplet_health","v1/insights/lbaas/tls_connections_per_second_utilization_percent","v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx","v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx","v1/insights/lbaas/increase_in_http_error_rate_count_5xx","v1/insights/lbaas/increase_in_http_error_rate_count_4xx","v1/insights/lbaas/high_http_request_response_time","v1/insights/lbaas/high_http_request_response_time_50p","v1/insights/lbaas/high_http_request_response_time_95p","v1/insights/lbaas/high_http_request_response_time_99p","v1/dbaas/alerts/load_15_alerts","v1/dbaas/alerts/memory_utilization_alerts","v1/dbaas/alerts/disk_utilization_alerts","v1/dbaas/alerts/cpu_alerts","v1/droplet/autoscale_alerts/current_instances","v1/droplet/autoscale_alerts/target_instances","v1/droplet/autoscale_alerts/current_cpu_utilization","v1/droplet/autoscale_alerts/target_cpu_utilization","v1/droplet/autoscale_alerts/current_memory_utilization","v1/droplet/autoscale_alerts/target_memory_utilization","v1/droplet/autoscale_alerts/scale_up","v1/droplet/autoscale_alerts/scale_down"]),
  "value": z.number(),
  "window": z.enum(["5m","10m","30m","1h"])
}
```

### monitoring_delete_alertpolicy

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "alert_uuid": z.string().describe("A unique identifier for an alert policy.")
}
```

### monitoring_get_dropletbandwidthmetrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "host_id": z.string().describe("The droplet ID."),
  "interface": z.enum(["private","public"]).describe("The network interface."),
  "direction": z.enum(["inbound","outbound"]).describe("The traffic direction."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_dropletcpumetrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "host_id": z.string().describe("The droplet ID."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_dropletfilesystemfreemetrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "host_id": z.string().describe("The droplet ID."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_dropletfilesystemsizemetrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "host_id": z.string().describe("The droplet ID."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_dropletload1metrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "host_id": z.string().describe("The droplet ID."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_dropletload5metrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "host_id": z.string().describe("The droplet ID."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_dropletload15metrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "host_id": z.string().describe("The droplet ID."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_dropletmemorycachedmetrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "host_id": z.string().describe("The droplet ID."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_dropletmemoryfreemetrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "host_id": z.string().describe("The droplet ID."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_dropletmemorytotalmetrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "host_id": z.string().describe("The droplet ID."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_dropletmemoryavailablemetrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "host_id": z.string().describe("The droplet ID."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_appmemorypercentagemetrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app UUID."),
  "app_component": z.string().describe("The app component name.").optional(),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_appcpupercentagemetrics

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app UUID."),
  "app_component": z.string().describe("The app component name.").optional(),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_apprestartcountmetrics_yml

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "app_id": z.string().describe("The app UUID."),
  "app_component": z.string().describe("The app component name.").optional(),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_connections_current

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_connections_limit

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_cpu_utilization

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_firewall_dropped_bytes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_firewall_dropped_packets

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_http_responses

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_http_requests_per_second

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_network_throughput_http

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_network_throughput_udp

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_network_throughput_tcp

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_nlb_tcp_network_throughput

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_nlb_udp_network_throughput

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_tls_connections_current

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_tls_connections_limit

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_frontend_tls_connections_exceeding_rate_limit

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_droplets_http_session_duration_avg

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_droplets_http_session_duration_50p

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_droplets_http_session_duration_95p

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_droplets_http_response_time_avg

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_droplets_http_response_time_50p

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_droplets_http_response_time_95p

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_droplets_http_response_time_99p

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_droplets_queue_size

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_droplets_http_responses

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_droplets_connections

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_droplets_health_checks

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_lb_droplets_downtime

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_droplet_autoscale_current_instances

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_droplet_autoscale_target_instances

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_droplet_autoscale_current_cpu_utilization_yml

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_droplet_autoscale_target_cpu_utilization

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_droplet_autoscale_current_memory_utilization

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_get_droplet_autoscale_target_memory_utilization

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}
```

### monitoring_create_destination

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().describe("destination name").optional(),
  "type": z.enum(["opensearch_dbaas","opensearch_ext"]).describe("The destination type. \`opensearch_dbaas\` for a DigitalOcean managed OpenSearch\ncluster or \`opensearch_ext\` for an externally managed one.\n"),
  "config": z.object({ "credentials": z.object({ "username": z.string().optional(), "password": z.string().optional() }).describe("Credentials for an OpenSearch cluster user. Optional if \`cluster_uuid\` is passed.").optional(), "endpoint": z.string().describe("host of the OpenSearch cluster"), "cluster_uuid": z.string().describe("A unique identifier for a managed OpenSearch cluster.").optional(), "cluster_name": z.string().describe("Name of a managed OpenSearch cluster.").optional(), "index_name": z.string().describe("OpenSearch index to send logs to.").optional(), "retention_days": z.number().int().describe("Number of days to retain logs in an OpenSearch cluster.") })
}
```

### monitoring_list_destinations

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### monitoring_get_destination

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "destination_uuid": z.string().describe("A unique identifier for a destination.")
}
```

### monitoring_update_destination

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "destination_uuid": z.string().describe("A unique identifier for a destination."),
  "name": z.string().describe("destination name").optional(),
  "type": z.enum(["opensearch_dbaas","opensearch_ext"]).describe("The destination type. \`opensearch_dbaas\` for a DigitalOcean managed OpenSearch\ncluster or \`opensearch_ext\` for an externally managed one.\n"),
  "config": z.object({ "credentials": z.object({ "username": z.string().optional(), "password": z.string().optional() }).describe("Credentials for an OpenSearch cluster user. Optional if \`cluster_uuid\` is passed.").optional(), "endpoint": z.string().describe("host of the OpenSearch cluster"), "cluster_uuid": z.string().describe("A unique identifier for a managed OpenSearch cluster.").optional(), "cluster_name": z.string().describe("Name of a managed OpenSearch cluster.").optional(), "index_name": z.string().describe("OpenSearch index to send logs to.").optional(), "retention_days": z.number().int().describe("Number of days to retain logs in an OpenSearch cluster.") })
}
```

### monitoring_delete_destination

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "destination_uuid": z.string().describe("A unique identifier for a destination.")
}
```

### monitoring_create_sink

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "destination_uuid": z.string().describe("A unique identifier for an already-existing destination.").optional(),
  "resources": z.array(z.object({ "urn": z.string().regex(new RegExp("^do:kubernetes:.*")).describe("The uniform resource name (URN) for the resource in the format do:resource_type:resource_id."), "name": z.string().describe("resource name").optional() })).describe("List of resources identified by their URNs.").optional()
}
```

### monitoring_list_sinks

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "resource_id": z.string().regex(new RegExp("^do:(dbaas|domain|droplet|floatingip|loadbalancer|space|volume|kubernetes|vpc):.*")).describe("The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.").optional()
}
```

### monitoring_get_sink

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "sink_uuid": z.string().describe("A unique identifier for a sink.")
}
```

### monitoring_delete_sink

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "sink_uuid": z.string().describe("A unique identifier for a sink.")
}
```

### partnerattachments_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### partnerattachments_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().regex(new RegExp("^[a-zA-Z0-9\\-\\.]+$")).describe("The name of the partner attachment. Must be unique and may only contain alphanumeric characters, dashes, and periods."),
  "connection_bandwidth_in_mbps": z.union([z.literal(1000), z.literal(2000), z.literal(5000), z.literal(10000)]).describe("Bandwidth (in Mbps) of the connection."),
  "region": z.string(),
  "naas_provider": z.string(),
  "vpc_ids": z.array(z.string()).min(1).describe("An array of VPCs IDs."),
  "parent_uuid": z.string().describe("Optional associated partner attachment UUID").optional(),
  "bgp": z.object({ "local_router_ip": z.string().describe("IP of the DO router"), "peer_router_ip": z.string().describe("IP of the Naas Provider router"), "peer_router_asn": z.number().int().describe("ASN of the peer router"), "auth_key": z.string().describe("BGP Auth Key") }).describe("Optional BGP configurations").optional()
}
```

### partnerattachments_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pa_id": z.string().describe("A unique identifier for a partner attachment.")
}
```

### partnerattachments_patch

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pa_id": z.string().describe("A unique identifier for a partner attachment.")
}
```

### partnerattachments_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pa_id": z.string().describe("A unique identifier for a partner attachment.")
}
```

### partnerattachments_get_bgp_auth_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pa_id": z.string().describe("A unique identifier for a partner attachment.")
}
```

### partnerattachments_list_remote_routes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pa_id": z.string().describe("A unique identifier for a partner attachment."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### partnerattachments_update_remote_routes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pa_id": z.string().describe("A unique identifier for a partner attachment."),
  "remote_routes": z.array(z.object({ "cidr": z.string().describe("A CIDR block representing a remote route.").optional() })).optional()
}
```

### partnerattachments_get_service_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pa_id": z.string().describe("A unique identifier for a partner attachment.")
}
```

### partnerattachments_create_service_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "pa_id": z.string().describe("A unique identifier for a partner attachment.")
}
```

### projects_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### projects_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### projects_get_default

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### projects_update_default

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### projects_patch_default

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### projects_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().uuid().describe("A unique identifier for a project.")
}
```

### projects_update

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().uuid().describe("A unique identifier for a project.")
}
```

### projects_patch

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().uuid().describe("A unique identifier for a project.")
}
```

### projects_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().uuid().describe("A unique identifier for a project.")
}
```

### projects_list_resources

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().uuid().describe("A unique identifier for a project."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### projects_assign_resources

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().uuid().describe("A unique identifier for a project."),
  "resources": z.array(z.string().regex(new RegExp("^do:(dbaas|domain|droplet|floatingip|loadbalancer|space|volume|kubernetes|vpc):.*")).describe("The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.")).describe("A list of uniform resource names (URNs) to be added to a project.").optional()
}
```

### projects_list_resources_default

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### projects_assign_resources_default

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "resources": z.array(z.string().regex(new RegExp("^do:(dbaas|domain|droplet|floatingip|loadbalancer|space|volume|kubernetes|vpc):.*")).describe("The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.")).describe("A list of uniform resource names (URNs) to be added to a project.").optional()
}
```

### regions_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### registry_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### registry_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().regex(new RegExp("^[a-z0-9-]{1,63}$")).max(63).describe("A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and \`-\`, up to a limit of 63 characters."),
  "subscription_tier_slug": z.enum(["starter","basic","professional"]).describe("The slug of the subscription tier to sign up for. Valid values can be retrieved using the options endpoint."),
  "region": z.enum(["nyc3","sfo3","ams3","sgp1","fra1"]).describe("Slug of the region where registry data is stored. When not provided, a region will be selected.").optional()
}
```

### registry_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### registry_get_subscription

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### registry_update_subscription

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "tier_slug": z.enum(["starter","basic","professional"]).describe("The slug of the subscription tier to sign up for.").optional()
}
```

### registry_get_dockercredentials

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "expiry_seconds": z.number().int().gte(0).describe("The duration in seconds that the returned registry credentials will be valid. If not set or 0, the credentials will not expire.").optional(),
  "read_write": z.boolean().describe("By default, the registry credentials allow for read-only access. Set this query parameter to \`true\` to obtain read-write credentials.").optional()
}
```

### registry_validate_name

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().regex(new RegExp("^[a-z0-9-]{1,63}$")).max(63).describe("A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and \`-\`, up to a limit of 63 characters.")
}
```

### registry_list_repositories

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "registry_name": z.string().describe("The name of a container registry."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### registry_list_repositoriesv2

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "registry_name": z.string().describe("The name of a container registry."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return. Ignored when 'page_token' is provided.").optional(),
  "page_token": z.string().describe("Token to retrieve of the next or previous set of results more quickly than using 'page'.").optional()
}
```

### registry_list_repositorytags

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "registry_name": z.string().describe("The name of a container registry."),
  "repository_name": z.string().describe("The name of a container registry repository. If the name contains \`/\` characters, they must be URL-encoded, e.g. \`%2F\`."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### registry_delete_repositorytag

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "registry_name": z.string().describe("The name of a container registry."),
  "repository_name": z.string().describe("The name of a container registry repository. If the name contains \`/\` characters, they must be URL-encoded, e.g. \`%2F\`."),
  "repository_tag": z.string().describe("The name of a container registry repository tag.")
}
```

### registry_list_repositorymanifests

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "registry_name": z.string().describe("The name of a container registry."),
  "repository_name": z.string().describe("The name of a container registry repository. If the name contains \`/\` characters, they must be URL-encoded, e.g. \`%2F\`."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### registry_delete_repositorymanifest

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "registry_name": z.string().describe("The name of a container registry."),
  "repository_name": z.string().describe("The name of a container registry repository. If the name contains \`/\` characters, they must be URL-encoded, e.g. \`%2F\`."),
  "manifest_digest": z.string().describe("The manifest digest of a container registry repository tag.")
}
```

### registry_run_garbagecollection

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "registry_name": z.string().describe("The name of a container registry.")
}
```

### registry_get_garbagecollection

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "registry_name": z.string().describe("The name of a container registry.")
}
```

### registry_list_garbagecollections

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "registry_name": z.string().describe("The name of a container registry."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### registry_update_garbagecollection

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "registry_name": z.string().describe("The name of a container registry."),
  "garbage_collection_uuid": z.string().describe("The UUID of a garbage collection run."),
  "cancel": z.boolean().describe("A boolean value indicating that the garbage collection should be cancelled.").optional()
}
```

### registry_get_options

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### droplets_list_neighborsids

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### reservedips_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### reservedips_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### reservedips_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "reserved_ip": z.string().ip({ version: "v4" }).describe("A reserved IP address.")
}
```

### reservedips_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "reserved_ip": z.string().ip({ version: "v4" }).describe("A reserved IP address.")
}
```

### reservedipsactions_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "reserved_ip": z.string().ip({ version: "v4" }).describe("A reserved IP address.")
}
```

### reservedipsactions_post

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "reserved_ip": z.string().ip({ version: "v4" }).describe("A reserved IP address.")
}
```

### reservedipsactions_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "reserved_ip": z.string().ip({ version: "v4" }).describe("A reserved IP address."),
  "action_id": z.number().int().gte(1).describe("A unique numeric ID that can be used to identify and reference an action.")
}
```

### reservedipv6_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### reservedipv6_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "region_slug": z.string().describe("The slug identifier for the region the reserved IPv6 will be reserved to.")
}
```

### reservedipv6_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "reserved_ipv6": z.string().ip({ version: "v6" }).describe("A reserved IPv6 address.")
}
```

### reservedipv6_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "reserved_ipv6": z.string().ip({ version: "v6" }).describe("A reserved IPv6 address.")
}
```

### reservedipv6actions_post

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "reserved_ipv6": z.string().ip({ version: "v6" }).describe("A reserved IPv6 address.")
}
```

### sizes_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### snapshots_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
  "resource_type": z.enum(["droplet","volume"]).describe("Used to filter snapshots by a resource type.").optional()
}
```

### snapshots_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "snapshot_id": z.union([z.number().int().describe("The ID of a Droplet snapshot."), z.string().describe("The ID of a volume snapshot.")]).describe("Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot.")
}
```

### snapshots_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "snapshot_id": z.union([z.number().int().describe("The ID of a Droplet snapshot."), z.string().describe("The ID of a volume snapshot.")]).describe("Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot.")
}
```

### spaceskey_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
  "sort": z.string().describe("The field to sort by.").optional(),
  "sort_direction": z.string().describe("The direction to sort by. Possible values are \`asc\` or \`desc\`.").optional(),
  "name": z.string().describe("The access key's name.").optional(),
  "bucket": z.string().describe("The bucket's name.").optional(),
  "permission": z.string().describe("The permission of the access key. Possible values are \`read\`, \`readwrite\`, \`fullaccess\`, or an empty string.").optional()
}
```

### spaceskey_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().describe("The access key's name.").optional(),
  "grants": z.array(z.object({ "bucket": z.string().describe("The name of the bucket."), "permission": z.string().describe("The permission to grant to the user. Possible values are \`read\`, \`readwrite\`, \`fullaccess\`, or an empty string.") })).describe("The list of permissions for the access key.").optional(),
  "access_key": z.string().describe("The Access Key ID used to access a bucket.").readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).describe("The date and time the key was created.").readonly().optional()
}
```

### spaceskey_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "access_key": z.string().describe("The access key's ID.")
}
```

### spaceskey_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "access_key": z.string().describe("The access key's ID.")
}
```

### spaceskey_update

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "access_key": z.string().describe("The access key's ID."),
  "name": z.string().describe("The access key's name.").optional(),
  "grants": z.array(z.object({ "bucket": z.string().describe("The name of the bucket."), "permission": z.string().describe("The permission to grant to the user. Possible values are \`read\`, \`readwrite\`, \`fullaccess\`, or an empty string.") })).describe("The list of permissions for the access key.").optional(),
  "b_access_key": z.string().describe("The Access Key ID used to access a bucket.").readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).describe("The date and time the key was created.").readonly().optional()
}
```

### spaceskey_patch

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "access_key": z.string().describe("The access key's ID."),
  "name": z.string().describe("The access key's name.").optional(),
  "grants": z.array(z.object({ "bucket": z.string().describe("The name of the bucket."), "permission": z.string().describe("The permission to grant to the user. Possible values are \`read\`, \`readwrite\`, \`fullaccess\`, or an empty string.") })).describe("The list of permissions for the access key.").optional(),
  "b_access_key": z.string().describe("The Access Key ID used to access a bucket.").readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).describe("The date and time the key was created.").readonly().optional()
}
```

### tags_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### tags_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().regex(new RegExp("^[a-zA-Z0-9_\\-\\:]+$")).max(255).describe("The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores.\nThere is a limit of 255 characters per tag.\n\n**Note:** Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.\n\nWhen working with tags in the API, you must use the tag's canonical capitalization. For example, if you create a tag named \"PROD\", the URL to add that tag to a resource would be \`https://api.digitalocean.com/v2/tags/PROD/resources\` (not \`/v2/tags/prod/resources\`).\n\nTagged resources in the control panel will always display the canonical capitalization. For example, if you create a tag named \"PROD\", you can tag resources in the control panel by entering \"prod\". The tag will still display with its canonical capitalization, \"PROD\".\n").optional(),
  "resources": z.string().optional()
}
```

### tags_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "tag_id": z.string().regex(new RegExp("^[a-zA-Z0-9_\\-\\:]+$")).max(255).describe("The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.")
}
```

### tags_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "tag_id": z.string().regex(new RegExp("^[a-zA-Z0-9_\\-\\:]+$")).max(255).describe("The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.")
}
```

### tags_assign_resources

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "tag_id": z.string().regex(new RegExp("^[a-zA-Z0-9_\\-\\:]+$")).max(255).describe("The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag."),
  "resources": z.array(z.any()).describe("An array of objects containing resource_id and resource_type  attributes.")
}
```

### tags_unassign_resources

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "tag_id": z.string().regex(new RegExp("^[a-zA-Z0-9_\\-\\:]+$")).max(255).describe("The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag."),
  "resources": z.array(z.any()).describe("An array of objects containing resource_id and resource_type  attributes.")
}
```

### volumes_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().describe("The block storage volume's name.").optional(),
  "region": z.enum(["ams1","ams2","ams3","blr1","fra1","lon1","nyc1","nyc2","nyc3","sfo1","sfo2","sfo3","sgp1","tor1","syd1"]).describe("The slug identifier for the region where the resource will initially be  available.").optional(),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### volumes_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### volumes_delete_byname

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().describe("The block storage volume's name.").optional(),
  "region": z.enum(["ams1","ams2","ams3","blr1","fra1","lon1","nyc1","nyc2","nyc3","sfo1","sfo2","sfo3","sgp1","tor1","syd1"]).describe("The slug identifier for the region where the resource will initially be  available.").optional()
}
```

### volumeactions_post

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### volumesnapshots_get_byid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "snapshot_id": z.string().describe("The unique identifier for the snapshot.")
}
```

### volumesnapshots_delete_byid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "snapshot_id": z.string().describe("The unique identifier for the snapshot.")
}
```

### volumes_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "volume_id": z.string().uuid().describe("The ID of the block storage volume.")
}
```

### volumes_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "volume_id": z.string().uuid().describe("The ID of the block storage volume.")
}
```

### volumeactions_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "volume_id": z.string().uuid().describe("The ID of the block storage volume."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### volumeactions_post_byid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "volume_id": z.string().uuid().describe("The ID of the block storage volume."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### volumeactions_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "volume_id": z.string().uuid().describe("The ID of the block storage volume."),
  "action_id": z.number().int().gte(1).describe("A unique numeric ID that can be used to identify and reference an action."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### volumesnapshots_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "volume_id": z.string().uuid().describe("The ID of the block storage volume."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### volumesnapshots_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "volume_id": z.string().uuid().describe("The ID of the block storage volume."),
  "name": z.string().describe("A human-readable name for the volume snapshot.").optional(),
  "tags": z.array(z.string()).nullable().describe("A flat array of tag names as strings to be applied to the resource. Tag names may be for either existing or new tags.").optional()
}
```

### vpcs_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### vpcs_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### vpcs_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vpc_id": z.string().uuid().describe("A unique identifier for a VPC.")
}
```

### vpcs_update

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vpc_id": z.string().uuid().describe("A unique identifier for a VPC.")
}
```

### vpcs_patch

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vpc_id": z.string().uuid().describe("A unique identifier for a VPC.")
}
```

### vpcs_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vpc_id": z.string().uuid().describe("A unique identifier for a VPC.")
}
```

### vpcs_list_members

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vpc_id": z.string().uuid().describe("A unique identifier for a VPC."),
  "resource_type": z.string().describe("Used to filter VPC members by a resource type.").optional(),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### vpcs_list_peerings

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vpc_id": z.string().uuid().describe("A unique identifier for a VPC."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### vpcs_create_peerings

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vpc_id": z.string().uuid().describe("A unique identifier for a VPC."),
  "name": z.string().regex(new RegExp("^[a-zA-Z0-9\\-\\.]+$")).describe("The name of the VPC peering. Must be unique and may only contain alphanumeric characters, dashes, and periods."),
  "b_vpc_id": z.string().uuid().describe("The ID of the VPC to peer with.")
}
```

### vpcs_patch_peerings

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vpc_id": z.string().uuid().describe("A unique identifier for a VPC."),
  "vpc_peering_id": z.string().uuid().describe("A unique identifier for a VPC peering.")
}
```

### vpcpeerings_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
  "region": z.enum(["ams1","ams2","ams3","blr1","fra1","lon1","nyc1","nyc2","nyc3","sfo1","sfo2","sfo3","sgp1","tor1","syd1"]).describe("The slug identifier for the region where the resource will initially be  available.").optional()
}
```

### vpcpeerings_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### vpcpeerings_get

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vpc_peering_id": z.string().uuid().describe("A unique identifier for a VPC peering.")
}
```

### vpcpeerings_patch

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vpc_peering_id": z.string().uuid().describe("A unique identifier for a VPC peering.")
}
```

### vpcpeerings_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "vpc_peering_id": z.string().uuid().describe("A unique identifier for a VPC peering.")
}
```

### uptime_list_checks

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### uptime_create_check

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### uptime_get_check

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "check_id": z.string().uuid().describe("A unique identifier for a check.")
}
```

### uptime_update_check

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "check_id": z.string().uuid().describe("A unique identifier for a check.")
}
```

### uptime_delete_check

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "check_id": z.string().uuid().describe("A unique identifier for a check.")
}
```

### uptime_get_checkstate

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "check_id": z.string().uuid().describe("A unique identifier for a check.")
}
```

### uptime_list_alerts

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "check_id": z.string().uuid().describe("A unique identifier for a check."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}
```

### uptime_create_alert

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "check_id": z.string().uuid().describe("A unique identifier for a check.")
}
```

### uptime_get_alert

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "check_id": z.string().uuid().describe("A unique identifier for a check."),
  "alert_id": z.string().uuid().describe("A unique identifier for an alert.")
}
```

### uptime_update_alert

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "check_id": z.string().uuid().describe("A unique identifier for a check."),
  "alert_id": z.string().uuid().describe("A unique identifier for an alert.")
}
```

### uptime_delete_alert

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "check_id": z.string().uuid().describe("A unique identifier for a check."),
  "alert_id": z.string().uuid().describe("A unique identifier for an alert.")
}
```

### genai_list_agents

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "only_deployed": z.boolean().describe("Only list agents that are deployed.").optional(),
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}
```

### genai_create_agent

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "anthropic_key_uuid": z.string().describe("Optional Anthropic API key ID to use with Anthropic models").optional(),
  "description": z.string().describe("A text description of the agent, not used in inference").optional(),
  "instruction": z.string().describe("Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices.").optional(),
  "knowledge_base_uuid": z.array(z.string()).describe("Ids of the knowledge base(s) to attach to the agent").optional(),
  "model_uuid": z.string().describe("Identifier for the foundation model.").optional(),
  "name": z.string().describe("Agent name").optional(),
  "open_ai_key_uuid": z.string().describe("Optional OpenAI API key ID to use with OpenAI models").optional(),
  "project_id": z.string().describe("The id of the DigitalOcean project this agent will belong to").optional(),
  "region": z.string().describe("The DigitalOcean region to deploy your agent in").optional(),
  "tags": z.array(z.string()).describe("Agent tag to organize related resources").optional()
}
```

### genai_list_agent_api_keys

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "agent_uuid": z.string().describe("Agent id"),
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}
```

### genai_create_agent_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "agent_uuid": z.string().describe("Agent id"),
  "b_agent_uuid": z.string().describe("Agent id").optional(),
  "name": z.string().describe("A human friendly name to identify the key").optional()
}
```

### genai_update_agent_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "agent_uuid": z.string().describe("Agent id"),
  "api_key_uuid": z.string().describe("Api key id"),
  "b_agent_uuid": z.string().describe("Agent id").optional(),
  "b_api_key_uuid": z.string().describe("Api key id").optional(),
  "name": z.string().describe("Name").optional()
}
```

### genai_delete_agent_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "agent_uuid": z.string().describe("A unique identifier for your agent."),
  "api_key_uuid": z.string().describe("API key for an agent.")
}
```

### genai_regenerate_agent_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "agent_uuid": z.string().describe("Agent id"),
  "api_key_uuid": z.string().describe("Api key id")
}
```

### genai_attach_agent_function

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "agent_uuid": z.string().describe("Agent id"),
  "b_agent_uuid": z.string().describe("Agent id").optional(),
  "description": z.string().describe("Function description").optional(),
  "faas_name": z.string().describe("The name of the function in the DigitalOcean functions platform").optional(),
  "faas_namespace": z.string().describe("The namespace of the function in the DigitalOcean functions platform").optional(),
  "function_name": z.string().describe("Function name").optional(),
  "input_schema": z.record(z.any()).describe("Describe the input schema for the function so the agent may call it").optional(),
  "output_schema": z.record(z.any()).describe("Describe the output schema for the function so the agent handle its response").optional()
}
```

### genai_update_agent_function

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "agent_uuid": z.string().describe("Agent id"),
  "function_uuid": z.string().describe("Function id"),
  "b_agent_uuid": z.string().describe("Agent id").optional(),
  "description": z.string().describe("Funciton description").optional(),
  "faas_name": z.string().describe("The name of the function in the DigitalOcean functions platform").optional(),
  "faas_namespace": z.string().describe("The namespace of the function in the DigitalOcean functions platform").optional(),
  "function_name": z.string().describe("Function name").optional(),
  "b_function_uuid": z.string().describe("Function id").optional(),
  "input_schema": z.record(z.any()).describe("Describe the input schema for the function so the agent may call it").optional(),
  "output_schema": z.record(z.any()).describe("Describe the output schema for the function so the agent handle its response").optional()
}
```

### genai_detach_agent_function

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "agent_uuid": z.string().describe("The id of the agent the function route belongs to."),
  "function_uuid": z.string().describe("The function route to be destroyed. This does not destroy the function itself.")
}
```

### genai_attach_knowledge_base

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "agent_uuid": z.string().describe("A unique identifier for an agent."),
  "knowledge_base_uuid": z.string().describe("A unique identifier for a knowledge base.")
}
```

### genai_detach_knowledge_base

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "agent_uuid": z.string().describe("Agent id"),
  "knowledge_base_uuid": z.string().describe("Knowledge base id")
}
```

### genai_attach_agent

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "parent_agent_uuid": z.string().describe("A unique identifier for the parent agent."),
  "child_agent_uuid": z.string().describe("Routed agent id"),
  "b_child_agent_uuid": z.string().describe("Routed agent id").optional(),
  "if_case": z.string().optional(),
  "b_parent_agent_uuid": z.string().describe("A unique identifier for the parent agent.").optional(),
  "route_name": z.string().describe("Name of route").optional()
}
```

### genai_update_attached_agent

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "parent_agent_uuid": z.string().describe("A unique identifier for the parent agent."),
  "child_agent_uuid": z.string().describe("Routed agent id"),
  "b_child_agent_uuid": z.string().describe("Routed agent id").optional(),
  "if_case": z.string().describe("Describes the case in which the child agent should be used").optional(),
  "b_parent_agent_uuid": z.string().describe("A unique identifier for the parent agent.").optional(),
  "route_name": z.string().describe("Route name").optional(),
  "uuid": z.string().describe("Unique id of linkage").optional()
}
```

### genai_detach_agent

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "parent_agent_uuid": z.string().describe("Pagent agent id"),
  "child_agent_uuid": z.string().describe("Routed agent id")
}
```

### genai_get_agent

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uuid": z.string().describe("Unique agent id")
}
```

### genai_update_agent

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uuid": z.string().describe("Unique agent id"),
  "anthropic_key_uuid": z.string().describe("Optional anthropic key uuid for use with anthropic models").optional(),
  "description": z.string().describe("Agent description").optional(),
  "instruction": z.string().describe("Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices.").optional(),
  "k": z.number().int().describe("How many results should be considered from an attached knowledge base").optional(),
  "max_tokens": z.number().int().describe("Specifies the maximum number of tokens the model can process in a single input or output, set as a number between 1 and 512. This determines the length of each response.").optional(),
  "model_uuid": z.string().describe("Identifier for the foundation model.").optional(),
  "name": z.string().describe("Agent name").optional(),
  "open_ai_key_uuid": z.string().describe("Optional OpenAI key uuid for use with OpenAI models").optional(),
  "project_id": z.string().describe("The id of the DigitalOcean project this agent will belong to").optional(),
  "retrieval_method": z.enum(["RETRIEVAL_METHOD_UNKNOWN","RETRIEVAL_METHOD_REWRITE","RETRIEVAL_METHOD_STEP_BACK","RETRIEVAL_METHOD_SUB_QUERIES","RETRIEVAL_METHOD_NONE"]).describe("- RETRIEVAL_METHOD_UNKNOWN: The retrieval method is unknown\n - RETRIEVAL_METHOD_REWRITE: The retrieval method is rewrite\n - RETRIEVAL_METHOD_STEP_BACK: The retrieval method is step back\n - RETRIEVAL_METHOD_SUB_QUERIES: The retrieval method is sub queries\n - RETRIEVAL_METHOD_NONE: The retrieval method is none").optional(),
  "tags": z.array(z.string()).describe("A set of abitrary tags to organize your agent").optional(),
  "temperature": z.number().describe("Controls the model’s creativity, specified as a number between 0 and 1. Lower values produce more predictable and conservative responses, while higher values encourage creativity and variation.").optional(),
  "top_p": z.number().describe("Defines the cumulative probability threshold for word selection, specified as a number between 0 and 1. Higher values allow for more diverse outputs, while lower values ensure focused and coherent responses.").optional(),
  "b_uuid": z.string().describe("Unique agent id").optional()
}
```

### genai_delete_agent

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uuid": z.string().describe("Unique agent id")
}
```

### genai_get_agent_children

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uuid": z.string().describe("Agent id")
}
```

### genai_update_agent_deployment_visibility

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uuid": z.string().describe("Unique id"),
  "b_uuid": z.string().describe("Unique id").optional(),
  "visibility": z.enum(["VISIBILITY_UNKNOWN","VISIBILITY_DISABLED","VISIBILITY_PLAYGROUND","VISIBILITY_PUBLIC","VISIBILITY_PRIVATE"]).describe("- VISIBILITY_UNKNOWN: The status of the deployment is unknown\n - VISIBILITY_DISABLED: The deployment is disabled and will no longer service requests\n - VISIBILITY_PLAYGROUND: Deprecated: No longer a valid state\n - VISIBILITY_PUBLIC: The deployment is public and will service requests from the public internet\n - VISIBILITY_PRIVATE: The deployment is private and will only service requests from other agents, or through API keys").optional()
}
```

### genai_list_anthropic_api_keys

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}
```

### genai_create_anthropic_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "api_key": z.string().describe("Anthropic API key").optional(),
  "name": z.string().describe("Name of the key").optional()
}
```

### genai_get_anthropic_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "api_key_uuid": z.string().describe("API key ID")
}
```

### genai_update_anthropic_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "api_key_uuid": z.string().describe("API key ID"),
  "api_key": z.string().describe("Anthropic API key").optional(),
  "b_api_key_uuid": z.string().describe("API key ID").optional(),
  "name": z.string().describe("Name of the key").optional()
}
```

### genai_delete_anthropic_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "api_key_uuid": z.string().describe("API key ID")
}
```

### genai_list_agents_by_anthropic_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uuid": z.string().describe("Unique ID of Anthropic key"),
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}
```

### genai_list_indexing_jobs

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}
```

### genai_create_indexing_job

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "data_source_uuids": z.array(z.string()).describe("List of data source ids to index, if none are provided, all data sources will be indexed").optional(),
  "knowledge_base_uuid": z.string().describe("Knowledge base id").optional()
}
```

### genai_list_indexing_job_data_sources

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "indexing_job_uuid": z.string().describe("Uuid of the indexing job")
}
```

### genai_get_indexing_job

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uuid": z.string().describe("Indexing job id")
}
```

### genai_cancel_indexing_job

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uuid": z.string().describe("A unique identifier for an indexing job."),
  "b_uuid": z.string().describe("A unique identifier for an indexing job.").optional()
}
```

### genai_list_knowledge_bases

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}
```

### genai_create_knowledge_base

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "database_id": z.string().describe("Identifier of the DigitalOcean OpenSearch database this knowledge base will use, optional.\nIf not provided, we create a new database for the knowledge base in\nthe same region as the knowledge base.").optional(),
  "datasources": z.array(z.object({ "bucket_name": z.string().describe("Deprecated, moved to data_source_details").optional(), "bucket_region": z.string().describe("Deprecated, moved to data_source_details").optional(), "file_upload_data_source": z.object({ "original_file_name": z.string().describe("The original file name").optional(), "size_in_bytes": z.string().describe("The size of the file in bytes").optional(), "stored_object_key": z.string().describe("The object key the file was stored as").optional() }).describe("File to upload as data source for knowledge base.").optional(), "item_path": z.string().optional(), "spaces_data_source": z.object({ "bucket_name": z.string().describe("Spaces bucket name").optional(), "item_path": z.string().optional(), "region": z.string().describe("Region of bucket").optional() }).describe("Spaces Bucket Data Source").optional(), "web_crawler_data_source": z.object({ "base_url": z.string().describe("The base url to crawl.").optional(), "crawling_option": z.enum(["UNKNOWN","SCOPED","PATH","DOMAIN","SUBDOMAINS"]).describe("Options for specifying how URLs found on pages should be handled.\n\n - UNKNOWN: Default unknown value\n - SCOPED: Only include the base URL.\n - PATH: Crawl the base URL and linked pages within the URL path.\n - DOMAIN: Crawl the base URL and linked pages within the same domain.\n - SUBDOMAINS: Crawl the base URL and linked pages for any subdomain."), "embed_media": z.boolean().describe("Whether to ingest and index media (images, etc.) on web pages.").optional() }).describe("WebCrawlerDataSource").optional() })).describe("The data sources to use for this knowledge base. See [Organize Data Sources](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#spaces-buckets) for more information on data sources best practices.").optional(),
  "embedding_model_uuid": z.string().describe("Identifier for the [embedding model](https://docs.digitalocean.com/products/genai-platform/details/models/#embedding-models).").optional(),
  "name": z.string().describe("Name of the knowledge base.").optional(),
  "project_id": z.string().describe("Identifier of the DigitalOcean project this knowledge base will belong to.").optional(),
  "region": z.string().describe("The datacenter region to deploy the knowledge base in.").optional(),
  "tags": z.array(z.string()).describe("Tags to organize your knowledge base.").optional(),
  "vpc_uuid": z.string().describe("The VPC to deploy the knowledge base database in").optional()
}
```

### genai_list_knowledge_base_data_sources

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "knowledge_base_uuid": z.string().describe("Knowledge base id"),
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}
```

### genai_create_knowledge_base_data_source

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "knowledge_base_uuid": z.string().describe("Knowledge base id"),
  "b_knowledge_base_uuid": z.string().describe("Knowledge base id").optional(),
  "spaces_data_source": z.object({ "bucket_name": z.string().describe("Spaces bucket name").optional(), "item_path": z.string().optional(), "region": z.string().describe("Region of bucket").optional() }).describe("Spaces Bucket Data Source").optional(),
  "web_crawler_data_source": z.object({ "base_url": z.string().describe("The base url to crawl.").optional(), "crawling_option": z.enum(["UNKNOWN","SCOPED","PATH","DOMAIN","SUBDOMAINS"]).describe("Options for specifying how URLs found on pages should be handled.\n\n - UNKNOWN: Default unknown value\n - SCOPED: Only include the base URL.\n - PATH: Crawl the base URL and linked pages within the URL path.\n - DOMAIN: Crawl the base URL and linked pages within the same domain.\n - SUBDOMAINS: Crawl the base URL and linked pages for any subdomain."), "embed_media": z.boolean().describe("Whether to ingest and index media (images, etc.) on web pages.").optional() }).describe("WebCrawlerDataSource").optional()
}
```

### genai_delete_knowledge_base_data_source

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "knowledge_base_uuid": z.string().describe("Knowledge base id"),
  "data_source_uuid": z.string().describe("Data source id")
}
```

### genai_get_knowledge_base

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uuid": z.string().describe("Knowledge base id")
}
```

### genai_update_knowledge_base

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uuid": z.string().describe("Knowledge base id"),
  "database_id": z.string().describe("The id of the DigitalOcean database this knowledge base will use, optiona.").optional(),
  "embedding_model_uuid": z.string().describe("Identifier for the foundation model.").optional(),
  "name": z.string().describe("Knowledge base name").optional(),
  "project_id": z.string().describe("The id of the DigitalOcean project this knowledge base will belong to").optional(),
  "tags": z.array(z.string()).describe("Tags to organize your knowledge base.").optional(),
  "b_uuid": z.string().describe("Knowledge base id").optional()
}
```

### genai_delete_knowledge_base

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uuid": z.string().describe("Knowledge base id")
}
```

### genai_list_models

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "usecases": z.array(z.enum(["MODEL_USECASE_UNKNOWN","MODEL_USECASE_AGENT","MODEL_USECASE_FINETUNED","MODEL_USECASE_KNOWLEDGEBASE","MODEL_USECASE_GUARDRAIL","MODEL_USECASE_REASONING"])).describe("Include only models defined for the listed usecases.\n\n - MODEL_USECASE_UNKNOWN: The use case of the model is unknown\n - MODEL_USECASE_AGENT: The model maybe used in an agent\n - MODEL_USECASE_FINETUNED: The model maybe used for fine tuning\n - MODEL_USECASE_KNOWLEDGEBASE: The model maybe used for knowledge bases (embedding models)\n - MODEL_USECASE_GUARDRAIL: The model maybe used for guardrails\n - MODEL_USECASE_REASONING: The model usecase for reasoning").optional(),
  "public_only": z.boolean().describe("Only include models that are publicly available.").optional(),
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}
```

### genai_list_openai_api_keys

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}
```

### genai_create_openai_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "api_key": z.string().describe("OpenAI API key").optional(),
  "name": z.string().describe("Name of the key").optional()
}
```

### genai_get_openai_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "api_key_uuid": z.string().describe("API key ID")
}
```

### genai_update_openai_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "api_key_uuid": z.string().describe("API key ID"),
  "api_key": z.string().describe("OpenAI API key").optional(),
  "b_api_key_uuid": z.string().describe("API key ID").optional(),
  "name": z.string().describe("Name of the key").optional()
}
```

### genai_delete_openai_api_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "api_key_uuid": z.string().describe("API key ID")
}
```

### genai_list_agents_by_openai_key

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uuid": z.string().describe("Unique ID of OpenAI key"),
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}
```

### genai_list_datacenter_regions

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "serves_inference": z.boolean().describe("Include datacenters that serve inference.").optional(),
  "serves_batch": z.boolean().describe("Include datacenters that are capable of running batch jobs.").optional()
}
```
