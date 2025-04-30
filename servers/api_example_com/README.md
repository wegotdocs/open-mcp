# @open-mcp/api_example_com

## Installing

First set the environment variables as shell variables:

```bash
API_KEY='...'
OAUTH2_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {"API_KEY":"...","OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`
- `OAUTH2_TOKEN`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_example_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_example_com`
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

### get_

**Environment variables**



**Input schema**

```ts
{}
```

### get_tenant_well_known_openid_configuration

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID")
}
```

### get_tenant_well_known_openid_credential_issuer

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string()
}
```

### get_tenant_did_json

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string()
}
```

### get_tenant_credential_offer_request_uid_

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID"),
  "request_uid": z.string().describe("Request ID")
}
```

### post_tenant_par

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID")
}
```

### get_tenant_authorize

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID")
}
```

### post_tenant_token

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID")
}
```

### post_tenant_credential

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID")
}
```

### post_tenant_credential_deferred

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID")
}
```

### post_tenant_batch_credential

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID")
}
```

### post_tenant_openid4vc_verify_state_

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID"),
  "state": z.string().describe("State, i.e. session ID, identifying the presentation session, this response belongs to.")
}
```

### get_tenant_openid4vc_pd_id_

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID"),
  "id": z.string().describe("ID of the presentation definition object to retrieve")
}
```

### get_tenant_openid4vc_pd_id_display

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID"),
  "id": z.string().describe("ID of the presentation definition object to retrieve")
}
```

### post_tenant_notification

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID"),
  "event": z.enum(["credential_accepted","credential_failure","credential_deleted"]),
  "event_description": z.union([z.null(), z.string()]).optional(),
  "notification_id": z.string()
}
```

### get_api_health

**Environment variables**



**Input schema**

```ts
{}
```

### post_api_health

**Environment variables**



**Input schema**

```ts
{}
```

### get_api_health_adv

**Environment variables**



**Input schema**

```ts
{}
```

### get_admin_tenants

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### post_admin_tenants

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "did": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "display": z.array(z.object({ "customParameters": z.record(z.union([z.array(z.record(z.any())), z.record(z.record(z.any())), z.union([z.object({ "content": z.string(), "isString": z.boolean() }), z.object({ "content": z.string(), "isString": z.boolean() })])])), "backgroundColor": z.union([z.null(), z.string()]).optional(), "description": z.union([z.null(), z.string()]).optional(), "locale": z.union([z.null(), z.string()]).optional(), "logo": z.null().optional(), "name": z.string(), "textColor": z.union([z.null(), z.string()]).optional() })),
  "tenant": z.string()
}
```

### get_admin_tenants_id_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("Tenant ID")
}
```

### post_admin_tenants_id_keys_rotate

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "id": z.string().describe("Tenant ID")
}
```

### post_api_v1_0_tenant_issuer_request_jwt

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "autoAccept": z.union([z.null(), z.boolean()]).optional(),
  "callback": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "expires": z.union([z.null(), z.number().int()]).optional(),
  "rawRequest": z.null().optional(),
  "revocable": z.boolean(),
  "templateRequest": z.null().optional()
}
```

### delete_api_v1_0_tenant_issuer_request

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "reason": z.union([z.null(), z.string()]).optional(),
  "requestUid": z.string()
}
```

### get_api_v1_0_tenant_issuer_status_request_uid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "request_uid": z.string().describe("The ID of the issuance request.")
}
```

### post_api_v1_0_tenant_issuer_revoke

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "issuanceRequestUid": z.union([z.null(), z.string()]).optional(),
  "revocationStatusLink": z.union([z.null(), z.string()]).optional()
}
```

### post_api_v1_0_tenant_verifier_request

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "callback": z.null().optional(),
  "expires": z.union([z.null(), z.number().int()]).optional(),
  "pdId": z.union([z.null(), z.string()]).optional(),
  "pdRaw": z.union([z.null(), z.record(z.record(z.any()))]).optional(),
  "syncResponse": z.union([z.null(), z.boolean()]).optional(),
  "toComplete": z.union([z.null(), z.boolean()]).optional()
}
```

### delete_api_v1_0_tenant_verifier_request

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "reason": z.union([z.null(), z.string()]).optional(),
  "requestUid": z.string()
}
```

