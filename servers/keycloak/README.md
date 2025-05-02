# @open-mcp/keycloak

## Installing

First set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add keycloak \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add keycloak \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add keycloak \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "keycloak": {
      "command": "npx",
      "args": ["-y", "@open-mcp/keycloak"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/keycloak
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/keycloak`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_admin_realms

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)

### post_admin_realms

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `realm` (string)
- `displayName` (string)
- `displayNameHtml` (string)
- `notBefore` (integer)
- `defaultSignatureAlgorithm` (string)
- `revokeRefreshToken` (boolean)
- `refreshTokenMaxReuse` (integer)
- `accessTokenLifespan` (integer)
- `accessTokenLifespanForImplicitFlow` (integer)
- `ssoSessionIdleTimeout` (integer)
- `ssoSessionMaxLifespan` (integer)
- `ssoSessionIdleTimeoutRememberMe` (integer)
- `ssoSessionMaxLifespanRememberMe` (integer)
- `offlineSessionIdleTimeout` (integer)
- `offlineSessionMaxLifespanEnabled` (boolean)
- `offlineSessionMaxLifespan` (integer)
- `clientSessionIdleTimeout` (integer)
- `clientSessionMaxLifespan` (integer)
- `clientOfflineSessionIdleTimeout` (integer)
- `clientOfflineSessionMaxLifespan` (integer)
- `accessCodeLifespan` (integer)
- `accessCodeLifespanUserAction` (integer)
- `accessCodeLifespanLogin` (integer)
- `actionTokenGeneratedByAdminLifespan` (integer)
- `actionTokenGeneratedByUserLifespan` (integer)
- `oauth2DeviceCodeLifespan` (integer)
- `oauth2DevicePollingInterval` (integer)
- `enabled` (boolean)
- `sslRequired` (string)
- `registrationAllowed` (boolean)
- `registrationEmailAsUsername` (boolean)
- `rememberMe` (boolean)
- `verifyEmail` (boolean)
- `loginWithEmailAllowed` (boolean)
- `duplicateEmailsAllowed` (boolean)
- `resetPasswordAllowed` (boolean)
- `editUsernameAllowed` (boolean)
- `bruteForceProtected` (boolean)
- `permanentLockout` (boolean)
- `maxTemporaryLockouts` (integer)
- `bruteForceStrategy` (string)
- `maxFailureWaitSeconds` (integer)
- `minimumQuickLoginWaitSeconds` (integer)
- `waitIncrementSeconds` (integer)
- `quickLoginCheckMilliSeconds` (integer)
- `maxDeltaTimeSeconds` (integer)
- `failureFactor` (integer)
- `roles` (object)
- `groups` (array)
- `defaultRole` (object)
- `adminPermissionsClient` (object)
- `defaultGroups` (array)
- `passwordPolicy` (string)
- `otpPolicyType` (string)
- `otpPolicyAlgorithm` (string)
- `otpPolicyInitialCounter` (integer)
- `otpPolicyDigits` (integer)
- `otpPolicyLookAheadWindow` (integer)
- `otpPolicyPeriod` (integer)
- `otpPolicyCodeReusable` (boolean)
- `otpSupportedApplications` (array)
- `localizationTexts` (object)
- `webAuthnPolicyRpEntityName` (string)
- `webAuthnPolicySignatureAlgorithms` (array)
- `webAuthnPolicyRpId` (string)
- `webAuthnPolicyAttestationConveyancePreference` (string)
- `webAuthnPolicyAuthenticatorAttachment` (string)
- `webAuthnPolicyRequireResidentKey` (string)
- `webAuthnPolicyUserVerificationRequirement` (string)
- `webAuthnPolicyCreateTimeout` (integer)
- `webAuthnPolicyAvoidSameAuthenticatorRegister` (boolean)
- `webAuthnPolicyAcceptableAaguids` (array)
- `webAuthnPolicyExtraOrigins` (array)
- `webAuthnPolicyPasswordlessRpEntityName` (string)
- `webAuthnPolicyPasswordlessSignatureAlgorithms` (array)
- `webAuthnPolicyPasswordlessRpId` (string)
- `webAuthnPolicyPasswordlessAttestationConveyancePreference` (string)
- `webAuthnPolicyPasswordlessAuthenticatorAttachment` (string)
- `webAuthnPolicyPasswordlessRequireResidentKey` (string)
- `webAuthnPolicyPasswordlessUserVerificationRequirement` (string)
- `webAuthnPolicyPasswordlessCreateTimeout` (integer)
- `webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister` (boolean)
- `webAuthnPolicyPasswordlessAcceptableAaguids` (array)
- `webAuthnPolicyPasswordlessExtraOrigins` (array)
- `clientProfiles` (object)
- `clientPolicies` (object)
- `users` (array)
- `federatedUsers` (array)
- `scopeMappings` (array)
- `clientScopeMappings` (object)
- `clients` (array)
- `clientScopes` (array)
- `defaultDefaultClientScopes` (array)
- `defaultOptionalClientScopes` (array)
- `browserSecurityHeaders` (object)
- `smtpServer` (object)
- `userFederationProviders` (array)
- `userFederationMappers` (array)
- `loginTheme` (string)
- `accountTheme` (string)
- `adminTheme` (string)
- `emailTheme` (string)
- `eventsEnabled` (boolean)
- `eventsExpiration` (integer)
- `eventsListeners` (array)
- `enabledEventTypes` (array)
- `adminEventsEnabled` (boolean)
- `adminEventsDetailsEnabled` (boolean)
- `identityProviders` (array)
- `identityProviderMappers` (array)
- `protocolMappers` (array)
- `components` (object)
- `internationalizationEnabled` (boolean)
- `supportedLocales` (array)
- `defaultLocale` (string)
- `authenticationFlows` (array)
- `authenticatorConfig` (array)
- `requiredActions` (array)
- `browserFlow` (string)
- `registrationFlow` (string)
- `directGrantFlow` (string)
- `resetCredentialsFlow` (string)
- `clientAuthenticationFlow` (string)
- `dockerAuthenticationFlow` (string)
- `firstBrokerLoginFlow` (string)
- `attributes` (object)
- `keycloakVersion` (string)
- `userManagedAccessAllowed` (boolean)
- `organizationsEnabled` (boolean)
- `organizations` (array)
- `verifiableCredentialsEnabled` (boolean)
- `adminPermissionsEnabled` (boolean)
- `oAuth2DeviceCodeLifespan` (integer)
- `oAuth2DevicePollingInterval` (integer)

### delete_admin_realms_realm_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_admin_events

**Environment variables**

No environment variables required

**Input schema**

- `authClient` (string)
- `authIpAddress` (string)
- `authRealm` (string)
- `authUser` (string)
- `dateFrom` (string)
- `dateTo` (string)
- `direction` (string)
- `first` (integer)
- `max` (integer)
- `operationTypes` (array)
- `resourcePath` (string)
- `resourceTypes` (array)

### delete_admin_realms_realm_admin_events

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_admin_events

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_attack_detection_brute_force_users

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_attack_detection_brute_force_users

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_attack_detection_brute_force_users_userid

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)

### delete_admin_realms_realm_attack_detection_brute_force_users_use

**Environment variables**

No environment variables required

**Input schema**

- `userId` (string)

### parameters_admin_realms_realm_attack_detection_brute_force_users

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_authenticator_providers

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_authentication_authenticator_provi

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_client_authenticator_provi

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_authentication_client_authenticato

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_authentication_config

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `alias` (string)
- `config` (object)

### parameters_admin_realms_realm_authentication_config

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_config_description_provide

**Environment variables**

No environment variables required

**Input schema**

- `providerId` (string)

### parameters_admin_realms_realm_authentication_config_description_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_config_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### put_admin_realms_realm_authentication_config_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `b_id` (string)
- `alias` (string)
- `config` (object)

### delete_admin_realms_realm_authentication_config_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### parameters_admin_realms_realm_authentication_config_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_authentication_executions

**Environment variables**

No environment variables required

**Input schema**

- `authenticatorConfig` (string)
- `authenticator` (string)
- `authenticatorFlow` (boolean)
- `requirement` (string)
- `priority` (integer)
- `id` (string)
- `flowId` (string)
- `parentFlow` (string)

### parameters_admin_realms_realm_authentication_executions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_executions_executionid_

**Environment variables**

No environment variables required

**Input schema**

- `executionId` (string)

### delete_admin_realms_realm_authentication_executions_executionid_

**Environment variables**

No environment variables required

**Input schema**

- `executionId` (string)

### parameters_admin_realms_realm_authentication_executions_executio

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_authentication_executions_executionid_co

**Environment variables**

No environment variables required

**Input schema**

- `executionId` (string)
- `id` (string)
- `alias` (string)
- `config` (object)

### parameters_admin_realms_realm_authentication_executions_executio

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_executions_executionid_con

**Environment variables**

No environment variables required

**Input schema**

- `executionId` (string)
- `id` (string)

### parameters_admin_realms_realm_authentication_executions_executio

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_authentication_executions_executionid_lo

**Environment variables**

No environment variables required

**Input schema**

- `executionId` (string)

### parameters_admin_realms_realm_authentication_executions_executio

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_authentication_executions_executionid_ra

**Environment variables**

No environment variables required

**Input schema**

- `executionId` (string)

### parameters_admin_realms_realm_authentication_executions_executio

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_flows

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_authentication_flows

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `alias` (string)
- `description` (string)
- `providerId` (string)
- `topLevel` (boolean)
- `builtIn` (boolean)
- `authenticationExecutions` (array)

### parameters_admin_realms_realm_authentication_flows

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_authentication_flows_flowalias_copy

**Environment variables**

No environment variables required

**Input schema**

- `flowAlias` (string)

### parameters_admin_realms_realm_authentication_flows_flowalias_cop

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_flows_flowalias_executions

**Environment variables**

No environment variables required

**Input schema**

- `flowAlias` (string)

### put_admin_realms_realm_authentication_flows_flowalias_executions

**Environment variables**

No environment variables required

**Input schema**

- `flowAlias` (string)
- `id` (string)
- `requirement` (string)
- `displayName` (string)
- `alias` (string)
- `description` (string)
- `requirementChoices` (array)
- `configurable` (boolean)
- `authenticationFlow` (boolean)
- `providerId` (string)
- `authenticationConfig` (string)
- `flowId` (string)
- `level` (integer)
- `index` (integer)
- `priority` (integer)

### parameters_admin_realms_realm_authentication_flows_flowalias_exe

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_authentication_flows_flowalias_execution

**Environment variables**

No environment variables required

**Input schema**

- `flowAlias` (string)

### parameters_admin_realms_realm_authentication_flows_flowalias_exe

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_authentication_flows_flowalias_execution

**Environment variables**

No environment variables required

**Input schema**

- `flowAlias` (string)

### parameters_admin_realms_realm_authentication_flows_flowalias_exe

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_flows_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### put_admin_realms_realm_authentication_flows_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `b_id` (string)
- `alias` (string)
- `description` (string)
- `providerId` (string)
- `topLevel` (boolean)
- `builtIn` (boolean)
- `authenticationExecutions` (array)

### delete_admin_realms_realm_authentication_flows_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### parameters_admin_realms_realm_authentication_flows_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_form_action_providers

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_authentication_form_action_provide

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_form_providers

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_authentication_form_providers

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_per_client_config_descript

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_authentication_per_client_config_d

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_authentication_register_required_action

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_authentication_register_required_a

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_required_actions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_authentication_required_actions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_required_actions_alias_

**Environment variables**

No environment variables required

**Input schema**

- `alias` (string)

### put_admin_realms_realm_authentication_required_actions_alias_

**Environment variables**

No environment variables required

**Input schema**

- `alias` (string)
- `b_alias` (string)
- `name` (string)
- `providerId` (string)
- `enabled` (boolean)
- `defaultAction` (boolean)
- `priority` (integer)
- `config` (object)

### delete_admin_realms_realm_authentication_required_actions_alias_

**Environment variables**

No environment variables required

**Input schema**

- `alias` (string)

### parameters_admin_realms_realm_authentication_required_actions_al

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_required_actions_alias_con

**Environment variables**

No environment variables required

**Input schema**

- `alias` (string)

### put_admin_realms_realm_authentication_required_actions_alias_con

**Environment variables**

No environment variables required

**Input schema**

- `alias` (string)
- `config` (object)

### delete_admin_realms_realm_authentication_required_actions_alias_

**Environment variables**

No environment variables required

**Input schema**

- `alias` (string)

### parameters_admin_realms_realm_authentication_required_actions_al

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_required_actions_alias_con

**Environment variables**

No environment variables required

**Input schema**

- `alias` (string)

### parameters_admin_realms_realm_authentication_required_actions_al

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_authentication_required_actions_alias_lo

**Environment variables**

No environment variables required

**Input schema**

- `alias` (string)

### parameters_admin_realms_realm_authentication_required_actions_al

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_authentication_required_actions_alias_ra

**Environment variables**

No environment variables required

**Input schema**

- `alias` (string)

### parameters_admin_realms_realm_authentication_required_actions_al

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_authentication_unregistered_required_acti

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_authentication_unregistered_requir

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_client_description_converter

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_description_converter

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_policies_policies

**Environment variables**

No environment variables required

**Input schema**

- `include-global-policies` (boolean)

### put_admin_realms_realm_client_policies_policies

**Environment variables**

No environment variables required

**Input schema**

- `policies` (array)
- `globalPolicies` (array)

### parameters_admin_realms_realm_client_policies_policies

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_policies_profiles

**Environment variables**

No environment variables required

**Input schema**

- `include-global-profiles` (boolean)

### put_admin_realms_realm_client_policies_profiles

**Environment variables**

No environment variables required

**Input schema**

- `profiles` (array)
- `globalProfiles` (array)

### parameters_admin_realms_realm_client_policies_profiles

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_registration_policy_providers

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_registration_policy_provide

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_scopes

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_client_scopes

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `protocol` (string)
- `attributes` (object)
- `protocolMappers` (array)

### parameters_admin_realms_realm_client_scopes

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_scopes_client_scope_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_client_scopes_client_scope_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `protocol` (string)
- `attributes` (object)
- `protocolMappers` (array)

### delete_admin_realms_realm_client_scopes_client_scope_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_scopes_client_scope_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_client_scopes_client_scope_id_protocol_m

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_scopes_client_scope_id_prot

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_scopes_client_scope_id_protocol_ma

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_client_scopes_client_scope_id_protocol_m

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `protocol` (string)
- `protocolMapper` (string)
- `config` (object)

### parameters_admin_realms_realm_client_scopes_client_scope_id_prot

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_scopes_client_scope_id_protocol_ma

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### put_admin_realms_realm_client_scopes_client_scope_id_protocol_ma

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `b_id` (string)
- `name` (string)
- `protocol` (string)
- `protocolMapper` (string)
- `config` (object)

### delete_admin_realms_realm_client_scopes_client_scope_id_protocol

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### parameters_admin_realms_realm_client_scopes_client_scope_id_prot

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_scopes_client_scope_id_protocol_ma

**Environment variables**

No environment variables required

**Input schema**

- `protocol` (string)

### parameters_admin_realms_realm_client_scopes_client_scope_id_prot

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_scopes_client_scope_id_scope_mappi

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_scopes_client_scope_id_scop

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_scopes_client_scope_id_scope_mappi

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_client_scopes_client_scope_id_scope_mapp

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_client_scopes_client_scope_id_scope_ma

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_scopes_client_scope_id_scop

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_scopes_client_scope_id_scope_mappi

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_scopes_client_scope_id_scop

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_scopes_client_scope_id_scope_mappi

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)

### parameters_admin_realms_realm_client_scopes_client_scope_id_scop

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_scopes_client_scope_id_scope_mappi

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_client_scopes_client_scope_id_scope_mapp

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_client_scopes_client_scope_id_scope_ma

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_scopes_client_scope_id_scop

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_scopes_client_scope_id_scope_mappi

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_scopes_client_scope_id_scop

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_scopes_client_scope_id_scope_mappi

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)

### parameters_admin_realms_realm_client_scopes_client_scope_id_scop

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_session_stats

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_session_stats

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_templates

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_client_templates

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `protocol` (string)
- `attributes` (object)
- `protocolMappers` (array)

### parameters_admin_realms_realm_client_templates

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_templates_client_scope_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_client_templates_client_scope_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `protocol` (string)
- `attributes` (object)
- `protocolMappers` (array)

### delete_admin_realms_realm_client_templates_client_scope_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_templates_client_scope_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_client_templates_client_scope_id_protoco

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_templates_client_scope_id_p

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_templates_client_scope_id_protocol

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_client_templates_client_scope_id_protoco

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `protocol` (string)
- `protocolMapper` (string)
- `config` (object)

### parameters_admin_realms_realm_client_templates_client_scope_id_p

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_templates_client_scope_id_protocol

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### put_admin_realms_realm_client_templates_client_scope_id_protocol

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `b_id` (string)
- `name` (string)
- `protocol` (string)
- `protocolMapper` (string)
- `config` (object)

### delete_admin_realms_realm_client_templates_client_scope_id_proto

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### parameters_admin_realms_realm_client_templates_client_scope_id_p

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_templates_client_scope_id_protocol

**Environment variables**

No environment variables required

**Input schema**

- `protocol` (string)

### parameters_admin_realms_realm_client_templates_client_scope_id_p

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_templates_client_scope_id_scope_ma

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_templates_client_scope_id_s

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_templates_client_scope_id_scope_ma

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_client_templates_client_scope_id_scope_m

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_client_templates_client_scope_id_scope

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_templates_client_scope_id_s

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_templates_client_scope_id_scope_ma

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_templates_client_scope_id_s

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_templates_client_scope_id_scope_ma

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)

### parameters_admin_realms_realm_client_templates_client_scope_id_s

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_templates_client_scope_id_scope_ma

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_client_templates_client_scope_id_scope_m

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_client_templates_client_scope_id_scope

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_templates_client_scope_id_s

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_templates_client_scope_id_scope_ma

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_client_templates_client_scope_id_s

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_templates_client_scope_id_scope_ma

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)

### parameters_admin_realms_realm_client_templates_client_scope_id_s

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_client_types

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_client_types

**Environment variables**

No environment variables required

**Input schema**

- `client-types` (array)
- `global-client-types` (array)

### parameters_admin_realms_realm_client_types

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients

**Environment variables**

No environment variables required

**Input schema**

- `clientId` (string)
- `first` (integer)
- `max` (integer)
- `q` (string)
- `search` (boolean)
- `viewableOnly` (boolean)

### post_admin_realms_realm_clients

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `clientId` (string)
- `name` (string)
- `description` (string)
- `type` (string)
- `rootUrl` (string)
- `adminUrl` (string)
- `baseUrl` (string)
- `surrogateAuthRequired` (boolean)
- `enabled` (boolean)
- `alwaysDisplayInConsole` (boolean)
- `clientAuthenticatorType` (string)
- `secret` (string)
- `registrationAccessToken` (string)
- `redirectUris` (array)
- `webOrigins` (array)
- `notBefore` (integer)
- `bearerOnly` (boolean)
- `consentRequired` (boolean)
- `standardFlowEnabled` (boolean)
- `implicitFlowEnabled` (boolean)
- `directAccessGrantsEnabled` (boolean)
- `serviceAccountsEnabled` (boolean)
- `authorizationServicesEnabled` (boolean)
- `publicClient` (boolean)
- `frontchannelLogout` (boolean)
- `protocol` (string)
- `attributes` (object)
- `authenticationFlowBindingOverrides` (object)
- `fullScopeAllowed` (boolean)
- `nodeReRegistrationTimeout` (integer)
- `registeredNodes` (object)
- `protocolMappers` (array)
- `defaultClientScopes` (array)
- `optionalClientScopes` (array)
- `authorizationSettings` (object)
- `access` (object)
- `origin` (string)

### parameters_admin_realms_realm_clients

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_initial_access

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_initial_access

**Environment variables**

No environment variables required

**Input schema**

- `expiration` (integer)
- `count` (integer)

### parameters_admin_realms_realm_clients_initial_access

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_clients_initial_access_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### parameters_admin_realms_realm_clients_initial_access_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_clients_client_uuid_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `clientId` (string)
- `name` (string)
- `description` (string)
- `type` (string)
- `rootUrl` (string)
- `adminUrl` (string)
- `baseUrl` (string)
- `surrogateAuthRequired` (boolean)
- `enabled` (boolean)
- `alwaysDisplayInConsole` (boolean)
- `clientAuthenticatorType` (string)
- `secret` (string)
- `registrationAccessToken` (string)
- `redirectUris` (array)
- `webOrigins` (array)
- `notBefore` (integer)
- `bearerOnly` (boolean)
- `consentRequired` (boolean)
- `standardFlowEnabled` (boolean)
- `implicitFlowEnabled` (boolean)
- `directAccessGrantsEnabled` (boolean)
- `serviceAccountsEnabled` (boolean)
- `authorizationServicesEnabled` (boolean)
- `publicClient` (boolean)
- `frontchannelLogout` (boolean)
- `protocol` (string)
- `attributes` (object)
- `authenticationFlowBindingOverrides` (object)
- `fullScopeAllowed` (boolean)
- `nodeReRegistrationTimeout` (integer)
- `registeredNodes` (object)
- `protocolMappers` (array)
- `defaultClientScopes` (array)
- `optionalClientScopes` (array)
- `authorizationSettings` (object)
- `access` (object)
- `origin` (string)

### delete_admin_realms_realm_clients_client_uuid_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `clientId` (string)
- `name` (string)
- `allowRemoteResourceManagement` (boolean)
- `policyEnforcementMode` (string)
- `resources` (array)
- `policies` (array)
- `scopes` (array)
- `decisionStrategy` (string)
- `authorizationSchema` (object)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_authz_resource_serve

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `clientId` (string)
- `name` (string)
- `allowRemoteResourceManagement` (boolean)
- `policyEnforcementMode` (string)
- `resources` (array)
- `policies` (array)
- `scopes` (array)
- `decisionStrategy` (string)
- `authorizationSchema` (object)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `fields` (string)
- `first` (integer)
- `max` (integer)
- `name` (string)
- `owner` (string)
- `permission` (boolean)
- `policyId` (string)
- `resource` (string)
- `resourceType` (string)
- `scope` (string)
- `type` (string)

### post_admin_realms_realm_clients_client_uuid_authz_resource_serve

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_authz_resource_serve

**Environment variables**

No environment variables required

**Input schema**

- `context` (object)
- `resources` (array)
- `resourceType` (string)
- `clientId` (string)
- `userId` (string)
- `roleIds` (array)
- `entitlements` (boolean)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `fields` (string)
- `name` (string)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `fields` (string)
- `first` (integer)
- `max` (integer)
- `name` (string)
- `owner` (string)
- `permission` (boolean)
- `policyId` (string)
- `resource` (string)
- `resourceType` (string)
- `scope` (string)
- `type` (string)

### post_admin_realms_realm_clients_client_uuid_authz_resource_serve

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_authz_resource_serve

**Environment variables**

No environment variables required

**Input schema**

- `context` (object)
- `resources` (array)
- `resourceType` (string)
- `clientId` (string)
- `userId` (string)
- `roleIds` (array)
- `entitlements` (boolean)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `fields` (string)
- `name` (string)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `_id` (string)
- `deep` (boolean)
- `exactName` (boolean)
- `first` (integer)
- `matchingUri` (boolean)
- `max` (integer)
- `name` (string)
- `owner` (string)
- `scope` (string)
- `type` (string)
- `uri` (string)

### post_admin_realms_realm_clients_client_uuid_authz_resource_serve

**Environment variables**

No environment variables required

**Input schema**

- `_id` (string)
- `name` (string)
- `uris` (array)
- `type` (string)
- `scopes` (array)
- `icon_uri` (string)
- `owner` (string)
- `ownerManagedAccess` (boolean)
- `displayName` (string)
- `attributes` (object)
- `scopesUma` (array)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `resource-id` (string)

### put_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `resource-id` (string)
- `_id` (string)
- `name` (string)
- `uris` (array)
- `type` (string)
- `scopes` (array)
- `icon_uri` (string)
- `owner` (string)
- `ownerManagedAccess` (boolean)
- `displayName` (string)
- `attributes` (object)
- `scopesUma` (array)

### delete_admin_realms_realm_clients_client_uuid_authz_resource_ser

**Environment variables**

No environment variables required

**Input schema**

- `resource-id` (string)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `resource-id` (string)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `resource-id` (string)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `resource-id` (string)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `first` (integer)
- `max` (integer)
- `name` (string)
- `scopeId` (string)

### post_admin_realms_realm_clients_client_uuid_authz_resource_serve

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `iconUri` (string)
- `policies` (array)
- `resources` (array)
- `displayName` (string)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `scope-id` (string)

### put_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `scope-id` (string)
- `id` (string)
- `name` (string)
- `iconUri` (string)
- `policies` (array)
- `resources` (array)
- `displayName` (string)

### delete_admin_realms_realm_clients_client_uuid_authz_resource_ser

**Environment variables**

No environment variables required

**Input schema**

- `scope-id` (string)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `scope-id` (string)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

- `scope-id` (string)

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_authz_resource_server

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_authz_resource

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_certificates_attr_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_certificates_a

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_certificates_attr_do

**Environment variables**

No environment variables required

**Input schema**

- `realmCertificate` (boolean)
- `storePassword` (string)
- `keyPassword` (string)
- `keyAlias` (string)
- `realmAlias` (string)
- `format` (string)

### parameters_admin_realms_realm_clients_client_uuid_certificates_a

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_certificates_attr_ge

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_certificates_a

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_certificates_attr_ge

**Environment variables**

No environment variables required

**Input schema**

- `realmCertificate` (boolean)
- `storePassword` (string)
- `keyPassword` (string)
- `keyAlias` (string)
- `realmAlias` (string)
- `format` (string)

### parameters_admin_realms_realm_clients_client_uuid_certificates_a

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_certificates_attr_up

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_certificates_a

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_certificates_attr_up

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_certificates_a

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_client_secret

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_client_secret

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_client_secret

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_client_secret_rotated

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_clients_client_uuid_client_secret_rota

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_client_secret_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_default_client_scopes

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_default_client

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_clients_client_uuid_default_client_scopes

**Environment variables**

No environment variables required

**Input schema**

- `clientScopeId` (string)

### delete_admin_realms_realm_clients_client_uuid_default_client_sco

**Environment variables**

No environment variables required

**Input schema**

- `clientScopeId` (string)

### parameters_admin_realms_realm_clients_client_uuid_default_client

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_evaluate_scopes_gener

**Environment variables**

No environment variables required

**Input schema**

- `audience` (string)
- `scope` (string)
- `userId` (string)

### parameters_admin_realms_realm_clients_client_uuid_evaluate_scope

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_evaluate_scopes_gener

**Environment variables**

No environment variables required

**Input schema**

- `audience` (string)
- `scope` (string)
- `userId` (string)

### parameters_admin_realms_realm_clients_client_uuid_evaluate_scope

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_evaluate_scopes_gener

**Environment variables**

No environment variables required

**Input schema**

- `scope` (string)
- `userId` (string)

### parameters_admin_realms_realm_clients_client_uuid_evaluate_scope

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_evaluate_scopes_proto

**Environment variables**

No environment variables required

**Input schema**

- `scope` (string)

### parameters_admin_realms_realm_clients_client_uuid_evaluate_scope

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_evaluate_scopes_scope

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_evaluate_scope

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_evaluate_scopes_scope

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_evaluate_scope

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_installation_provider

**Environment variables**

No environment variables required

**Input schema**

- `providerId` (string)

### parameters_admin_realms_realm_clients_client_uuid_installation_p

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_management_permission

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_clients_client_uuid_management_permission

**Environment variables**

No environment variables required

**Input schema**

- `enabled` (boolean)
- `resource` (string)
- `scopePermissions` (object)

### parameters_admin_realms_realm_clients_client_uuid_management_per

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_nodes

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_nodes

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_clients_client_uuid_nodes_node_

**Environment variables**

No environment variables required

**Input schema**

- `node` (string)

### parameters_admin_realms_realm_clients_client_uuid_nodes_node_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_offline_session_count

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_offline_sessio

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_offline_sessions

**Environment variables**

No environment variables required

**Input schema**

- `first` (integer)
- `max` (integer)

### parameters_admin_realms_realm_clients_client_uuid_offline_sessio

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_optional_client_scope

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_optional_clien

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_clients_client_uuid_optional_client_scope

**Environment variables**

No environment variables required

**Input schema**

- `clientScopeId` (string)

### delete_admin_realms_realm_clients_client_uuid_optional_client_sc

**Environment variables**

No environment variables required

**Input schema**

- `clientScopeId` (string)

### parameters_admin_realms_realm_clients_client_uuid_optional_clien

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_protocol_mappers_add

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_protocol_mappe

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_protocol_mappers_mode

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_protocol_mappers_mod

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `protocol` (string)
- `protocolMapper` (string)
- `config` (object)

### parameters_admin_realms_realm_clients_client_uuid_protocol_mappe

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_protocol_mappers_mode

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### put_admin_realms_realm_clients_client_uuid_protocol_mappers_mode

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `b_id` (string)
- `name` (string)
- `protocol` (string)
- `protocolMapper` (string)
- `config` (object)

### delete_admin_realms_realm_clients_client_uuid_protocol_mappers_m

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### parameters_admin_realms_realm_clients_client_uuid_protocol_mappe

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_protocol_mappers_prot

**Environment variables**

No environment variables required

**Input schema**

- `protocol` (string)

### parameters_admin_realms_realm_clients_client_uuid_protocol_mappe

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_push_revocation

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_push_revocatio

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_registration_access_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_registration_a

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_roles

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)
- `first` (integer)
- `max` (integer)
- `search` (string)

### post_admin_realms_realm_clients_client_uuid_roles

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `composite` (boolean)
- `composites` (object)
- `clientRole` (boolean)
- `containerId` (string)
- `attributes` (object)

### parameters_admin_realms_realm_clients_client_uuid_roles

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_roles_role_name_

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### put_admin_realms_realm_clients_client_uuid_roles_role_name_

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)
- `id` (string)
- `name` (string)
- `description` (string)
- `composite` (boolean)
- `composites` (object)
- `clientRole` (boolean)
- `containerId` (string)
- `attributes` (object)

### delete_admin_realms_realm_clients_client_uuid_roles_role_name_

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### parameters_admin_realms_realm_clients_client_uuid_roles_role_nam

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_roles_role_name_compo

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### post_admin_realms_realm_clients_client_uuid_roles_role_name_comp

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### delete_admin_realms_realm_clients_client_uuid_roles_role_name_co

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### parameters_admin_realms_realm_clients_client_uuid_roles_role_nam

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_roles_role_name_compo

**Environment variables**

No environment variables required

**Input schema**

- `client-uuid` (string)
- `role-name` (string)

### parameters_admin_realms_realm_clients_client_uuid_roles_role_nam

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_roles_role_name_compo

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### parameters_admin_realms_realm_clients_client_uuid_roles_role_nam

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_roles_role_name_group

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)
- `briefRepresentation` (boolean)
- `first` (integer)
- `max` (integer)

### parameters_admin_realms_realm_clients_client_uuid_roles_role_nam

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_roles_role_name_manag

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### put_admin_realms_realm_clients_client_uuid_roles_role_name_manag

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)
- `enabled` (boolean)
- `resource` (string)
- `scopePermissions` (object)

### parameters_admin_realms_realm_clients_client_uuid_roles_role_nam

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_roles_role_name_users

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)
- `briefRepresentation` (boolean)
- `first` (integer)
- `max` (integer)

### parameters_admin_realms_realm_clients_client_uuid_roles_role_nam

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_scope_mappings

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_scope_mappings

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_scope_mappings_client

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_scope_mappings_clien

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_clients_client_uuid_scope_mappings_cli

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_scope_mappings

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_scope_mappings_client

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_scope_mappings

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_scope_mappings_client

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)

### parameters_admin_realms_realm_clients_client_uuid_scope_mappings

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_scope_mappings_realm

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_clients_client_uuid_scope_mappings_realm

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_clients_client_uuid_scope_mappings_rea

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_scope_mappings

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_scope_mappings_realm_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_scope_mappings

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_scope_mappings_realm_

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)

### parameters_admin_realms_realm_clients_client_uuid_scope_mappings

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_service_account_user

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_service_accoun

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_session_count

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_session_count

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_test_nodes_available

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_clients_client_uuid_test_nodes_ava

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_clients_client_uuid_user_sessions

**Environment variables**

No environment variables required

**Input schema**

- `first` (integer)
- `max` (integer)

### parameters_admin_realms_realm_clients_client_uuid_user_sessions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_components

**Environment variables**

No environment variables required

**Input schema**

- `name` (string)
- `parent` (string)
- `type` (string)

### post_admin_realms_realm_components

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `providerId` (string)
- `providerType` (string)
- `parentId` (string)
- `subType` (string)
- `config` (object)

### parameters_admin_realms_realm_components

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_components_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### put_admin_realms_realm_components_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `b_id` (string)
- `name` (string)
- `providerId` (string)
- `providerType` (string)
- `parentId` (string)
- `subType` (string)
- `config` (object)

### delete_admin_realms_realm_components_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### parameters_admin_realms_realm_components_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_components_id_sub_component_types

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `type` (string)

### parameters_admin_realms_realm_components_id_sub_component_types

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_credential_registrators

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_credential_registrators

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_default_default_client_scopes

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_default_default_client_scopes

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_default_default_client_scopes_clientscope

**Environment variables**

No environment variables required

**Input schema**

- `clientScopeId` (string)

### delete_admin_realms_realm_default_default_client_scopes_clientsc

**Environment variables**

No environment variables required

**Input schema**

- `clientScopeId` (string)

### parameters_admin_realms_realm_default_default_client_scopes_clie

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_default_groups

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_default_groups

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_default_groups_groupid_

**Environment variables**

No environment variables required

**Input schema**

- `groupId` (string)

### delete_admin_realms_realm_default_groups_groupid_

**Environment variables**

No environment variables required

**Input schema**

- `groupId` (string)

### parameters_admin_realms_realm_default_groups_groupid_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_default_optional_client_scopes

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_default_optional_client_scopes

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_default_optional_client_scopes_clientscop

**Environment variables**

No environment variables required

**Input schema**

- `clientScopeId` (string)

### delete_admin_realms_realm_default_optional_client_scopes_clients

**Environment variables**

No environment variables required

**Input schema**

- `clientScopeId` (string)

### parameters_admin_realms_realm_default_optional_client_scopes_cli

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_events

**Environment variables**

No environment variables required

**Input schema**

- `client` (string)
- `dateFrom` (string)
- `dateTo` (string)
- `direction` (string)
- `first` (integer)
- `ipAddress` (string)
- `max` (integer)
- `type` (array)
- `user` (string)

### delete_admin_realms_realm_events

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_events

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_events_config

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_events_config

**Environment variables**

No environment variables required

**Input schema**

- `eventsEnabled` (boolean)
- `eventsExpiration` (integer)
- `eventsListeners` (array)
- `enabledEventTypes` (array)
- `adminEventsEnabled` (boolean)
- `adminEventsDetailsEnabled` (boolean)

### parameters_admin_realms_realm_events_config

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_group_by_path_path_

**Environment variables**

No environment variables required

**Input schema**

- `path` (string)

### parameters_admin_realms_realm_group_by_path_path_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_groups

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)
- `exact` (boolean)
- `first` (integer)
- `max` (integer)
- `populateHierarchy` (boolean)
- `q` (string)
- `search` (string)

### post_admin_realms_realm_groups

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `path` (string)
- `parentId` (string)
- `subGroupCount` (integer)
- `subGroups` (array)
- `attributes` (object)
- `realmRoles` (array)
- `clientRoles` (object)
- `access` (object)

### parameters_admin_realms_realm_groups

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_groups_count

**Environment variables**

No environment variables required

**Input schema**

- `search` (string)
- `top` (boolean)

### parameters_admin_realms_realm_groups_count

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_groups_group_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_groups_group_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `path` (string)
- `parentId` (string)
- `subGroupCount` (integer)
- `subGroups` (array)
- `attributes` (object)
- `realmRoles` (array)
- `clientRoles` (object)
- `access` (object)

### delete_admin_realms_realm_groups_group_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_groups_group_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_groups_group_id_children

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)
- `exact` (boolean)
- `first` (integer)
- `max` (integer)
- `search` (string)

### post_admin_realms_realm_groups_group_id_children

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `path` (string)
- `parentId` (string)
- `subGroupCount` (integer)
- `subGroups` (array)
- `attributes` (object)
- `realmRoles` (array)
- `clientRoles` (object)
- `access` (object)

### parameters_admin_realms_realm_groups_group_id_children

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_groups_group_id_management_permissions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_groups_group_id_management_permissions

**Environment variables**

No environment variables required

**Input schema**

- `enabled` (boolean)
- `resource` (string)
- `scopePermissions` (object)

### parameters_admin_realms_realm_groups_group_id_management_permiss

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_groups_group_id_members

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)
- `first` (integer)
- `max` (integer)

### parameters_admin_realms_realm_groups_group_id_members

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_groups_group_id_role_mappings

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_groups_group_id_role_mappings

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_groups_group_id_role_mappings_clients_cli

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_groups_group_id_role_mappings_clients_cl

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_groups_group_id_role_mappings_clients_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_groups_group_id_role_mappings_clie

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_groups_group_id_role_mappings_clients_cli

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_groups_group_id_role_mappings_clie

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_groups_group_id_role_mappings_clients_cli

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)

### parameters_admin_realms_realm_groups_group_id_role_mappings_clie

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_groups_group_id_role_mappings_realm

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_groups_group_id_role_mappings_realm

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_groups_group_id_role_mappings_realm

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_groups_group_id_role_mappings_real

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_groups_group_id_role_mappings_realm_avail

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_groups_group_id_role_mappings_real

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_groups_group_id_role_mappings_realm_compo

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)

### parameters_admin_realms_realm_groups_group_id_role_mappings_real

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_identity_provider_import_config

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_identity_provider_import_config

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_identity_provider_instances

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)
- `first` (integer)
- `max` (integer)
- `realmOnly` (boolean)
- `search` (string)

### post_admin_realms_realm_identity_provider_instances

**Environment variables**

No environment variables required

**Input schema**

- `alias` (string)
- `displayName` (string)
- `internalId` (string)
- `providerId` (string)
- `enabled` (boolean)
- `trustEmail` (boolean)
- `storeToken` (boolean)
- `addReadTokenRoleOnCreate` (boolean)
- `authenticateByDefault` (boolean)
- `linkOnly` (boolean)
- `hideOnLogin` (boolean)
- `firstBrokerLoginFlowAlias` (string)
- `postBrokerLoginFlowAlias` (string)
- `organizationId` (string)
- `config` (object)

### parameters_admin_realms_realm_identity_provider_instances

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_identity_provider_instances_alias_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_identity_provider_instances_alias_

**Environment variables**

No environment variables required

**Input schema**

- `alias` (string)
- `displayName` (string)
- `internalId` (string)
- `providerId` (string)
- `enabled` (boolean)
- `trustEmail` (boolean)
- `storeToken` (boolean)
- `addReadTokenRoleOnCreate` (boolean)
- `authenticateByDefault` (boolean)
- `linkOnly` (boolean)
- `hideOnLogin` (boolean)
- `firstBrokerLoginFlowAlias` (string)
- `postBrokerLoginFlowAlias` (string)
- `organizationId` (string)
- `config` (object)

### delete_admin_realms_realm_identity_provider_instances_alias_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_identity_provider_instances_alias_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_identity_provider_instances_alias_export

**Environment variables**

No environment variables required

**Input schema**

- `format` (string)

### parameters_admin_realms_realm_identity_provider_instances_alias_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_identity_provider_instances_alias_managem

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_identity_provider_instances_alias_managem

**Environment variables**

No environment variables required

**Input schema**

- `enabled` (boolean)
- `resource` (string)
- `scopePermissions` (object)

### parameters_admin_realms_realm_identity_provider_instances_alias_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_identity_provider_instances_alias_mapper_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_identity_provider_instances_alias_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_identity_provider_instances_alias_mappers

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_identity_provider_instances_alias_mapper

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `identityProviderAlias` (string)
- `identityProviderMapper` (string)
- `config` (object)

### parameters_admin_realms_realm_identity_provider_instances_alias_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_identity_provider_instances_alias_mappers

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### put_admin_realms_realm_identity_provider_instances_alias_mappers

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `b_id` (string)
- `name` (string)
- `identityProviderAlias` (string)
- `identityProviderMapper` (string)
- `config` (object)

### delete_admin_realms_realm_identity_provider_instances_alias_mapp

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)

### parameters_admin_realms_realm_identity_provider_instances_alias_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_identity_provider_instances_alias_reload_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_identity_provider_instances_alias_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_identity_provider_providers_provider_id_

**Environment variables**

No environment variables required

**Input schema**

- `provider_id` (string)

### parameters_admin_realms_realm_identity_provider_providers_provid

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_keys

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_keys

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_localization

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_localization

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_localization_locale_

**Environment variables**

No environment variables required

**Input schema**

- `locale` (string)
- `useRealmDefaultLocaleFallback` (boolean)

### post_admin_realms_realm_localization_locale_

**Environment variables**

No environment variables required

**Input schema**

- `locale` (string)

### delete_admin_realms_realm_localization_locale_

**Environment variables**

No environment variables required

**Input schema**

- `locale` (string)

### parameters_admin_realms_realm_localization_locale_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_localization_locale_key_

**Environment variables**

No environment variables required

**Input schema**

- `key` (string)
- `locale` (string)

### put_admin_realms_realm_localization_locale_key_

**Environment variables**

No environment variables required

**Input schema**

- `key` (string)
- `locale` (string)

### delete_admin_realms_realm_localization_locale_key_

**Environment variables**

No environment variables required

**Input schema**

- `key` (string)
- `locale` (string)

### parameters_admin_realms_realm_localization_locale_key_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_logout_all

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_logout_all

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_organizations

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)
- `exact` (boolean)
- `first` (integer)
- `max` (integer)
- `q` (string)
- `search` (string)

### post_admin_realms_realm_organizations

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `alias` (string)
- `enabled` (boolean)
- `description` (string)
- `redirectUrl` (string)
- `attributes` (object)
- `domains` (array)
- `members` (array)
- `identityProviders` (array)

### parameters_admin_realms_realm_organizations

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_organizations_members_member_id_organizat

**Environment variables**

No environment variables required

**Input schema**

- `member-id` (string)

### parameters_admin_realms_realm_organizations_members_member_id_or

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_organizations_org_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_organizations_org_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `alias` (string)
- `enabled` (boolean)
- `description` (string)
- `redirectUrl` (string)
- `attributes` (object)
- `domains` (array)
- `members` (array)
- `identityProviders` (array)

### delete_admin_realms_realm_organizations_org_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_organizations_org_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_organizations_org_id_identity_providers

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_organizations_org_id_identity_providers

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_organizations_org_id_identity_prov

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_organizations_org_id_identity_providers_a

**Environment variables**

No environment variables required

**Input schema**

- `alias` (string)

### delete_admin_realms_realm_organizations_org_id_identity_provider

**Environment variables**

No environment variables required

**Input schema**

- `alias` (string)

### parameters_admin_realms_realm_organizations_org_id_identity_prov

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_organizations_org_id_members

**Environment variables**

No environment variables required

**Input schema**

- `exact` (boolean)
- `first` (integer)
- `max` (integer)
- `membershipType` (string)
- `search` (string)

### post_admin_realms_realm_organizations_org_id_members

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_organizations_org_id_members

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_organizations_org_id_members_count

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_organizations_org_id_members_count

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_organizations_org_id_members_invite_exis

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_organizations_org_id_members_invit

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_organizations_org_id_members_invite_user

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_organizations_org_id_members_invit

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_organizations_org_id_members_member_id_

**Environment variables**

No environment variables required

**Input schema**

- `member-id` (string)

### delete_admin_realms_realm_organizations_org_id_members_member_id

**Environment variables**

No environment variables required

**Input schema**

- `member-id` (string)

### parameters_admin_realms_realm_organizations_org_id_members_membe

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_organizations_org_id_members_member_id_or

**Environment variables**

No environment variables required

**Input schema**

- `member-id` (string)

### parameters_admin_realms_realm_organizations_org_id_members_membe

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_partial_export

**Environment variables**

No environment variables required

**Input schema**

- `exportClients` (boolean)
- `exportGroupsAndRoles` (boolean)

### parameters_admin_realms_realm_partial_export

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_partialimport

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_partialimport

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_push_revocation

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_push_revocation

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_roles

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)
- `first` (integer)
- `max` (integer)
- `search` (string)

### post_admin_realms_realm_roles

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `name` (string)
- `description` (string)
- `composite` (boolean)
- `composites` (object)
- `clientRole` (boolean)
- `containerId` (string)
- `attributes` (object)

### parameters_admin_realms_realm_roles

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_roles_by_id_role_id_

**Environment variables**

No environment variables required

**Input schema**

- `role-id` (string)

### put_admin_realms_realm_roles_by_id_role_id_

**Environment variables**

No environment variables required

**Input schema**

- `role-id` (string)
- `id` (string)
- `name` (string)
- `description` (string)
- `composite` (boolean)
- `composites` (object)
- `clientRole` (boolean)
- `containerId` (string)
- `attributes` (object)

### delete_admin_realms_realm_roles_by_id_role_id_

**Environment variables**

No environment variables required

**Input schema**

- `role-id` (string)

### parameters_admin_realms_realm_roles_by_id_role_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_roles_by_id_role_id_composites

**Environment variables**

No environment variables required

**Input schema**

- `role-id` (string)
- `first` (integer)
- `max` (integer)
- `search` (string)

### post_admin_realms_realm_roles_by_id_role_id_composites

**Environment variables**

No environment variables required

**Input schema**

- `role-id` (string)

### delete_admin_realms_realm_roles_by_id_role_id_composites

**Environment variables**

No environment variables required

**Input schema**

- `role-id` (string)

### parameters_admin_realms_realm_roles_by_id_role_id_composites

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_roles_by_id_role_id_composites_clients_cl

**Environment variables**

No environment variables required

**Input schema**

- `clientUuid` (string)
- `role-id` (string)

### parameters_admin_realms_realm_roles_by_id_role_id_composites_cli

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_roles_by_id_role_id_composites_realm

**Environment variables**

No environment variables required

**Input schema**

- `role-id` (string)

### parameters_admin_realms_realm_roles_by_id_role_id_composites_rea

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_roles_by_id_role_id_management_permission

**Environment variables**

No environment variables required

**Input schema**

- `role-id` (string)

### put_admin_realms_realm_roles_by_id_role_id_management_permission

**Environment variables**

No environment variables required

**Input schema**

- `role-id` (string)
- `enabled` (boolean)
- `resource` (string)
- `scopePermissions` (object)

### parameters_admin_realms_realm_roles_by_id_role_id_management_per

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_roles_role_name_

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### put_admin_realms_realm_roles_role_name_

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)
- `id` (string)
- `name` (string)
- `description` (string)
- `composite` (boolean)
- `composites` (object)
- `clientRole` (boolean)
- `containerId` (string)
- `attributes` (object)

### delete_admin_realms_realm_roles_role_name_

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### parameters_admin_realms_realm_roles_role_name_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_roles_role_name_composites

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### post_admin_realms_realm_roles_role_name_composites

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### delete_admin_realms_realm_roles_role_name_composites

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### parameters_admin_realms_realm_roles_role_name_composites

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_roles_role_name_composites_clients_client

**Environment variables**

No environment variables required

**Input schema**

- `client-uuid` (string)
- `role-name` (string)

### parameters_admin_realms_realm_roles_role_name_composites_clients

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_roles_role_name_composites_realm

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### parameters_admin_realms_realm_roles_role_name_composites_realm

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_roles_role_name_groups

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)
- `briefRepresentation` (boolean)
- `first` (integer)
- `max` (integer)

### parameters_admin_realms_realm_roles_role_name_groups

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_roles_role_name_management_permissions

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)

### put_admin_realms_realm_roles_role_name_management_permissions

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)
- `enabled` (boolean)
- `resource` (string)
- `scopePermissions` (object)

### parameters_admin_realms_realm_roles_role_name_management_permiss

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_roles_role_name_users

**Environment variables**

No environment variables required

**Input schema**

- `role-name` (string)
- `briefRepresentation` (boolean)
- `first` (integer)
- `max` (integer)

### parameters_admin_realms_realm_roles_role_name_users

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_sessions_session_

**Environment variables**

No environment variables required

**Input schema**

- `session` (string)
- `isOffline` (boolean)

### parameters_admin_realms_realm_sessions_session_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_testsmtpconnection

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_testsmtpconnection

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)
- `email` (string)
- `emailVerified` (boolean)
- `enabled` (boolean)
- `exact` (boolean)
- `first` (integer)
- `firstName` (string)
- `idpAlias` (string)
- `idpUserId` (string)
- `lastName` (string)
- `max` (integer)
- `q` (string)
- `search` (string)
- `username` (string)

### post_admin_realms_realm_users

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `username` (string)
- `firstName` (string)
- `lastName` (string)
- `email` (string)
- `emailVerified` (boolean)
- `attributes` (object)
- `userProfileMetadata` (object)
- `self` (string)
- `origin` (string)
- `createdTimestamp` (integer)
- `enabled` (boolean)
- `totp` (boolean)
- `federationLink` (string)
- `serviceAccountClientId` (string)
- `credentials` (array)
- `disableableCredentialTypes` (array)
- `requiredActions` (array)
- `federatedIdentities` (array)
- `realmRoles` (array)
- `clientRoles` (object)
- `clientConsents` (array)
- `notBefore` (integer)
- `groups` (array)
- `access` (object)

### parameters_admin_realms_realm_users

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_management_permissions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_users_management_permissions

**Environment variables**

No environment variables required

**Input schema**

- `enabled` (boolean)
- `resource` (string)
- `scopePermissions` (object)

### parameters_admin_realms_realm_users_management_permissions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_count

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `emailVerified` (boolean)
- `enabled` (boolean)
- `firstName` (string)
- `lastName` (string)
- `q` (string)
- `search` (string)
- `username` (string)

### parameters_admin_realms_realm_users_count

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_profile

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_users_profile

**Environment variables**

No environment variables required

**Input schema**

- `attributes` (array)
- `groups` (array)
- `unmanagedAttributePolicy` (string)

### parameters_admin_realms_realm_users_profile

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_profile_metadata

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_profile_metadata

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_

**Environment variables**

No environment variables required

**Input schema**

- `userProfileMetadata` (boolean)

### put_admin_realms_realm_users_user_id_

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `username` (string)
- `firstName` (string)
- `lastName` (string)
- `email` (string)
- `emailVerified` (boolean)
- `attributes` (object)
- `userProfileMetadata` (object)
- `self` (string)
- `origin` (string)
- `createdTimestamp` (integer)
- `enabled` (boolean)
- `totp` (boolean)
- `federationLink` (string)
- `serviceAccountClientId` (string)
- `credentials` (array)
- `disableableCredentialTypes` (array)
- `requiredActions` (array)
- `federatedIdentities` (array)
- `realmRoles` (array)
- `clientRoles` (object)
- `clientConsents` (array)
- `notBefore` (integer)
- `groups` (array)
- `access` (object)

### delete_admin_realms_realm_users_user_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_configured_user_storage_cre

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_configured_user_stor

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_consents

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_consents

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_users_user_id_consents_client_

**Environment variables**

No environment variables required

**Input schema**

- `client` (string)

### parameters_admin_realms_realm_users_user_id_consents_client_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_credentials

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_credentials

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_users_user_id_credentials_credentialid

**Environment variables**

No environment variables required

**Input schema**

- `credentialId` (string)

### parameters_admin_realms_realm_users_user_id_credentials_credenti

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_users_user_id_credentials_credentialid_m

**Environment variables**

No environment variables required

**Input schema**

- `credentialId` (string)
- `newPreviousCredentialId` (string)

### parameters_admin_realms_realm_users_user_id_credentials_credenti

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_users_user_id_credentials_credentialid_m

**Environment variables**

No environment variables required

**Input schema**

- `credentialId` (string)

### parameters_admin_realms_realm_users_user_id_credentials_credenti

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_users_user_id_credentials_credentialid_us

**Environment variables**

No environment variables required

**Input schema**

- `credentialId` (string)

### parameters_admin_realms_realm_users_user_id_credentials_credenti

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_users_user_id_disable_credential_types

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_disable_credential_t

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_users_user_id_execute_actions_email

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (string)
- `lifespan` (integer)
- `redirect_uri` (string)

### parameters_admin_realms_realm_users_user_id_execute_actions_emai

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_federated_identity

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_federated_identity

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_users_user_id_federated_identity_provide

**Environment variables**

No environment variables required

**Input schema**

- `provider` (string)

### delete_admin_realms_realm_users_user_id_federated_identity_provi

**Environment variables**

No environment variables required

**Input schema**

- `provider` (string)

### parameters_admin_realms_realm_users_user_id_federated_identity_p

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_groups

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)
- `first` (integer)
- `max` (integer)
- `search` (string)

### parameters_admin_realms_realm_users_user_id_groups

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_groups_count

**Environment variables**

No environment variables required

**Input schema**

- `search` (string)

### parameters_admin_realms_realm_users_user_id_groups_count

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_users_user_id_groups_groupid_

**Environment variables**

No environment variables required

**Input schema**

- `groupId` (string)

### delete_admin_realms_realm_users_user_id_groups_groupid_

**Environment variables**

No environment variables required

**Input schema**

- `groupId` (string)

### parameters_admin_realms_realm_users_user_id_groups_groupid_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_users_user_id_impersonation

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_impersonation

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_users_user_id_logout

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_logout

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_offline_sessions_clientuuid

**Environment variables**

No environment variables required

**Input schema**

- `clientUuid` (string)

### parameters_admin_realms_realm_users_user_id_offline_sessions_cli

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_users_user_id_reset_password

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `type` (string)
- `userLabel` (string)
- `createdDate` (integer)
- `secretData` (string)
- `credentialData` (string)
- `priority` (integer)
- `value` (string)
- `temporary` (boolean)
- `federationLink` (string)

### parameters_admin_realms_realm_users_user_id_reset_password

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_users_user_id_reset_password_email

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (string)
- `redirect_uri` (string)

### parameters_admin_realms_realm_users_user_id_reset_password_email

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_role_mappings

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_role_mappings

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_role_mappings_clients_clien

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_users_user_id_role_mappings_clients_clie

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_users_user_id_role_mappings_clients_cl

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_role_mappings_client

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_role_mappings_clients_clien

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_role_mappings_client

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_role_mappings_clients_clien

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)

### parameters_admin_realms_realm_users_user_id_role_mappings_client

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_role_mappings_realm

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### post_admin_realms_realm_users_user_id_role_mappings_realm

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_admin_realms_realm_users_user_id_role_mappings_realm

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_role_mappings_realm

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_role_mappings_realm_availab

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_role_mappings_realm_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_role_mappings_realm_composi

**Environment variables**

No environment variables required

**Input schema**

- `briefRepresentation` (boolean)

### parameters_admin_realms_realm_users_user_id_role_mappings_realm_

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### put_admin_realms_realm_users_user_id_send_verify_email

**Environment variables**

No environment variables required

**Input schema**

- `client_id` (string)
- `lifespan` (integer)
- `redirect_uri` (string)

### parameters_admin_realms_realm_users_user_id_send_verify_email

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_sessions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_sessions

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_admin_realms_realm_users_user_id_unmanagedattributes

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### parameters_admin_realms_realm_users_user_id_unmanagedattributes

**Environment variables**

No environment variables required

**Input schema**

No input parameters
