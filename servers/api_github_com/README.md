# @open-mcp/api_github_com

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_github_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_github_com \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_github_com \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_github_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_github_com"],
      "env": {}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

No environment variables required

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_github_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_github_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### meta_root

**Environment variables**



**Input schema**

```ts
{}
```

### security_advisories_list_global_advisories

**Environment variables**



**Input schema**

```ts
{
  "ghsa_id": z.string().describe("If specified, only advisories with this GHSA (GitHub Security Advisory) identifier will be returned.").optional(),
  "type": z.enum(["reviewed","malware","unreviewed"]).describe("If specified, only advisories of this type will be returned. By default, a request with no other parameters defined will only return reviewed advisories that are not malware.").optional(),
  "cve_id": z.string().describe("If specified, only advisories with this CVE (Common Vulnerabilities and Exposures) identifier will be returned.").optional(),
  "ecosystem": z.enum(["rubygems","npm","pip","maven","nuget","composer","go","rust","erlang","actions","pub","other","swift"]).describe("The package's language or package management ecosystem.").optional(),
  "severity": z.enum(["unknown","low","medium","high","critical"]).describe("If specified, only advisories with these severities will be returned.").optional(),
  "cwes": z.any().superRefine((x, ctx) => {
    const schemas = [z.string(), z.array(z.string())];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("If specified, only advisories with these Common Weakness Enumerations (CWEs) will be returned.\n\nExample: \`cwes=79,284,22\` or \`cwes[]=79&cwes[]=284&cwes[]=22\`").optional(),
  "is_withdrawn": z.boolean().describe("Whether to only return advisories that have been withdrawn.").optional(),
  "affects": z.any().superRefine((x, ctx) => {
    const schemas = [z.string(), z.array(z.string()).max(1000)];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("If specified, only return advisories that affect any of \`package\` or \`package@version\`. A maximum of 1000 packages can be specified.\nIf the query parameter causes the URL to exceed the maximum URL length supported by your client, you must specify fewer packages.\n\nExample: \`affects=package1,package2@1.0.0,package3@^2.0.0\` or \`affects[]=package1&affects[]=package2@1.0.0\`").optional(),
  "published": z.string().describe("If specified, only return advisories that were published on a date or date range.\n\nFor more information on the syntax of the date range, see \"[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates).\"").optional(),
  "updated": z.string().describe("If specified, only return advisories that were updated on a date or date range.\n\nFor more information on the syntax of the date range, see \"[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates).\"").optional(),
  "modified": z.string().describe("If specified, only show advisories that were updated or published on a date or date range.\n\nFor more information on the syntax of the date range, see \"[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates).\"").optional(),
  "epss_percentage": z.string().describe("If specified, only return advisories that have an EPSS percentage score that matches the provided value.\nThe EPSS percentage represents the likelihood of a CVE being exploited.").optional(),
  "epss_percentile": z.string().describe("If specified, only return advisories that have an EPSS percentile score that matches the provided value.\nThe EPSS percentile represents the relative rank of the CVE's likelihood of being exploited compared to other CVEs.").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "sort": z.enum(["updated","published","epss_percentage","epss_percentile"]).describe("The property to sort the results by.").optional()
}
```

### security_advisories_get_global_advisory

**Environment variables**



**Input schema**

```ts
{
  "ghsa_id": z.string().describe("The GHSA (GitHub Security Advisory) identifier of the advisory.")
}
```

### apps_get_authenticated

**Environment variables**



**Input schema**

```ts
{}
```

### apps_create_from_manifest

**Environment variables**



**Input schema**

```ts
{
  "code": z.string()
}
```

### apps_get_webhook_config_for_app

**Environment variables**



**Input schema**

```ts
{}
```

### apps_update_webhook_config_for_app

**Environment variables**



**Input schema**

```ts
{
  "url": z.string().url().describe("The URL to which the payloads will be delivered.").optional(),
  "content_type": z.string().describe("The media type used to serialize the payloads. Supported values include \`json\` and \`form\`. The default is \`form\`.").optional(),
  "secret": z.string().describe("If provided, the \`secret\` will be used as the \`key\` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).").optional(),
  "insecure_ssl": z.string().describe("Determines whether the SSL certificate of the host for \`url\` will be verified when delivering payloads. Supported values include \`0\` (verification is performed) and \`1\` (verification is not performed). The default is \`0\`. **We strongly recommend not setting this to \`1\` as you are subject to man-in-the-middle and other attacks.**").optional()
}
```

### apps_list_webhook_deliveries

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "cursor": z.string().describe("Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the \`link\` header for the next and previous page cursors.").optional()
}
```

### apps_get_webhook_delivery

**Environment variables**



**Input schema**

```ts
{
  "delivery_id": z.number().int()
}
```

### apps_redeliver_webhook_delivery

**Environment variables**



**Input schema**

```ts
{
  "delivery_id": z.number().int()
}
```

### apps_list_installation_requests_for_authenticated_app

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### apps_list_installations

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "outdated": z.string().optional()
}
```

### apps_get_installation

**Environment variables**



**Input schema**

```ts
{
  "installation_id": z.number().int().describe("The unique identifier of the installation.")
}
```

### apps_delete_installation

**Environment variables**



**Input schema**

```ts
{
  "installation_id": z.number().int().describe("The unique identifier of the installation.")
}
```

### apps_create_installation_access_token

**Environment variables**



**Input schema**

```ts
{
  "installation_id": z.number().int().describe("The unique identifier of the installation."),
  "repositories": z.array(z.string()).describe("List of repository names that the token should have access to").optional(),
  "repository_ids": z.array(z.number().int()).describe("List of repository IDs that the token should have access to").optional(),
  "permissions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe permissions granted to the user access token.").optional()
}
```

### apps_suspend_installation

**Environment variables**



**Input schema**

```ts
{
  "installation_id": z.number().int().describe("The unique identifier of the installation.")
}
```

### apps_unsuspend_installation

**Environment variables**



**Input schema**

```ts
{
  "installation_id": z.number().int().describe("The unique identifier of the installation.")
}
```

### apps_delete_authorization

**Environment variables**



**Input schema**

```ts
{
  "client_id": z.string().describe("The client ID of the GitHub app."),
  "access_token": z.string().describe("The OAuth access token used to authenticate to the GitHub API.")
}
```

### apps_check_token

**Environment variables**



**Input schema**

```ts
{
  "client_id": z.string().describe("The client ID of the GitHub app."),
  "access_token": z.string().describe("The access_token of the OAuth or GitHub application.")
}
```

### apps_reset_token

**Environment variables**



**Input schema**

```ts
{
  "client_id": z.string().describe("The client ID of the GitHub app."),
  "access_token": z.string().describe("The access_token of the OAuth or GitHub application.")
}
```

### apps_delete_token

**Environment variables**



**Input schema**

```ts
{
  "client_id": z.string().describe("The client ID of the GitHub app."),
  "access_token": z.string().describe("The OAuth access token used to authenticate to the GitHub API.")
}
```

### apps_scope_token

**Environment variables**



**Input schema**

```ts
{
  "client_id": z.string().describe("The client ID of the GitHub app."),
  "access_token": z.string().describe("The access token used to authenticate to the GitHub API."),
  "target": z.string().describe("The name of the user or organization to scope the user access token to. **Required** unless \`target_id\` is specified.").optional(),
  "target_id": z.number().int().describe("The ID of the user or organization to scope the user access token to. **Required** unless \`target\` is specified.").optional(),
  "repositories": z.array(z.string()).describe("The list of repository names to scope the user access token to. \`repositories\` may not be specified if \`repository_ids\` is specified.").optional(),
  "repository_ids": z.array(z.number().int()).describe("The list of repository IDs to scope the user access token to. \`repository_ids\` may not be specified if \`repositories\` is specified.").optional(),
  "permissions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe permissions granted to the user access token.").optional()
}
```

### apps_get_by_slug

**Environment variables**



**Input schema**

```ts
{
  "app_slug": z.string()
}
```

### classroom_get_an_assignment

**Environment variables**



**Input schema**

```ts
{
  "assignment_id": z.number().int().describe("The unique identifier of the classroom assignment.")
}
```

### classroom_list_accepted_assignments_for_an_assignment

**Environment variables**



**Input schema**

```ts
{
  "assignment_id": z.number().int().describe("The unique identifier of the classroom assignment."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### classroom_get_assignment_grades

**Environment variables**



**Input schema**

```ts
{
  "assignment_id": z.number().int().describe("The unique identifier of the classroom assignment.")
}
```

### classroom_list_classrooms

**Environment variables**



**Input schema**

```ts
{
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### classroom_get_a_classroom

**Environment variables**



**Input schema**

```ts
{
  "classroom_id": z.number().int().describe("The unique identifier of the classroom.")
}
```

### classroom_list_assignments_for_a_classroom

**Environment variables**



**Input schema**

```ts
{
  "classroom_id": z.number().int().describe("The unique identifier of the classroom."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### codes_of_conduct_get_all_codes_of_conduct

**Environment variables**



**Input schema**

```ts
{}
```

### codes_of_conduct_get_conduct_code

**Environment variables**



**Input schema**

```ts
{
  "key": z.string()
}
```

### emojis_get

**Environment variables**



**Input schema**

```ts
{}
```

### code_security_get_configurations_for_enterprise

**Environment variables**



**Input schema**

```ts
{
  "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### code_security_create_configuration_for_enterprise

**Environment variables**



**Input schema**

```ts
{
  "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."),
  "name": z.string().describe("The name of the code security configuration. Must be unique within the enterprise."),
  "description": z.string().max(255).describe("A description of the code security configuration"),
  "advanced_security": z.enum(["enabled","disabled","code_security","secret_protection"]).describe("The enablement status of GitHub Advanced Security features. \`enabled\` will enable both Code Security and Secret Protection features.").optional(),
  "dependency_graph": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependency Graph").optional(),
  "dependency_graph_autosubmit_action": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Automatic dependency submission").optional(),
  "dependency_graph_autosubmit_action_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFeature options for Automatic dependency submission").optional(),
  "dependabot_alerts": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependabot alerts").optional(),
  "dependabot_security_updates": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependabot security updates").optional(),
  "code_scanning_default_setup": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of code scanning default setup").optional(),
  "code_scanning_default_setup_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFeature options for code scanning default setup").optional(),
  "code_scanning_delegated_alert_dismissal": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of code scanning delegated alert dismissal").optional(),
  "secret_scanning": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning").optional(),
  "secret_scanning_push_protection": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning push protection").optional(),
  "secret_scanning_validity_checks": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning validity checks").optional(),
  "secret_scanning_non_provider_patterns": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning non provider patterns").optional(),
  "secret_scanning_generic_secrets": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Copilot secret scanning").optional(),
  "secret_scanning_delegated_alert_dismissal": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning delegated alert dismissal").optional(),
  "private_vulnerability_reporting": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of private vulnerability reporting").optional(),
  "enforcement": z.enum(["enforced","unenforced"]).describe("The enforcement status for a security configuration").optional()
}
```

### code_security_get_default_configurations_for_enterprise

**Environment variables**



**Input schema**

```ts
{
  "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.")
}
```

### code_security_get_single_configuration_for_enterprise

**Environment variables**



**Input schema**

```ts
{
  "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration.")
}
```

### code_security_update_enterprise_configuration

**Environment variables**



**Input schema**

```ts
{
  "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration."),
  "name": z.string().describe("The name of the code security configuration. Must be unique across the enterprise.").optional(),
  "description": z.string().max(255).describe("A description of the code security configuration").optional(),
  "advanced_security": z.enum(["enabled","disabled","code_security","secret_protection"]).describe("The enablement status of GitHub Advanced Security features. \`enabled\` will enable both Code Security and Secret Protection features.").optional(),
  "dependency_graph": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependency Graph").optional(),
  "dependency_graph_autosubmit_action": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Automatic dependency submission").optional(),
  "dependency_graph_autosubmit_action_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFeature options for Automatic dependency submission").optional(),
  "dependabot_alerts": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependabot alerts").optional(),
  "dependabot_security_updates": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependabot security updates").optional(),
  "code_scanning_default_setup": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of code scanning default setup").optional(),
  "code_scanning_default_setup_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFeature options for code scanning default setup").optional(),
  "code_scanning_delegated_alert_dismissal": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of code scanning delegated alert dismissal").optional(),
  "secret_scanning": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning").optional(),
  "secret_scanning_push_protection": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning push protection").optional(),
  "secret_scanning_validity_checks": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning validity checks").optional(),
  "secret_scanning_non_provider_patterns": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning non-provider patterns").optional(),
  "secret_scanning_generic_secrets": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Copilot secret scanning").optional(),
  "secret_scanning_delegated_alert_dismissal": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning delegated alert dismissal").optional(),
  "private_vulnerability_reporting": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of private vulnerability reporting").optional(),
  "enforcement": z.enum(["enforced","unenforced"]).describe("The enforcement status for a security configuration").optional()
}
```

### code_security_delete_configuration_for_enterprise

**Environment variables**



**Input schema**

```ts
{
  "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration.")
}
```

### code_security_attach_enterprise_configuration

**Environment variables**



**Input schema**

```ts
{
  "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration."),
  "scope": z.enum(["all","all_without_configurations"]).describe("The type of repositories to attach the configuration to.")
}
```

### code_security_set_configuration_as_default_for_enterprise

**Environment variables**



**Input schema**

```ts
{
  "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration."),
  "default_for_new_repos": z.enum(["all","none","private_and_internal","public"]).describe("Specify which types of repository this security configuration should be applied to by default.").optional()
}
```

### code_security_get_repositories_for_enterprise_configuration

**Environment variables**



**Input schema**

```ts
{
  "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "status": z.string().describe("A comma-separated list of statuses. If specified, only repositories with these attachment statuses will be returned.\n\nCan be: \`all\`, \`attached\`, \`attaching\`, \`removed\`, \`enforced\`, \`failed\`, \`updating\`, \`removed_by_enterprise\`").optional()
}
```

### dependabot_list_alerts_for_enterprise

**Environment variables**



**Input schema**

```ts
{
  "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."),
  "state": z.string().describe("A comma-separated list of states. If specified, only alerts with these states will be returned.\n\nCan be: \`auto_dismissed\`, \`dismissed\`, \`fixed\`, \`open\`").optional(),
  "severity": z.string().describe("A comma-separated list of severities. If specified, only alerts with these severities will be returned.\n\nCan be: \`low\`, \`medium\`, \`high\`, \`critical\`").optional(),
  "ecosystem": z.string().describe("A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.\n\nCan be: \`composer\`, \`go\`, \`maven\`, \`npm\`, \`nuget\`, \`pip\`, \`pub\`, \`rubygems\`, \`rust\`").optional(),
  "package": z.string().describe("A comma-separated list of package names. If specified, only alerts for these packages will be returned.").optional(),
  "epss_percentage": z.string().describe("CVE Exploit Prediction Scoring System (EPSS) percentage. Can be specified as:\n- An exact number (\`n\`)\n- Comparators such as \`>n\`, \`<n\`, \`>=n\`, \`<=n\`\n- A range like \`n..n\`, where \`n\` is a number from 0.0 to 1.0\n\nFilters the list of alerts based on EPSS percentages. If specified, only alerts with the provided EPSS percentages will be returned.").optional(),
  "scope": z.enum(["development","runtime"]).describe("The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.").optional(),
  "sort": z.enum(["created","updated","epss_percentage"]).describe("The property by which to sort the results.\n\`created\` means when the alert was created.\n\`updated\` means when the alert's state last changed.\n\`epss_percentage\` sorts alerts by the Exploit Prediction Scoring System (EPSS) percentage.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "first": z.number().int().gte(1).lte(100).describe("**Deprecated**. The number of results per page (max 100), starting from the first matching result.\nThis parameter must not be used in combination with \`last\`.\nInstead, use \`per_page\` in combination with \`after\` to fetch the first page of results.").optional(),
  "last": z.number().int().gte(1).lte(100).describe("**Deprecated**. The number of results per page (max 100), starting from the last matching result.\nThis parameter must not be used in combination with \`first\`.\nInstead, use \`per_page\` in combination with \`before\` to fetch the last page of results.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### secret_scanning_list_alerts_for_enterprise

**Environment variables**



**Input schema**

```ts
{
  "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."),
  "state": z.enum(["open","resolved"]).describe("Set to \`open\` or \`resolved\` to only list secret scanning alerts in a specific state.").optional(),
  "secret_type": z.string().describe("A comma-separated list of secret types to return. All default secret patterns are returned. To return generic patterns, pass the token name(s) in the parameter. See \"[Supported secret scanning patterns](https://docs.github.com/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)\" for a complete list of secret types.").optional(),
  "resolution": z.string().describe("A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are \`false_positive\`, \`wont_fix\`, \`revoked\`, \`pattern_edited\`, \`pattern_deleted\` or \`used_in_tests\`.").optional(),
  "sort": z.enum(["created","updated"]).describe("The property to sort the results by. \`created\` means when the alert was created. \`updated\` means when the alert was updated or resolved.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "validity": z.string().describe("A comma-separated list of validities that, when present, will return alerts that match the validities in this list. Valid options are \`active\`, \`inactive\`, and \`unknown\`.").optional(),
  "is_publicly_leaked": z.boolean().describe("A boolean value representing whether or not to filter alerts by the publicly-leaked tag being present.").optional(),
  "is_multi_repo": z.boolean().describe("A boolean value representing whether or not to filter alerts by the multi-repo tag being present.").optional()
}
```

### activity_list_public_events

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### activity_get_feeds

**Environment variables**



**Input schema**

```ts
{}
```

### gists_list

**Environment variables**



**Input schema**

```ts
{
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### gists_create

**Environment variables**



**Input schema**

```ts
{
  "description": z.string().describe("Description of the gist").optional(),
  "files": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nNames and content for the files that make up the gist"),
  "public": z.boolean().describe("Flag indicating whether the gist is public").optional()
}
```

### gists_list_public

**Environment variables**



**Input schema**

```ts
{
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### gists_list_starred

**Environment variables**



**Input schema**

```ts
{
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### gists_get

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist.")
}
```

### gists_update

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist."),
  "description": z.string().describe("The description of the gist.").optional(),
  "files": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe gist files to be updated, renamed, or deleted. Each \`key\` must match the current filename\n(including extension) of the targeted gist file. For example: \`hello.py\`.\n\nTo delete a file, set the whole file to null. For example: \`hello.py : null\`. The file will also be\ndeleted if the specified object does not contain at least one of \`content\` or \`filename\`.").optional()
}
```

### gists_delete

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist.")
}
```

### gists_list_comments

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### gists_create_comment

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist."),
  "body": z.string().max(65535).describe("The comment text.")
}
```

### gists_get_comment

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist."),
  "comment_id": z.number().int().describe("The unique identifier of the comment.")
}
```

### gists_update_comment

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "body": z.string().max(65535).describe("The comment text.")
}
```

### gists_delete_comment

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist."),
  "comment_id": z.number().int().describe("The unique identifier of the comment.")
}
```

### gists_list_commits

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### gists_list_forks

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### gists_fork

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist.")
}
```

### gists_check_is_starred

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist.")
}
```

### gists_star

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist.")
}
```

### gists_unstar

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist.")
}
```

### gists_get_revision

**Environment variables**



**Input schema**

```ts
{
  "gist_id": z.string().describe("The unique identifier of the gist."),
  "sha": z.string()
}
```

### gitignore_get_all_templates

**Environment variables**



**Input schema**

```ts
{}
```

### gitignore_get_template

**Environment variables**



**Input schema**

```ts
{
  "name": z.string()
}
```

### apps_list_repos_accessible_to_installation

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### apps_revoke_installation_access_token

**Environment variables**



**Input schema**

```ts
{}
```

### issues_list

**Environment variables**



**Input schema**

```ts
{
  "filter": z.enum(["assigned","created","mentioned","subscribed","repos","all"]).describe("Indicates which sorts of issues to return. \`assigned\` means issues assigned to you. \`created\` means issues created by you. \`mentioned\` means issues mentioning you. \`subscribed\` means issues you're subscribed to updates for. \`all\` or \`repos\` means all issues you can see, regardless of participation or creation.").optional(),
  "state": z.enum(["open","closed","all"]).describe("Indicates the state of the issues to return.").optional(),
  "labels": z.string().describe("A list of comma separated label names. Example: \`bug,ui,@high\`").optional(),
  "sort": z.enum(["created","updated","comments"]).describe("What to sort results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "collab": z.boolean().optional(),
  "orgs": z.boolean().optional(),
  "owned": z.boolean().optional(),
  "pulls": z.boolean().optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### licenses_get_all_commonly_used

**Environment variables**



**Input schema**

```ts
{
  "featured": z.boolean().optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### licenses_get

**Environment variables**



**Input schema**

```ts
{
  "license": z.string()
}
```

### markdown_render

**Environment variables**



**Input schema**

```ts
{
  "text": z.string().describe("The Markdown text to render in HTML."),
  "mode": z.enum(["markdown","gfm"]).describe("The rendering mode.").optional(),
  "context": z.string().describe("The repository context to use when creating references in \`gfm\` mode.  For example, setting \`context\` to \`octo-org/octo-repo\` will change the text \`#42\` into an HTML link to issue 42 in the \`octo-org/octo-repo\` repository.").optional()
}
```

### markdown_render_raw

**Environment variables**



**Input schema**

```ts
{}
```

### apps_get_subscription_plan_for_account

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.number().int().describe("account_id parameter")
}
```

### apps_list_plans

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### apps_list_accounts_for_plan

**Environment variables**



**Input schema**

```ts
{
  "plan_id": z.number().int().describe("The unique identifier of the plan."),
  "sort": z.enum(["created","updated"]).describe("The property to sort the results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("To return the oldest accounts first, set to \`asc\`. Ignored without the \`sort\` parameter.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### apps_get_subscription_plan_for_account_stubbed

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.number().int().describe("account_id parameter")
}
```

### apps_list_plans_stubbed

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### apps_list_accounts_for_plan_stubbed

**Environment variables**



**Input schema**

```ts
{
  "plan_id": z.number().int().describe("The unique identifier of the plan."),
  "sort": z.enum(["created","updated"]).describe("The property to sort the results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("To return the oldest accounts first, set to \`asc\`. Ignored without the \`sort\` parameter.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### meta_get

**Environment variables**



**Input schema**

```ts
{}
```

### activity_list_public_events_for_repo_network

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### activity_list_notifications_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "all": z.boolean().describe("If \`true\`, show notifications marked as read.").optional(),
  "participating": z.boolean().describe("If \`true\`, only shows notifications in which the user is directly participating or mentioned.").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "before": z.string().datetime({ offset: true }).describe("Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 50). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### activity_mark_notifications_as_read

**Environment variables**



**Input schema**

```ts
{
  "last_read_at": z.string().datetime({ offset: true }).describe("Describes the last point that notifications were checked. Anything updated since this time will not be marked as read. If you omit this parameter, all notifications are marked as read. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`. Default: The current timestamp.").optional(),
  "read": z.boolean().describe("Whether the notification has been read.").optional()
}
```

### activity_get_thread

**Environment variables**



**Input schema**

```ts
{
  "thread_id": z.number().int().describe("The unique identifier of the notification thread. This corresponds to the value returned in the \`id\` field when you retrieve notifications (for example with the [\`GET /notifications\` operation](https://docs.github.com/rest/activity/notifications#list-notifications-for-the-authenticated-user)).")
}
```

### activity_mark_thread_as_read

**Environment variables**



**Input schema**

```ts
{
  "thread_id": z.number().int().describe("The unique identifier of the notification thread. This corresponds to the value returned in the \`id\` field when you retrieve notifications (for example with the [\`GET /notifications\` operation](https://docs.github.com/rest/activity/notifications#list-notifications-for-the-authenticated-user)).")
}
```

### activity_mark_thread_as_done

**Environment variables**



**Input schema**

```ts
{
  "thread_id": z.number().int().describe("The unique identifier of the notification thread. This corresponds to the value returned in the \`id\` field when you retrieve notifications (for example with the [\`GET /notifications\` operation](https://docs.github.com/rest/activity/notifications#list-notifications-for-the-authenticated-user)).")
}
```

### activity_get_thread_subscription_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "thread_id": z.number().int().describe("The unique identifier of the notification thread. This corresponds to the value returned in the \`id\` field when you retrieve notifications (for example with the [\`GET /notifications\` operation](https://docs.github.com/rest/activity/notifications#list-notifications-for-the-authenticated-user)).")
}
```

### activity_set_thread_subscription

**Environment variables**



**Input schema**

```ts
{
  "thread_id": z.number().int().describe("The unique identifier of the notification thread. This corresponds to the value returned in the \`id\` field when you retrieve notifications (for example with the [\`GET /notifications\` operation](https://docs.github.com/rest/activity/notifications#list-notifications-for-the-authenticated-user))."),
  "ignored": z.boolean().describe("Whether to block all notifications from a thread.").optional()
}
```

### activity_delete_thread_subscription

**Environment variables**



**Input schema**

```ts
{
  "thread_id": z.number().int().describe("The unique identifier of the notification thread. This corresponds to the value returned in the \`id\` field when you retrieve notifications (for example with the [\`GET /notifications\` operation](https://docs.github.com/rest/activity/notifications#list-notifications-for-the-authenticated-user)).")
}
```

### meta_get_octocat

**Environment variables**



**Input schema**

```ts
{
  "s": z.string().describe("The words to show in Octocat's speech bubble").optional()
}
```

### orgs_list

**Environment variables**



**Input schema**

```ts
{
  "since": z.number().int().describe("An organization ID. Only return organizations with an ID greater than this ID.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### billing_get_github_billing_usage_report_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "year": z.number().int().describe("If specified, only return results for a single year. The value of \`year\` is an integer with four digits representing a year. For example, \`2025\`. Default value is the current year.").optional(),
  "month": z.number().int().describe("If specified, only return results for a single month. The value of \`month\` is an integer between \`1\` and \`12\`. If no year is specified the default \`year\` is used.").optional(),
  "day": z.number().int().describe("If specified, only return results for a single day. The value of \`day\` is an integer between \`1\` and \`31\`. If no \`year\` or \`month\` is specified, the default \`year\` and \`month\` are used.").optional(),
  "hour": z.number().int().describe("If specified, only return results for a single hour. The value of \`hour\` is an integer between \`0\` and \`23\`. If no \`year\`, \`month\`, or \`day\` is specified, the default \`year\`, \`month\`, and \`day\` are used.").optional()
}
```

### orgs_get

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### orgs_update

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "billing_email": z.string().describe("Billing email address. This address is not publicized.").optional(),
  "company": z.string().describe("The company name.").optional(),
  "email": z.string().describe("The publicly visible email address.").optional(),
  "twitter_username": z.string().describe("The Twitter username of the company.").optional(),
  "location": z.string().describe("The location.").optional(),
  "name": z.string().describe("The shorthand name of the company.").optional(),
  "description": z.string().describe("The description of the company. The maximum size is 160 characters.").optional(),
  "has_organization_projects": z.boolean().describe("Whether an organization can use organization projects.").optional(),
  "has_repository_projects": z.boolean().describe("Whether repositories that belong to the organization can use repository projects.").optional(),
  "default_repository_permission": z.enum(["read","write","admin","none"]).describe("Default permission level members have for organization repositories.").optional(),
  "members_can_create_repositories": z.boolean().describe("Whether of non-admin organization members can create repositories. **Note:** A parameter can override this parameter. See \`members_allowed_repository_creation_type\` in this table for details.").optional(),
  "members_can_create_internal_repositories": z.boolean().describe("Whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see \"[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)\" in the GitHub Help documentation.").optional(),
  "members_can_create_private_repositories": z.boolean().describe("Whether organization members can create private repositories, which are visible to organization members with permission. For more information, see \"[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)\" in the GitHub Help documentation.").optional(),
  "members_can_create_public_repositories": z.boolean().describe("Whether organization members can create public repositories, which are visible to anyone. For more information, see \"[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)\" in the GitHub Help documentation.").optional(),
  "members_allowed_repository_creation_type": z.enum(["all","private","none"]).describe("Specifies which types of repositories non-admin organization members can create. \`private\` is only available to repositories that are part of an organization on GitHub Enterprise Cloud. \n**Note:** This parameter is closing down and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in \`members_can_create_repositories\`. See the parameter deprecation notice in the operation description for details.").optional(),
  "members_can_create_pages": z.boolean().describe("Whether organization members can create GitHub Pages sites. Existing published sites will not be impacted.").optional(),
  "members_can_create_public_pages": z.boolean().describe("Whether organization members can create public GitHub Pages sites. Existing published sites will not be impacted.").optional(),
  "members_can_create_private_pages": z.boolean().describe("Whether organization members can create private GitHub Pages sites. Existing published sites will not be impacted.").optional(),
  "members_can_fork_private_repositories": z.boolean().describe("Whether organization members can fork private organization repositories.").optional(),
  "web_commit_signoff_required": z.boolean().describe("Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface.").optional(),
  "blog": z.string().optional(),
  "secret_scanning_push_protection_custom_link_enabled": z.boolean().describe("Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection.").optional(),
  "secret_scanning_push_protection_custom_link": z.string().describe("If \`secret_scanning_push_protection_custom_link_enabled\` is true, the URL that will be displayed to contributors who are blocked from pushing a secret.").optional(),
  "deploy_keys_enabled_for_repositories": z.boolean().describe("Controls whether or not deploy keys may be added and used for repositories in the organization.").optional()
}
```

### orgs_delete

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_get_actions_cache_usage_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_get_actions_cache_usage_by_repo_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_list_hosted_runners_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_create_hosted_runner_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("Name of the runner. Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'."),
  "image": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe image of runner. To list all available images, use \`GET /actions/hosted-runners/images/github-owned\` or \`GET /actions/hosted-runners/images/partner\`."),
  "size": z.string().describe("The machine size of the runner. To list available sizes, use \`GET actions/hosted-runners/machine-sizes\`"),
  "runner_group_id": z.number().int().describe("The existing runner group to add this runner to."),
  "maximum_runners": z.number().int().describe("The maximum amount of runners to scale up to. Runners will not auto-scale above this number. Use this setting to limit your cost.").optional(),
  "enable_static_ip": z.boolean().describe("Whether this runner should be created with a static public IP. Note limit on account. To list limits on account, use \`GET actions/hosted-runners/limits\`").optional()
}
```

### actions_get_hosted_runners_github_owned_images_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_get_hosted_runners_partner_images_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_get_hosted_runners_limits_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_get_hosted_runners_machine_specs_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_get_hosted_runners_platforms_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_get_hosted_runner_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hosted_runner_id": z.number().int().describe("Unique identifier of the GitHub-hosted runner.")
}
```

### actions_update_hosted_runner_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hosted_runner_id": z.number().int().describe("Unique identifier of the GitHub-hosted runner."),
  "name": z.string().describe("Name of the runner. Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'.").optional(),
  "runner_group_id": z.number().int().describe("The existing runner group to add this runner to.").optional(),
  "maximum_runners": z.number().int().describe("The maximum amount of runners to scale up to. Runners will not auto-scale above this number. Use this setting to limit your cost.").optional(),
  "enable_static_ip": z.boolean().describe("Whether this runner should be updated with a static public IP. Note limit on account. To list limits on account, use \`GET actions/hosted-runners/limits\`").optional()
}
```