### post_api_v1_0_tenant_verifier_request_multiple_use

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "callback": z.null().optional(),
  "expires": z.union([z.null(), z.number().int()]).optional(),
  "pdId": z.union([z.null(), z.string()]).optional(),
  "pdRaw": z.union([z.null(), z.record(z.record(z.any()))]).optional(),
  "syncResponse": z.union([z.null(), z.boolean()]).optional(),
  "toComplete": z.union([z.null(), z.boolean()]).optional()
}
```

### delete_api_v1_0_tenant_verifier_request_multiple_use

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "reason": z.union([z.null(), z.string()]).optional(),
  "requestUid": z.string()
}
```

### post_api_v1_0_tenant_verifier_complete_request_uid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "request_uid": z.string().describe("The ID of the Verify request."),
  "availableActions": z.array(z.object({ "action": z.string(), "data": z.union([z.null(), z.record(z.record(z.any()))]).optional() })),
  "messages": z.array(z.object({ "body": z.string(), "lang": z.string(), "mimeType": z.union([z.null(), z.string()]).optional(), "title": z.string() })),
  "reason": z.string(),
  "status": z.string()
}
```

### get_api_v1_0_tenant_verifier_status_request_uid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "request_uid": z.string().describe("The ID of the Verify request.")
}
```

### get_api_v1_0_tenant_verifier_report_request_uid_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "request_uid": z.string().describe("The ID of the Verify request.")
}
```

### post_api_v1_0_tenant_wallet_notify

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "actions": z.union([z.null(), z.array(z.object({ "action": z.string(), "data": z.union([z.null(), z.record(z.record(z.any()))]).optional() }))]).optional(),
  "channel": z.union([z.null(), z.string()]).optional(),
  "did": z.string(),
  "message": z.union([z.null(), z.string()]).optional(),
  "title": z.union([z.null(), z.string()]).optional()
}
```

### get_api_v1_0_tenant_wallet_notify_trace_id_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "trace_id": z.string().describe("The ID of the notification.")
}
```

### get_tenant_verify_request_multipleuse_request_uid_

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("tenant ID"),
  "multipleuse_request_uid": z.string().describe("multipleuse request ID")
}
```

### get_tenant_verify_status_request_uid_

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("tenant ID"),
  "request_uid": z.string().describe("return the status of verify with request request_uid")
}
```

### get_tenant_credentials_schema_

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string(),
  "schema": z.string()
}
```

### get_tenant_credentials_schema_schema_json

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string(),
  "schema": z.string()
}
```

### get_tenant_credentials_schema_status_credential_status_id_

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string(),
  "schema": z.string(),
  "credential_status_id": z.string()
}
```

### get_tenant_credentials_schema_status_credential_status_id_bitstr

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string(),
  "schema": z.string(),
  "credential_status_id": z.string()
}
```

### post_api_v1_0_console_tenant_licence_load

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{}
```

### get_api_v1_0_console_tenant_auth_session

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant use default if not known")
}
```

### get_api_v1_0_console_tenant_settings_auth_profiles

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant")
}
```

### post_api_v1_0_console_tenant_settings_auth_profile_create

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant"),
  "credentials": z.union([z.object({ "password": z.string(), "username": z.string() }), z.object({}), z.object({ "clientId": z.string(), "clientSecret": z.string(), "scope": z.string(), "tokenEndpoint": z.string() })]),
  "info": z.union([z.null(), z.string()]).optional(),
  "name": z.string()
}
```

### post_api_v1_0_console_tenant_settings_auth_profile_update

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant"),
  "credentials": z.union([z.object({ "password": z.string(), "username": z.string() }), z.object({}), z.object({ "clientId": z.string(), "clientSecret": z.string(), "scope": z.string(), "tokenEndpoint": z.string() })]),
  "info": z.union([z.null(), z.string()]).optional(),
  "name": z.string()
}
```