### actions_delete_hosted_runner_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hosted_runner_id": z.number().int().describe("Unique identifier of the GitHub-hosted runner.")
}
```

### oidc_get_oidc_custom_sub_template_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### oidc_update_oidc_custom_sub_template_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "include_claim_keys": z.array(z.string()).describe("Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.")
}
```

### actions_get_github_actions_permissions_organization

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_set_github_actions_permissions_organization

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "enabled_repositories": z.enum(["all","none","selected"]).describe("The policy that controls the repositories in the organization that are allowed to run GitHub Actions."),
  "allowed_actions": z.enum(["all","local_only","selected"]).describe("The permissions policy that controls the actions and reusable workflows that are allowed to run.").optional()
}
```

### actions_list_selected_repositories_enabled_github_actions_organi

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_set_selected_repositories_enabled_github_actions_organiz

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_repository_ids": z.array(z.number().int().describe("Unique identifier of the repository.")).describe("List of repository IDs to enable for GitHub Actions.")
}
```

### actions_enable_selected_repository_github_actions_organization

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "repository_id": z.number().int().describe("The unique identifier of the repository.")
}
```

### actions_disable_selected_repository_github_actions_organization

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "repository_id": z.number().int().describe("The unique identifier of the repository.")
}
```

### actions_get_allowed_actions_organization

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_set_allowed_actions_organization

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "github_owned_allowed": z.boolean().describe("Whether GitHub-owned actions are allowed. For example, this includes the actions in the \`actions\` organization.").optional(),
  "verified_allowed": z.boolean().describe("Whether actions from GitHub Marketplace verified creators are allowed. Set to \`true\` to allow all actions by GitHub Marketplace verified creators.").optional(),
  "patterns_allowed": z.array(z.string()).describe("Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). Wildcards, tags, and SHAs are allowed. For example, \`monalisa/octocat@*\`, \`monalisa/octocat@v2\`, \`monalisa/*\`.\n\n> [!NOTE]\n> The \`patterns_allowed\` setting only applies to public repositories.").optional()
}
```

### actions_get_github_actions_default_workflow_permissions_organiza

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_set_github_actions_default_workflow_permissions_organiza

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "default_workflow_permissions": z.enum(["read","write"]).describe("The default workflow permissions granted to the GITHUB_TOKEN when running workflows.").optional(),
  "can_approve_pull_request_reviews": z.boolean().describe("Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.").optional()
}
```

### actions_list_self_hosted_runner_groups_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "visible_to_repository": z.string().describe("Only return runner groups that are allowed to be used by this repository.").optional()
}
```

### actions_create_self_hosted_runner_group_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("Name of the runner group."),
  "visibility": z.enum(["selected","all","private"]).describe("Visibility of a runner group. You can select all repositories, select individual repositories, or limit access to private repositories.").optional(),
  "selected_repository_ids": z.array(z.number().int().describe("Unique identifier of the repository.")).describe("List of repository IDs that can access the runner group.").optional(),
  "runners": z.array(z.number().int().describe("Unique identifier of the runner.")).describe("List of runner IDs to add to the runner group.").optional(),
  "allows_public_repositories": z.boolean().describe("Whether the runner group can be used by \`public\` repositories.").optional(),
  "restricted_to_workflows": z.boolean().describe("If \`true\`, the runner group will be restricted to running only the workflows specified in the \`selected_workflows\` array.").optional(),
  "selected_workflows": z.array(z.string().describe("Name of workflow the runner group should be allowed to run. Note that a ref, tag, or long SHA is required.")).describe("List of workflows the runner group should be allowed to run. This setting will be ignored unless \`restricted_to_workflows\` is set to \`true\`.").optional(),
  "network_configuration_id": z.string().describe("The identifier of a hosted compute network configuration.").optional()
}
```

### actions_get_self_hosted_runner_group_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group.")
}
```

### actions_update_self_hosted_runner_group_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."),
  "name": z.string().describe("Name of the runner group."),
  "visibility": z.enum(["selected","all","private"]).describe("Visibility of a runner group. You can select all repositories, select individual repositories, or all private repositories.").optional(),
  "allows_public_repositories": z.boolean().describe("Whether the runner group can be used by \`public\` repositories.").optional(),
  "restricted_to_workflows": z.boolean().describe("If \`true\`, the runner group will be restricted to running only the workflows specified in the \`selected_workflows\` array.").optional(),
  "selected_workflows": z.array(z.string().describe("Name of workflow the runner group should be allowed to run. Note that a ref, tag, or long SHA is required.")).describe("List of workflows the runner group should be allowed to run. This setting will be ignored unless \`restricted_to_workflows\` is set to \`true\`.").optional(),
  "network_configuration_id": z.string().nullable().describe("The identifier of a hosted compute network configuration.").optional()
}
```

### actions_delete_self_hosted_runner_group_from_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group.")
}
```

### actions_list_github_hosted_runners_in_group_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_list_repo_access_to_self_hosted_runner_group_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_set_repo_access_to_self_hosted_runner_group_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."),
  "selected_repository_ids": z.array(z.number().int().describe("Unique identifier of the repository.")).describe("List of repository IDs that can access the runner group.")
}
```

### actions_add_repo_access_to_self_hosted_runner_group_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."),
  "repository_id": z.number().int().describe("The unique identifier of the repository.")
}
```

### actions_remove_repo_access_to_self_hosted_runner_group_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."),
  "repository_id": z.number().int().describe("The unique identifier of the repository.")
}
```

### actions_list_self_hosted_runners_in_group_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_set_self_hosted_runners_in_group_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."),
  "runners": z.array(z.number().int().describe("Unique identifier of the runner.")).describe("List of runner IDs to add to the runner group.")
}
```

### actions_add_self_hosted_runner_to_group_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.")
}
```

### actions_remove_self_hosted_runner_from_group_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.")
}
```

### actions_list_self_hosted_runners_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of a self-hosted runner.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_list_runner_applications_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_generate_runner_jitconfig_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the new runner."),
  "runner_group_id": z.number().int().describe("The ID of the runner group to register the runner to."),
  "labels": z.array(z.string()).min(1).max(100).describe("The names of the custom labels to add to the runner. **Minimum items**: 1. **Maximum items**: 100."),
  "work_folder": z.string().describe("The working directory to be used for job execution, relative to the runner install directory.").optional()
}
```

### actions_create_registration_token_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_create_remove_token_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_get_self_hosted_runner_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.")
}
```

### actions_delete_self_hosted_runner_from_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.")
}
```

### actions_list_labels_for_self_hosted_runner_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.")
}
```

### actions_add_custom_labels_to_self_hosted_runner_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner."),
  "labels": z.array(z.string()).min(1).max(100).describe("The names of the custom labels to add to the runner.")
}
```

### actions_set_custom_labels_for_self_hosted_runner_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner."),
  "labels": z.array(z.string()).min(0).max(100).describe("The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.")
}
```

### actions_remove_all_custom_labels_from_self_hosted_runner_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.")
}
```

### actions_remove_custom_label_from_self_hosted_runner_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner."),
  "name": z.string().describe("The name of a self-hosted runner's custom label.")
}
```

### actions_list_org_secrets

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_get_org_public_key

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### actions_get_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### actions_create_or_update_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "encrypted_value": z.string().regex(new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$")).describe("Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/actions/secrets#get-an-organization-public-key) endpoint."),
  "key_id": z.string().describe("ID of the key you used to encrypt the secret."),
  "visibility": z.enum(["all","private","selected"]).describe("Which type of organization repositories have access to the organization secret. \`selected\` means only the repositories specified by \`selected_repository_ids\` can access the secret."),
  "selected_repository_ids": z.array(z.number().int()).describe("An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the \`visibility\` is set to \`selected\`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/actions/secrets#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/actions/secrets#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/actions/secrets#remove-selected-repository-from-an-organization-secret) endpoints.").optional()
}
```

### actions_delete_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### actions_list_selected_repos_for_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_set_selected_repos_for_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "selected_repository_ids": z.array(z.number().int()).describe("An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the \`visibility\` is set to \`selected\`. You can add and remove individual repositories using the [Add selected repository to an organization secret](https://docs.github.com/rest/actions/secrets#add-selected-repository-to-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/actions/secrets#remove-selected-repository-from-an-organization-secret) endpoints.")
}
```

### actions_add_selected_repo_to_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "repository_id": z.number().int()
}
```

### actions_remove_selected_repo_from_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "repository_id": z.number().int()
}
```

### actions_list_org_variables

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 30). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_create_org_variable

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable."),
  "value": z.string().describe("The value of the variable."),
  "visibility": z.enum(["all","private","selected"]).describe("The type of repositories in the organization that can access the variable. \`selected\` means only the repositories specified by \`selected_repository_ids\` can access the variable."),
  "selected_repository_ids": z.array(z.number().int()).describe("An array of repository ids that can access the organization variable. You can only provide a list of repository ids when the \`visibility\` is set to \`selected\`.").optional()
}
```

### actions_get_org_variable

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable.")
}
```

### actions_update_org_variable

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable."),
  "b_name": z.string().describe("The name of the variable.").optional(),
  "value": z.string().describe("The value of the variable.").optional(),
  "visibility": z.enum(["all","private","selected"]).describe("The type of repositories in the organization that can access the variable. \`selected\` means only the repositories specified by \`selected_repository_ids\` can access the variable.").optional(),
  "selected_repository_ids": z.array(z.number().int()).describe("An array of repository ids that can access the organization variable. You can only provide a list of repository ids when the \`visibility\` is set to \`selected\`.").optional()
}
```

### actions_delete_org_variable

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable.")
}
```

### actions_list_selected_repos_for_org_variable

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_set_selected_repos_for_org_variable

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable."),
  "selected_repository_ids": z.array(z.number().int()).describe("The IDs of the repositories that can access the organization variable.")
}
```

### actions_add_selected_repo_to_org_variable

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable."),
  "repository_id": z.number().int()
}
```

### actions_remove_selected_repo_from_org_variable

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable."),
  "repository_id": z.number().int()
}
```

### orgs_list_attestations

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "subject_digest": z.string().describe("The parameter should be set to the attestation's subject's SHA256 digest, in the form \`sha256:HEX_DIGEST\`."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "predicate_type": z.string().describe("Optional filter for fetching attestations with a given predicate type.\nThis option accepts \`provenance\`, \`sbom\`, or freeform text for custom predicate types.").optional()
}
```

### orgs_list_blocked_users

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_check_blocked_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### orgs_block_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### orgs_unblock_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### campaigns_list_org_campaigns

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "state": z.enum(["open","closed"]).describe("Indicates whether a campaign is open or closed").optional(),
  "sort": z.enum(["created","updated","ends_at","published"]).describe("The property by which to sort the results.").optional()
}
```

### campaigns_create_campaign

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().min(1).max(50).describe("The name of the campaign"),
  "description": z.string().min(1).max(255).describe("A description for the campaign"),
  "managers": z.array(z.string().describe("The login of each manager")).max(10).describe("The logins of the users to set as the campaign managers. At this time, only a single manager can be supplied.").optional(),
  "team_managers": z.array(z.string().describe("The slug of each team")).max(10).describe("The slugs of the teams to set as the campaign managers.").optional(),
  "ends_at": z.string().datetime({ offset: true }).describe("The end date and time of the campaign. The date must be in the future."),
  "contact_link": z.string().url().nullable().describe("The contact link of the campaign. Must be a URI.").optional(),
  "code_scanning_alerts": z.array(z.object({ "repository_id": z.number().int().describe("The repository id"), "alert_numbers": z.array(z.number().int()).min(1).describe("The alert numbers") }).strict()).min(1).describe("The code scanning alerts to include in this campaign"),
  "generate_issues": z.boolean().describe("If true, will automatically generate issues for the campaign. The default is false.").optional()
}
```

### campaigns_get_campaign_summary

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "campaign_number": z.number().int().describe("The campaign number.")
}
```

### campaigns_update_campaign

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "campaign_number": z.number().int().describe("The campaign number."),
  "name": z.string().min(1).max(50).describe("The name of the campaign").optional(),
  "description": z.string().min(1).max(255).describe("A description for the campaign").optional(),
  "managers": z.array(z.string()).max(10).describe("The logins of the users to set as the campaign managers. At this time, only a single manager can be supplied.").optional(),
  "team_managers": z.array(z.string().describe("The slug of each team")).max(10).describe("The slugs of the teams to set as the campaign managers.").optional(),
  "ends_at": z.string().datetime({ offset: true }).describe("The end date and time of the campaign, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.").optional(),
  "contact_link": z.string().url().nullable().describe("The contact link of the campaign. Must be a URI.").optional(),
  "state": z.enum(["open","closed"]).describe("Indicates whether a campaign is open or closed").optional()
}
```

### campaigns_delete_campaign

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "campaign_number": z.number().int().describe("The campaign number.")
}
```

### code_scanning_list_alerts_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "tool_name": z.string().describe("The name of the tool used to generate the code scanning analysis.").optional(),
  "tool_guid": z.string().nullable().describe("The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data.").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "state": z.enum(["open","closed","dismissed","fixed"]).describe("State of a code scanning alert.").optional(),
  "sort": z.enum(["created","updated"]).describe("The property by which to sort the results.").optional(),
  "severity": z.enum(["critical","high","medium","low","warning","note","error"]).describe("Severity of a code scanning alert.").optional()
}
```

### code_security_get_configurations_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "target_type": z.enum(["global","all"]).describe("The target type of the code security configuration").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### code_security_create_configuration

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the code security configuration. Must be unique within the organization."),
  "description": z.string().max(255).describe("A description of the code security configuration"),
  "advanced_security": z.enum(["enabled","disabled","code_security","secret_protection"]).describe("The enablement status of GitHub Advanced Security features. \`enabled\` will enable both Code Security and Secret Protection features.").optional(),
  "dependency_graph": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependency Graph").optional(),
  "dependency_graph_autosubmit_action": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Automatic dependency submission").optional(),
  "dependency_graph_autosubmit_action_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFeature options for Automatic dependency submission").optional(),
  "dependabot_alerts": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependabot alerts").optional(),
  "dependabot_security_updates": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependabot security updates").optional(),
  "code_scanning_default_setup": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of code scanning default setup").optional(),
  "code_scanning_default_setup_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFeature options for code scanning default setup").optional(),
  "code_scanning_delegated_alert_dismissal": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of code scanning delegated alert dismissal").optional(),
  "secret_scanning": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning").optional(),
  "secret_scanning_push_protection": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning push protection").optional(),
  "secret_scanning_delegated_bypass": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning delegated bypass").optional(),
  "secret_scanning_delegated_bypass_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFeature options for secret scanning delegated bypass").optional(),
  "secret_scanning_validity_checks": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning validity checks").optional(),
  "secret_scanning_non_provider_patterns": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning non provider patterns").optional(),
  "secret_scanning_generic_secrets": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Copilot secret scanning").optional(),
  "secret_scanning_delegated_alert_dismissal": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning delegated alert dismissal").optional(),
  "private_vulnerability_reporting": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of private vulnerability reporting").optional(),
  "enforcement": z.enum(["enforced","unenforced"]).describe("The enforcement status for a security configuration").optional()
}
```

### code_security_get_default_configurations

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### code_security_detach_configuration

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_repository_ids": z.array(z.number().int().describe("Unique identifier of the repository.")).describe("An array of repository IDs to detach from configurations.").optional()
}
```

### code_security_get_configuration

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration.")
}
```

### code_security_update_configuration

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration."),
  "name": z.string().describe("The name of the code security configuration. Must be unique within the organization.").optional(),
  "description": z.string().max(255).describe("A description of the code security configuration").optional(),
  "advanced_security": z.enum(["enabled","disabled","code_security","secret_protection"]).describe("The enablement status of GitHub Advanced Security features. \`enabled\` will enable both Code Security and Secret Protection features.").optional(),
  "dependency_graph": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependency Graph").optional(),
  "dependency_graph_autosubmit_action": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Automatic dependency submission").optional(),
  "dependency_graph_autosubmit_action_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFeature options for Automatic dependency submission").optional(),
  "dependabot_alerts": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependabot alerts").optional(),
  "dependabot_security_updates": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Dependabot security updates").optional(),
  "code_scanning_default_setup": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of code scanning default setup").optional(),
  "code_scanning_default_setup_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFeature options for code scanning default setup").optional(),
  "code_scanning_delegated_alert_dismissal": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of code scanning delegated alert dismissal").optional(),
  "secret_scanning": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning").optional(),
  "secret_scanning_push_protection": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning push protection").optional(),
  "secret_scanning_delegated_bypass": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning delegated bypass").optional(),
  "secret_scanning_delegated_bypass_options": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFeature options for secret scanning delegated bypass").optional(),
  "secret_scanning_validity_checks": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning validity checks").optional(),
  "secret_scanning_non_provider_patterns": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning non-provider patterns").optional(),
  "secret_scanning_generic_secrets": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of Copilot secret scanning").optional(),
  "secret_scanning_delegated_alert_dismissal": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of secret scanning delegated alert dismissal").optional(),
  "private_vulnerability_reporting": z.enum(["enabled","disabled","not_set"]).describe("The enablement status of private vulnerability reporting").optional(),
  "enforcement": z.enum(["enforced","unenforced"]).describe("The enforcement status for a security configuration").optional()
}
```

### code_security_delete_configuration

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration.")
}
```

### code_security_attach_configuration

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration."),
  "scope": z.enum(["all","all_without_configurations","public","private_or_internal","selected"]).describe("The type of repositories to attach the configuration to. \`selected\` means the configuration will be attached to only the repositories specified by \`selected_repository_ids\`"),
  "selected_repository_ids": z.array(z.number().int().describe("Unique identifier of the repository.")).describe("An array of repository IDs to attach the configuration to. You can only provide a list of repository ids when the \`scope\` is set to \`selected\`.").optional()
}
```

### code_security_set_configuration_as_default

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration."),
  "default_for_new_repos": z.enum(["all","none","private_and_internal","public"]).describe("Specify which types of repository this security configuration should be applied to by default.").optional()
}
```

### code_security_get_repositories_for_configuration

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "configuration_id": z.number().int().describe("The unique identifier of the code security configuration."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "status": z.string().describe("A comma-separated list of statuses. If specified, only repositories with these attachment statuses will be returned.\n\nCan be: \`all\`, \`attached\`, \`attaching\`, \`detached\`, \`removed\`, \`enforced\`, \`failed\`, \`updating\`, \`removed_by_enterprise\`").optional()
}
```

### codespaces_list_in_organization

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### codespaces_set_codespaces_access

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "visibility": z.enum(["disabled","selected_members","all_members","all_members_and_outside_collaborators"]).describe("Which users can access codespaces in the organization. \`disabled\` means that no users can access codespaces in the organization."),
  "selected_usernames": z.array(z.string()).max(100).describe("The usernames of the organization members who should have access to codespaces in the organization. Required when \`visibility\` is \`selected_members\`. The provided list of usernames will replace any existing value.").optional()
}
```

### codespaces_set_codespaces_access_users

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_usernames": z.array(z.string()).max(100).describe("The usernames of the organization members whose codespaces be billed to the organization.")
}
```

### codespaces_delete_codespaces_access_users

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_usernames": z.array(z.string()).max(100).describe("The usernames of the organization members whose codespaces should not be billed to the organization.")
}
```

### codespaces_list_org_secrets

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### codespaces_get_org_public_key

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### codespaces_get_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### codespaces_create_or_update_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "encrypted_value": z.string().regex(new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$")).describe("The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/codespaces/organization-secrets#get-an-organization-public-key) endpoint.").optional(),
  "key_id": z.string().describe("The ID of the key you used to encrypt the secret.").optional(),
  "visibility": z.enum(["all","private","selected"]).describe("Which type of organization repositories have access to the organization secret. \`selected\` means only the repositories specified by \`selected_repository_ids\` can access the secret."),
  "selected_repository_ids": z.array(z.number().int()).describe("An array of repository IDs that can access the organization secret. You can only provide a list of repository IDs when the \`visibility\` is set to \`selected\`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#remove-selected-repository-from-an-organization-secret) endpoints.").optional()
}
```

### codespaces_delete_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### codespaces_list_selected_repos_for_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### codespaces_set_selected_repos_for_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "selected_repository_ids": z.array(z.number().int()).describe("An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the \`visibility\` is set to \`selected\`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#remove-selected-repository-from-an-organization-secret) endpoints.")
}
```

### codespaces_add_selected_repo_to_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "repository_id": z.number().int()
}
```

### codespaces_remove_selected_repo_from_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "repository_id": z.number().int()
}
```

### copilot_get_copilot_organization_details

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### copilot_list_copilot_seats

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### copilot_add_copilot_seats_for_teams

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_teams": z.array(z.string()).min(1).describe("List of team names within the organization to which to grant access to GitHub Copilot.")
}
```

### copilot_cancel_copilot_seat_assignment_for_teams

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_teams": z.array(z.string()).min(1).describe("The names of teams from which to revoke access to GitHub Copilot.")
}
```

### copilot_add_copilot_seats_for_users

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_usernames": z.array(z.string()).min(1).describe("The usernames of the organization members to be granted access to GitHub Copilot.")
}
```

### copilot_cancel_copilot_seat_assignment_for_users

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_usernames": z.array(z.string()).min(1).describe("The usernames of the organization members for which to revoke access to GitHub Copilot.")
}
```

### copilot_copilot_metrics_for_organization

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "since": z.string().describe("Show usage metrics since this date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (\`YYYY-MM-DDTHH:MM:SSZ\`). Maximum value is 28 days ago.").optional(),
  "until": z.string().describe("Show usage metrics until this date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (\`YYYY-MM-DDTHH:MM:SSZ\`) and should not preceed the \`since\` date if it is passed.").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of days of metrics to display per page (max 28). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### dependabot_list_alerts_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "state": z.string().describe("A comma-separated list of states. If specified, only alerts with these states will be returned.\n\nCan be: \`auto_dismissed\`, \`dismissed\`, \`fixed\`, \`open\`").optional(),
  "severity": z.string().describe("A comma-separated list of severities. If specified, only alerts with these severities will be returned.\n\nCan be: \`low\`, \`medium\`, \`high\`, \`critical\`").optional(),
  "ecosystem": z.string().describe("A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.\n\nCan be: \`composer\`, \`go\`, \`maven\`, \`npm\`, \`nuget\`, \`pip\`, \`pub\`, \`rubygems\`, \`rust\`").optional(),
  "package": z.string().describe("A comma-separated list of package names. If specified, only alerts for these packages will be returned.").optional(),
  "epss_percentage": z.string().describe("CVE Exploit Prediction Scoring System (EPSS) percentage. Can be specified as:\n- An exact number (\`n\`)\n- Comparators such as \`>n\`, \`<n\`, \`>=n\`, \`<=n\`\n- A range like \`n..n\`, where \`n\` is a number from 0.0 to 1.0\n\nFilters the list of alerts based on EPSS percentages. If specified, only alerts with the provided EPSS percentages will be returned.").optional(),
  "scope": z.enum(["development","runtime"]).describe("The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.").optional(),
  "sort": z.enum(["created","updated","epss_percentage"]).describe("The property by which to sort the results.\n\`created\` means when the alert was created.\n\`updated\` means when the alert's state last changed.\n\`epss_percentage\` sorts alerts by the Exploit Prediction Scoring System (EPSS) percentage.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "first": z.number().int().gte(1).lte(100).describe("**Deprecated**. The number of results per page (max 100), starting from the first matching result.\nThis parameter must not be used in combination with \`last\`.\nInstead, use \`per_page\` in combination with \`after\` to fetch the first page of results.").optional(),
  "last": z.number().int().gte(1).lte(100).describe("**Deprecated**. The number of results per page (max 100), starting from the last matching result.\nThis parameter must not be used in combination with \`first\`.\nInstead, use \`per_page\` in combination with \`before\` to fetch the last page of results.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### dependabot_list_org_secrets

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### dependabot_get_org_public_key

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### dependabot_get_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### dependabot_create_or_update_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "encrypted_value": z.string().regex(new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$")).describe("Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/dependabot/secrets#get-an-organization-public-key) endpoint.").optional(),
  "key_id": z.string().describe("ID of the key you used to encrypt the secret.").optional(),
  "visibility": z.enum(["all","private","selected"]).describe("Which type of organization repositories have access to the organization secret. \`selected\` means only the repositories specified by \`selected_repository_ids\` can access the secret."),
  "selected_repository_ids": z.array(z.string()).describe("An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the \`visibility\` is set to \`selected\`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/dependabot/secrets#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/dependabot/secrets#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/dependabot/secrets#remove-selected-repository-from-an-organization-secret) endpoints.").optional()
}
```

### dependabot_delete_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### dependabot_list_selected_repos_for_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### dependabot_set_selected_repos_for_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "selected_repository_ids": z.array(z.number().int()).describe("An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the \`visibility\` is set to \`selected\`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://docs.github.com/rest/dependabot/secrets#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/dependabot/secrets#remove-selected-repository-from-an-organization-secret) endpoints.")
}
```

### dependabot_add_selected_repo_to_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "repository_id": z.number().int()
}
```

### dependabot_remove_selected_repo_from_org_secret

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "repository_id": z.number().int()
}
```

### packages_list_docker_migration_conflicting_packages_for_organiza

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### activity_list_public_org_events

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_list_failed_invitations

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_list_webhooks

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_create_webhook

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("Must be passed as \"web\"."),
  "config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nKey/value pairs to provide settings for this webhook."),
  "events": z.array(z.string()).describe("Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. Set to \`[\"*\"]\` to receive all possible events.").optional(),
  "active": z.boolean().describe("Determines if notifications are sent when the webhook is triggered. Set to \`true\` to send notifications.").optional()
}
```

### orgs_get_webhook

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery.")
}
```

### orgs_update_webhook

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery."),
  "config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nKey/value pairs to provide settings for this webhook.").optional(),
  "events": z.array(z.string()).describe("Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.").optional(),
  "active": z.boolean().describe("Determines if notifications are sent when the webhook is triggered. Set to \`true\` to send notifications.").optional(),
  "name": z.string().optional()
}
```

### orgs_delete_webhook

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery.")
}
```

### orgs_get_webhook_config_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery.")
}
```

### orgs_update_webhook_config_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery."),
  "url": z.string().url().describe("The URL to which the payloads will be delivered.").optional(),
  "content_type": z.string().describe("The media type used to serialize the payloads. Supported values include \`json\` and \`form\`. The default is \`form\`.").optional(),
  "secret": z.string().describe("If provided, the \`secret\` will be used as the \`key\` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).").optional(),
  "insecure_ssl": z.string().describe("Determines whether the SSL certificate of the host for \`url\` will be verified when delivering payloads. Supported values include \`0\` (verification is performed) and \`1\` (verification is not performed). The default is \`0\`. **We strongly recommend not setting this to \`1\` as you are subject to man-in-the-middle and other attacks.**").optional()
}
```

### orgs_list_webhook_deliveries

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "cursor": z.string().describe("Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the \`link\` header for the next and previous page cursors.").optional()
}
```

### orgs_get_webhook_delivery

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery."),
  "delivery_id": z.number().int()
}
```

### orgs_redeliver_webhook_delivery

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery."),
  "delivery_id": z.number().int()
}
```

### orgs_ping_webhook

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery.")
}
```

### api_insights_get_route_stats_by_actor

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "actor_type": z.enum(["installation","classic_pat","fine_grained_pat","oauth_app","github_app_user_to_server"]).describe("The type of the actor"),
  "actor_id": z.number().int().describe("The ID of the actor"),
  "min_timestamp": z.string().describe("The minimum timestamp to query for stats. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`."),
  "max_timestamp": z.string().describe("The maximum timestamp to query for stats. Defaults to the time 30 days ago. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "sort": z.array(z.enum(["last_rate_limited_timestamp","last_request_timestamp","rate_limited_request_count","http_method","api_route","total_request_count"])).describe("The property to sort the results by.").optional(),
  "api_route_substring": z.string().describe("Providing a substring will filter results where the API route contains the substring. This is a case-insensitive search.").optional()
}
```

### api_insights_get_subject_stats

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "min_timestamp": z.string().describe("The minimum timestamp to query for stats. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`."),
  "max_timestamp": z.string().describe("The maximum timestamp to query for stats. Defaults to the time 30 days ago. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "sort": z.array(z.enum(["last_rate_limited_timestamp","last_request_timestamp","rate_limited_request_count","subject_name","total_request_count"])).describe("The property to sort the results by.").optional(),
  "subject_name_substring": z.string().describe("Providing a substring will filter results where the subject name contains the substring. This is a case-insensitive search.").optional()
}
```

### api_insights_get_summary_stats

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "min_timestamp": z.string().describe("The minimum timestamp to query for stats. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`."),
  "max_timestamp": z.string().describe("The maximum timestamp to query for stats. Defaults to the time 30 days ago. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional()
}
```

### api_insights_get_summary_stats_by_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "user_id": z.string().describe("The ID of the user to query for stats"),
  "min_timestamp": z.string().describe("The minimum timestamp to query for stats. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`."),
  "max_timestamp": z.string().describe("The maximum timestamp to query for stats. Defaults to the time 30 days ago. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional()
}
```

### api_insights_get_summary_stats_by_actor

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "actor_type": z.enum(["installation","classic_pat","fine_grained_pat","oauth_app","github_app_user_to_server"]).describe("The type of the actor"),
  "actor_id": z.number().int().describe("The ID of the actor"),
  "min_timestamp": z.string().describe("The minimum timestamp to query for stats. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`."),
  "max_timestamp": z.string().describe("The maximum timestamp to query for stats. Defaults to the time 30 days ago. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional()
}
```

### api_insights_get_time_stats

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "min_timestamp": z.string().describe("The minimum timestamp to query for stats. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`."),
  "max_timestamp": z.string().describe("The maximum timestamp to query for stats. Defaults to the time 30 days ago. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "timestamp_increment": z.string().describe("The increment of time used to breakdown the query results (5m, 10m, 1h, etc.)")
}
```

### api_insights_get_time_stats_by_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "user_id": z.string().describe("The ID of the user to query for stats"),
  "min_timestamp": z.string().describe("The minimum timestamp to query for stats. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`."),
  "max_timestamp": z.string().describe("The maximum timestamp to query for stats. Defaults to the time 30 days ago. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "timestamp_increment": z.string().describe("The increment of time used to breakdown the query results (5m, 10m, 1h, etc.)")
}
```

### api_insights_get_time_stats_by_actor

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "actor_type": z.enum(["installation","classic_pat","fine_grained_pat","oauth_app","github_app_user_to_server"]).describe("The type of the actor"),
  "actor_id": z.number().int().describe("The ID of the actor"),
  "min_timestamp": z.string().describe("The minimum timestamp to query for stats. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`."),
  "max_timestamp": z.string().describe("The maximum timestamp to query for stats. Defaults to the time 30 days ago. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "timestamp_increment": z.string().describe("The increment of time used to breakdown the query results (5m, 10m, 1h, etc.)")
}
```

### api_insights_get_user_stats

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "user_id": z.string().describe("The ID of the user to query for stats"),
  "min_timestamp": z.string().describe("The minimum timestamp to query for stats. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`."),
  "max_timestamp": z.string().describe("The maximum timestamp to query for stats. Defaults to the time 30 days ago. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "sort": z.array(z.enum(["last_rate_limited_timestamp","last_request_timestamp","rate_limited_request_count","subject_name","total_request_count"])).describe("The property to sort the results by.").optional(),
  "actor_name_substring": z.string().describe("Providing a substring will filter results where the actor name contains the substring. This is a case-insensitive search.").optional()
}
```

### apps_get_org_installation

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### orgs_list_app_installations

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### interactions_get_restrictions_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### interactions_set_restrictions_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "limit": z.enum(["existing_users","contributors_only","collaborators_only"]).describe("The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect."),
  "expiry": z.enum(["one_day","three_days","one_week","one_month","six_months"]).describe("The duration of the interaction restriction. Default: \`one_day\`.").optional()
}
```

### interactions_remove_restrictions_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### orgs_list_pending_invitations

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "role": z.enum(["all","admin","direct_member","billing_manager","hiring_manager"]).describe("Filter invitations by their member role.").optional(),
  "invitation_source": z.enum(["all","member","scim"]).describe("Filter invitations by their invitation source.").optional()
}
```

### orgs_create_invitation

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "invitee_id": z.number().int().describe("**Required unless you provide \`email\`**. GitHub user ID for the person you are inviting.").optional(),
  "email": z.string().describe("**Required unless you provide \`invitee_id\`**. Email address of the person you are inviting, which can be an existing GitHub user.").optional(),
  "role": z.enum(["admin","direct_member","billing_manager","reinstate"]).describe("The role for the new member. \n * \`admin\` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.  \n * \`direct_member\` - Non-owner organization members with ability to see other members and join teams by invitation.  \n * \`billing_manager\` - Non-owner organization members with ability to manage the billing settings of your organization. \n * \`reinstate\` - The previous role assigned to the invitee before they were removed from your organization. Can be one of the roles listed above. Only works if the invitee was previously part of your organization.").optional(),
  "team_ids": z.array(z.number().int()).describe("Specify IDs for the teams you want to invite new members to.").optional()
}
```

### orgs_cancel_invitation

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "invitation_id": z.number().int().describe("The unique identifier of the invitation.")
}
```

### orgs_list_invitation_teams

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "invitation_id": z.number().int().describe("The unique identifier of the invitation."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_list_issue_types

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### orgs_create_issue_type

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("Name of the issue type."),
  "is_enabled": z.boolean().describe("Whether or not the issue type is enabled at the organization level."),
  "description": z.string().nullable().describe("Description of the issue type.").optional(),
  "color": z.enum(["gray","blue","green","yellow","orange","red","pink","purple"]).nullable().describe("Color for the issue type.").optional()
}
```

### orgs_update_issue_type

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "issue_type_id": z.number().int().describe("The unique identifier of the issue type."),
  "name": z.string().describe("Name of the issue type."),
  "is_enabled": z.boolean().describe("Whether or not the issue type is enabled at the organization level."),
  "description": z.string().nullable().describe("Description of the issue type.").optional(),
  "color": z.enum(["gray","blue","green","yellow","orange","red","pink","purple"]).nullable().describe("Color for the issue type.").optional()
}
```

### orgs_delete_issue_type

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "issue_type_id": z.number().int().describe("The unique identifier of the issue type.")
}
```

### issues_list_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "filter": z.enum(["assigned","created","mentioned","subscribed","repos","all"]).describe("Indicates which sorts of issues to return. \`assigned\` means issues assigned to you. \`created\` means issues created by you. \`mentioned\` means issues mentioning you. \`subscribed\` means issues you're subscribed to updates for. \`all\` or \`repos\` means all issues you can see, regardless of participation or creation.").optional(),
  "state": z.enum(["open","closed","all"]).describe("Indicates the state of the issues to return.").optional(),
  "labels": z.string().describe("A list of comma separated label names. Example: \`bug,ui,@high\`").optional(),
  "type": z.string().describe("Can be the name of an issue type.").optional(),
  "sort": z.enum(["created","updated","comments"]).describe("What to sort results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_list_members

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "filter": z.enum(["2fa_disabled","all"]).describe("Filter members returned in the list. \`2fa_disabled\` means that only members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled will be returned. This options is only available for organization owners.").optional(),
  "role": z.enum(["all","admin","member"]).describe("Filter members returned by their role.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_check_membership_for_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### orgs_remove_member

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### codespaces_get_codespaces_for_user_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### codespaces_delete_from_organization

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "codespace_name": z.string().describe("The name of the codespace.")
}
```

### codespaces_stop_in_organization

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "codespace_name": z.string().describe("The name of the codespace.")
}
```

### copilot_get_copilot_seat_details_for_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### orgs_get_membership_for_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### orgs_set_membership_for_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "role": z.enum(["admin","member"]).describe("The role to give the user in the organization. Can be one of:  \n * \`admin\` - The user will become an owner of the organization.  \n * \`member\` - The user will become a non-owner member of the organization.").optional()
}
```

### orgs_remove_membership_for_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### migrations_list_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "exclude": z.array(z.literal("repositories").describe("Allowed values that can be passed to the exclude param.")).describe("Exclude attributes from the API response to improve performance").optional()
}
```

### migrations_start_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "repositories": z.array(z.string()).describe("A list of arrays indicating which repositories should be migrated."),
  "lock_repositories": z.boolean().describe("Indicates whether repositories should be locked (to prevent manipulation) while migrating data.").optional(),
  "exclude_metadata": z.boolean().describe("Indicates whether metadata should be excluded and only git source should be included for the migration.").optional(),
  "exclude_git_data": z.boolean().describe("Indicates whether the repository git data should be excluded from the migration.").optional(),
  "exclude_attachments": z.boolean().describe("Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).").optional(),
  "exclude_releases": z.boolean().describe("Indicates whether releases should be excluded from the migration (to reduce migration archive file size).").optional(),
  "exclude_owner_projects": z.boolean().describe("Indicates whether projects owned by the organization or users should be excluded. from the migration.").optional(),
  "org_metadata_only": z.boolean().describe("Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags).").optional(),
  "exclude": z.array(z.literal("repositories")).describe("Exclude related items from being returned in the response in order to improve performance of the request.").optional()
}
```

### migrations_get_status_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "migration_id": z.number().int().describe("The unique identifier of the migration."),
  "exclude": z.array(z.literal("repositories").describe("Allowed values that can be passed to the exclude param.")).describe("Exclude attributes from the API response to improve performance").optional()
}
```

### migrations_download_archive_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "migration_id": z.number().int().describe("The unique identifier of the migration.")
}
```

### migrations_delete_archive_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "migration_id": z.number().int().describe("The unique identifier of the migration.")
}
```

### migrations_unlock_repo_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "migration_id": z.number().int().describe("The unique identifier of the migration."),
  "repo_name": z.string().describe("repo_name parameter")
}
```

### migrations_list_repos_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "migration_id": z.number().int().describe("The unique identifier of the migration."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_list_org_roles

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### orgs_revoke_all_org_roles_team

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name.")
}
```

### orgs_assign_team_to_org_role

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "role_id": z.number().int().describe("The unique identifier of the role.")
}
```

### orgs_revoke_org_role_team

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "role_id": z.number().int().describe("The unique identifier of the role.")
}
```

### orgs_revoke_all_org_roles_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### orgs_assign_user_to_org_role

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "role_id": z.number().int().describe("The unique identifier of the role.")
}
```

### orgs_revoke_org_role_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "role_id": z.number().int().describe("The unique identifier of the role.")
}
```

### orgs_get_org_role

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "role_id": z.number().int().describe("The unique identifier of the role.")
}
```

### orgs_list_org_role_teams

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "role_id": z.number().int().describe("The unique identifier of the role."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_list_org_role_users

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "role_id": z.number().int().describe("The unique identifier of the role."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_list_outside_collaborators

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "filter": z.enum(["2fa_disabled","all"]).describe("Filter the list of outside collaborators. \`2fa_disabled\` means that only outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled will be returned.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_convert_member_to_outside_collaborator

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "async": z.boolean().describe("When set to \`true\`, the request will be performed asynchronously. Returns a 202 status code when the job is successfully queued.").optional()
}
```

### orgs_remove_outside_collaborator

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### packages_list_packages_for_organization

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "visibility": z.enum(["public","private","internal"]).describe("The selected visibility of the packages.  This parameter is optional and only filters an existing result set.\n\nThe \`internal\` visibility is only supported for GitHub Packages registries that allow for granular permissions. For other ecosystems \`internal\` is synonymous with \`private\`.\nFor the list of GitHub Packages registries that support granular permissions, see \"[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### packages_get_package_for_organization

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package."),
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### packages_delete_package_for_org

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package."),
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### packages_restore_package_for_org

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package."),
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "token": z.string().describe("package token").optional()
}
```

### packages_get_all_package_versions_for_package_owned_by_org

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package."),
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "state": z.enum(["active","deleted"]).describe("The state of the package, either active or deleted.").optional()
}
```

### packages_get_package_version_for_organization

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package."),
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "package_version_id": z.number().int().describe("Unique identifier of the package version.")
}
```

### packages_delete_package_version_for_org

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package."),
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "package_version_id": z.number().int().describe("Unique identifier of the package version.")
}
```

### packages_restore_package_version_for_org

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package."),
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "package_version_id": z.number().int().describe("Unique identifier of the package version.")
}
```

### orgs_list_pat_grant_requests

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "sort": z.literal("created_at").describe("The property by which to sort the results.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "owner": z.array(z.string()).max(10).describe("A list of owner usernames to use to filter the results.").optional(),
  "repository": z.string().describe("The name of the repository to use to filter the results.").optional(),
  "permission": z.string().describe("The permission to use to filter the results.").optional(),
  "last_used_before": z.string().datetime({ offset: true }).describe("Only show fine-grained personal access tokens used before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "last_used_after": z.string().datetime({ offset: true }).describe("Only show fine-grained personal access tokens used after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "token_id": z.array(z.string()).max(50).describe("The ID of the token").optional()
}
```

### orgs_review_pat_grant_requests_in_bulk

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "pat_request_ids": z.array(z.number().int()).min(1).max(100).describe("Unique identifiers of the requests for access via fine-grained personal access token. Must be formed of between 1 and 100 \`pat_request_id\` values.").optional(),
  "action": z.enum(["approve","deny"]).describe("Action to apply to the requests."),
  "reason": z.string().max(1024).nullable().describe("Reason for approving or denying the requests. Max 1024 characters.").optional()
}
```

### orgs_review_pat_grant_request

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "pat_request_id": z.number().int().describe("Unique identifier of the request for access via fine-grained personal access token."),
  "action": z.enum(["approve","deny"]).describe("Action to apply to the request."),
  "reason": z.string().max(1024).nullable().describe("Reason for approving or denying the request. Max 1024 characters.").optional()
}
```

### orgs_list_pat_grant_request_repositories

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "pat_request_id": z.number().int().describe("Unique identifier of the request for access via fine-grained personal access token."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_list_pat_grants

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "sort": z.literal("created_at").describe("The property by which to sort the results.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "owner": z.array(z.string()).max(10).describe("A list of owner usernames to use to filter the results.").optional(),
  "repository": z.string().describe("The name of the repository to use to filter the results.").optional(),
  "permission": z.string().describe("The permission to use to filter the results.").optional(),
  "last_used_before": z.string().datetime({ offset: true }).describe("Only show fine-grained personal access tokens used before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "last_used_after": z.string().datetime({ offset: true }).describe("Only show fine-grained personal access tokens used after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "token_id": z.array(z.string()).max(50).describe("The ID of the token").optional()
}
```

### orgs_update_pat_accesses

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "action": z.literal("revoke").describe("Action to apply to the fine-grained personal access token."),
  "pat_ids": z.array(z.number().int().describe("Unique identifier of the fine-grained personal access token.")).min(1).max(100).describe("The IDs of the fine-grained personal access tokens.")
}
```

### orgs_update_pat_access

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "pat_id": z.number().int().describe("The unique identifier of the fine-grained personal access token."),
  "action": z.literal("revoke").describe("Action to apply to the fine-grained personal access token.")
}
```

### orgs_list_pat_grant_repositories

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "pat_id": z.number().int().describe("Unique identifier of the fine-grained personal access token."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### private_registries_list_org_private_registries

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### private_registries_create_org_private_registry

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "registry_type": z.literal("maven_repository").describe("The registry type."),
  "username": z.string().nullable().describe("The username to use when authenticating with the private registry. This field should be omitted if the private registry does not require a username for authentication.").optional(),
  "encrypted_value": z.string().regex(new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$")).describe("The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/rest/private-registries/organization-configurations#get-private-registries-public-key-for-an-organization) endpoint."),
  "key_id": z.string().describe("The ID of the key you used to encrypt the secret."),
  "visibility": z.enum(["all","private","selected"]).describe("Which type of organization repositories have access to the private registry. \`selected\` means only the repositories specified by \`selected_repository_ids\` can access the private registry."),
  "selected_repository_ids": z.array(z.number().int()).describe("An array of repository IDs that can access the organization private registry. You can only provide a list of repository IDs when \`visibility\` is set to \`selected\`. You can manage the list of selected repositories using the [Update a private registry for an organization](https://docs.github.com/rest/private-registries/organization-configurations#update-a-private-registry-for-an-organization) endpoint. This field should be omitted if \`visibility\` is set to \`all\` or \`private\`.").optional()
}
```

### private_registries_get_org_public_key

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### private_registries_get_org_private_registry

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### private_registries_update_org_private_registry

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "registry_type": z.literal("maven_repository").describe("The registry type.").optional(),
  "username": z.string().nullable().describe("The username to use when authenticating with the private registry. This field should be omitted if the private registry does not require a username for authentication.").optional(),
  "encrypted_value": z.string().regex(new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$")).describe("The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/rest/private-registries/organization-configurations#get-private-registries-public-key-for-an-organization) endpoint.").optional(),
  "key_id": z.string().describe("The ID of the key you used to encrypt the secret.").optional(),
  "visibility": z.enum(["all","private","selected"]).describe("Which type of organization repositories have access to the private registry. \`selected\` means only the repositories specified by \`selected_repository_ids\` can access the private registry.").optional(),
  "selected_repository_ids": z.array(z.number().int()).describe("An array of repository IDs that can access the organization private registry. You can only provide a list of repository IDs when \`visibility\` is set to \`selected\`. This field should be omitted if \`visibility\` is set to \`all\` or \`private\`.").optional()
}
```

### private_registries_delete_org_private_registry

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### projects_list_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "state": z.enum(["open","closed","all"]).describe("Indicates the state of the projects to return.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### projects_create_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the project."),
  "body": z.string().describe("The description of the project.").optional()
}
```

### orgs_get_all_custom_properties

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### orgs_create_or_update_custom_properties

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "properties": z.array(z.object({ "property_name": z.string().describe("The name of the property"), "url": z.string().url().describe("The URL that can be used to fetch, update, or delete info about this property via the API.").optional(), "source_type": z.enum(["organization","enterprise"]).describe("The source type of the property").optional(), "value_type": z.enum(["string","single_select","multi_select","true_false"]).describe("The type of the value for the property"), "required": z.boolean().describe("Whether the property is required.").optional(), "default_value": z.string().nullable().describe("Default value of the property").optional(), "description": z.string().nullable().describe("Short description of the property").optional(), "allowed_values": z.array(z.string().max(75)).max(200).nullable().describe("An ordered list of the allowed values of the property.\nThe property can have up to 200 allowed values.").optional(), "values_editable_by": z.enum(["org_actors","org_and_repo_actors"]).nullable().describe("Who can edit the values of the property").optional() }).describe("Custom property defined on an organization")).min(1).max(100).describe("The array of custom properties to create or update.")
}
```

### orgs_get_custom_property

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "custom_property_name": z.string().describe("The custom property name")
}
```

### orgs_create_or_update_custom_property

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "custom_property_name": z.string().describe("The custom property name"),
  "value_type": z.enum(["string","single_select","multi_select","true_false"]).describe("The type of the value for the property"),
  "required": z.boolean().describe("Whether the property is required.").optional(),
  "default_value": z.string().nullable().describe("Default value of the property").optional(),
  "description": z.string().nullable().describe("Short description of the property").optional(),
  "allowed_values": z.array(z.string().max(75)).max(200).nullable().describe("An ordered list of the allowed values of the property.\nThe property can have up to 200 allowed values.").optional(),
  "values_editable_by": z.enum(["org_actors","org_and_repo_actors"]).nullable().describe("Who can edit the values of the property").optional()
}
```

### orgs_remove_custom_property

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "custom_property_name": z.string().describe("The custom property name")
}
```

### orgs_list_custom_properties_values_for_repos

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "repository_query": z.string().describe("Finds repositories in the organization with a query containing one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See \"[Searching for repositories](https://docs.github.com/articles/searching-for-repositories/)\" for a detailed list of qualifiers.").optional()
}
```

### orgs_create_or_update_custom_properties_values_for_repos

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "repository_names": z.array(z.string()).min(1).max(30).describe("The names of repositories that the custom property values will be applied to."),
  "properties": z.array(z.object({ "property_name": z.string().describe("The name of the property"), "value": z.string().nullable().describe("The value assigned to the property") }).describe("Custom property name and associated value")).describe("List of custom property names and associated values to apply to the repositories.")
}
```

### orgs_list_public_members

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_check_public_membership_for_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### orgs_set_public_membership_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### orgs_remove_public_membership_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### repos_list_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "type": z.enum(["all","public","private","forks","sources","member"]).describe("Specifies the types of repositories you want returned.").optional(),
  "sort": z.enum(["created","updated","pushed","full_name"]).describe("The property to sort the results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The order to sort by. Default: \`asc\` when using \`full_name\`, otherwise \`desc\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_create_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the repository."),
  "description": z.string().describe("A short description of the repository.").optional(),
  "homepage": z.string().describe("A URL with more information about the repository.").optional(),
  "private": z.boolean().describe("Whether the repository is private.").optional(),
  "visibility": z.enum(["public","private"]).describe("The visibility of the repository.").optional(),
  "has_issues": z.boolean().describe("Either \`true\` to enable issues for this repository or \`false\` to disable them.").optional(),
  "has_projects": z.boolean().describe("Either \`true\` to enable projects for this repository or \`false\` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is \`false\`, and if you pass \`true\`, the API returns an error.").optional(),
  "has_wiki": z.boolean().describe("Either \`true\` to enable the wiki for this repository or \`false\` to disable it.").optional(),
  "has_downloads": z.boolean().describe("Whether downloads are enabled.").optional(),
  "is_template": z.boolean().describe("Either \`true\` to make this repo available as a template repository or \`false\` to prevent it.").optional(),
  "team_id": z.number().int().describe("The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.").optional(),
  "auto_init": z.boolean().describe("Pass \`true\` to create an initial commit with empty README.").optional(),
  "gitignore_template": z.string().describe("Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, \"Haskell\".").optional(),
  "license_template": z.string().describe("Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the \`license_template\` string. For example, \"mit\" or \"mpl-2.0\".").optional(),
  "allow_squash_merge": z.boolean().describe("Either \`true\` to allow squash-merging pull requests, or \`false\` to prevent squash-merging.").optional(),
  "allow_merge_commit": z.boolean().describe("Either \`true\` to allow merging pull requests with a merge commit, or \`false\` to prevent merging pull requests with merge commits.").optional(),
  "allow_rebase_merge": z.boolean().describe("Either \`true\` to allow rebase-merging pull requests, or \`false\` to prevent rebase-merging.").optional(),
  "allow_auto_merge": z.boolean().describe("Either \`true\` to allow auto-merge on pull requests, or \`false\` to disallow auto-merge.").optional(),
  "delete_branch_on_merge": z.boolean().describe("Either \`true\` to allow automatically deleting head branches when pull requests are merged, or \`false\` to prevent automatic deletion. **The authenticated user must be an organization owner to set this property to \`true\`.**").optional(),
  "squash_merge_commit_title": z.enum(["PR_TITLE","COMMIT_OR_PR_TITLE"]).describe("Required when using \`squash_merge_commit_message\`.\n\nThe default value for a squash merge commit title:\n\n- \`PR_TITLE\` - default to the pull request's title.\n- \`COMMIT_OR_PR_TITLE\` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).").optional(),
  "squash_merge_commit_message": z.enum(["PR_BODY","COMMIT_MESSAGES","BLANK"]).describe("The default value for a squash merge commit message:\n\n- \`PR_BODY\` - default to the pull request's body.\n- \`COMMIT_MESSAGES\` - default to the branch's commit messages.\n- \`BLANK\` - default to a blank commit message.").optional(),
  "merge_commit_title": z.enum(["PR_TITLE","MERGE_MESSAGE"]).describe("Required when using \`merge_commit_message\`.\n\nThe default value for a merge commit title.\n\n- \`PR_TITLE\` - default to the pull request's title.\n- \`MERGE_MESSAGE\` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).").optional(),
  "merge_commit_message": z.enum(["PR_BODY","PR_TITLE","BLANK"]).describe("The default value for a merge commit message.\n\n- \`PR_TITLE\` - default to the pull request's title.\n- \`PR_BODY\` - default to the pull request's body.\n- \`BLANK\` - default to a blank commit message.").optional(),
  "custom_properties": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe custom properties for the new repository. The keys are the custom property names, and the values are the corresponding custom property values.").optional()
}
```

### repos_get_org_rulesets

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "targets": z.string().describe("A comma-separated list of rule targets to filter by.\nIf provided, only rulesets that apply to the specified targets will be returned.\nFor example, \`branch,tag,push\`.\n").optional()
}
```

### repos_create_org_ruleset

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the ruleset."),
  "target": z.enum(["branch","tag","push","repository"]).describe("The target of the ruleset").optional(),
  "enforcement": z.enum(["disabled","active","evaluate"]).describe("The enforcement level of the ruleset. \`evaluate\` allows admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (\`evaluate\` is only available with GitHub Enterprise)."),
  "bypass_actors": z.array(z.object({ "actor_id": z.number().int().nullable().describe("The ID of the actor that can bypass a ruleset. If \`actor_type\` is \`OrganizationAdmin\`, this should be \`1\`. If \`actor_type\` is \`DeployKey\`, this should be null. \`OrganizationAdmin\` is not applicable for personal repositories.").optional(), "actor_type": z.enum(["Integration","OrganizationAdmin","RepositoryRole","Team","DeployKey"]).describe("The type of actor that can bypass a ruleset."), "bypass_mode": z.enum(["always","pull_request"]).describe("When the specified actor can bypass the ruleset. \`pull_request\` means that an actor can only bypass rules on pull requests. \`pull_request\` is not applicable for the \`DeployKey\` actor type. Also, \`pull_request\` is only applicable to branch rulesets.") }).describe("An actor that can bypass rules in a ruleset")).describe("The actors that can bypass the rules in this ruleset").optional(),
  "conditions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConditions for an organization ruleset.\nThe branch and tag rulesets conditions object should contain both \`repository_name\` and \`ref_name\` properties, or both \`repository_id\` and \`ref_name\` properties, or both \`repository_property\` and \`ref_name\` properties.\nThe push rulesets conditions object does not require the \`ref_name\` property.\nFor repository policy rulesets, the conditions object should only contain the \`repository_name\`, the \`repository_id\`, or the \`repository_property\`.").optional(),
  "rules": z.array(z.record(z.any()).and(z.object({ "type": z.literal("creation") }).describe("Only allow users with bypass permission to create matching refs.")).describe("A repository rule.")).describe("An array of rules within the ruleset.").optional()
}
```

### repos_get_org_rule_suites

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "ref": z.string().describe("The name of the ref. Cannot contain wildcard characters. Optionally prefix with \`refs/heads/\` to limit to branches or \`refs/tags/\` to limit to tags. Omit the prefix to search across all refs. When specified, only rule evaluations triggered for this ref will be returned.").optional(),
  "repository_name": z.string().describe("The name of the repository to filter on.").optional(),
  "time_period": z.enum(["hour","day","week","month"]).describe("The time period to filter by.\n\nFor example, \`day\` will filter for rule suites that occurred in the past 24 hours, and \`week\` will filter for insights that occurred in the past 7 days (168 hours).").optional(),
  "actor_name": z.string().describe("The handle for the GitHub user account to filter on. When specified, only rule evaluations triggered by this actor will be returned.").optional(),
  "rule_suite_result": z.enum(["pass","fail","bypass","all"]).describe("The rule results to filter on. When specified, only suites with this result will be returned.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_org_rule_suite

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "rule_suite_id": z.number().int().describe("The unique identifier of the rule suite result.\nTo get this ID, you can use [GET /repos/{owner}/{repo}/rulesets/rule-suites](https://docs.github.com/rest/repos/rule-suites#list-repository-rule-suites)\nfor repositories and [GET /orgs/{org}/rulesets/rule-suites](https://docs.github.com/rest/orgs/rule-suites#list-organization-rule-suites)\nfor organizations.")
}
```

### repos_get_org_ruleset

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "ruleset_id": z.number().int().describe("The ID of the ruleset.")
}
```

### repos_update_org_ruleset

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "ruleset_id": z.number().int().describe("The ID of the ruleset."),
  "name": z.string().describe("The name of the ruleset.").optional(),
  "target": z.enum(["branch","tag","push","repository"]).describe("The target of the ruleset").optional(),
  "enforcement": z.enum(["disabled","active","evaluate"]).describe("The enforcement level of the ruleset. \`evaluate\` allows admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (\`evaluate\` is only available with GitHub Enterprise).").optional(),
  "bypass_actors": z.array(z.object({ "actor_id": z.number().int().nullable().describe("The ID of the actor that can bypass a ruleset. If \`actor_type\` is \`OrganizationAdmin\`, this should be \`1\`. If \`actor_type\` is \`DeployKey\`, this should be null. \`OrganizationAdmin\` is not applicable for personal repositories.").optional(), "actor_type": z.enum(["Integration","OrganizationAdmin","RepositoryRole","Team","DeployKey"]).describe("The type of actor that can bypass a ruleset."), "bypass_mode": z.enum(["always","pull_request"]).describe("When the specified actor can bypass the ruleset. \`pull_request\` means that an actor can only bypass rules on pull requests. \`pull_request\` is not applicable for the \`DeployKey\` actor type. Also, \`pull_request\` is only applicable to branch rulesets.") }).describe("An actor that can bypass rules in a ruleset")).describe("The actors that can bypass the rules in this ruleset").optional(),
  "conditions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConditions for an organization ruleset.\nThe branch and tag rulesets conditions object should contain both \`repository_name\` and \`ref_name\` properties, or both \`repository_id\` and \`ref_name\` properties, or both \`repository_property\` and \`ref_name\` properties.\nThe push rulesets conditions object does not require the \`ref_name\` property.\nFor repository policy rulesets, the conditions object should only contain the \`repository_name\`, the \`repository_id\`, or the \`repository_property\`.").optional(),
  "rules": z.array(z.record(z.any()).and(z.object({ "type": z.literal("creation") }).describe("Only allow users with bypass permission to create matching refs.")).describe("A repository rule.")).describe("An array of rules within the ruleset.").optional()
}
```

### repos_delete_org_ruleset

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "ruleset_id": z.number().int().describe("The ID of the ruleset.")
}
```

### orgs_get_org_ruleset_history

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "ruleset_id": z.number().int().describe("The ID of the ruleset."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_get_org_ruleset_version

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "ruleset_id": z.number().int().describe("The ID of the ruleset."),
  "version_id": z.number().int().describe("The ID of the version")
}
```

### secret_scanning_list_alerts_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "state": z.enum(["open","resolved"]).describe("Set to \`open\` or \`resolved\` to only list secret scanning alerts in a specific state.").optional(),
  "secret_type": z.string().describe("A comma-separated list of secret types to return. All default secret patterns are returned. To return generic patterns, pass the token name(s) in the parameter. See \"[Supported secret scanning patterns](https://docs.github.com/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)\" for a complete list of secret types.").optional(),
  "resolution": z.string().describe("A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are \`false_positive\`, \`wont_fix\`, \`revoked\`, \`pattern_edited\`, \`pattern_deleted\` or \`used_in_tests\`.").optional(),
  "sort": z.enum(["created","updated"]).describe("The property to sort the results by. \`created\` means when the alert was created. \`updated\` means when the alert was updated or resolved.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for events before this cursor. To receive an initial cursor on your first request, include an empty \"before\" query string.").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for events after this cursor.  To receive an initial cursor on your first request, include an empty \"after\" query string.").optional(),
  "validity": z.string().describe("A comma-separated list of validities that, when present, will return alerts that match the validities in this list. Valid options are \`active\`, \`inactive\`, and \`unknown\`.").optional(),
  "is_publicly_leaked": z.boolean().describe("A boolean value representing whether or not to filter alerts by the publicly-leaked tag being present.").optional(),
  "is_multi_repo": z.boolean().describe("A boolean value representing whether or not to filter alerts by the multi-repo tag being present.").optional()
}
```

### security_advisories_list_org_repository_advisories

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "sort": z.enum(["created","updated","published"]).describe("The property to sort the results by.").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("The number of advisories to return per page. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "state": z.enum(["triage","draft","published","closed"]).describe("Filter by the state of the repository advisories. Only advisories of this state will be returned.").optional()
}
```

### orgs_list_security_manager_teams

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### orgs_add_security_manager_team

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name.")
}
```

### orgs_remove_security_manager_team

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name.")
}
```