### get_api_v1_0_console_tenant_settings_auth_profile_authprofile_na

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant"),
  "authprofile_name": z.string().describe("authprofile_name")
}
```

### delete_api_v1_0_console_tenant_settings_auth_profile_authprofile

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "authprofile_name": z.string().describe("authprofile_name"),
  "tenant": z.string().describe("tenant")
}
```

### get_api_v1_0_console_tenant_settings_tenant

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant")
}
```

### get_api_v1_0_console_tenant_dashboard_statistics

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant")
}
```

### get_api_v1_0_console_tenant_credentials_schemas

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant"),
  "id": z.string().describe("id").optional(),
  "from_date": z.string().describe("timestamp").optional(),
  "to_date": z.string().describe("timestamp").optional(),
  "page": z.string().describe("page").optional(),
  "size": z.string().describe("size").optional()
}
```

### get_api_v1_0_console_tenant_credentials_schema_schema_id_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant"),
  "schema_id": z.string().describe("schema_id")
}
```

### delete_api_v1_0_console_tenant_credentials_schema_schema_id_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant"),
  "schema_id": z.string().describe("schema_id")
}
```

### post_api_v1_0_console_tenant_credentials_schema_create

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant")
}
```

### get_api_v1_0_console_tenant_presentations_templates

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant"),
  "pd_id": z.string().describe("pdId").optional(),
  "from_date": z.string().describe("timestamp").optional(),
  "to_date": z.string().describe("timestamp").optional(),
  "page": z.string().describe("page").optional(),
  "size": z.string().describe("size").optional()
}
```

### get_api_v1_0_console_tenant_presentations_template_template_id_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant"),
  "template_id": z.string().describe("template_id")
}
```

### delete_api_v1_0_console_tenant_presentations_template_template_i

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant"),
  "template_id": z.string().describe("template_id")
}
```

### post_api_v1_0_console_tenant_presentations_template_create

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant")
}
```

### post_api_v1_0_console_tenant_presentations_template_update

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant")
}
```

### post_api_v1_0_console_tenant_presentations_template_update_raw

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant")
}
```

### get_api_v1_0_console_tenant_issues

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant"),
  "id": z.string().describe("id").optional(),
  "from_date": z.string().describe("timestamp").optional(),
  "to_date": z.string().describe("timestamp").optional(),
  "page": z.string().describe("page").optional(),
  "size": z.string().describe("size").optional()
}
```

### get_api_v1_0_console_tenant_issues_state_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant"),
  "state": z.string().describe("state")
}
```

### post_api_v1_0_console_tenant_issues_credential_offer

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("The ID of the tenant."),
  "autoAccept": z.union([z.null(), z.boolean()]).optional(),
  "callback": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:"),
  "expires": z.union([z.null(), z.number().int()]).optional(),
  "rawRequest": z.null().optional(),
  "revocable": z.boolean(),
  "templateRequest": z.null().optional()
}
```

### get_api_v1_0_console_tenant_verify_verifications

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant"),
  "id": z.string().describe("id").optional(),
  "from_date": z.string().describe("timestamp").optional(),
  "to_date": z.string().describe("timestamp").optional(),
  "page": z.string().describe("page").optional(),
  "size": z.string().describe("size").optional()
}
```

### get_api_v1_0_console_tenant_verify_verification_state_

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant"),
  "state": z.string().describe("state")
}
```

### post_api_v1_0_console_tenant_verify_request

**Environment variables**

- `API_KEY`
- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "tenant": z.string().describe("tenant")
}
```

### post_api_v1_0_console_tenant_auth_login

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("tenant")
}
```

### post_api_v1_0_console_tenant_auth_logout

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("tenant")
}
```

### post_api_v1_0_tenant_verify_callback

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID")
}
```

### post_api_v1_0_tenant_issue_callback

**Environment variables**



**Input schema**

```ts
{
  "tenant": z.string().describe("Tenant ID")
}
```