### billing_get_github_actions_billing_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### billing_get_github_packages_billing_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### billing_get_shared_storage_billing_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### hosted_compute_list_network_configurations_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### hosted_compute_create_network_configuration_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("Name of the network configuration. Must be between 1 and 100 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'."),
  "compute_service": z.enum(["none","actions"]).describe("The hosted compute service to use for the network configuration.").optional(),
  "network_settings_ids": z.array(z.string()).min(1).max(1).describe("The identifier of the network settings to use for the network configuration. Exactly one network settings must be specified.")
}
```

### hosted_compute_get_network_configuration_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "network_configuration_id": z.string().describe("Unique identifier of the hosted compute network configuration.")
}
```

### hosted_compute_update_network_configuration_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "network_configuration_id": z.string().describe("Unique identifier of the hosted compute network configuration."),
  "name": z.string().describe("Name of the network configuration. Must be between 1 and 100 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'.").optional(),
  "compute_service": z.enum(["none","actions"]).describe("The hosted compute service to use for the network configuration.").optional(),
  "network_settings_ids": z.array(z.string()).min(0).max(1).describe("The identifier of the network settings to use for the network configuration. Exactly one network settings must be specified.").optional()
}
```

### hosted_compute_delete_network_configuration_from_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "network_configuration_id": z.string().describe("Unique identifier of the hosted compute network configuration.")
}
```

### hosted_compute_get_network_settings_for_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "network_settings_id": z.string().describe("Unique identifier of the hosted compute network settings.")
}
```

### copilot_copilot_metrics_for_team

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "since": z.string().describe("Show usage metrics since this date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (\`YYYY-MM-DDTHH:MM:SSZ\`). Maximum value is 28 days ago.").optional(),
  "until": z.string().describe("Show usage metrics until this date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (\`YYYY-MM-DDTHH:MM:SSZ\`) and should not preceed the \`since\` date if it is passed.").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of days of metrics to display per page (max 28). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_list

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_create

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the team."),
  "description": z.string().describe("The description of the team.").optional(),
  "maintainers": z.array(z.string()).describe("List GitHub IDs for organization members who will become team maintainers.").optional(),
  "repo_names": z.array(z.string()).describe("The full name (e.g., \"organization-name/repository-name\") of repositories to add the team to.").optional(),
  "privacy": z.enum(["secret","closed"]).describe("The level of privacy this team should have. The options are:  \n**For a non-nested team:**  \n * \`secret\` - only visible to organization owners and members of this team.  \n * \`closed\` - visible to all members of this organization.  \nDefault: \`secret\`  \n**For a parent or child team:**  \n * \`closed\` - visible to all members of this organization.  \nDefault for child team: \`closed\`").optional(),
  "notification_setting": z.enum(["notifications_enabled","notifications_disabled"]).describe("The notification setting the team has chosen. The options are:  \n * \`notifications_enabled\` - team members receive notifications when the team is @mentioned.  \n * \`notifications_disabled\` - no one receives notifications.  \nDefault: \`notifications_enabled\`").optional(),
  "permission": z.enum(["pull","push"]).describe("**Closing down notice**. The permission that new repositories will be added to the team with when none is specified.").optional(),
  "parent_team_id": z.number().int().describe("The ID of a team to set as the parent team.").optional()
}
```

### teams_get_by_name

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name.")
}
```

### teams_update_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "name": z.string().describe("The name of the team.").optional(),
  "description": z.string().describe("The description of the team.").optional(),
  "privacy": z.enum(["secret","closed"]).describe("The level of privacy this team should have. Editing teams without specifying this parameter leaves \`privacy\` intact. When a team is nested, the \`privacy\` for parent teams cannot be \`secret\`. The options are:  \n**For a non-nested team:**  \n * \`secret\` - only visible to organization owners and members of this team.  \n * \`closed\` - visible to all members of this organization.  \n**For a parent or child team:**  \n * \`closed\` - visible to all members of this organization.").optional(),
  "notification_setting": z.enum(["notifications_enabled","notifications_disabled"]).describe("The notification setting the team has chosen. Editing teams without specifying this parameter leaves \`notification_setting\` intact. The options are: \n * \`notifications_enabled\` - team members receive notifications when the team is @mentioned.  \n * \`notifications_disabled\` - no one receives notifications.").optional(),
  "permission": z.enum(["pull","push","admin"]).describe("**Closing down notice**. The permission that new repositories will be added to the team with when none is specified.").optional(),
  "parent_team_id": z.number().int().nullable().describe("The ID of a team to set as the parent team.").optional()
}
```

### teams_delete_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name.")
}
```

### teams_list_discussions_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "pinned": z.string().describe("Pinned discussions only filter").optional()
}
```

### teams_create_discussion_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "title": z.string().describe("The discussion post's title."),
  "body": z.string().describe("The discussion post's body text."),
  "private": z.boolean().describe("Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to \`true\` to create a private post.").optional()
}
```

### teams_get_discussion_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion.")
}
```

### teams_update_discussion_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "title": z.string().describe("The discussion post's title.").optional(),
  "body": z.string().describe("The discussion post's body text.").optional()
}
```

### teams_delete_discussion_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion.")
}
```

### teams_list_discussion_comments_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_create_discussion_comment_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "body": z.string().describe("The discussion comment's body text.")
}
```

### teams_get_discussion_comment_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment.")
}
```

### teams_update_discussion_comment_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment."),
  "body": z.string().describe("The discussion comment's body text.")
}
```

### teams_delete_discussion_comment_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment.")
}
```

### reactions_list_for_team_discussion_comment_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a team discussion comment.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### reactions_create_for_team_discussion_comment_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion comment.")
}
```

### reactions_delete_for_team_discussion_comment

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment."),
  "reaction_id": z.number().int().describe("The unique identifier of the reaction.")
}
```

### reactions_list_for_team_discussion_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a team discussion.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### reactions_create_for_team_discussion_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion.")
}
```

### reactions_delete_for_team_discussion

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "reaction_id": z.number().int().describe("The unique identifier of the reaction.")
}
```

### teams_list_pending_invitations_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_list_members_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "role": z.enum(["member","maintainer","all"]).describe("Filters members returned by their role in the team.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_get_membership_for_user_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### teams_add_or_update_membership_for_user_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "role": z.enum(["member","maintainer"]).describe("The role that this user should have in the team.").optional()
}
```

### teams_remove_membership_for_user_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### teams_list_projects_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_check_permissions_for_project_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "project_id": z.number().int().describe("The unique identifier of the project.")
}
```

### teams_add_or_update_project_permissions_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "project_id": z.number().int().describe("The unique identifier of the project."),
  "permission": z.enum(["read","write","admin"]).describe("The permission to grant to the team for this project. Default: the team's \`permission\` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set \`Content-Length\` to zero when calling this endpoint. For more information, see \"[HTTP method](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method).\"").optional()
}
```

### teams_remove_project_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "project_id": z.number().int().describe("The unique identifier of the project.")
}
```

### teams_list_repos_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_check_permissions_for_repo_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### teams_add_or_update_repo_permissions_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "permission": z.string().describe("The permission to grant the team on this repository. We accept the following permissions to be set: \`pull\`, \`triage\`, \`push\`, \`maintain\`, \`admin\` and you can also specify a custom repository role name, if the owning organization has defined any. If no permission is specified, the team's \`permission\` attribute will be used to determine what permission to grant the team on this repository.").optional()
}
```

### teams_remove_repo_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### teams_list_child_in_org

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "team_slug": z.string().describe("The slug of the team name."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_enable_or_disable_security_product_on_all_org_repos

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "security_product": z.enum(["dependency_graph","dependabot_alerts","dependabot_security_updates","advanced_security","code_scanning_default_setup","secret_scanning","secret_scanning_push_protection"]).describe("The security feature to enable or disable."),
  "enablement": z.enum(["enable_all","disable_all"]).describe("The action to take.\n\n\`enable_all\` means to enable the specified security feature for all repositories in the organization.\n\`disable_all\` means to disable the specified security feature for all repositories in the organization."),
  "query_suite": z.enum(["default","extended"]).describe("CodeQL query suite to be used. If you specify the \`query_suite\` parameter, the default setup will be configured with this query suite only on all repositories that didn't have default setup already configured. It will not change the query suite on repositories that already have default setup configured.\nIf you don't specify any \`query_suite\` in your request, the preferred query suite of the organization will be applied.").optional()
}
```

### projects_get_card

**Environment variables**



**Input schema**

```ts
{
  "card_id": z.number().int().describe("The unique identifier of the card.")
}
```

### projects_update_card

**Environment variables**



**Input schema**

```ts
{
  "card_id": z.number().int().describe("The unique identifier of the card."),
  "note": z.string().nullable().describe("The project card's note").optional(),
  "archived": z.boolean().describe("Whether or not the card is archived").optional()
}
```

### projects_delete_card

**Environment variables**



**Input schema**

```ts
{
  "card_id": z.number().int().describe("The unique identifier of the card.")
}
```

### projects_move_card

**Environment variables**



**Input schema**

```ts
{
  "card_id": z.number().int().describe("The unique identifier of the card."),
  "position": z.string().regex(new RegExp("^(?:top|bottom|after:\\d+)$")).describe("The position of the card in a column. Can be one of: \`top\`, \`bottom\`, or \`after:<card_id>\` to place after the specified card."),
  "column_id": z.number().int().describe("The unique identifier of the column the card should be moved to").optional()
}
```

### projects_get_column

**Environment variables**



**Input schema**

```ts
{
  "column_id": z.number().int().describe("The unique identifier of the column.")
}
```

### projects_update_column

**Environment variables**



**Input schema**

```ts
{
  "column_id": z.number().int().describe("The unique identifier of the column."),
  "name": z.string().describe("Name of the project column")
}
```

### projects_delete_column

**Environment variables**



**Input schema**

```ts
{
  "column_id": z.number().int().describe("The unique identifier of the column.")
}
```

### projects_list_cards

**Environment variables**



**Input schema**

```ts
{
  "column_id": z.number().int().describe("The unique identifier of the column."),
  "archived_state": z.enum(["all","archived","not_archived"]).describe("Filters the project cards that are returned by the card's state.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### projects_create_card

**Environment variables**



**Input schema**

```ts
{
  "column_id": z.number().int().describe("The unique identifier of the column.")
}
```

### projects_move_column

**Environment variables**



**Input schema**

```ts
{
  "column_id": z.number().int().describe("The unique identifier of the column."),
  "position": z.string().regex(new RegExp("^(?:first|last|after:\\d+)$")).describe("The position of the column in a project. Can be one of: \`first\`, \`last\`, or \`after:<column_id>\` to place after the specified column.")
}
```

### projects_get

**Environment variables**



**Input schema**

```ts
{
  "project_id": z.number().int().describe("The unique identifier of the project.")
}
```

### projects_update

**Environment variables**



**Input schema**

```ts
{
  "project_id": z.number().int().describe("The unique identifier of the project."),
  "name": z.string().describe("Name of the project").optional(),
  "body": z.string().nullable().describe("Body of the project").optional(),
  "state": z.string().describe("State of the project; either 'open' or 'closed'").optional(),
  "organization_permission": z.enum(["read","write","admin","none"]).describe("The baseline permission that all organization members have on this project").optional(),
  "private": z.boolean().describe("Whether or not this project can be seen by everyone.").optional()
}
```

### projects_delete

**Environment variables**



**Input schema**

```ts
{
  "project_id": z.number().int().describe("The unique identifier of the project.")
}
```

### projects_list_collaborators

**Environment variables**



**Input schema**

```ts
{
  "project_id": z.number().int().describe("The unique identifier of the project."),
  "affiliation": z.enum(["outside","direct","all"]).describe("Filters the collaborators by their affiliation. \`outside\` means outside collaborators of a project that are not a member of the project's organization. \`direct\` means collaborators with permissions to a project, regardless of organization membership status. \`all\` means all collaborators the authenticated user can see.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### projects_add_collaborator

**Environment variables**



**Input schema**

```ts
{
  "project_id": z.number().int().describe("The unique identifier of the project."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "permission": z.enum(["read","write","admin"]).describe("The permission to grant the collaborator.").optional()
}
```

### projects_remove_collaborator

**Environment variables**



**Input schema**

```ts
{
  "project_id": z.number().int().describe("The unique identifier of the project."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### projects_get_permission_for_user

**Environment variables**



**Input schema**

```ts
{
  "project_id": z.number().int().describe("The unique identifier of the project."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### projects_list_columns

**Environment variables**



**Input schema**

```ts
{
  "project_id": z.number().int().describe("The unique identifier of the project."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### projects_create_column

**Environment variables**



**Input schema**

```ts
{
  "project_id": z.number().int().describe("The unique identifier of the project."),
  "name": z.string().describe("Name of the project column")
}
```

### rate_limit_get

**Environment variables**



**Input schema**

```ts
{}
```

### repos_get

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_update

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of the repository.").optional(),
  "description": z.string().describe("A short description of the repository.").optional(),
  "homepage": z.string().describe("A URL with more information about the repository.").optional(),
  "private": z.boolean().describe("Either \`true\` to make the repository private or \`false\` to make it public. Default: \`false\`.  \n**Note**: You will get a \`422\` error if the organization restricts [changing repository visibility](https://docs.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.").optional(),
  "visibility": z.enum(["public","private"]).describe("The visibility of the repository.").optional(),
  "security_and_analysis": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecify which security and analysis features to enable or disable for the repository.\n\nTo use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see \"[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).\"\n\nFor example, to enable GitHub Advanced Security, use this data in the body of the \`PATCH\` request:\n\`{ \"security_and_analysis\": {\"advanced_security\": { \"status\": \"enabled\" } } }\`.\n\nYou can check which security and analysis features are currently enabled by using a \`GET /repos/{owner}/{repo}\` request.").optional(),
  "has_issues": z.boolean().describe("Either \`true\` to enable issues for this repository or \`false\` to disable them.").optional(),
  "has_projects": z.boolean().describe("Either \`true\` to enable projects for this repository or \`false\` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is \`false\`, and if you pass \`true\`, the API returns an error.").optional(),
  "has_wiki": z.boolean().describe("Either \`true\` to enable the wiki for this repository or \`false\` to disable it.").optional(),
  "is_template": z.boolean().describe("Either \`true\` to make this repo available as a template repository or \`false\` to prevent it.").optional(),
  "default_branch": z.string().describe("Updates the default branch for this repository.").optional(),
  "allow_squash_merge": z.boolean().describe("Either \`true\` to allow squash-merging pull requests, or \`false\` to prevent squash-merging.").optional(),
  "allow_merge_commit": z.boolean().describe("Either \`true\` to allow merging pull requests with a merge commit, or \`false\` to prevent merging pull requests with merge commits.").optional(),
  "allow_rebase_merge": z.boolean().describe("Either \`true\` to allow rebase-merging pull requests, or \`false\` to prevent rebase-merging.").optional(),
  "allow_auto_merge": z.boolean().describe("Either \`true\` to allow auto-merge on pull requests, or \`false\` to disallow auto-merge.").optional(),
  "delete_branch_on_merge": z.boolean().describe("Either \`true\` to allow automatically deleting head branches when pull requests are merged, or \`false\` to prevent automatic deletion.").optional(),
  "allow_update_branch": z.boolean().describe("Either \`true\` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise.").optional(),
  "squash_merge_commit_title": z.enum(["PR_TITLE","COMMIT_OR_PR_TITLE"]).describe("Required when using \`squash_merge_commit_message\`.\n\nThe default value for a squash merge commit title:\n\n- \`PR_TITLE\` - default to the pull request's title.\n- \`COMMIT_OR_PR_TITLE\` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).").optional(),
  "squash_merge_commit_message": z.enum(["PR_BODY","COMMIT_MESSAGES","BLANK"]).describe("The default value for a squash merge commit message:\n\n- \`PR_BODY\` - default to the pull request's body.\n- \`COMMIT_MESSAGES\` - default to the branch's commit messages.\n- \`BLANK\` - default to a blank commit message.").optional(),
  "merge_commit_title": z.enum(["PR_TITLE","MERGE_MESSAGE"]).describe("Required when using \`merge_commit_message\`.\n\nThe default value for a merge commit title.\n\n- \`PR_TITLE\` - default to the pull request's title.\n- \`MERGE_MESSAGE\` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).").optional(),
  "merge_commit_message": z.enum(["PR_BODY","PR_TITLE","BLANK"]).describe("The default value for a merge commit message.\n\n- \`PR_TITLE\` - default to the pull request's title.\n- \`PR_BODY\` - default to the pull request's body.\n- \`BLANK\` - default to a blank commit message.").optional(),
  "archived": z.boolean().describe("Whether to archive this repository. \`false\` will unarchive a previously archived repository.").optional(),
  "allow_forking": z.boolean().describe("Either \`true\` to allow private forks, or \`false\` to prevent private forks.").optional(),
  "web_commit_signoff_required": z.boolean().describe("Either \`true\` to require contributors to sign off on web-based commits, or \`false\` to not require contributors to sign off on web-based commits.").optional()
}
```

### repos_delete

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### actions_list_artifacts_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "name": z.string().describe("The name field of an artifact. When specified, only artifacts with this name will be returned.").optional()
}
```

### actions_get_artifact

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "artifact_id": z.number().int().describe("The unique identifier of the artifact.")
}
```

### actions_delete_artifact

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "artifact_id": z.number().int().describe("The unique identifier of the artifact.")
}
```

### actions_download_artifact

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "artifact_id": z.number().int().describe("The unique identifier of the artifact."),
  "archive_format": z.string()
}
```

### actions_get_actions_cache_usage

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### actions_get_actions_cache_list

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "ref": z.string().describe("The full Git reference for narrowing down the cache. The \`ref\` for a branch should be formatted as \`refs/heads/<branch name>\`. To reference a pull request use \`refs/pull/<number>/merge\`.").optional(),
  "key": z.string().describe("An explicit key or prefix for identifying the cache").optional(),
  "sort": z.enum(["created_at","last_accessed_at","size_in_bytes"]).describe("The property to sort the results by. \`created_at\` means when the cache was created. \`last_accessed_at\` means when the cache was last accessed. \`size_in_bytes\` is the size of the cache in bytes.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional()
}
```

### actions_delete_actions_cache_by_key

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "key": z.string().describe("A key for identifying the cache."),
  "ref": z.string().describe("The full Git reference for narrowing down the cache. The \`ref\` for a branch should be formatted as \`refs/heads/<branch name>\`. To reference a pull request use \`refs/pull/<number>/merge\`.").optional()
}
```

### actions_delete_actions_cache_by_id

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "cache_id": z.number().int().describe("The unique identifier of the GitHub Actions cache.")
}
```

### actions_get_job_for_workflow_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "job_id": z.number().int().describe("The unique identifier of the job.")
}
```

### actions_download_job_logs_for_workflow_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "job_id": z.number().int().describe("The unique identifier of the job.")
}
```

### actions_re_run_job_for_workflow_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "job_id": z.number().int().describe("The unique identifier of the job."),
  "enable_debug_logging": z.boolean().describe("Whether to enable debug logging for the re-run.").optional()
}
```

### actions_get_custom_oidc_sub_claim_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### actions_set_custom_oidc_sub_claim_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "use_default": z.boolean().describe("Whether to use the default template or not. If \`true\`, the \`include_claim_keys\` field is ignored."),
  "include_claim_keys": z.array(z.string()).describe("Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.").optional()
}
```

### actions_list_repo_organization_secrets

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_list_repo_organization_variables

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 30). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_get_github_actions_permissions_repository

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### actions_set_github_actions_permissions_repository

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "enabled": z.boolean().describe("Whether GitHub Actions is enabled on the repository."),
  "allowed_actions": z.enum(["all","local_only","selected"]).describe("The permissions policy that controls the actions and reusable workflows that are allowed to run.").optional()
}
```

### actions_get_workflow_access_to_repository

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### actions_set_workflow_access_to_repository

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "access_level": z.enum(["none","user","organization"]).describe("Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the\nrepository.\n\n\`none\` means the access is only possible from workflows in this repository. \`user\` level access allows sharing across user owned private repositories only. \`organization\` level access allows sharing across the organization.")
}
```

### actions_get_allowed_actions_repository

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### actions_set_allowed_actions_repository

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "github_owned_allowed": z.boolean().describe("Whether GitHub-owned actions are allowed. For example, this includes the actions in the \`actions\` organization.").optional(),
  "verified_allowed": z.boolean().describe("Whether actions from GitHub Marketplace verified creators are allowed. Set to \`true\` to allow all actions by GitHub Marketplace verified creators.").optional(),
  "patterns_allowed": z.array(z.string()).describe("Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). Wildcards, tags, and SHAs are allowed. For example, \`monalisa/octocat@*\`, \`monalisa/octocat@v2\`, \`monalisa/*\`.\n\n> [!NOTE]\n> The \`patterns_allowed\` setting only applies to public repositories.").optional()
}
```

### actions_get_github_actions_default_workflow_permissions_reposito

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### actions_set_github_actions_default_workflow_permissions_reposito

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "default_workflow_permissions": z.enum(["read","write"]).describe("The default workflow permissions granted to the GITHUB_TOKEN when running workflows.").optional(),
  "can_approve_pull_request_reviews": z.boolean().describe("Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.").optional()
}
```

### actions_list_self_hosted_runners_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of a self-hosted runner.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_list_runner_applications_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### actions_generate_runner_jitconfig_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of the new runner."),
  "runner_group_id": z.number().int().describe("The ID of the runner group to register the runner to."),
  "labels": z.array(z.string()).min(1).max(100).describe("The names of the custom labels to add to the runner. **Minimum items**: 1. **Maximum items**: 100."),
  "work_folder": z.string().describe("The working directory to be used for job execution, relative to the runner install directory.").optional()
}
```

### actions_create_registration_token_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### actions_create_remove_token_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### actions_get_self_hosted_runner_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.")
}
```

### actions_delete_self_hosted_runner_from_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.")
}
```

### actions_list_labels_for_self_hosted_runner_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.")
}
```

### actions_add_custom_labels_to_self_hosted_runner_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner."),
  "labels": z.array(z.string()).min(1).max(100).describe("The names of the custom labels to add to the runner.")
}
```

### actions_set_custom_labels_for_self_hosted_runner_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner."),
  "labels": z.array(z.string()).min(0).max(100).describe("The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.")
}
```

### actions_remove_all_custom_labels_from_self_hosted_runner_for_rep

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.")
}
```

### actions_remove_custom_label_from_self_hosted_runner_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner."),
  "name": z.string().describe("The name of a self-hosted runner's custom label.")
}
```

### actions_list_workflow_runs_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "actor": z.string().describe("Returns someone's workflow runs. Use the login for the user who created the \`push\` associated with the check suite or workflow run.").optional(),
  "branch": z.string().describe("Returns workflow runs associated with a branch. Use the name of the branch of the \`push\`.").optional(),
  "event": z.string().describe("Returns workflow run triggered by the event you specify. For example, \`push\`, \`pull_request\` or \`issue\`. For more information, see \"[Events that trigger workflows](https://docs.github.com/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).\"").optional(),
  "status": z.enum(["completed","action_required","cancelled","failure","neutral","skipped","stale","success","timed_out","in_progress","queued","requested","waiting","pending"]).describe("Returns workflow runs with the check run \`status\` or \`conclusion\` that you specify. For example, a conclusion can be \`success\` or a status can be \`in_progress\`. Only GitHub Actions can set a status of \`waiting\`, \`pending\`, or \`requested\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "created": z.string().datetime({ offset: true }).describe("Returns workflow runs created within the given date-time range. For more information on the syntax, see \"[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates).\"").optional(),
  "exclude_pull_requests": z.boolean().describe("If \`true\` pull requests are omitted from the response (empty array).").optional(),
  "check_suite_id": z.number().int().describe("Returns workflow runs with the \`check_suite_id\` that you specify.").optional(),
  "head_sha": z.string().describe("Only returns workflow runs that are associated with the specified \`head_sha\`.").optional()
}
```

### actions_get_workflow_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run."),
  "exclude_pull_requests": z.boolean().describe("If \`true\` pull requests are omitted from the response (empty array).").optional()
}
```

### actions_delete_workflow_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run.")
}
```

### actions_get_reviews_for_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run.")
}
```

### actions_approve_workflow_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run.")
}
```

### actions_list_workflow_run_artifacts

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "name": z.string().describe("The name field of an artifact. When specified, only artifacts with this name will be returned.").optional()
}
```

### actions_get_workflow_run_attempt

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run."),
  "attempt_number": z.number().int().describe("The attempt number of the workflow run."),
  "exclude_pull_requests": z.boolean().describe("If \`true\` pull requests are omitted from the response (empty array).").optional()
}
```

### actions_list_jobs_for_workflow_run_attempt

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run."),
  "attempt_number": z.number().int().describe("The attempt number of the workflow run."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_download_workflow_run_attempt_logs

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run."),
  "attempt_number": z.number().int().describe("The attempt number of the workflow run.")
}
```

### actions_cancel_workflow_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run.")
}
```

### actions_review_custom_gates_for_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run.")
}
```

### actions_force_cancel_workflow_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run.")
}
```

### actions_list_jobs_for_workflow_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run."),
  "filter": z.enum(["latest","all"]).describe("Filters jobs by their \`completed_at\` timestamp. \`latest\` returns jobs from the most recent execution of the workflow run. \`all\` returns all jobs for a workflow run, including from old executions of the workflow run.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_download_workflow_run_logs

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run.")
}
```

### actions_delete_workflow_run_logs

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run.")
}
```

### actions_get_pending_deployments_for_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run.")
}
```

### actions_review_pending_deployments_for_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run."),
  "environment_ids": z.array(z.number().int()).describe("The list of environment ids to approve or reject"),
  "state": z.enum(["approved","rejected"]).describe("Whether to approve or reject deployment to the specified environments."),
  "comment": z.string().describe("A comment to accompany the deployment review")
}
```

### actions_re_run_workflow

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run."),
  "enable_debug_logging": z.boolean().describe("Whether to enable debug logging for the re-run.").optional()
}
```

### actions_re_run_workflow_failed_jobs

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run."),
  "enable_debug_logging": z.boolean().describe("Whether to enable debug logging for the re-run.").optional()
}
```

### actions_get_workflow_run_usage

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "run_id": z.number().int().describe("The unique identifier of the workflow run.")
}
```

### actions_list_repo_secrets

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_get_repo_public_key

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### actions_get_repo_secret

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### actions_create_or_update_repo_secret

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "encrypted_value": z.string().regex(new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$")).describe("Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/actions/secrets#get-a-repository-public-key) endpoint."),
  "key_id": z.string().describe("ID of the key you used to encrypt the secret.")
}
```

### actions_delete_repo_secret

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### actions_list_repo_variables

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 30). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_create_repo_variable

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable."),
  "value": z.string().describe("The value of the variable.")
}
```

### actions_get_repo_variable

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable.")
}
```

### actions_update_repo_variable

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable."),
  "b_name": z.string().describe("The name of the variable.").optional(),
  "value": z.string().describe("The value of the variable.").optional()
}
```

### actions_delete_repo_variable

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable.")
}
```

### actions_list_repo_workflows

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_get_workflow

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "workflow_id": z.any().superRefine((x, ctx) => {
    const schemas = [z.number().int(), z.string()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("The ID of the workflow. You can also pass the workflow file name as a string.")
}
```

### actions_disable_workflow

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "workflow_id": z.any().superRefine((x, ctx) => {
    const schemas = [z.number().int(), z.string()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("The ID of the workflow. You can also pass the workflow file name as a string.")
}
```

### actions_create_workflow_dispatch

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "workflow_id": z.any().superRefine((x, ctx) => {
    const schemas = [z.number().int(), z.string()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("The ID of the workflow. You can also pass the workflow file name as a string."),
  "ref": z.string().describe("The git reference for the workflow. The reference can be a branch or tag name."),
  "inputs": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInput keys and values configured in the workflow file. The maximum number of properties is 10. Any default properties configured in the workflow file will be used when \`inputs\` are omitted.").optional()
}
```

### actions_enable_workflow

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "workflow_id": z.any().superRefine((x, ctx) => {
    const schemas = [z.number().int(), z.string()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("The ID of the workflow. You can also pass the workflow file name as a string.")
}
```

### actions_list_workflow_runs

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "workflow_id": z.any().superRefine((x, ctx) => {
    const schemas = [z.number().int(), z.string()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("The ID of the workflow. You can also pass the workflow file name as a string."),
  "actor": z.string().describe("Returns someone's workflow runs. Use the login for the user who created the \`push\` associated with the check suite or workflow run.").optional(),
  "branch": z.string().describe("Returns workflow runs associated with a branch. Use the name of the branch of the \`push\`.").optional(),
  "event": z.string().describe("Returns workflow run triggered by the event you specify. For example, \`push\`, \`pull_request\` or \`issue\`. For more information, see \"[Events that trigger workflows](https://docs.github.com/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).\"").optional(),
  "status": z.enum(["completed","action_required","cancelled","failure","neutral","skipped","stale","success","timed_out","in_progress","queued","requested","waiting","pending"]).describe("Returns workflow runs with the check run \`status\` or \`conclusion\` that you specify. For example, a conclusion can be \`success\` or a status can be \`in_progress\`. Only GitHub Actions can set a status of \`waiting\`, \`pending\`, or \`requested\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "created": z.string().datetime({ offset: true }).describe("Returns workflow runs created within the given date-time range. For more information on the syntax, see \"[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates).\"").optional(),
  "exclude_pull_requests": z.boolean().describe("If \`true\` pull requests are omitted from the response (empty array).").optional(),
  "check_suite_id": z.number().int().describe("Returns workflow runs with the \`check_suite_id\` that you specify.").optional(),
  "head_sha": z.string().describe("Only returns workflow runs that are associated with the specified \`head_sha\`.").optional()
}
```

### actions_get_workflow_usage

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "workflow_id": z.any().superRefine((x, ctx) => {
    const schemas = [z.number().int(), z.string()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("The ID of the workflow. You can also pass the workflow file name as a string.")
}
```

### repos_list_activities

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "ref": z.string().describe("The Git reference for the activities you want to list.\n\nThe \`ref\` for a branch can be formatted either as \`refs/heads/BRANCH_NAME\` or \`BRANCH_NAME\`, where \`BRANCH_NAME\` is the name of your branch.").optional(),
  "actor": z.string().describe("The GitHub username to use to filter by the actor who performed the activity.").optional(),
  "time_period": z.enum(["day","week","month","quarter","year"]).describe("The time period to filter by.\n\nFor example, \`day\` will filter for activity that occurred in the past 24 hours, and \`week\` will filter for activity that occurred in the past 7 days (168 hours).").optional(),
  "activity_type": z.enum(["push","force_push","branch_creation","branch_deletion","pr_merge","merge_queue_merge"]).describe("The activity type to filter by.\n\nFor example, you can choose to filter by \"force_push\", to see all force pushes to the repository.").optional()
}
```

### issues_list_assignees

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### issues_check_user_can_be_assigned

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "assignee": z.string()
}
```

### repos_create_attestation

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "bundle": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe attestation's Sigstore Bundle.\nRefer to the [Sigstore Bundle Specification](https://github.com/sigstore/protobuf-specs/blob/main/protos/sigstore_bundle.proto) for more information.")
}
```

### repos_list_attestations

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "subject_digest": z.string().describe("The parameter should be set to the attestation's subject's SHA256 digest, in the form \`sha256:HEX_DIGEST\`."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "predicate_type": z.string().describe("Optional filter for fetching attestations with a given predicate type.\nThis option accepts \`provenance\`, \`sbom\`, or freeform text for custom predicate types.").optional()
}
```

### repos_list_autolinks

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_create_autolink

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "key_prefix": z.string().describe("This prefix appended by certain characters will generate a link any time it is found in an issue, pull request, or commit."),
  "url_template": z.string().describe("The URL must contain \`<num>\` for the reference number. \`<num>\` matches different characters depending on the value of \`is_alphanumeric\`."),
  "is_alphanumeric": z.boolean().describe("Whether this autolink reference matches alphanumeric characters. If true, the \`<num>\` parameter of the \`url_template\` matches alphanumeric characters \`A-Z\` (case insensitive), \`0-9\`, and \`-\`. If false, this autolink reference only matches numeric characters.").optional()
}
```

### repos_get_autolink

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "autolink_id": z.number().int().describe("The unique identifier of the autolink.")
}
```

### repos_delete_autolink

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "autolink_id": z.number().int().describe("The unique identifier of the autolink.")
}
```

### repos_check_automated_security_fixes

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_enable_automated_security_fixes

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_disable_automated_security_fixes

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_list_branches

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "protected": z.boolean().describe("Setting to \`true\` returns only branches protected by branch protections or rulesets. When set to \`false\`, only unprotected branches are returned. Omitting this parameter returns all branches.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_branch

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_get_branch_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_update_branch_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql)."),
  "required_status_checks": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nRequire status checks to pass before merging. Set to \`null\` to disable."),
  "enforce_admins": z.boolean().nullable().describe("Enforce all configured restrictions for administrators. Set to \`true\` to enforce required status checks for repository administrators. Set to \`null\` to disable."),
  "required_pull_request_reviews": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nRequire at least one approving review on a pull request, before merging. Set to \`null\` to disable."),
  "restrictions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nRestrict who can push to the protected branch. User, app, and team \`restrictions\` are only available for organization-owned repositories. Set to \`null\` to disable."),
  "required_linear_history": z.boolean().describe("Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. Set to \`true\` to enforce a linear commit history. Set to \`false\` to disable a linear commit Git history. Your repository must allow squash merging or rebase merging before you can enable a linear commit history. Default: \`false\`. For more information, see \"[Requiring a linear commit history](https://docs.github.com/github/administering-a-repository/requiring-a-linear-commit-history)\" in the GitHub Help documentation.").optional(),
  "allow_force_pushes": z.boolean().nullable().describe("Permits force pushes to the protected branch by anyone with write access to the repository. Set to \`true\` to allow force pushes. Set to \`false\` or \`null\` to block force pushes. Default: \`false\`. For more information, see \"[Enabling force pushes to a protected branch](https://docs.github.com/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)\" in the GitHub Help documentation.\"").optional(),
  "allow_deletions": z.boolean().describe("Allows deletion of the protected branch by anyone with write access to the repository. Set to \`false\` to prevent deletion of the protected branch. Default: \`false\`. For more information, see \"[Enabling force pushes to a protected branch](https://docs.github.com/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)\" in the GitHub Help documentation.").optional(),
  "block_creations": z.boolean().describe("If set to \`true\`, the \`restrictions\` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. Set to \`true\` to restrict new branch creation. Default: \`false\`.").optional(),
  "required_conversation_resolution": z.boolean().describe("Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. Set to \`false\` to disable. Default: \`false\`.").optional(),
  "lock_branch": z.boolean().describe("Whether to set the branch as read-only. If this is true, users will not be able to push to the branch. Default: \`false\`.").optional(),
  "allow_fork_syncing": z.boolean().describe("Whether users can pull changes from upstream when the branch is locked. Set to \`true\` to allow fork syncing. Set to \`false\` to prevent fork syncing. Default: \`false\`.").optional()
}
```

### repos_delete_branch_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_get_admin_branch_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_set_admin_branch_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_delete_admin_branch_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_get_pull_request_review_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_update_pull_request_review_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql)."),
  "dismissal_restrictions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nSpecify which users, teams, and apps can dismiss pull request reviews. Pass an empty \`dismissal_restrictions\` object to disable. User and team \`dismissal_restrictions\` are only available for organization-owned repositories. Omit this parameter for personal repositories.").optional(),
  "dismiss_stale_reviews": z.boolean().describe("Set to \`true\` if you want to automatically dismiss approving reviews when someone pushes a new commit.").optional(),
  "require_code_owner_reviews": z.boolean().describe("Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) have reviewed.").optional(),
  "required_approving_review_count": z.number().int().describe("Specifies the number of reviewers required to approve pull requests. Use a number between 1 and 6 or 0 to not require reviewers.").optional(),
  "require_last_push_approval": z.boolean().describe("Whether the most recent push must be approved by someone other than the person who pushed it. Default: \`false\`").optional(),
  "bypass_pull_request_allowances": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAllow specific users, teams, or apps to bypass pull request requirements.").optional()
}
```

### repos_delete_pull_request_review_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_get_commit_signature_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_create_commit_signature_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_delete_commit_signature_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_get_status_checks_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_update_status_check_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql)."),
  "strict": z.boolean().describe("Require branches to be up to date before merging.").optional(),
  "checks": z.array(z.object({ "context": z.string().describe("The name of the required check"), "app_id": z.number().int().describe("The ID of the GitHub App that must provide this check. Omit this field to automatically select the GitHub App that has recently provided this check, or any app if it was not set by a GitHub App. Pass -1 to explicitly allow any app to set the status.").optional() })).describe("The list of status checks to require in order to merge into this branch.").optional()
}
```

### repos_remove_status_check_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_get_all_status_check_contexts

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_add_status_check_contexts

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_set_status_check_contexts

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_remove_status_check_contexts

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_get_access_restrictions

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_delete_access_restrictions

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_get_apps_with_access_to_protected_branch

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_add_app_access_restrictions

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql)."),
  "apps": z.array(z.string()).describe("The GitHub Apps that have push access to this branch. Use the slugified version of the app name. **Note**: The list of users, apps, and teams in total is limited to 100 items.")
}
```

### repos_set_app_access_restrictions

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql)."),
  "apps": z.array(z.string()).describe("The GitHub Apps that have push access to this branch. Use the slugified version of the app name. **Note**: The list of users, apps, and teams in total is limited to 100 items.")
}
```

### repos_remove_app_access_restrictions

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql)."),
  "apps": z.array(z.string()).describe("The GitHub Apps that have push access to this branch. Use the slugified version of the app name. **Note**: The list of users, apps, and teams in total is limited to 100 items.")
}
```

### repos_get_teams_with_access_to_protected_branch

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_add_team_access_restrictions

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_set_team_access_restrictions

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_remove_team_access_restrictions

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_get_users_with_access_to_protected_branch

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).")
}
```

### repos_add_user_access_restrictions

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql)."),
  "users": z.array(z.string()).describe("The username for users")
}
```

### repos_set_user_access_restrictions

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql)."),
  "users": z.array(z.string()).describe("The username for users")
}
```

### repos_remove_user_access_restrictions

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql)."),
  "users": z.array(z.string()).describe("The username for users")
}
```

### repos_rename_branch

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql)."),
  "new_name": z.string().describe("The new name of the branch.")
}
```

### checks_create

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of the check. For example, \"code-coverage\"."),
  "head_sha": z.string().describe("The SHA of the commit."),
  "details_url": z.string().describe("The URL of the integrator's site that has the full details of the check. If the integrator does not provide this, then the homepage of the GitHub app is used.").optional(),
  "external_id": z.string().describe("A reference for the run on the integrator's system.").optional(),
  "status": z.enum(["queued","in_progress","completed","waiting","requested","pending"]).describe("The current status of the check run. Only GitHub Actions can set a status of \`waiting\`, \`pending\`, or \`requested\`.").optional(),
  "started_at": z.string().datetime({ offset: true }).describe("The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "conclusion": z.enum(["action_required","cancelled","failure","neutral","success","skipped","stale","timed_out"]).describe("**Required if you provide \`completed_at\` or a \`status\` of \`completed\`**. The final conclusion of the check. \n**Note:** Providing \`conclusion\` will automatically set the \`status\` parameter to \`completed\`. You cannot change a check run conclusion to \`stale\`, only GitHub can set this.").optional(),
  "completed_at": z.string().datetime({ offset: true }).describe("The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "output": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nCheck runs can accept a variety of data in the \`output\` object, including a \`title\` and \`summary\` and can optionally provide descriptive details about the run.").optional(),
  "actions": z.array(z.object({ "label": z.string().max(20).describe("The text to be displayed on a button in the web UI. The maximum size is 20 characters."), "description": z.string().max(40).describe("A short explanation of what this action would do. The maximum size is 40 characters."), "identifier": z.string().max(20).describe("A reference for the action on the integrator's system. The maximum size is 20 characters.") })).max(3).describe("Displays a button on GitHub that can be clicked to alert your app to do additional tasks. For example, a code linting app can display a button that automatically fixes detected errors. The button created in this object is displayed after the check run completes. When a user clicks the button, GitHub sends the [\`check_run.requested_action\` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) to your app. Each action includes a \`label\`, \`identifier\` and \`description\`. A maximum of three actions are accepted. To learn more about check runs and requested actions, see \"[Check runs and requested actions](https://docs.github.com/rest/guides/using-the-rest-api-to-interact-with-checks#check-runs-and-requested-actions).\"").optional()
}
```

### checks_get

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "check_run_id": z.number().int().describe("The unique identifier of the check run.")
}
```

### checks_update

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "check_run_id": z.number().int().describe("The unique identifier of the check run."),
  "name": z.string().describe("The name of the check. For example, \"code-coverage\".").optional(),
  "details_url": z.string().describe("The URL of the integrator's site that has the full details of the check.").optional(),
  "external_id": z.string().describe("A reference for the run on the integrator's system.").optional(),
  "started_at": z.string().datetime({ offset: true }).describe("This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "status": z.enum(["queued","in_progress","completed","waiting","requested","pending"]).describe("The current status of the check run. Only GitHub Actions can set a status of \`waiting\`, \`pending\`, or \`requested\`.").optional(),
  "conclusion": z.enum(["action_required","cancelled","failure","neutral","success","skipped","stale","timed_out"]).describe("**Required if you provide \`completed_at\` or a \`status\` of \`completed\`**. The final conclusion of the check. \n**Note:** Providing \`conclusion\` will automatically set the \`status\` parameter to \`completed\`. You cannot change a check run conclusion to \`stale\`, only GitHub can set this.").optional(),
  "completed_at": z.string().datetime({ offset: true }).describe("The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "output": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nCheck runs can accept a variety of data in the \`output\` object, including a \`title\` and \`summary\` and can optionally provide descriptive details about the run.").optional(),
  "actions": z.array(z.object({ "label": z.string().max(20).describe("The text to be displayed on a button in the web UI. The maximum size is 20 characters."), "description": z.string().max(40).describe("A short explanation of what this action would do. The maximum size is 40 characters."), "identifier": z.string().max(20).describe("A reference for the action on the integrator's system. The maximum size is 20 characters.") })).max(3).describe("Possible further actions the integrator can perform, which a user may trigger. Each action includes a \`label\`, \`identifier\` and \`description\`. A maximum of three actions are accepted. To learn more about check runs and requested actions, see \"[Check runs and requested actions](https://docs.github.com/rest/guides/using-the-rest-api-to-interact-with-checks#check-runs-and-requested-actions).\"").optional()
}
```

### checks_list_annotations

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "check_run_id": z.number().int().describe("The unique identifier of the check run."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### checks_rerequest_run

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "check_run_id": z.number().int().describe("The unique identifier of the check run.")
}
```

### checks_create_suite

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "head_sha": z.string().describe("The sha of the head commit.")
}
```

### checks_set_suites_preferences

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "auto_trigger_checks": z.array(z.object({ "app_id": z.number().int().describe("The \`id\` of the GitHub App."), "setting": z.boolean().describe("Set to \`true\` to enable automatic creation of CheckSuite events upon pushes to the repository, or \`false\` to disable them.") })).describe("Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default.").optional()
}
```

### checks_get_suite

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "check_suite_id": z.number().int().describe("The unique identifier of the check suite.")
}
```

### checks_list_for_suite

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "check_suite_id": z.number().int().describe("The unique identifier of the check suite."),
  "check_name": z.string().describe("Returns check runs with the specified \`name\`.").optional(),
  "status": z.enum(["queued","in_progress","completed"]).describe("Returns check runs with the specified \`status\`.").optional(),
  "filter": z.enum(["latest","all"]).describe("Filters check runs by their \`completed_at\` timestamp. \`latest\` returns the most recent check runs.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### checks_rerequest_suite

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "check_suite_id": z.number().int().describe("The unique identifier of the check suite.")
}
```

### code_scanning_list_alerts_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "tool_name": z.string().describe("The name of the tool used to generate the code scanning analysis.").optional(),
  "tool_guid": z.string().nullable().describe("The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data.").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "ref": z.string().describe("The Git reference, formatted as \`refs/pull/<number>/merge\`, \`refs/pull/<number>/head\`,\n\`refs/heads/<branch name>\` or simply \`<branch name>\`.").optional(),
  "pr": z.number().int().describe("The number of the pull request for the results you want to list.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "sort": z.enum(["created","updated"]).describe("The property by which to sort the results.").optional(),
  "state": z.enum(["open","closed","dismissed","fixed"]).describe("State of a code scanning alert.").optional(),
  "severity": z.enum(["critical","high","medium","low","warning","note","error"]).describe("Severity of a code scanning alert.").optional()
}
```

### code_scanning_get_alert

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly()
}
```

### code_scanning_update_alert

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly(),
  "state": z.enum(["open","dismissed"]).describe("Sets the state of the code scanning alert. You must provide \`dismissed_reason\` when you set the state to \`dismissed\`."),
  "dismissed_reason": z.enum(["false positive","won't fix","used in tests"]).nullable().describe("**Required when the state is dismissed.** The reason for dismissing or closing the alert.").optional(),
  "dismissed_comment": z.string().max(280).nullable().describe("The dismissal comment associated with the dismissal of the alert.").optional(),
  "create_request": z.boolean().describe("If \`true\`, attempt to create an alert dismissal request.").optional()
}
```

### code_scanning_get_autofix

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly()
}
```

### code_scanning_create_autofix

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly()
}
```

### code_scanning_commit_autofix

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly(),
  "target_ref": z.string().describe("The Git reference of target branch for the commit. Branch needs to already exist.  For more information, see \"[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)\" in the Git documentation.").optional(),
  "message": z.string().describe("Commit message to be used.").optional()
}
```

### code_scanning_list_alert_instances

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "ref": z.string().describe("The Git reference, formatted as \`refs/pull/<number>/merge\`, \`refs/pull/<number>/head\`,\n\`refs/heads/<branch name>\` or simply \`<branch name>\`.").optional(),
  "pr": z.number().int().describe("The number of the pull request for the results you want to list.").optional()
}
```

### code_scanning_list_recent_analyses

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "tool_name": z.string().describe("The name of the tool used to generate the code scanning analysis.").optional(),
  "tool_guid": z.string().nullable().describe("The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data.").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "pr": z.number().int().describe("The number of the pull request for the results you want to list.").optional(),
  "ref": z.string().describe("The Git reference, formatted as \`refs/pull/<number>/merge\`, \`refs/pull/<number>/head\`,\n\`refs/heads/<branch name>\` or simply \`<branch name>\`.").optional(),
  "sarif_id": z.string().describe("An identifier for the upload.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "sort": z.literal("created").describe("The property by which to sort the results.").optional()
}
```

### code_scanning_get_analysis

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "analysis_id": z.number().int().describe("The ID of the analysis, as returned from the \`GET /repos/{owner}/{repo}/code-scanning/analyses\` operation.")
}
```

### code_scanning_delete_analysis

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "analysis_id": z.number().int().describe("The ID of the analysis, as returned from the \`GET /repos/{owner}/{repo}/code-scanning/analyses\` operation."),
  "confirm_delete": z.string().nullable().describe("Allow deletion if the specified analysis is the last in a set. If you attempt to delete the final analysis in a set without setting this parameter to \`true\`, you'll get a 400 response with the message: \`Analysis is last of its type and deletion may result in the loss of historical alert data. Please specify confirm_delete.\`").optional()
}
```

### code_scanning_list_codeql_databases

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### code_scanning_get_codeql_database

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "language": z.string().describe("The language of the CodeQL database.")
}
```

### code_scanning_delete_codeql_database

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "language": z.string().describe("The language of the CodeQL database.")
}
```

### code_scanning_create_variant_analysis

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "language": z.enum(["cpp","csharp","go","java","javascript","python","ruby","rust","swift"]).describe("The language targeted by the CodeQL query"),
  "query_pack": z.string().describe("A Base64-encoded tarball containing a CodeQL query and all its dependencies"),
  "repositories": z.array(z.string()).describe("List of repository names (in the form \`owner/repo-name\`) to run the query against. Precisely one property from \`repositories\`, \`repository_lists\` and \`repository_owners\` is required.").optional(),
  "repository_lists": z.array(z.string()).max(1).describe("List of repository lists to run the query against. Precisely one property from \`repositories\`, \`repository_lists\` and \`repository_owners\` is required.").optional(),
  "repository_owners": z.array(z.string()).max(1).describe("List of organization or user names whose repositories the query should be run against. Precisely one property from \`repositories\`, \`repository_lists\` and \`repository_owners\` is required.").optional()
}
```

### code_scanning_get_variant_analysis

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "codeql_variant_analysis_id": z.number().int().describe("The unique identifier of the variant analysis.")
}
```

### code_scanning_get_variant_analysis_repo_task

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the controller repository."),
  "codeql_variant_analysis_id": z.number().int().describe("The ID of the variant analysis."),
  "repo_owner": z.string().describe("The account owner of the variant analysis repository. The name is not case sensitive."),
  "repo_name": z.string().describe("The name of the variant analysis repository.")
}
```

### code_scanning_get_default_setup

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### code_scanning_update_default_setup

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "state": z.enum(["configured","not-configured"]).describe("The desired state of code scanning default setup.").optional(),
  "runner_type": z.enum(["standard","labeled"]).describe("Runner type to be used.").optional(),
  "runner_label": z.string().nullable().describe("Runner label to be used if the runner type is labeled.").optional(),
  "query_suite": z.enum(["default","extended"]).describe("CodeQL query suite to be used.").optional(),
  "languages": z.array(z.enum(["actions","c-cpp","csharp","go","java-kotlin","javascript-typescript","python","ruby","swift"])).describe("CodeQL languages to be analyzed.").optional()
}
```

### code_scanning_upload_sarif

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "commit_sha": z.string().regex(new RegExp("^[0-9a-fA-F]+$")).min(40).max(40).describe("The SHA of the commit to which the analysis you are uploading relates."),
  "ref": z.string().regex(new RegExp("^refs/(heads|tags|pull)/.*$")).describe("The full Git reference, formatted as \`refs/heads/<branch name>\`,\n\`refs/tags/<tag>\`, \`refs/pull/<number>/merge\`, or \`refs/pull/<number>/head\`."),
  "sarif": z.string().describe("A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [\`gzip\`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string. For more information, see \"[SARIF support for code scanning](https://docs.github.com/code-security/secure-coding/sarif-support-for-code-scanning).\""),
  "checkout_uri": z.string().url().describe("The base directory used in the analysis, as it appears in the SARIF file.\nThis property is used to convert file paths from absolute to relative, so that alerts can be mapped to their correct location in the repository.").optional(),
  "started_at": z.string().datetime({ offset: true }).describe("The time that the analysis run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "tool_name": z.string().describe("The name of the tool used to generate the code scanning analysis. If this parameter is not used, the tool name defaults to \"API\". If the uploaded SARIF contains a tool GUID, this will be available for filtering using the \`tool_guid\` parameter of operations such as \`GET /repos/{owner}/{repo}/code-scanning/alerts\`.").optional(),
  "validate": z.boolean().describe("Whether the SARIF file will be validated according to the code scanning specifications.\nThis parameter is intended to help integrators ensure that the uploaded SARIF files are correctly rendered by code scanning.").optional()
}
```

### code_scanning_get_sarif

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "sarif_id": z.string().describe("The SARIF ID obtained after uploading.")
}
```

### code_security_get_configuration_for_repository

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_codeowners_errors

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("A branch, tag or commit name used to determine which version of the CODEOWNERS file to use. Default: the repository's default branch (e.g. \`main\`)").optional()
}
```

### codespaces_list_in_repository_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### codespaces_create_with_repo_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("Git ref (typically a branch name) for this codespace").optional(),
  "location": z.string().describe("The requested location for a new codespace. Best efforts are made to respect this upon creation. Assigned by IP if not provided.").optional(),
  "geo": z.enum(["EuropeWest","SoutheastAsia","UsEast","UsWest"]).describe("The geographic area for this codespace. If not specified, the value is assigned by IP. This property replaces \`location\`, which is closing down.").optional(),
  "client_ip": z.string().describe("IP for location auto-detection when proxying a request").optional(),
  "machine": z.string().describe("Machine type to use for this codespace").optional(),
  "devcontainer_path": z.string().describe("Path to devcontainer.json config to use for this codespace").optional(),
  "multi_repo_permissions_opt_out": z.boolean().describe("Whether to authorize requested permissions from devcontainer.json").optional(),
  "working_directory": z.string().describe("Working directory for this codespace").optional(),
  "idle_timeout_minutes": z.number().int().describe("Time in minutes before codespace stops from inactivity").optional(),
  "display_name": z.string().describe("Display name for this codespace").optional(),
  "retention_period_minutes": z.number().int().describe("Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).").optional()
}
```

### codespaces_list_devcontainers_in_repository_for_authenticated_us

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### codespaces_repo_machines_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "location": z.string().describe("The location to check for available machines. Assigned by IP if not provided.").optional(),
  "client_ip": z.string().describe("IP for location auto-detection when proxying a request").optional(),
  "ref": z.string().describe("The branch or commit to check for prebuild availability and devcontainer restrictions.").optional()
}
```

### codespaces_pre_flight_with_repo_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The branch or commit to check for a default devcontainer path. If not specified, the default branch will be checked.").optional(),
  "client_ip": z.string().describe("An alternative IP for default location auto-detection, such as when proxying a request.").optional()
}
```

### codespaces_check_permissions_for_devcontainer

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The git reference that points to the location of the devcontainer configuration to use for the permission check. The value of \`ref\` will typically be a branch name (\`heads/BRANCH_NAME\`). For more information, see \"[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)\" in the Git documentation."),
  "devcontainer_path": z.string().describe("Path to the devcontainer.json configuration to use for the permission check.")
}
```

### codespaces_list_repo_secrets

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### codespaces_get_repo_public_key

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### codespaces_get_repo_secret

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### codespaces_create_or_update_repo_secret

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "encrypted_value": z.string().regex(new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$")).describe("Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/codespaces/repository-secrets#get-a-repository-public-key) endpoint.").optional(),
  "key_id": z.string().describe("ID of the key you used to encrypt the secret.").optional()
}
```

### codespaces_delete_repo_secret

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### repos_list_collaborators

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "affiliation": z.enum(["outside","direct","all"]).describe("Filter collaborators returned by their affiliation. \`outside\` means all outside collaborators of an organization-owned repository. \`direct\` means all collaborators with permissions to an organization-owned repository, regardless of organization membership status. \`all\` means all collaborators the authenticated user can see.").optional(),
  "permission": z.enum(["pull","triage","push","maintain","admin"]).describe("Filter collaborators by the permissions they have on the repository. If not specified, all collaborators will be returned.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_check_collaborator

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### repos_add_collaborator

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "permission": z.string().describe("The permission to grant the collaborator. **Only valid on organization-owned repositories.** We accept the following permissions to be set: \`pull\`, \`triage\`, \`push\`, \`maintain\`, \`admin\` and you can also specify a custom repository role name, if the owning organization has defined any.").optional()
}
```

### repos_remove_collaborator

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### repos_get_collaborator_permission_level

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### repos_list_commit_comments_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_commit_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment.")
}
```

### repos_update_commit_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "body": z.string().describe("The contents of the comment")
}
```

### repos_delete_commit_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment.")
}
```

### reactions_list_for_commit_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a commit comment.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### reactions_create_for_commit_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the commit comment.")
}
```

### reactions_delete_for_commit_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "reaction_id": z.number().int().describe("The unique identifier of the reaction.")
}
```

### repos_list_commits

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "sha": z.string().describe("SHA or branch to start listing commits from. Default: the repository’s default branch (usually \`main\`).").optional(),
  "path": z.string().describe("Only commits containing this file path will be returned.").optional(),
  "author": z.string().describe("GitHub username or email address to use to filter by commit author.").optional(),
  "committer": z.string().describe("GitHub username or email address to use to filter by commit committer.").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`. Due to limitations of Git, timestamps must be between 1970-01-01 and 2099-12-31 (inclusive) or unexpected results may be returned.").optional(),
  "until": z.string().datetime({ offset: true }).describe("Only commits before this date will be returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`. Due to limitations of Git, timestamps must be between 1970-01-01 and 2099-12-31 (inclusive) or unexpected results may be returned.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_list_branches_for_head_commit

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "commit_sha": z.string().describe("The SHA of the commit.")
}
```

### repos_list_comments_for_commit

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "commit_sha": z.string().describe("The SHA of the commit."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_create_commit_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "commit_sha": z.string().describe("The SHA of the commit."),
  "body": z.string().describe("The contents of the comment."),
  "path": z.string().describe("Relative path of the file to comment on.").optional(),
  "position": z.number().int().describe("Line index in the diff to comment on.").optional(),
  "line": z.number().int().describe("**Closing down notice**. Use **position** parameter instead. Line number in the file to comment on.").optional()
}
```

### repos_list_pull_requests_associated_with_commit

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "commit_sha": z.string().describe("The SHA of the commit."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_commit

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The commit reference. Can be a commit SHA, branch name (\`heads/BRANCH_NAME\`), or tag name (\`tags/TAG_NAME\`). For more information, see \"[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)\" in the Git documentation."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### checks_list_for_ref

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The commit reference. Can be a commit SHA, branch name (\`heads/BRANCH_NAME\`), or tag name (\`tags/TAG_NAME\`). For more information, see \"[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)\" in the Git documentation."),
  "check_name": z.string().describe("Returns check runs with the specified \`name\`.").optional(),
  "status": z.enum(["queued","in_progress","completed"]).describe("Returns check runs with the specified \`status\`.").optional(),
  "filter": z.enum(["latest","all"]).describe("Filters check runs by their \`completed_at\` timestamp. \`latest\` returns the most recent check runs.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "app_id": z.number().int().optional()
}
```

### checks_list_suites_for_ref

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The commit reference. Can be a commit SHA, branch name (\`heads/BRANCH_NAME\`), or tag name (\`tags/TAG_NAME\`). For more information, see \"[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)\" in the Git documentation."),
  "app_id": z.number().int().describe("Filters check suites by GitHub App \`id\`.").optional(),
  "check_name": z.string().describe("Returns check runs with the specified \`name\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_combined_status_for_ref

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The commit reference. Can be a commit SHA, branch name (\`heads/BRANCH_NAME\`), or tag name (\`tags/TAG_NAME\`). For more information, see \"[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)\" in the Git documentation."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_list_commit_statuses_for_ref

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The commit reference. Can be a commit SHA, branch name (\`heads/BRANCH_NAME\`), or tag name (\`tags/TAG_NAME\`). For more information, see \"[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)\" in the Git documentation."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_community_profile_metrics

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_compare_commits

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "basehead": z.string().describe("The base branch and head branch to compare. This parameter expects the format \`BASE...HEAD\`. Both must be branch names in \`repo\`. To compare with a branch that exists in a different repository in the same network as \`repo\`, the \`basehead\` parameter expects the format \`USERNAME:BASE...USERNAME:HEAD\`."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_content

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "path": z.string().describe("path parameter"),
  "ref": z.string().describe("The name of the commit/branch/tag. Default: the repository’s default branch.").optional()
}
```

### repos_create_or_update_file_contents

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "path": z.string().describe("path parameter"),
  "message": z.string().describe("The commit message."),
  "content": z.string().describe("The new file content, using Base64 encoding."),
  "sha": z.string().describe("**Required if you are updating a file**. The blob SHA of the file being replaced.").optional(),
  "branch": z.string().describe("The branch name. Default: the repository’s default branch.").optional(),
  "committer": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe person that committed the file. Default: the authenticated user.").optional(),
  "author": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe author of the file. Default: The \`committer\` or the authenticated user if you omit \`committer\`.").optional()
}
```

### repos_delete_file

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "path": z.string().describe("path parameter"),
  "message": z.string().describe("The commit message."),
  "sha": z.string().describe("The blob SHA of the file being deleted."),
  "branch": z.string().describe("The branch name. Default: the repository’s default branch").optional(),
  "committer": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nobject containing information about the committer.").optional(),
  "author": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nobject containing information about the author.").optional()
}
```

### repos_list_contributors

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "anon": z.string().describe("Set to \`1\` or \`true\` to include anonymous contributors in results.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### dependabot_list_alerts_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "state": z.string().describe("A comma-separated list of states. If specified, only alerts with these states will be returned.\n\nCan be: \`auto_dismissed\`, \`dismissed\`, \`fixed\`, \`open\`").optional(),
  "severity": z.string().describe("A comma-separated list of severities. If specified, only alerts with these severities will be returned.\n\nCan be: \`low\`, \`medium\`, \`high\`, \`critical\`").optional(),
  "ecosystem": z.string().describe("A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.\n\nCan be: \`composer\`, \`go\`, \`maven\`, \`npm\`, \`nuget\`, \`pip\`, \`pub\`, \`rubygems\`, \`rust\`").optional(),
  "package": z.string().describe("A comma-separated list of package names. If specified, only alerts for these packages will be returned.").optional(),
  "manifest": z.string().describe("A comma-separated list of full manifest paths. If specified, only alerts for these manifests will be returned.").optional(),
  "epss_percentage": z.string().describe("CVE Exploit Prediction Scoring System (EPSS) percentage. Can be specified as:\n- An exact number (\`n\`)\n- Comparators such as \`>n\`, \`<n\`, \`>=n\`, \`<=n\`\n- A range like \`n..n\`, where \`n\` is a number from 0.0 to 1.0\n\nFilters the list of alerts based on EPSS percentages. If specified, only alerts with the provided EPSS percentages will be returned.").optional(),
  "scope": z.enum(["development","runtime"]).describe("The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.").optional(),
  "sort": z.enum(["created","updated","epss_percentage"]).describe("The property by which to sort the results.\n\`created\` means when the alert was created.\n\`updated\` means when the alert's state last changed.\n\`epss_percentage\` sorts alerts by the Exploit Prediction Scoring System (EPSS) percentage.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "page": z.number().int().describe("**Closing down notice**. Page number of the results to fetch. Use cursor-based pagination with \`before\` or \`after\` instead.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "first": z.number().int().gte(1).lte(100).describe("**Deprecated**. The number of results per page (max 100), starting from the first matching result.\nThis parameter must not be used in combination with \`last\`.\nInstead, use \`per_page\` in combination with \`after\` to fetch the first page of results.").optional(),
  "last": z.number().int().gte(1).lte(100).describe("**Deprecated**. The number of results per page (max 100), starting from the last matching result.\nThis parameter must not be used in combination with \`first\`.\nInstead, use \`per_page\` in combination with \`before\` to fetch the last page of results.").optional()
}
```

### dependabot_get_alert

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly()
}
```

### dependabot_update_alert

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly(),
  "state": z.enum(["dismissed","open"]).describe("The state of the Dependabot alert.\nA \`dismissed_reason\` must be provided when setting the state to \`dismissed\`."),
  "dismissed_reason": z.enum(["fix_started","inaccurate","no_bandwidth","not_used","tolerable_risk"]).describe("**Required when \`state\` is \`dismissed\`.** A reason for dismissing the alert.").optional(),
  "dismissed_comment": z.string().max(280).describe("An optional comment associated with dismissing the alert.").optional()
}
```

### dependabot_list_repo_secrets

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### dependabot_get_repo_public_key

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### dependabot_get_repo_secret

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### dependabot_create_or_update_repo_secret

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "encrypted_value": z.string().regex(new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$")).describe("Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/dependabot/secrets#get-a-repository-public-key) endpoint.").optional(),
  "key_id": z.string().describe("ID of the key you used to encrypt the secret.").optional()
}
```

### dependabot_delete_repo_secret

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### dependency_graph_diff_range

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "basehead": z.string().describe("The base and head Git revisions to compare. The Git revisions will be resolved to commit SHAs. Named revisions will be resolved to their corresponding HEAD commits, and an appropriate merge base will be determined. This parameter expects the format \`{base}...{head}\`."),
  "name": z.string().describe("The full path, relative to the repository root, of the dependency manifest file.").optional()
}
```

### dependency_graph_export_sbom

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### dependency_graph_create_repository_snapshot

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "version": z.number().int().describe("The version of the repository snapshot submission."),
  "job": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "sha": z.string().min(40).max(40).describe("The commit SHA associated with this dependency snapshot. Maximum length: 40 characters."),
  "ref": z.string().regex(new RegExp("^refs/")).describe("The repository branch that triggered this snapshot."),
  "detector": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA description of the detector used."),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nUser-defined metadata to store domain-specific information limited to 8 keys with scalar values.").optional(),
  "manifests": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies.").optional(),
  "scanned": z.string().datetime({ offset: true }).describe("The time at which the snapshot was scanned.")
}
```

### repos_list_deployments

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "sha": z.string().describe("The SHA recorded at creation time.").optional(),
  "ref": z.string().describe("The name of the ref. This can be a branch, tag, or SHA.").optional(),
  "task": z.string().describe("The name of the task for the deployment (e.g., \`deploy\` or \`deploy:migrations\`).").optional(),
  "environment": z.string().nullable().describe("The name of the environment that was deployed to (e.g., \`staging\` or \`production\`).").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_create_deployment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The ref to deploy. This can be a branch, tag, or SHA."),
  "task": z.string().describe("Specifies a task to execute (e.g., \`deploy\` or \`deploy:migrations\`).").optional(),
  "auto_merge": z.boolean().describe("Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.").optional(),
  "required_contexts": z.array(z.string()).describe("The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts.").optional(),
  "payload": z.record(z.any()).optional(),
  "environment": z.string().describe("Name for the target deployment environment (e.g., \`production\`, \`staging\`, \`qa\`).").optional(),
  "description": z.string().nullable().describe("Short description of the deployment.").optional(),
  "transient_environment": z.boolean().describe("Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: \`false\`").optional(),
  "production_environment": z.boolean().describe("Specifies if the given environment is one that end-users directly interact with. Default: \`true\` when \`environment\` is \`production\` and \`false\` otherwise.").optional()
}
```

### repos_get_deployment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "deployment_id": z.number().int().describe("deployment_id parameter")
}
```

### repos_delete_deployment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "deployment_id": z.number().int().describe("deployment_id parameter")
}
```

### repos_list_deployment_statuses

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "deployment_id": z.number().int().describe("deployment_id parameter"),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_create_deployment_status

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "deployment_id": z.number().int().describe("deployment_id parameter"),
  "state": z.enum(["error","failure","inactive","in_progress","queued","pending","success"]).describe("The state of the status. When you set a transient deployment to \`inactive\`, the deployment will be shown as \`destroyed\` in GitHub."),
  "target_url": z.string().describe("The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment.\n\n> [!NOTE]\n> It's recommended to use the \`log_url\` parameter, which replaces \`target_url\`.").optional(),
  "log_url": z.string().describe("The full URL of the deployment's output. This parameter replaces \`target_url\`. We will continue to accept \`target_url\` to support legacy uses, but we recommend replacing \`target_url\` with \`log_url\`. Setting \`log_url\` will automatically set \`target_url\` to the same value. Default: \`\"\"\`").optional(),
  "description": z.string().describe("A short description of the status. The maximum description length is 140 characters.").optional(),
  "environment": z.string().describe("Name for the target deployment environment, which can be changed when setting a deploy status. For example, \`production\`, \`staging\`, or \`qa\`. If not defined, the environment of the previous status on the deployment will be used, if it exists. Otherwise, the environment of the deployment will be used.").optional(),
  "environment_url": z.string().describe("Sets the URL for accessing your environment. Default: \`\"\"\`").optional(),
  "auto_inactive": z.boolean().describe("Adds a new \`inactive\` status to all prior non-transient, non-production environment deployments with the same repository and \`environment\` name as the created status's deployment. An \`inactive\` status is only added to deployments that had a \`success\` state. Default: \`true\`").optional()
}
```

### repos_get_deployment_status

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "deployment_id": z.number().int().describe("deployment_id parameter"),
  "status_id": z.number().int()
}
```

### repos_create_dispatch_event

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "event_type": z.string().min(1).max(100).describe("A custom webhook event name. Must be 100 characters or fewer."),
  "client_payload": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nJSON payload with extra information about the webhook event that your action or workflow may use. The maximum number of top-level properties is 10. The total size of the JSON payload must be less than 64KB.").optional()
}
```

### repos_get_all_environments

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_environment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`.")
}
```

### repos_create_or_update_environment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "wait_timer": z.number().int().describe("The amount of time to delay a job after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).").optional(),
  "prevent_self_review": z.boolean().describe("Whether or not a user who created the job is prevented from approving their own job.").optional(),
  "reviewers": z.array(z.object({ "type": z.enum(["User","Team"]).describe("The type of reviewer.").optional(), "id": z.number().int().describe("The id of the user or team who can review the deployment").optional() })).nullable().describe("The people or teams that may review jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.").optional(),
  "deployment_branch_policy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe type of deployment branch policy for this environment. To allow all branches to deploy, set to \`null\`.").optional()
}
```

### repos_delete_an_environment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`.")
}
```

### repos_list_deployment_branch_policies

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_create_deployment_branch_policy

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "name": z.string().describe("The name pattern that branches or tags must match in order to deploy to the environment.\n\nWildcard characters will not match \`/\`. For example, to match branches that begin with \`release/\` and contain an additional single slash, use \`release/*/*\`.\nFor more information about pattern matching syntax, see the [Ruby File.fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)."),
  "type": z.enum(["branch","tag"]).describe("Whether this rule targets a branch or tag").optional()
}
```

### repos_get_deployment_branch_policy

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "branch_policy_id": z.number().int().describe("The unique identifier of the branch policy.")
}
```

### repos_update_deployment_branch_policy

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "branch_policy_id": z.number().int().describe("The unique identifier of the branch policy."),
  "name": z.string().describe("The name pattern that branches must match in order to deploy to the environment.\n\nWildcard characters will not match \`/\`. For example, to match branches that begin with \`release/\` and contain an additional single slash, use \`release/*/*\`.\nFor more information about pattern matching syntax, see the [Ruby File.fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).")
}
```

### repos_delete_deployment_branch_policy

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "branch_policy_id": z.number().int().describe("The unique identifier of the branch policy.")
}
```

### repos_get_all_deployment_protection_rules

**Environment variables**



**Input schema**

```ts
{
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive.")
}
```

### repos_create_deployment_protection_rule

**Environment variables**



**Input schema**

```ts
{
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "integration_id": z.number().int().describe("The ID of the custom app that will be enabled on the environment.").optional()
}
```

### repos_list_custom_deployment_rule_integrations

**Environment variables**



**Input schema**

```ts
{
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_custom_deployment_protection_rule

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "protection_rule_id": z.number().int().describe("The unique identifier of the protection rule.")
}
```

### repos_disable_deployment_protection_rule

**Environment variables**



**Input schema**

```ts
{
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "protection_rule_id": z.number().int().describe("The unique identifier of the protection rule.")
}
```

### actions_list_environment_secrets

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_get_environment_public_key

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`.")
}
```

### actions_get_environment_secret

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### actions_create_or_update_environment_secret

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "secret_name": z.string().describe("The name of the secret."),
  "encrypted_value": z.string().regex(new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$")).describe("Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-environment-public-key) endpoint."),
  "key_id": z.string().describe("ID of the key you used to encrypt the secret.")
}
```

### actions_delete_environment_secret

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "secret_name": z.string().describe("The name of the secret.")
}
```

### actions_list_environment_variables

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "per_page": z.number().int().describe("The number of results per page (max 30). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### actions_create_environment_variable

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "name": z.string().describe("The name of the variable."),
  "value": z.string().describe("The value of the variable.")
}
```

### actions_get_environment_variable

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "name": z.string().describe("The name of the variable.")
}
```

### actions_update_environment_variable

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`."),
  "b_name": z.string().describe("The name of the variable.").optional(),
  "value": z.string().describe("The value of the variable.").optional()
}
```

### actions_delete_environment_variable

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with \`%2F\`.")
}
```

### activity_list_repo_events

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_list_forks

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "sort": z.enum(["newest","oldest","stargazers","watchers"]).describe("The sort order. \`stargazers\` will sort by star count.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_create_fork

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "organization": z.string().describe("Optional parameter to specify the organization name if forking into an organization.").optional(),
  "name": z.string().describe("When forking from an existing repository, a new name for the fork.").optional(),
  "default_branch_only": z.boolean().describe("When forking from an existing repository, fork with only the default branch.").optional()
}
```

### git_create_blob

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "content": z.string().describe("The new blob's content."),
  "encoding": z.string().describe("The encoding used for \`content\`. Currently, \`\"utf-8\"\` and \`\"base64\"\` are supported.").optional()
}
```

### git_get_blob

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "file_sha": z.string()
}
```

### git_create_commit

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "message": z.string().describe("The commit message"),
  "tree": z.string().describe("The SHA of the tree object this commit points to"),
  "parents": z.array(z.string()).describe("The full SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.").optional(),
  "author": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation about the author of the commit. By default, the \`author\` will be the authenticated user and the current date. See the \`author\` and \`committer\` object below for details.").optional(),
  "committer": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nInformation about the person who is making the commit. By default, \`committer\` will use the information set in \`author\`. See the \`author\` and \`committer\` object below for details.").optional(),
  "signature": z.string().describe("The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. GitHub adds the signature to the \`gpgsig\` header of the created commit. For a commit signature to be verifiable by Git or GitHub, it must be an ASCII-armored detached PGP signature over the string commit as it would be written to the object database. To pass a \`signature\` parameter, you need to first manually create a valid PGP signature, which can be complicated. You may find it easier to [use the command line](https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work) to create signed commits.").optional()
}
```

### git_get_commit

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "commit_sha": z.string().describe("The SHA of the commit.")
}
```

### git_list_matching_refs

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The Git reference. For more information, see \"[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)\" in the Git documentation.")
}
```

### git_get_ref

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The Git reference. For more information, see \"[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)\" in the Git documentation.")
}
```

### git_create_ref

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The name of the fully qualified reference (ie: \`refs/heads/master\`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected."),
  "sha": z.string().describe("The SHA1 value for this reference.")
}
```

### git_update_ref

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The Git reference. For more information, see \"[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)\" in the Git documentation."),
  "sha": z.string().describe("The SHA1 value to set this reference to"),
  "force": z.boolean().describe("Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to \`false\` will make sure you're not overwriting work.").optional()
}
```

### git_delete_ref

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The Git reference. For more information, see \"[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)\" in the Git documentation.")
}
```

### git_create_tag

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "tag": z.string().describe("The tag's name. This is typically a version (e.g., \"v0.0.1\")."),
  "message": z.string().describe("The tag message."),
  "object": z.string().describe("The SHA of the git object this is tagging."),
  "type": z.enum(["commit","tree","blob"]).describe("The type of the object we're tagging. Normally this is a \`commit\` but it can also be a \`tree\` or a \`blob\`."),
  "tagger": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn object with information about the individual creating the tag.").optional()
}
```

### git_get_tag

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "tag_sha": z.string()
}
```

### git_create_tree

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "tree": z.array(z.object({ "path": z.string().describe("The file referenced in the tree.").optional(), "mode": z.enum(["100644","100755","040000","160000","120000"]).describe("The file mode; one of \`100644\` for file (blob), \`100755\` for executable (blob), \`040000\` for subdirectory (tree), \`160000\` for submodule (commit), or \`120000\` for a blob that specifies the path of a symlink.").optional(), "type": z.enum(["blob","tree","commit"]).describe("Either \`blob\`, \`tree\`, or \`commit\`.").optional(), "sha": z.string().nullable().describe("The SHA1 checksum ID of the object in the tree. Also called \`tree.sha\`. If the value is \`null\` then the file will be deleted.  \n  \n**Note:** Use either \`tree.sha\` or \`content\` to specify the contents of the entry. Using both \`tree.sha\` and \`content\` will return an error.").optional(), "content": z.string().describe("The content you want this file to have. GitHub will write this blob out and use that SHA for this entry. Use either this, or \`tree.sha\`.  \n  \n**Note:** Use either \`tree.sha\` or \`content\` to specify the contents of the entry. Using both \`tree.sha\` and \`content\` will return an error.").optional() })).describe("Objects (of \`path\`, \`mode\`, \`type\`, and \`sha\`) specifying a tree structure."),
  "base_tree": z.string().describe("The SHA1 of an existing Git tree object which will be used as the base for the new tree. If provided, a new Git tree object will be created from entries in the Git tree object pointed to by \`base_tree\` and entries defined in the \`tree\` parameter. Entries defined in the \`tree\` parameter will overwrite items from \`base_tree\` with the same \`path\`. If you're creating new changes on a branch, then normally you'd set \`base_tree\` to the SHA1 of the Git tree object of the current latest commit on the branch you're working on.\nIf not provided, GitHub will create a new Git tree object from only the entries defined in the \`tree\` parameter. If you create a new commit pointing to such a tree, then all files which were a part of the parent commit's tree and were not defined in the \`tree\` parameter will be listed as deleted by the new commit.").optional()
}
```

### git_get_tree

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "tree_sha": z.string().describe("The SHA1 value or ref (branch or tag) name of the tree."),
  "recursive": z.string().describe("Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in \`:tree_sha\`. For example, setting \`recursive\` to any of the following will enable returning objects or subtrees: \`0\`, \`1\`, \`\"true\"\`, and \`\"false\"\`. Omit this parameter to prevent recursively returning objects or subtrees.").optional()
}
```

### repos_list_webhooks

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_create_webhook

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("Use \`web\` to create a webhook. Default: \`web\`. This parameter only accepts the value \`web\`.").optional(),
  "config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nKey/value pairs to provide settings for this webhook.").optional(),
  "events": z.array(z.string()).describe("Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.").optional(),
  "active": z.boolean().describe("Determines if notifications are sent when the webhook is triggered. Set to \`true\` to send notifications.").optional()
}
```

### repos_get_webhook

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery.")
}
```

### repos_update_webhook

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery."),
  "config": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration object of the webhook").optional(),
  "events": z.array(z.string()).describe("Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. This replaces the entire array of events.").optional(),
  "add_events": z.array(z.string()).describe("Determines a list of events to be added to the list of events that the Hook triggers for.").optional(),
  "remove_events": z.array(z.string()).describe("Determines a list of events to be removed from the list of events that the Hook triggers for.").optional(),
  "active": z.boolean().describe("Determines if notifications are sent when the webhook is triggered. Set to \`true\` to send notifications.").optional()
}
```

### repos_delete_webhook

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery.")
}
```

### repos_get_webhook_config_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery.")
}
```

### repos_update_webhook_config_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery."),
  "url": z.string().url().describe("The URL to which the payloads will be delivered.").optional(),
  "content_type": z.string().describe("The media type used to serialize the payloads. Supported values include \`json\` and \`form\`. The default is \`form\`.").optional(),
  "secret": z.string().describe("If provided, the \`secret\` will be used as the \`key\` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).").optional(),
  "insecure_ssl": z.string().describe("Determines whether the SSL certificate of the host for \`url\` will be verified when delivering payloads. Supported values include \`0\` (verification is performed) and \`1\` (verification is not performed). The default is \`0\`. **We strongly recommend not setting this to \`1\` as you are subject to man-in-the-middle and other attacks.**").optional()
}
```

### repos_list_webhook_deliveries

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "cursor": z.string().describe("Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the \`link\` header for the next and previous page cursors.").optional()
}
```

### repos_get_webhook_delivery

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery."),
  "delivery_id": z.number().int()
}
```

### repos_redeliver_webhook_delivery

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery."),
  "delivery_id": z.number().int()
}
```

### repos_ping_webhook

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery.")
}
```

### repos_test_push_webhook

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the \`X-GitHub-Hook-ID\` header of a webhook delivery.")
}
```

### migrations_get_import_status

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### migrations_start_import

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "vcs_url": z.string().describe("The URL of the originating repository."),
  "vcs": z.enum(["subversion","git","mercurial","tfvc"]).describe("The originating VCS type. Without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.").optional(),
  "vcs_username": z.string().describe("If authentication is required, the username to provide to \`vcs_url\`.").optional(),
  "vcs_password": z.string().describe("If authentication is required, the password to provide to \`vcs_url\`.").optional(),
  "tfvc_project": z.string().describe("For a tfvc import, the name of the project that is being imported.").optional()
}
```

### migrations_update_import

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "vcs_username": z.string().describe("The username to provide to the originating repository.").optional(),
  "vcs_password": z.string().describe("The password to provide to the originating repository.").optional(),
  "vcs": z.enum(["subversion","tfvc","git","mercurial"]).describe("The type of version control system you are migrating from.").optional(),
  "tfvc_project": z.string().describe("For a tfvc import, the name of the project that is being imported.").optional()
}
```

### migrations_cancel_import

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### migrations_get_commit_authors

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "since": z.number().int().describe("A user ID. Only return users with an ID greater than this ID.").optional()
}
```

### migrations_map_commit_author

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "author_id": z.number().int(),
  "email": z.string().describe("The new Git author email.").optional(),
  "name": z.string().describe("The new Git author name.").optional()
}
```

### migrations_get_large_files

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### migrations_set_lfs_preference

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "use_lfs": z.enum(["opt_in","opt_out"]).describe("Whether to store large files during the import. \`opt_in\` means large files will be stored using Git LFS. \`opt_out\` means large files will be removed during the import.")
}
```

### apps_get_repo_installation

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### interactions_get_restrictions_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### interactions_set_restrictions_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "limit": z.enum(["existing_users","contributors_only","collaborators_only"]).describe("The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect."),
  "expiry": z.enum(["one_day","three_days","one_week","one_month","six_months"]).describe("The duration of the interaction restriction. Default: \`one_day\`.").optional()
}
```

### interactions_remove_restrictions_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_list_invitations

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_update_invitation

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "invitation_id": z.number().int().describe("The unique identifier of the invitation."),
  "permissions": z.enum(["read","write","maintain","triage","admin"]).describe("The permissions that the associated user will have on the repository. Valid values are \`read\`, \`write\`, \`maintain\`, \`triage\`, and \`admin\`.").optional()
}
```

### repos_delete_invitation

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "invitation_id": z.number().int().describe("The unique identifier of the invitation.")
}
```

### issues_list_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "milestone": z.string().describe("If an \`integer\` is passed, it should refer to a milestone by its \`number\` field. If the string \`*\` is passed, issues with any milestone are accepted. If the string \`none\` is passed, issues without milestones are returned.").optional(),
  "state": z.enum(["open","closed","all"]).describe("Indicates the state of the issues to return.").optional(),
  "assignee": z.string().describe("Can be the name of a user. Pass in \`none\` for issues with no assigned user, and \`*\` for issues assigned to any user.").optional(),
  "type": z.string().describe("Can be the name of an issue type. If the string \`*\` is passed, issues with any type are accepted. If the string \`none\` is passed, issues without type are returned.").optional(),
  "creator": z.string().describe("The user that created the issue.").optional(),
  "mentioned": z.string().describe("A user that's mentioned in the issue.").optional(),
  "labels": z.string().describe("A list of comma separated label names. Example: \`bug,ui,@high\`").optional(),
  "sort": z.enum(["created","updated","comments"]).describe("What to sort results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### issues_create

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "title": z.string().describe("The title of the issue."),
  "body": z.string().describe("The contents of the issue.").optional(),
  "assignee": z.string().nullable().describe("Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is closing down.**_").optional(),
  "milestone": z.string().nullable().optional(),
  "labels": z.array(z.string()).describe("Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._").optional(),
  "assignees": z.array(z.string()).describe("Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._").optional(),
  "type": z.string().nullable().describe("The name of the issue type to associate with this issue. _NOTE: Only users with push access can set the type for new issues. The type is silently dropped otherwise._").optional()
}
```

### issues_list_comments_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "sort": z.enum(["created","updated"]).describe("The property to sort the results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("Either \`asc\` or \`desc\`. Ignored without the \`sort\` parameter.").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### issues_get_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment.")
}
```

### issues_update_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "body": z.string().describe("The contents of the comment.")
}
```

### issues_delete_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment.")
}
```

### reactions_list_for_issue_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to an issue comment.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### reactions_create_for_issue_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the issue comment.")
}
```

### reactions_delete_for_issue_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "reaction_id": z.number().int().describe("The unique identifier of the reaction.")
}
```

### issues_list_events_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### issues_get_event

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "event_id": z.number().int()
}
```

### issues_get

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue.")
}
```

### issues_update

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "title": z.string().nullable().describe("The title of the issue.").optional(),
  "body": z.string().nullable().describe("The contents of the issue.").optional(),
  "assignee": z.string().nullable().describe("Username to assign to this issue. **This field is closing down.**").optional(),
  "state": z.enum(["open","closed"]).describe("The open or closed state of the issue.").optional(),
  "state_reason": z.enum(["completed","not_planned","reopened"]).nullable().describe("The reason for the state change. Ignored unless \`state\` is changed.").optional(),
  "milestone": z.string().nullable().optional(),
  "labels": z.array(z.string()).describe("Labels to associate with this issue. Pass one or more labels to _replace_ the set of labels on this issue. Send an empty array (\`[]\`) to clear all labels from the issue. Only users with push access can set labels for issues. Without push access to the repository, label changes are silently dropped.").optional(),
  "assignees": z.array(z.string()).describe("Usernames to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this issue. Send an empty array (\`[]\`) to clear all assignees from the issue. Only users with push access can set assignees for new issues. Without push access to the repository, assignee changes are silently dropped.").optional(),
  "type": z.string().nullable().describe("The name of the issue type to associate with this issue or use \`null\` to remove the current issue type. Only users with push access can set the type for issues. Without push access to the repository, type changes are silently dropped.").optional()
}
```

### issues_add_assignees

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "assignees": z.array(z.string()).describe("Usernames of people to assign this issue to. _NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise._").optional()
}
```

### issues_remove_assignees

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "assignees": z.array(z.string()).describe("Usernames of assignees to remove from an issue. _NOTE: Only users with push access can remove assignees from an issue. Assignees are silently ignored otherwise._").optional()
}
```

### issues_check_user_can_be_assigned_to_issue

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "assignee": z.string()
}
```

### issues_list_comments

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### issues_create_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "body": z.string().describe("The contents of the comment.")
}
```

### issues_list_events

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### issues_list_labels_on_issue

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### issues_add_labels

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue.")
}
```

### issues_set_labels

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue.")
}
```

### issues_remove_all_labels

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue.")
}
```

### issues_remove_label

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "name": z.string()
}
```

### issues_lock

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "lock_reason": z.enum(["off-topic","too heated","resolved","spam"]).describe("The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:  \n * \`off-topic\`  \n * \`too heated\`  \n * \`resolved\`  \n * \`spam\`").optional()
}
```

### issues_unlock

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue.")
}
```

### reactions_list_for_issue

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to an issue.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### reactions_create_for_issue

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the issue.")
}
```

### reactions_delete_for_issue

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "reaction_id": z.number().int().describe("The unique identifier of the reaction.")
}
```

### issues_remove_sub_issue

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "sub_issue_id": z.number().int().describe("The id of the sub-issue to remove")
}
```

### issues_list_sub_issues

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### issues_add_sub_issue

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "sub_issue_id": z.number().int().describe("The id of the sub-issue to add. The sub-issue must belong to the same repository owner as the parent issue"),
  "replace_parent": z.boolean().describe("Option that, when true, instructs the operation to replace the sub-issues current parent issue").optional()
}
```

### issues_reprioritize_sub_issue

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "sub_issue_id": z.number().int().describe("The id of the sub-issue to reprioritize"),
  "after_id": z.number().int().describe("The id of the sub-issue to be prioritized after (either positional argument after OR before should be specified).").optional(),
  "before_id": z.number().int().describe("The id of the sub-issue to be prioritized before (either positional argument after OR before should be specified).").optional()
}
```

### issues_list_events_for_timeline

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_list_deploy_keys

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_create_deploy_key

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "title": z.string().describe("A name for the key.").optional(),
  "key": z.string().describe("The contents of the key."),
  "read_only": z.boolean().describe("If \`true\`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.  \n  \nDeploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see \"[Repository permission levels for an organization](https://docs.github.com/articles/repository-permission-levels-for-an-organization/)\" and \"[Permission levels for a user account repository](https://docs.github.com/articles/permission-levels-for-a-user-account-repository/).\"").optional()
}
```

### repos_get_deploy_key

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "key_id": z.number().int().describe("The unique identifier of the key.")
}
```

### repos_delete_deploy_key

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "key_id": z.number().int().describe("The unique identifier of the key.")
}
```

### issues_list_labels_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### issues_create_label

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing \`:strawberry:\` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png \":strawberry:\"). For a full list of available emoji and codes, see \"[Emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet).\""),
  "color": z.string().describe("The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading \`#\`.").optional(),
  "description": z.string().describe("A short description of the label. Must be 100 characters or fewer.").optional()
}
```

### issues_get_label

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string()
}
```

### issues_update_label

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string(),
  "new_name": z.string().describe("The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing \`:strawberry:\` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png \":strawberry:\"). For a full list of available emoji and codes, see \"[Emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet).\"").optional(),
  "color": z.string().describe("The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading \`#\`.").optional(),
  "description": z.string().describe("A short description of the label. Must be 100 characters or fewer.").optional()
}
```

### issues_delete_label

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string()
}
```

### repos_list_languages

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### licenses_get_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The Git reference, formatted as \`refs/pull/<number>/merge\`, \`refs/pull/<number>/head\`,\n\`refs/heads/<branch name>\` or simply \`<branch name>\`.").optional()
}
```

### repos_merge_upstream

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch which should be updated to match upstream.")
}
```

### repos_merge

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "base": z.string().describe("The name of the base branch that the head will be merged into."),
  "head": z.string().describe("The head to merge. This can be a branch name or a commit SHA1."),
  "commit_message": z.string().describe("Commit message to use for the merge commit. If omitted, a default message will be used.").optional()
}
```

### issues_list_milestones

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "state": z.enum(["open","closed","all"]).describe("The state of the milestone. Either \`open\`, \`closed\`, or \`all\`.").optional(),
  "sort": z.enum(["due_on","completeness"]).describe("What to sort results by. Either \`due_on\` or \`completeness\`.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction of the sort. Either \`asc\` or \`desc\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### issues_create_milestone

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "title": z.string().describe("The title of the milestone."),
  "state": z.enum(["open","closed"]).describe("The state of the milestone. Either \`open\` or \`closed\`.").optional(),
  "description": z.string().describe("A description of the milestone.").optional(),
  "due_on": z.string().datetime({ offset: true }).describe("The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional()
}
```

### issues_get_milestone

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "milestone_number": z.number().int().describe("The number that identifies the milestone.")
}
```

### issues_update_milestone

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "milestone_number": z.number().int().describe("The number that identifies the milestone."),
  "title": z.string().describe("The title of the milestone.").optional(),
  "state": z.enum(["open","closed"]).describe("The state of the milestone. Either \`open\` or \`closed\`.").optional(),
  "description": z.string().describe("A description of the milestone.").optional(),
  "due_on": z.string().datetime({ offset: true }).describe("The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional()
}
```

### issues_delete_milestone

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "milestone_number": z.number().int().describe("The number that identifies the milestone.")
}
```

### issues_list_labels_for_milestone

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "milestone_number": z.number().int().describe("The number that identifies the milestone."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### activity_list_repo_notifications_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "all": z.boolean().describe("If \`true\`, show notifications marked as read.").optional(),
  "participating": z.boolean().describe("If \`true\`, only shows notifications in which the user is directly participating or mentioned.").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "before": z.string().datetime({ offset: true }).describe("Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### activity_mark_repo_notifications_as_read

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "last_read_at": z.string().datetime({ offset: true }).describe("Describes the last point that notifications were checked. Anything updated since this time will not be marked as read. If you omit this parameter, all notifications are marked as read. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`. Default: The current timestamp.").optional()
}
```

### repos_get_pages

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_create_pages_site

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "build_type": z.enum(["legacy","workflow"]).describe("The process in which the Page will be built. Possible values are \`\"legacy\"\` and \`\"workflow\"\`.").optional(),
  "source": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe source branch and directory used to publish your Pages site.").optional()
}
```

### repos_update_information_about_pages_site

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "cname": z.string().nullable().describe("Specify a custom domain for the repository. Sending a \`null\` value will remove the custom domain. For more about custom domains, see \"[Using a custom domain with GitHub Pages](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).\"").optional(),
  "https_enforced": z.boolean().describe("Specify whether HTTPS should be enforced for the repository.").optional(),
  "build_type": z.enum(["legacy","workflow"]).describe("The process by which the GitHub Pages site will be built. \`workflow\` means that the site is built by a custom GitHub Actions workflow. \`legacy\` means that the site is built by GitHub when changes are pushed to a specific branch.").optional(),
  "source": z.union([z.enum(["gh-pages","master","master /docs"]).describe("Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory \`/docs\`. Possible values are \`\"gh-pages\"\`, \`\"master\"\`, and \`\"master /docs\"\`."), z.object({ "branch": z.string().describe("The repository branch used to publish your site's source files."), "path": z.enum(["/","/docs"]).describe("The repository directory that includes the source files for the Pages site. Allowed paths are \`/\` or \`/docs\`.") }).describe("Update the source for the repository. Must include the branch name and path.")]).optional()
}
```

### repos_delete_pages_site

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_list_pages_builds

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_request_pages_build

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_get_latest_pages_build

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_get_pages_build

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "build_id": z.number().int()
}
```

### repos_create_pages_deployment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "artifact_id": z.number().describe("The ID of an artifact that contains the .zip or .tar of static assets to deploy. The artifact belongs to the repository. Either \`artifact_id\` or \`artifact_url\` are required.").optional(),
  "artifact_url": z.string().describe("The URL of an artifact that contains the .zip or .tar of static assets to deploy. The artifact belongs to the repository. Either \`artifact_id\` or \`artifact_url\` are required.").optional(),
  "environment": z.string().describe("The target environment for this GitHub Pages deployment.").optional(),
  "pages_build_version": z.string().describe("A unique string that represents the version of the build for this deployment."),
  "oidc_token": z.string().describe("The OIDC token issued by GitHub Actions certifying the origin of the deployment.")
}
```

### repos_get_pages_deployment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pages_deployment_id": z.any().superRefine((x, ctx) => {
    const schemas = [z.number().int(), z.string()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("The ID of the Pages deployment. You can also give the commit SHA of the deployment.")
}
```

### repos_cancel_pages_deployment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pages_deployment_id": z.any().superRefine((x, ctx) => {
    const schemas = [z.number().int(), z.string()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("The ID of the Pages deployment. You can also give the commit SHA of the deployment.")
}
```

### repos_get_pages_health_check

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_check_private_vulnerability_reporting

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_enable_private_vulnerability_reporting

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_disable_private_vulnerability_reporting

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### projects_list_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "state": z.enum(["open","closed","all"]).describe("Indicates the state of the projects to return.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### projects_create_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of the project."),
  "body": z.string().describe("The description of the project.").optional()
}
```

### repos_get_custom_properties_values

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_create_or_update_custom_properties_values

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "properties": z.array(z.object({ "property_name": z.string().describe("The name of the property"), "value": z.string().nullable().describe("The value assigned to the property") }).describe("Custom property name and associated value")).describe("A list of custom property names and associated values to apply to the repositories.")
}
```

### pulls_list

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "state": z.enum(["open","closed","all"]).describe("Either \`open\`, \`closed\`, or \`all\` to filter by state.").optional(),
  "head": z.string().describe("Filter pulls by head user or head organization and branch name in the format of \`user:ref-name\` or \`organization:ref-name\`. For example: \`github:new-script-format\` or \`octocat:test-branch\`.").optional(),
  "base": z.string().describe("Filter pulls by base branch name. Example: \`gh-pages\`.").optional(),
  "sort": z.enum(["created","updated","popularity","long-running"]).describe("What to sort results by. \`popularity\` will sort by the number of comments. \`long-running\` will sort by date created and will limit the results to pull requests that have been open for more than a month and have had activity within the past month.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction of the sort. Default: \`desc\` when sort is \`created\` or sort is not specified, otherwise \`asc\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### pulls_create

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "title": z.string().describe("The title of the new pull request. Required unless \`issue\` is specified.").optional(),
  "head": z.string().describe("The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace \`head\` with a user like this: \`username:branch\`."),
  "head_repo": z.string().describe("The name of the repository where the changes in the pull request were made. This field is required for cross-repository pull requests if both repositories are owned by the same organization.").optional(),
  "base": z.string().describe("The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository."),
  "body": z.string().describe("The contents of the pull request.").optional(),
  "maintainer_can_modify": z.boolean().describe("Indicates whether [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.").optional(),
  "draft": z.boolean().describe("Indicates whether the pull request is a draft. See \"[Draft Pull Requests](https://docs.github.com/articles/about-pull-requests#draft-pull-requests)\" in the GitHub Help documentation to learn more.").optional(),
  "issue": z.number().int().describe("An issue in the repository to convert to a pull request. The issue title, body, and comments will become the title, body, and comments on the new pull request. Required unless \`title\` is specified.").optional()
}
```

### pulls_list_review_comments_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "sort": z.enum(["created","updated","created_at"]).optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort results. Ignored without \`sort\` parameter.").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### pulls_get_review_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment.")
}
```

### pulls_update_review_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "body": z.string().describe("The text of the reply to the review comment.")
}
```

### pulls_delete_review_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment.")
}
```

### reactions_list_for_pull_request_review_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a pull request review comment.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### reactions_create_for_pull_request_review_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the pull request review comment.")
}
```

### reactions_delete_for_pull_request_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "reaction_id": z.number().int().describe("The unique identifier of the reaction.")
}
```

### pulls_get

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request.")
}
```

### pulls_update

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "title": z.string().describe("The title of the pull request.").optional(),
  "body": z.string().describe("The contents of the pull request.").optional(),
  "state": z.enum(["open","closed"]).describe("State of this Pull Request. Either \`open\` or \`closed\`.").optional(),
  "base": z.string().describe("The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository.").optional(),
  "maintainer_can_modify": z.boolean().describe("Indicates whether [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.").optional()
}
```

### codespaces_create_with_pr_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "location": z.string().describe("The requested location for a new codespace. Best efforts are made to respect this upon creation. Assigned by IP if not provided.").optional(),
  "geo": z.enum(["EuropeWest","SoutheastAsia","UsEast","UsWest"]).describe("The geographic area for this codespace. If not specified, the value is assigned by IP. This property replaces \`location\`, which is closing down.").optional(),
  "client_ip": z.string().describe("IP for location auto-detection when proxying a request").optional(),
  "machine": z.string().describe("Machine type to use for this codespace").optional(),
  "devcontainer_path": z.string().describe("Path to devcontainer.json config to use for this codespace").optional(),
  "multi_repo_permissions_opt_out": z.boolean().describe("Whether to authorize requested permissions from devcontainer.json").optional(),
  "working_directory": z.string().describe("Working directory for this codespace").optional(),
  "idle_timeout_minutes": z.number().int().describe("Time in minutes before codespace stops from inactivity").optional(),
  "display_name": z.string().describe("Display name for this codespace").optional(),
  "retention_period_minutes": z.number().int().describe("Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).").optional()
}
```

### pulls_list_review_comments

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "sort": z.enum(["created","updated"]).describe("The property to sort the results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort results. Ignored without \`sort\` parameter.").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### pulls_create_review_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "body": z.string().describe("The text of the review comment."),
  "commit_id": z.string().describe("The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the \`position\`."),
  "path": z.string().describe("The relative path to the file that necessitates a comment."),
  "side": z.enum(["LEFT","RIGHT"]).describe("In a split diff view, the side of the diff that the pull request's changes appear on. Can be \`LEFT\` or \`RIGHT\`. Use \`LEFT\` for deletions that appear in red. Use \`RIGHT\` for additions that appear in green or unchanged lines that appear in white and are shown for context. For a multi-line comment, side represents whether the last line of the comment range is a deletion or addition. For more information, see \"[Diff view options](https://docs.github.com/articles/about-comparing-branches-in-pull-requests#diff-view-options)\" in the GitHub Help documentation.").optional(),
  "line": z.number().int().describe("**Required unless using \`subject_type:file\`**. The line of the blob in the pull request diff that the comment applies to. For a multi-line comment, the last line of the range that your comment applies to.").optional(),
  "start_line": z.number().int().describe("**Required when using multi-line comments unless using \`in_reply_to\`**. The \`start_line\` is the first line in the pull request diff that your multi-line comment applies to. To learn more about multi-line comments, see \"[Commenting on a pull request](https://docs.github.com/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)\" in the GitHub Help documentation.").optional(),
  "start_side": z.enum(["LEFT","RIGHT","side"]).describe("**Required when using multi-line comments unless using \`in_reply_to\`**. The \`start_side\` is the starting side of the diff that the comment applies to. Can be \`LEFT\` or \`RIGHT\`. To learn more about multi-line comments, see \"[Commenting on a pull request](https://docs.github.com/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)\" in the GitHub Help documentation. See \`side\` in this table for additional context.").optional(),
  "in_reply_to": z.number().int().describe("The ID of the review comment to reply to. To find the ID of a review comment with [\"List review comments on a pull request\"](#list-review-comments-on-a-pull-request). When specified, all parameters other than \`body\` in the request body are ignored.").optional(),
  "subject_type": z.enum(["line","file"]).describe("The level at which the comment is targeted.").optional()
}
```

### pulls_create_reply_for_review_comment

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "comment_id": z.number().int().describe("The unique identifier of the comment."),
  "body": z.string().describe("The text of the review comment.")
}
```

### pulls_list_commits

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### pulls_list_files

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### pulls_check_if_merged

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request.")
}
```

### pulls_merge

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "commit_title": z.string().describe("Title for the automatic commit message.").optional(),
  "commit_message": z.string().describe("Extra detail to append to automatic commit message.").optional(),
  "sha": z.string().describe("SHA that pull request head must match to allow merge.").optional(),
  "merge_method": z.enum(["merge","squash","rebase"]).describe("The merge method to use.").optional()
}
```

### pulls_list_requested_reviewers

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request.")
}
```

### pulls_request_reviewers

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "reviewers": z.array(z.string()).describe("An array of user \`login\`s that will be requested.").optional(),
  "team_reviewers": z.array(z.string()).describe("An array of team \`slug\`s that will be requested.").optional()
}
```

### pulls_remove_requested_reviewers

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "reviewers": z.array(z.string()).describe("An array of user \`login\`s that will be removed."),
  "team_reviewers": z.array(z.string()).describe("An array of team \`slug\`s that will be removed.").optional()
}
```

### pulls_list_reviews

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### pulls_create_review

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "commit_id": z.string().describe("The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the \`position\`. Defaults to the most recent commit in the pull request when you do not specify a value.").optional(),
  "body": z.string().describe("**Required** when using \`REQUEST_CHANGES\` or \`COMMENT\` for the \`event\` parameter. The body text of the pull request review.").optional(),
  "event": z.enum(["APPROVE","REQUEST_CHANGES","COMMENT"]).describe("The review action you want to perform. The review actions include: \`APPROVE\`, \`REQUEST_CHANGES\`, or \`COMMENT\`. By leaving this blank, you set the review action state to \`PENDING\`, which means you will need to [submit the pull request review](https://docs.github.com/rest/pulls/reviews#submit-a-review-for-a-pull-request) when you are ready.").optional(),
  "comments": z.array(z.object({ "path": z.string().describe("The relative path to the file that necessitates a review comment."), "position": z.number().int().describe("The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. The \`position\` value equals the number of lines down from the first \"@@\" hunk header in the file you want to add a comment. The line just below the \"@@\" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.").optional(), "body": z.string().describe("Text of the review comment."), "line": z.number().int().optional(), "side": z.string().optional(), "start_line": z.number().int().optional(), "start_side": z.string().optional() })).describe("Use the following table to specify the location, destination, and contents of the draft review comment.").optional()
}
```

### pulls_get_review

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "review_id": z.number().int().describe("The unique identifier of the review.")
}
```

### pulls_update_review

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "review_id": z.number().int().describe("The unique identifier of the review."),
  "body": z.string().describe("The body text of the pull request review.")
}
```

### pulls_delete_pending_review

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "review_id": z.number().int().describe("The unique identifier of the review.")
}
```

### pulls_list_comments_for_review

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "review_id": z.number().int().describe("The unique identifier of the review."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### pulls_dismiss_review

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "review_id": z.number().int().describe("The unique identifier of the review."),
  "message": z.string().describe("The message for the pull request review dismissal"),
  "event": z.literal("DISMISS").optional()
}
```

### pulls_submit_review

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "review_id": z.number().int().describe("The unique identifier of the review."),
  "body": z.string().describe("The body text of the pull request review").optional(),
  "event": z.enum(["APPROVE","REQUEST_CHANGES","COMMENT"]).describe("The review action you want to perform. The review actions include: \`APPROVE\`, \`REQUEST_CHANGES\`, or \`COMMENT\`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to \`PENDING\`, which means you will need to re-submit the pull request review using a review action.")
}
```

### pulls_update_branch

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "expected_head_sha": z.string().describe("The expected SHA of the pull request's HEAD ref. This is the most recent commit on the pull request's branch. If the expected SHA does not match the pull request's HEAD, you will receive a \`422 Unprocessable Entity\` status. You can use the \"[List commits](https://docs.github.com/rest/commits/commits#list-commits)\" endpoint to find the most recent commit SHA. Default: SHA of the pull request's current HEAD ref.").optional()
}
```

### repos_get_readme

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The name of the commit/branch/tag. Default: the repository’s default branch.").optional()
}
```

### repos_get_readme_in_directory

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "dir": z.string().describe("The alternate path to look for a README file"),
  "ref": z.string().describe("The name of the commit/branch/tag. Default: the repository’s default branch.").optional()
}
```

### repos_list_releases

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_create_release

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "tag_name": z.string().describe("The name of the tag."),
  "target_commitish": z.string().describe("Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch.").optional(),
  "name": z.string().describe("The name of the release.").optional(),
  "body": z.string().describe("Text describing the contents of the tag.").optional(),
  "draft": z.boolean().describe("\`true\` to create a draft (unpublished) release, \`false\` to create a published one.").optional(),
  "prerelease": z.boolean().describe("\`true\` to identify the release as a prerelease. \`false\` to identify the release as a full release.").optional(),
  "discussion_category_name": z.string().describe("If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository. For more information, see \"[Managing categories for discussions in your repository](https://docs.github.com/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository).\"").optional(),
  "generate_release_notes": z.boolean().describe("Whether to automatically generate the name and body for this release. If \`name\` is specified, the specified name will be used; otherwise, a name will be automatically generated. If \`body\` is specified, the body will be pre-pended to the automatically generated notes.").optional(),
  "make_latest": z.enum(["true","false","legacy"]).describe("Specifies whether this release should be set as the latest release for the repository. Drafts and prereleases cannot be set as latest. Defaults to \`true\` for newly published releases. \`legacy\` specifies that the latest release should be determined based on the release creation date and higher semantic version.").optional()
}
```

### repos_get_release_asset

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "asset_id": z.number().int().describe("The unique identifier of the asset.")
}
```

### repos_update_release_asset

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "asset_id": z.number().int().describe("The unique identifier of the asset."),
  "name": z.string().describe("The file name of the asset.").optional(),
  "label": z.string().describe("An alternate short description of the asset. Used in place of the filename.").optional(),
  "state": z.string().optional()
}
```

### repos_delete_release_asset

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "asset_id": z.number().int().describe("The unique identifier of the asset.")
}
```

### repos_generate_release_notes

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "tag_name": z.string().describe("The tag name for the release. This can be an existing tag or a new one."),
  "target_commitish": z.string().describe("Specifies the commitish value that will be the target for the release's tag. Required if the supplied tag_name does not reference an existing tag. Ignored if the tag_name already exists.").optional(),
  "previous_tag_name": z.string().describe("The name of the previous tag to use as the starting point for the release notes. Use to manually specify the range for the set of changes considered as part this release.").optional(),
  "configuration_file_path": z.string().describe("Specifies a path to a file in the repository containing configuration settings used for generating the release notes. If unspecified, the configuration file located in the repository at '.github/release.yml' or '.github/release.yaml' will be used. If that is not present, the default configuration will be used.").optional()
}
```

### repos_get_latest_release

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_get_release_by_tag

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "tag": z.string().describe("tag parameter")
}
```

### repos_get_release

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "release_id": z.number().int().describe("The unique identifier of the release.")
}
```

### repos_update_release

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "release_id": z.number().int().describe("The unique identifier of the release."),
  "tag_name": z.string().describe("The name of the tag.").optional(),
  "target_commitish": z.string().describe("Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch.").optional(),
  "name": z.string().describe("The name of the release.").optional(),
  "body": z.string().describe("Text describing the contents of the tag.").optional(),
  "draft": z.boolean().describe("\`true\` makes the release a draft, and \`false\` publishes the release.").optional(),
  "prerelease": z.boolean().describe("\`true\` to identify the release as a prerelease, \`false\` to identify the release as a full release.").optional(),
  "make_latest": z.enum(["true","false","legacy"]).describe("Specifies whether this release should be set as the latest release for the repository. Drafts and prereleases cannot be set as latest. Defaults to \`true\` for newly published releases. \`legacy\` specifies that the latest release should be determined based on the release creation date and higher semantic version.").optional(),
  "discussion_category_name": z.string().describe("If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository. If there is already a discussion linked to the release, this parameter is ignored. For more information, see \"[Managing categories for discussions in your repository](https://docs.github.com/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository).\"").optional()
}
```

### repos_delete_release

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "release_id": z.number().int().describe("The unique identifier of the release.")
}
```

### repos_list_release_assets

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "release_id": z.number().int().describe("The unique identifier of the release."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_upload_release_asset

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "release_id": z.number().int().describe("The unique identifier of the release."),
  "name": z.string(),
  "label": z.string().optional()
}
```

### reactions_list_for_release

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "release_id": z.number().int().describe("The unique identifier of the release."),
  "content": z.enum(["+1","laugh","heart","hooray","rocket","eyes"]).describe("Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a release.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### reactions_create_for_release

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "release_id": z.number().int().describe("The unique identifier of the release."),
  "content": z.enum(["+1","laugh","heart","hooray","rocket","eyes"]).describe("The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the release.")
}
```

### reactions_delete_for_release

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "release_id": z.number().int().describe("The unique identifier of the release."),
  "reaction_id": z.number().int().describe("The unique identifier of the reaction.")
}
```

### repos_get_branch_rules

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "branch": z.string().describe("The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql)."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_repo_rulesets

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "includes_parents": z.boolean().describe("Include rulesets configured at higher levels that apply to this repository").optional(),
  "targets": z.string().describe("A comma-separated list of rule targets to filter by.\nIf provided, only rulesets that apply to the specified targets will be returned.\nFor example, \`branch,tag,push\`.\n").optional()
}
```

### repos_create_repo_ruleset

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of the ruleset."),
  "target": z.enum(["branch","tag","push"]).describe("The target of the ruleset").optional(),
  "enforcement": z.enum(["disabled","active","evaluate"]).describe("The enforcement level of the ruleset. \`evaluate\` allows admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (\`evaluate\` is only available with GitHub Enterprise)."),
  "bypass_actors": z.array(z.object({ "actor_id": z.number().int().nullable().describe("The ID of the actor that can bypass a ruleset. If \`actor_type\` is \`OrganizationAdmin\`, this should be \`1\`. If \`actor_type\` is \`DeployKey\`, this should be null. \`OrganizationAdmin\` is not applicable for personal repositories.").optional(), "actor_type": z.enum(["Integration","OrganizationAdmin","RepositoryRole","Team","DeployKey"]).describe("The type of actor that can bypass a ruleset."), "bypass_mode": z.enum(["always","pull_request"]).describe("When the specified actor can bypass the ruleset. \`pull_request\` means that an actor can only bypass rules on pull requests. \`pull_request\` is not applicable for the \`DeployKey\` actor type. Also, \`pull_request\` is only applicable to branch rulesets.") }).describe("An actor that can bypass rules in a ruleset")).describe("The actors that can bypass the rules in this ruleset").optional(),
  "conditions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nParameters for a repository ruleset ref name condition").optional(),
  "rules": z.array(z.record(z.any()).and(z.object({ "type": z.literal("creation") }).describe("Only allow users with bypass permission to create matching refs.")).describe("A repository rule.")).describe("An array of rules within the ruleset.").optional()
}
```

### repos_get_repo_rule_suites

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string().describe("The name of the ref. Cannot contain wildcard characters. Optionally prefix with \`refs/heads/\` to limit to branches or \`refs/tags/\` to limit to tags. Omit the prefix to search across all refs. When specified, only rule evaluations triggered for this ref will be returned.").optional(),
  "time_period": z.enum(["hour","day","week","month"]).describe("The time period to filter by.\n\nFor example, \`day\` will filter for rule suites that occurred in the past 24 hours, and \`week\` will filter for insights that occurred in the past 7 days (168 hours).").optional(),
  "actor_name": z.string().describe("The handle for the GitHub user account to filter on. When specified, only rule evaluations triggered by this actor will be returned.").optional(),
  "rule_suite_result": z.enum(["pass","fail","bypass","all"]).describe("The rule results to filter on. When specified, only suites with this result will be returned.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_repo_rule_suite

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "rule_suite_id": z.number().int().describe("The unique identifier of the rule suite result.\nTo get this ID, you can use [GET /repos/{owner}/{repo}/rulesets/rule-suites](https://docs.github.com/rest/repos/rule-suites#list-repository-rule-suites)\nfor repositories and [GET /orgs/{org}/rulesets/rule-suites](https://docs.github.com/rest/orgs/rule-suites#list-organization-rule-suites)\nfor organizations.")
}
```

### repos_get_repo_ruleset

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ruleset_id": z.number().int().describe("The ID of the ruleset."),
  "includes_parents": z.boolean().describe("Include rulesets configured at higher levels that apply to this repository").optional()
}
```

### repos_update_repo_ruleset

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ruleset_id": z.number().int().describe("The ID of the ruleset."),
  "name": z.string().describe("The name of the ruleset.").optional(),
  "target": z.enum(["branch","tag","push"]).describe("The target of the ruleset").optional(),
  "enforcement": z.enum(["disabled","active","evaluate"]).describe("The enforcement level of the ruleset. \`evaluate\` allows admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (\`evaluate\` is only available with GitHub Enterprise).").optional(),
  "bypass_actors": z.array(z.object({ "actor_id": z.number().int().nullable().describe("The ID of the actor that can bypass a ruleset. If \`actor_type\` is \`OrganizationAdmin\`, this should be \`1\`. If \`actor_type\` is \`DeployKey\`, this should be null. \`OrganizationAdmin\` is not applicable for personal repositories.").optional(), "actor_type": z.enum(["Integration","OrganizationAdmin","RepositoryRole","Team","DeployKey"]).describe("The type of actor that can bypass a ruleset."), "bypass_mode": z.enum(["always","pull_request"]).describe("When the specified actor can bypass the ruleset. \`pull_request\` means that an actor can only bypass rules on pull requests. \`pull_request\` is not applicable for the \`DeployKey\` actor type. Also, \`pull_request\` is only applicable to branch rulesets.") }).describe("An actor that can bypass rules in a ruleset")).describe("The actors that can bypass the rules in this ruleset").optional(),
  "conditions": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nParameters for a repository ruleset ref name condition").optional(),
  "rules": z.array(z.record(z.any()).and(z.object({ "type": z.literal("creation") }).describe("Only allow users with bypass permission to create matching refs.")).describe("A repository rule.")).describe("An array of rules within the ruleset.").optional()
}
```

### repos_delete_repo_ruleset

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ruleset_id": z.number().int().describe("The ID of the ruleset.")
}
```

### repos_get_repo_ruleset_history

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ruleset_id": z.number().int().describe("The ID of the ruleset."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_repo_ruleset_version

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ruleset_id": z.number().int().describe("The ID of the ruleset."),
  "version_id": z.number().int().describe("The ID of the version")
}
```

### secret_scanning_list_alerts_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "state": z.enum(["open","resolved"]).describe("Set to \`open\` or \`resolved\` to only list secret scanning alerts in a specific state.").optional(),
  "secret_type": z.string().describe("A comma-separated list of secret types to return. All default secret patterns are returned. To return generic patterns, pass the token name(s) in the parameter. See \"[Supported secret scanning patterns](https://docs.github.com/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)\" for a complete list of secret types.").optional(),
  "resolution": z.string().describe("A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are \`false_positive\`, \`wont_fix\`, \`revoked\`, \`pattern_edited\`, \`pattern_deleted\` or \`used_in_tests\`.").optional(),
  "sort": z.enum(["created","updated"]).describe("The property to sort the results by. \`created\` means when the alert was created. \`updated\` means when the alert was updated or resolved.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for events before this cursor. To receive an initial cursor on your first request, include an empty \"before\" query string.").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for events after this cursor.  To receive an initial cursor on your first request, include an empty \"after\" query string.").optional(),
  "validity": z.string().describe("A comma-separated list of validities that, when present, will return alerts that match the validities in this list. Valid options are \`active\`, \`inactive\`, and \`unknown\`.").optional(),
  "is_publicly_leaked": z.boolean().describe("A boolean value representing whether or not to filter alerts by the publicly-leaked tag being present.").optional(),
  "is_multi_repo": z.boolean().describe("A boolean value representing whether or not to filter alerts by the multi-repo tag being present.").optional()
}
```

### secret_scanning_get_alert

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly()
}
```

### secret_scanning_update_alert

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly(),
  "state": z.enum(["open","resolved"]).describe("Sets the state of the secret scanning alert. You must provide \`resolution\` when you set the state to \`resolved\`."),
  "resolution": z.enum(["false_positive","wont_fix","revoked","used_in_tests"]).nullable().describe("**Required when the \`state\` is \`resolved\`.** The reason for resolving the alert.").optional(),
  "resolution_comment": z.string().nullable().describe("An optional comment when closing an alert. Cannot be updated or deleted. Must be \`null\` when changing \`state\` to \`open\`.").optional()
}
```

### secret_scanning_list_locations_for_alert

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "alert_number": z.number().int().describe("The security alert number.").readonly(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### secret_scanning_create_push_protection_bypass

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "reason": z.enum(["false_positive","used_in_tests","will_fix_later"]).describe("The reason for bypassing push protection."),
  "placeholder_id": z.string().describe("The ID of the push protection bypass placeholder. This value is returned on any push protected routes.")
}
```

### secret_scanning_get_scan_history

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### security_advisories_list_repository_advisories

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "sort": z.enum(["created","updated","published"]).describe("The property to sort the results by.").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("The number of advisories to return per page. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "state": z.enum(["triage","draft","published","closed"]).describe("Filter by state of the repository advisories. Only advisories of this state will be returned.").optional()
}
```

### security_advisories_create_repository_advisory

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "summary": z.string().max(1024).describe("A short summary of the advisory."),
  "description": z.string().max(65535).describe("A detailed description of what the advisory impacts."),
  "cve_id": z.string().nullable().describe("The Common Vulnerabilities and Exposures (CVE) ID.").optional(),
  "vulnerabilities": z.array(z.object({ "package": z.object({ "ecosystem": z.enum(["rubygems","npm","pip","maven","nuget","composer","go","rust","erlang","actions","pub","other","swift"]).describe("The package's language or package management ecosystem."), "name": z.string().nullable().describe("The unique package name within its ecosystem.").optional() }).describe("The name of the package affected by the vulnerability."), "vulnerable_version_range": z.string().nullable().describe("The range of the package versions affected by the vulnerability.").optional(), "patched_versions": z.string().nullable().describe("The package version(s) that resolve the vulnerability.").optional(), "vulnerable_functions": z.array(z.string()).nullable().describe("The functions in the package that are affected.").optional() }).strict()).describe("A product affected by the vulnerability detailed in a repository security advisory."),
  "cwe_ids": z.array(z.string()).nullable().describe("A list of Common Weakness Enumeration (CWE) IDs.").optional(),
  "credits": z.array(z.object({ "login": z.string().describe("The username of the user credited."), "type": z.enum(["analyst","finder","reporter","coordinator","remediation_developer","remediation_reviewer","remediation_verifier","tool","sponsor","other"]).describe("The type of credit the user is receiving.") }).strict()).nullable().describe("A list of users receiving credit for their participation in the security advisory.").optional(),
  "severity": z.enum(["critical","high","medium","low"]).nullable().describe("The severity of the advisory. You must choose between setting this field or \`cvss_vector_string\`.").optional(),
  "cvss_vector_string": z.string().nullable().describe("The CVSS vector that calculates the severity of the advisory. You must choose between setting this field or \`severity\`.").optional(),
  "start_private_fork": z.boolean().describe("Whether to create a temporary private fork of the repository to collaborate on a fix.").optional()
}
```

### security_advisories_create_private_vulnerability_report

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "summary": z.string().max(1024).describe("A short summary of the advisory."),
  "description": z.string().max(65535).describe("A detailed description of what the advisory impacts."),
  "vulnerabilities": z.array(z.object({ "package": z.object({ "ecosystem": z.enum(["rubygems","npm","pip","maven","nuget","composer","go","rust","erlang","actions","pub","other","swift"]).describe("The package's language or package management ecosystem."), "name": z.string().nullable().describe("The unique package name within its ecosystem.").optional() }).describe("The name of the package affected by the vulnerability."), "vulnerable_version_range": z.string().nullable().describe("The range of the package versions affected by the vulnerability.").optional(), "patched_versions": z.string().nullable().describe("The package version(s) that resolve the vulnerability.").optional(), "vulnerable_functions": z.array(z.string()).nullable().describe("The functions in the package that are affected.").optional() }).strict()).nullable().describe("An array of products affected by the vulnerability detailed in a repository security advisory.").optional(),
  "cwe_ids": z.array(z.string()).nullable().describe("A list of Common Weakness Enumeration (CWE) IDs.").optional(),
  "severity": z.enum(["critical","high","medium","low"]).nullable().describe("The severity of the advisory. You must choose between setting this field or \`cvss_vector_string\`.").optional(),
  "cvss_vector_string": z.string().nullable().describe("The CVSS vector that calculates the severity of the advisory. You must choose between setting this field or \`severity\`.").optional(),
  "start_private_fork": z.boolean().describe("Whether to create a temporary private fork of the repository to collaborate on a fix.").optional()
}
```

### security_advisories_get_repository_advisory

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ghsa_id": z.string().describe("The GHSA (GitHub Security Advisory) identifier of the advisory.")
}
```

### security_advisories_update_repository_advisory

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ghsa_id": z.string().describe("The GHSA (GitHub Security Advisory) identifier of the advisory."),
  "summary": z.string().max(1024).describe("A short summary of the advisory.").optional(),
  "description": z.string().max(65535).describe("A detailed description of what the advisory impacts.").optional(),
  "cve_id": z.string().nullable().describe("The Common Vulnerabilities and Exposures (CVE) ID.").optional(),
  "vulnerabilities": z.array(z.object({ "package": z.object({ "ecosystem": z.enum(["rubygems","npm","pip","maven","nuget","composer","go","rust","erlang","actions","pub","other","swift"]).describe("The package's language or package management ecosystem."), "name": z.string().nullable().describe("The unique package name within its ecosystem.").optional() }).describe("The name of the package affected by the vulnerability."), "vulnerable_version_range": z.string().nullable().describe("The range of the package versions affected by the vulnerability.").optional(), "patched_versions": z.string().nullable().describe("The package version(s) that resolve the vulnerability.").optional(), "vulnerable_functions": z.array(z.string()).nullable().describe("The functions in the package that are affected.").optional() }).strict()).describe("A product affected by the vulnerability detailed in a repository security advisory.").optional(),
  "cwe_ids": z.array(z.string()).nullable().describe("A list of Common Weakness Enumeration (CWE) IDs.").optional(),
  "credits": z.array(z.object({ "login": z.string().describe("The username of the user credited."), "type": z.enum(["analyst","finder","reporter","coordinator","remediation_developer","remediation_reviewer","remediation_verifier","tool","sponsor","other"]).describe("The type of credit the user is receiving.") }).strict()).nullable().describe("A list of users receiving credit for their participation in the security advisory.").optional(),
  "severity": z.enum(["critical","high","medium","low"]).nullable().describe("The severity of the advisory. You must choose between setting this field or \`cvss_vector_string\`.").optional(),
  "cvss_vector_string": z.string().nullable().describe("The CVSS vector that calculates the severity of the advisory. You must choose between setting this field or \`severity\`.").optional(),
  "state": z.enum(["published","closed","draft"]).describe("The state of the advisory.").optional(),
  "collaborating_users": z.array(z.string()).nullable().describe("A list of usernames who have been granted write access to the advisory.").optional(),
  "collaborating_teams": z.array(z.string()).nullable().describe("A list of team slugs which have been granted write access to the advisory.").optional()
}
```

### security_advisories_create_repository_advisory_cve_request

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ghsa_id": z.string().describe("The GHSA (GitHub Security Advisory) identifier of the advisory.")
}
```

### security_advisories_create_fork

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ghsa_id": z.string().describe("The GHSA (GitHub Security Advisory) identifier of the advisory.")
}
```

### activity_list_stargazers_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_code_frequency_stats

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_get_commit_activity_stats

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_get_contributors_stats

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_get_participation_stats

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_get_punch_card_stats

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_create_commit_status

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "sha": z.string(),
  "state": z.enum(["error","failure","pending","success"]).describe("The state of the status."),
  "target_url": z.string().nullable().describe("The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.  \nFor example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:  \n\`http://ci.example.com/user/repo/build/sha\`").optional(),
  "description": z.string().nullable().describe("A short description of the status.").optional(),
  "context": z.string().describe("A string label to differentiate this status from the status of other systems. This field is case-insensitive.").optional()
}
```

### activity_list_watchers_for_repo

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### activity_get_repo_subscription

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### activity_set_repo_subscription

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "subscribed": z.boolean().describe("Determines if notifications should be received from this repository.").optional(),
  "ignored": z.boolean().describe("Determines if all notifications should be blocked from this repository.").optional()
}
```

### activity_delete_repo_subscription

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_list_tags

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_list_tag_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_create_tag_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "pattern": z.string().describe("An optional glob pattern to match against when enforcing tag protection.")
}
```

### repos_delete_tag_protection

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "tag_protection_id": z.number().int().describe("The unique identifier of the tag protection.")
}
```

### repos_download_tarball_archive

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string()
}
```

### repos_list_teams

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_get_all_topics

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_replace_all_topics

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "names": z.array(z.string()).describe("An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (\`[]\`) to clear all topics from the repository. **Note:** Topic \`names\` will be saved as lowercase.")
}
```

### repos_get_clones

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per": z.enum(["day","week"]).describe("The time frame to display results for.").optional()
}
```

### repos_get_top_paths

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_get_top_referrers

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_get_views

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "per": z.enum(["day","week"]).describe("The time frame to display results for.").optional()
}
```

### repos_transfer

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "new_owner": z.string().describe("The username or organization name the repository will be transferred to."),
  "new_name": z.string().describe("The new name to be given to the repository.").optional(),
  "team_ids": z.array(z.number().int()).describe("ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.").optional()
}
```

### repos_check_vulnerability_alerts

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_enable_vulnerability_alerts

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_disable_vulnerability_alerts

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### repos_download_zipball_archive

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "ref": z.string()
}
```

### repos_create_using_template

**Environment variables**



**Input schema**

```ts
{
  "template_owner": z.string().describe("The account owner of the template repository. The name is not case sensitive."),
  "template_repo": z.string().describe("The name of the template repository without the \`.git\` extension. The name is not case sensitive."),
  "owner": z.string().describe("The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.").optional(),
  "name": z.string().describe("The name of the new repository."),
  "description": z.string().describe("A short description of the new repository.").optional(),
  "include_all_branches": z.boolean().describe("Set to \`true\` to include the directory structure and files from all branches in the template repository, and not just the default branch. Default: \`false\`.").optional(),
  "private": z.boolean().describe("Either \`true\` to create a new private repository or \`false\` to create a new public one.").optional()
}
```

### repos_list_public

**Environment variables**



**Input schema**

```ts
{
  "since": z.number().int().describe("A repository ID. Only return repositories with an ID greater than this ID.").optional()
}
```

### search_code

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See \"[Searching code](https://docs.github.com/search-github/searching-on-github/searching-code)\" for a detailed list of qualifiers."),
  "sort": z.literal("indexed").describe("**This field is closing down.** Sorts the results of your query. Can only be \`indexed\`, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)").optional(),
  "order": z.enum(["desc","asc"]).describe("**This field is closing down.** Determines whether the first search result returned is the highest number of matches (\`desc\`) or lowest number of matches (\`asc\`). This parameter is ignored unless you provide \`sort\`. ").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### search_commits

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See \"[Searching commits](https://docs.github.com/search-github/searching-on-github/searching-commits)\" for a detailed list of qualifiers."),
  "sort": z.enum(["author-date","committer-date"]).describe("Sorts the results of your query by \`author-date\` or \`committer-date\`. Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)").optional(),
  "order": z.enum(["desc","asc"]).describe("Determines whether the first search result returned is the highest number of matches (\`desc\`) or lowest number of matches (\`asc\`). This parameter is ignored unless you provide \`sort\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### search_issues_and_pull_requests

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See \"[Searching issues and pull requests](https://docs.github.com/search-github/searching-on-github/searching-issues-and-pull-requests)\" for a detailed list of qualifiers."),
  "sort": z.enum(["comments","reactions","reactions-+1","reactions--1","reactions-smile","reactions-thinking_face","reactions-heart","reactions-tada","interactions","created","updated"]).describe("Sorts the results of your query by the number of \`comments\`, \`reactions\`, \`reactions-+1\`, \`reactions--1\`, \`reactions-smile\`, \`reactions-thinking_face\`, \`reactions-heart\`, \`reactions-tada\`, or \`interactions\`. You can also sort results by how recently the items were \`created\` or \`updated\`, Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)").optional(),
  "order": z.enum(["desc","asc"]).describe("Determines whether the first search result returned is the highest number of matches (\`desc\`) or lowest number of matches (\`asc\`). This parameter is ignored unless you provide \`sort\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "advanced_search": z.string().describe("Set to \`true\` to use advanced search.\nExample: \`http://api.github.com/search/issues?q={query}&advanced_search=true\`").optional()
}
```

### search_labels

**Environment variables**



**Input schema**

```ts
{
  "repository_id": z.number().int().describe("The id of the repository."),
  "q": z.string().describe("The search keywords. This endpoint does not accept qualifiers in the query. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query)."),
  "sort": z.enum(["created","updated"]).describe("Sorts the results of your query by when the label was \`created\` or \`updated\`. Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)").optional(),
  "order": z.enum(["desc","asc"]).describe("Determines whether the first search result returned is the highest number of matches (\`desc\`) or lowest number of matches (\`asc\`). This parameter is ignored unless you provide \`sort\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### search_repos

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See \"[Searching for repositories](https://docs.github.com/articles/searching-for-repositories/)\" for a detailed list of qualifiers."),
  "sort": z.enum(["stars","forks","help-wanted-issues","updated"]).describe("Sorts the results of your query by number of \`stars\`, \`forks\`, or \`help-wanted-issues\` or how recently the items were \`updated\`. Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)").optional(),
  "order": z.enum(["desc","asc"]).describe("Determines whether the first search result returned is the highest number of matches (\`desc\`) or lowest number of matches (\`asc\`). This parameter is ignored unless you provide \`sort\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### search_topics

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query)."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### search_users

**Environment variables**



**Input schema**

```ts
{
  "q": z.string().describe("The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See \"[Searching users](https://docs.github.com/search-github/searching-on-github/searching-users)\" for a detailed list of qualifiers."),
  "sort": z.enum(["followers","repositories","joined"]).describe("Sorts the results of your query by number of \`followers\` or \`repositories\`, or when the person \`joined\` GitHub. Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)").optional(),
  "order": z.enum(["desc","asc"]).describe("Determines whether the first search result returned is the highest number of matches (\`desc\`) or lowest number of matches (\`asc\`). This parameter is ignored unless you provide \`sort\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_get_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team.")
}
```

### teams_update_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "name": z.string().describe("The name of the team."),
  "description": z.string().describe("The description of the team.").optional(),
  "privacy": z.enum(["secret","closed"]).describe("The level of privacy this team should have. Editing teams without specifying this parameter leaves \`privacy\` intact. The options are:  \n**For a non-nested team:**  \n * \`secret\` - only visible to organization owners and members of this team.  \n * \`closed\` - visible to all members of this organization.  \n**For a parent or child team:**  \n * \`closed\` - visible to all members of this organization.").optional(),
  "notification_setting": z.enum(["notifications_enabled","notifications_disabled"]).describe("The notification setting the team has chosen. Editing teams without specifying this parameter leaves \`notification_setting\` intact. The options are: \n * \`notifications_enabled\` - team members receive notifications when the team is @mentioned.  \n * \`notifications_disabled\` - no one receives notifications.").optional(),
  "permission": z.enum(["pull","push","admin"]).describe("**Closing down notice**. The permission that new repositories will be added to the team with when none is specified.").optional(),
  "parent_team_id": z.number().int().nullable().describe("The ID of a team to set as the parent team.").optional()
}
```

### teams_delete_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team.")
}
```

### teams_list_discussions_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_create_discussion_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "title": z.string().describe("The discussion post's title."),
  "body": z.string().describe("The discussion post's body text."),
  "private": z.boolean().describe("Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to \`true\` to create a private post.").optional()
}
```

### teams_get_discussion_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion.")
}
```

### teams_update_discussion_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "title": z.string().describe("The discussion post's title.").optional(),
  "body": z.string().describe("The discussion post's body text.").optional()
}
```

### teams_delete_discussion_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion.")
}
```

### teams_list_discussion_comments_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_create_discussion_comment_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "body": z.string().describe("The discussion comment's body text.")
}
```

### teams_get_discussion_comment_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment.")
}
```

### teams_update_discussion_comment_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment."),
  "body": z.string().describe("The discussion comment's body text.")
}
```

### teams_delete_discussion_comment_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment.")
}
```

### reactions_list_for_team_discussion_comment_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a team discussion comment.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### reactions_create_for_team_discussion_comment_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "comment_number": z.number().int().describe("The number that identifies the comment."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion comment.")
}
```

### reactions_list_for_team_discussion_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a team discussion.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### reactions_create_for_team_discussion_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "discussion_number": z.number().int().describe("The number that identifies the discussion."),
  "content": z.enum(["+1","-1","laugh","confused","heart","hooray","rocket","eyes"]).describe("The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion.")
}
```

### teams_list_pending_invitations_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_list_members_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "role": z.enum(["member","maintainer","all"]).describe("Filters members returned by their role in the team.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_get_member_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### teams_add_member_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### teams_remove_member_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### teams_get_membership_for_user_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### teams_add_or_update_membership_for_user_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "role": z.enum(["member","maintainer"]).describe("The role that this user should have in the team.").optional()
}
```

### teams_remove_membership_for_user_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### teams_list_projects_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_check_permissions_for_project_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "project_id": z.number().int().describe("The unique identifier of the project.")
}
```

### teams_add_or_update_project_permissions_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "project_id": z.number().int().describe("The unique identifier of the project."),
  "permission": z.enum(["read","write","admin"]).describe("The permission to grant to the team for this project. Default: the team's \`permission\` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set \`Content-Length\` to zero when calling this endpoint. For more information, see \"[HTTP method](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method).\"").optional()
}
```

### teams_remove_project_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "project_id": z.number().int().describe("The unique identifier of the project.")
}
```

### teams_list_repos_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_check_permissions_for_repo_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### teams_add_or_update_repo_permissions_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive."),
  "permission": z.enum(["pull","push","admin"]).describe("The permission to grant the team on this repository. If no permission is specified, the team's \`permission\` attribute will be used to determine what permission to grant the team on this repository.").optional()
}
```

### teams_remove_repo_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### teams_list_child_legacy

**Environment variables**



**Input schema**

```ts
{
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_get_authenticated

**Environment variables**



**Input schema**

```ts
{}
```

### users_update_authenticated

**Environment variables**



**Input schema**

```ts
{
  "name": z.string().describe("The new name of the user.").optional(),
  "email": z.string().describe("The publicly visible email address of the user.").optional(),
  "blog": z.string().describe("The new blog URL of the user.").optional(),
  "twitter_username": z.string().nullable().describe("The new Twitter username of the user.").optional(),
  "company": z.string().describe("The new company of the user.").optional(),
  "location": z.string().describe("The new location of the user.").optional(),
  "hireable": z.boolean().describe("The new hiring availability of the user.").optional(),
  "bio": z.string().describe("The new short biography of the user.").optional()
}
```

### users_list_blocked_by_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_check_blocked

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### users_block

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### users_unblock

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### codespaces_list_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "repository_id": z.number().int().describe("ID of the Repository to filter on").optional()
}
```

### codespaces_create_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{}
```

### codespaces_list_secrets_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### codespaces_get_public_key_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{}
```

### codespaces_get_secret_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "secret_name": z.string().describe("The name of the secret.")
}
```

### codespaces_create_or_update_secret_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "secret_name": z.string().describe("The name of the secret."),
  "encrypted_value": z.string().regex(new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$")).describe("Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get the public key for the authenticated user](https://docs.github.com/rest/codespaces/secrets#get-public-key-for-the-authenticated-user) endpoint.").optional(),
  "key_id": z.string().describe("ID of the key you used to encrypt the secret."),
  "selected_repository_ids": z.array(z.union([z.number().int(), z.string()])).describe("An array of repository ids that can access the user secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/codespaces/secrets#list-selected-repositories-for-a-user-secret), [Set selected repositories for a user secret](https://docs.github.com/rest/codespaces/secrets#set-selected-repositories-for-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/codespaces/secrets#remove-a-selected-repository-from-a-user-secret) endpoints.").optional()
}
```

### codespaces_delete_secret_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "secret_name": z.string().describe("The name of the secret.")
}
```

### codespaces_list_repositories_for_secret_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "secret_name": z.string().describe("The name of the secret.")
}
```

### codespaces_set_repositories_for_secret_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "secret_name": z.string().describe("The name of the secret."),
  "selected_repository_ids": z.array(z.number().int()).describe("An array of repository ids for which a codespace can access the secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/codespaces/secrets#list-selected-repositories-for-a-user-secret), [Add a selected repository to a user secret](https://docs.github.com/rest/codespaces/secrets#add-a-selected-repository-to-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/codespaces/secrets#remove-a-selected-repository-from-a-user-secret) endpoints.")
}
```

### codespaces_add_repository_for_secret_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "secret_name": z.string().describe("The name of the secret."),
  "repository_id": z.number().int()
}
```

### codespaces_remove_repository_for_secret_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "secret_name": z.string().describe("The name of the secret."),
  "repository_id": z.number().int()
}
```

### codespaces_get_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "codespace_name": z.string().describe("The name of the codespace.")
}
```

### codespaces_update_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "codespace_name": z.string().describe("The name of the codespace."),
  "machine": z.string().describe("A valid machine to transition this codespace to.").optional(),
  "display_name": z.string().describe("Display name for this codespace").optional(),
  "recent_folders": z.array(z.string()).describe("Recently opened folders inside the codespace. It is currently used by the clients to determine the folder path to load the codespace in.").optional()
}
```

### codespaces_delete_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "codespace_name": z.string().describe("The name of the codespace.")
}
```

### codespaces_export_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "codespace_name": z.string().describe("The name of the codespace.")
}
```

### codespaces_get_export_details_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "codespace_name": z.string().describe("The name of the codespace."),
  "export_id": z.string().describe("The ID of the export operation, or \`latest\`. Currently only \`latest\` is currently supported.")
}
```

### codespaces_codespace_machines_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "codespace_name": z.string().describe("The name of the codespace.")
}
```

### codespaces_publish_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "codespace_name": z.string().describe("The name of the codespace."),
  "name": z.string().describe("A name for the new repository.").optional(),
  "private": z.boolean().describe("Whether the new repository should be private.").optional()
}
```

### codespaces_start_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "codespace_name": z.string().describe("The name of the codespace.")
}
```

### codespaces_stop_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "codespace_name": z.string().describe("The name of the codespace.")
}
```

### packages_list_docker_migration_conflicting_packages_for_authenti

**Environment variables**



**Input schema**

```ts
{}
```

### users_set_primary_email_visibility_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "visibility": z.enum(["public","private"]).describe("Denotes whether an email is publicly visible.")
}
```

### users_list_emails_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_add_email_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{}
```

### users_delete_email_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{}
```

### users_list_followers_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_list_followed_by_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_check_person_is_followed_by_authenticated

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### users_follow

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### users_unfollow

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### users_list_gpg_keys_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_create_gpg_key_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "name": z.string().describe("A descriptive name for the new key.").optional(),
  "armored_public_key": z.string().describe("A GPG key in ASCII-armored format.")
}
```

### users_get_gpg_key_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "gpg_key_id": z.number().int().describe("The unique identifier of the GPG key.")
}
```

### users_delete_gpg_key_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "gpg_key_id": z.number().int().describe("The unique identifier of the GPG key.")
}
```

### apps_list_installations_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### apps_list_installation_repos_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "installation_id": z.number().int().describe("The unique identifier of the installation."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### apps_add_repo_to_installation_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "installation_id": z.number().int().describe("The unique identifier of the installation."),
  "repository_id": z.number().int().describe("The unique identifier of the repository.")
}
```

### apps_remove_repo_from_installation_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "installation_id": z.number().int().describe("The unique identifier of the installation."),
  "repository_id": z.number().int().describe("The unique identifier of the repository.")
}
```

### interactions_get_restrictions_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{}
```

### interactions_set_restrictions_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "limit": z.enum(["existing_users","contributors_only","collaborators_only"]).describe("The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect."),
  "expiry": z.enum(["one_day","three_days","one_week","one_month","six_months"]).describe("The duration of the interaction restriction. Default: \`one_day\`.").optional()
}
```

### interactions_remove_restrictions_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{}
```

### issues_list_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "filter": z.enum(["assigned","created","mentioned","subscribed","repos","all"]).describe("Indicates which sorts of issues to return. \`assigned\` means issues assigned to you. \`created\` means issues created by you. \`mentioned\` means issues mentioning you. \`subscribed\` means issues you're subscribed to updates for. \`all\` or \`repos\` means all issues you can see, regardless of participation or creation.").optional(),
  "state": z.enum(["open","closed","all"]).describe("Indicates the state of the issues to return.").optional(),
  "labels": z.string().describe("A list of comma separated label names. Example: \`bug,ui,@high\`").optional(),
  "sort": z.enum(["created","updated","comments"]).describe("What to sort results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_list_public_ssh_keys_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_create_public_ssh_key_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "title": z.string().describe("A descriptive name for the new key.").optional(),
  "key": z.string().regex(new RegExp("^ssh-(rsa|dss|ed25519) |^ecdsa-sha2-nistp(256|384|521) ")).describe("The public SSH key to add to your GitHub account.")
}
```

### users_get_public_ssh_key_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "key_id": z.number().int().describe("The unique identifier of the key.")
}
```

### users_delete_public_ssh_key_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "key_id": z.number().int().describe("The unique identifier of the key.")
}
```

### apps_list_subscriptions_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### apps_list_subscriptions_for_authenticated_user_stubbed

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_list_memberships_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "state": z.enum(["active","pending"]).describe("Indicates the state of the memberships to return. If not specified, the API returns both active and pending memberships.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_get_membership_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive.")
}
```

### orgs_update_membership_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "state": z.literal("active").describe("The state that the membership should be in. Only \`\"active\"\` will be accepted.")
}
```

### migrations_list_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### migrations_start_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "lock_repositories": z.boolean().describe("Lock the repositories being migrated at the start of the migration").optional(),
  "exclude_metadata": z.boolean().describe("Indicates whether metadata should be excluded and only git source should be included for the migration.").optional(),
  "exclude_git_data": z.boolean().describe("Indicates whether the repository git data should be excluded from the migration.").optional(),
  "exclude_attachments": z.boolean().describe("Do not include attachments in the migration").optional(),
  "exclude_releases": z.boolean().describe("Do not include releases in the migration").optional(),
  "exclude_owner_projects": z.boolean().describe("Indicates whether projects owned by the organization or users should be excluded.").optional(),
  "org_metadata_only": z.boolean().describe("Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags).").optional(),
  "exclude": z.array(z.literal("repositories").describe("Allowed values that can be passed to the exclude param.")).describe("Exclude attributes from the API response to improve performance").optional(),
  "repositories": z.array(z.string().describe("Repository path, owner and name"))
}
```

### migrations_get_status_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "migration_id": z.number().int().describe("The unique identifier of the migration."),
  "exclude": z.array(z.string()).optional()
}
```

### migrations_get_archive_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "migration_id": z.number().int().describe("The unique identifier of the migration.")
}
```

### migrations_delete_archive_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "migration_id": z.number().int().describe("The unique identifier of the migration.")
}
```

### migrations_unlock_repo_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "migration_id": z.number().int().describe("The unique identifier of the migration."),
  "repo_name": z.string().describe("repo_name parameter")
}
```

### migrations_list_repos_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "migration_id": z.number().int().describe("The unique identifier of the migration."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### orgs_list_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### packages_list_packages_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "visibility": z.enum(["public","private","internal"]).describe("The selected visibility of the packages.  This parameter is optional and only filters an existing result set.\n\nThe \`internal\` visibility is only supported for GitHub Packages registries that allow for granular permissions. For other ecosystems \`internal\` is synonymous with \`private\`.\nFor the list of GitHub Packages registries that support granular permissions, see \"[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### packages_get_package_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package.")
}
```

### packages_delete_package_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package.")
}
```

### packages_restore_package_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package."),
  "token": z.string().describe("package token").optional()
}
```

### packages_get_all_package_versions_for_package_owned_by_authentic

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package."),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "state": z.enum(["active","deleted"]).describe("The state of the package, either active or deleted.").optional()
}
```

### packages_get_package_version_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package."),
  "package_version_id": z.number().int().describe("Unique identifier of the package version.")
}
```

### packages_delete_package_version_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package."),
  "package_version_id": z.number().int().describe("Unique identifier of the package version.")
}
```

### packages_restore_package_version_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type \`maven\`. Docker images pushed to GitHub's Container registry (\`ghcr.io\`) have the type \`container\`. You can use the type \`docker\` to find images that were pushed to GitHub's Docker registry (\`docker.pkg.github.com\`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package."),
  "package_version_id": z.number().int().describe("Unique identifier of the package version.")
}
```

### projects_create_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "name": z.string().describe("Name of the project"),
  "body": z.string().nullable().describe("Body of the project").optional()
}
```

### users_list_public_emails_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_list_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "visibility": z.enum(["all","public","private"]).describe("Limit results to repositories with the specified visibility.").optional(),
  "affiliation": z.string().describe("Comma-separated list of values. Can include:  \n * \`owner\`: Repositories that are owned by the authenticated user.  \n * \`collaborator\`: Repositories that the user has been added to as a collaborator.  \n * \`organization_member\`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.").optional(),
  "type": z.enum(["all","owner","public","private","member"]).describe("Limit results to repositories of the specified type. Will cause a \`422\` error if used in the same request as **visibility** or **affiliation**.").optional(),
  "sort": z.enum(["created","updated","pushed","full_name"]).describe("The property to sort the results by.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The order to sort by. Default: \`asc\` when using \`full_name\`, otherwise \`desc\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show repositories updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "before": z.string().datetime({ offset: true }).describe("Only show repositories updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional()
}
```

### repos_create_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "name": z.string().describe("The name of the repository."),
  "description": z.string().describe("A short description of the repository.").optional(),
  "homepage": z.string().describe("A URL with more information about the repository.").optional(),
  "private": z.boolean().describe("Whether the repository is private.").optional(),
  "has_issues": z.boolean().describe("Whether issues are enabled.").optional(),
  "has_projects": z.boolean().describe("Whether projects are enabled.").optional(),
  "has_wiki": z.boolean().describe("Whether the wiki is enabled.").optional(),
  "has_discussions": z.boolean().describe("Whether discussions are enabled.").optional(),
  "team_id": z.number().int().describe("The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.").optional(),
  "auto_init": z.boolean().describe("Whether the repository is initialized with a minimal README.").optional(),
  "gitignore_template": z.string().describe("The desired language or platform to apply to the .gitignore.").optional(),
  "license_template": z.string().describe("The license keyword of the open source license for this repository.").optional(),
  "allow_squash_merge": z.boolean().describe("Whether to allow squash merges for pull requests.").optional(),
  "allow_merge_commit": z.boolean().describe("Whether to allow merge commits for pull requests.").optional(),
  "allow_rebase_merge": z.boolean().describe("Whether to allow rebase merges for pull requests.").optional(),
  "allow_auto_merge": z.boolean().describe("Whether to allow Auto-merge to be used on pull requests.").optional(),
  "delete_branch_on_merge": z.boolean().describe("Whether to delete head branches when pull requests are merged").optional(),
  "squash_merge_commit_title": z.enum(["PR_TITLE","COMMIT_OR_PR_TITLE"]).describe("Required when using \`squash_merge_commit_message\`.\n\nThe default value for a squash merge commit title:\n\n- \`PR_TITLE\` - default to the pull request's title.\n- \`COMMIT_OR_PR_TITLE\` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).").optional(),
  "squash_merge_commit_message": z.enum(["PR_BODY","COMMIT_MESSAGES","BLANK"]).describe("The default value for a squash merge commit message:\n\n- \`PR_BODY\` - default to the pull request's body.\n- \`COMMIT_MESSAGES\` - default to the branch's commit messages.\n- \`BLANK\` - default to a blank commit message.").optional(),
  "merge_commit_title": z.enum(["PR_TITLE","MERGE_MESSAGE"]).describe("Required when using \`merge_commit_message\`.\n\nThe default value for a merge commit title.\n\n- \`PR_TITLE\` - default to the pull request's title.\n- \`MERGE_MESSAGE\` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).").optional(),
  "merge_commit_message": z.enum(["PR_BODY","PR_TITLE","BLANK"]).describe("The default value for a merge commit message.\n\n- \`PR_TITLE\` - default to the pull request's title.\n- \`PR_BODY\` - default to the pull request's body.\n- \`BLANK\` - default to a blank commit message.").optional(),
  "has_downloads": z.boolean().describe("Whether downloads are enabled.").optional(),
  "is_template": z.boolean().describe("Whether this repository acts as a template that can be used to generate new repositories.").optional()
}
```

### repos_list_invitations_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### repos_accept_invitation_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "invitation_id": z.number().int().describe("The unique identifier of the invitation.")
}
```

### repos_decline_invitation_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "invitation_id": z.number().int().describe("The unique identifier of the invitation.")
}
```

### users_list_social_accounts_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_add_social_account_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "account_urls": z.array(z.string()).describe("Full URLs for the social media profiles to add.")
}
```

### users_delete_social_account_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "account_urls": z.array(z.string()).describe("Full URLs for the social media profiles to delete.")
}
```

### users_list_ssh_signing_keys_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_create_ssh_signing_key_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "title": z.string().describe("A descriptive name for the new key.").optional(),
  "key": z.string().regex(new RegExp("^ssh-(rsa|dss|ed25519) |^ecdsa-sha2-nistp(256|384|521) |^(sk-ssh-ed25519|sk-ecdsa-sha2-nistp256)@openssh.com ")).describe("The public SSH key to add to your GitHub account. For more information, see \"[Checking for existing SSH keys](https://docs.github.com/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys).\"")
}
```

### users_get_ssh_signing_key_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "ssh_signing_key_id": z.number().int().describe("The unique identifier of the SSH signing key.")
}
```

### users_delete_ssh_signing_key_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "ssh_signing_key_id": z.number().int().describe("The unique identifier of the SSH signing key.")
}
```

### activity_list_repos_starred_by_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "sort": z.enum(["created","updated"]).describe("The property to sort the results by. \`created\` means when the repository was starred. \`updated\` means when the repository was last pushed to.").optional(),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### activity_check_repo_is_starred_by_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### activity_star_repo_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### activity_unstar_repo_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the \`.git\` extension. The name is not case sensitive.")
}
```

### activity_list_watched_repos_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### teams_list_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_get_by_id

**Environment variables**



**Input schema**

```ts
{
  "account_id": z.number().int().describe("account_id parameter")
}
```

### users_list

**Environment variables**



**Input schema**

```ts
{
  "since": z.number().int().describe("A user ID. Only return users with an ID greater than this ID.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_get_by_username

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### users_list_attestations

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account."),
  "subject_digest": z.string().describe("Subject Digest"),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "predicate_type": z.string().describe("Optional filter for fetching attestations with a given predicate type.\nThis option accepts \`provenance\`, \`sbom\`, or freeform text for custom predicate types.").optional()
}
```

### packages_list_docker_migration_conflicting_packages_for_user

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account.")
}
```

### activity_list_events_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### activity_list_org_events_for_authenticated_user

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account."),
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### activity_list_public_events_for_user

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_list_followers_for_user

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_list_following_for_user

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```

### users_check_following_for_user

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account."),
  "target_user": z.string()
}
```

### gists_list_for_user

**Environment variables**



**Input schema**

```ts
{
  "username": z.string().describe("The handle for the GitHub user account."),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}
```
