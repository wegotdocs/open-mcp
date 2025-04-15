import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_",
  "toolDescription": "Update the top-level information of the realm Any user, roles or client information in the representation will be ignored.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "realm": "realm",
      "displayName": "displayName",
      "displayNameHtml": "displayNameHtml",
      "notBefore": "notBefore",
      "defaultSignatureAlgorithm": "defaultSignatureAlgorithm",
      "revokeRefreshToken": "revokeRefreshToken",
      "refreshTokenMaxReuse": "refreshTokenMaxReuse",
      "accessTokenLifespan": "accessTokenLifespan",
      "accessTokenLifespanForImplicitFlow": "accessTokenLifespanForImplicitFlow",
      "ssoSessionIdleTimeout": "ssoSessionIdleTimeout",
      "ssoSessionMaxLifespan": "ssoSessionMaxLifespan",
      "ssoSessionIdleTimeoutRememberMe": "ssoSessionIdleTimeoutRememberMe",
      "ssoSessionMaxLifespanRememberMe": "ssoSessionMaxLifespanRememberMe",
      "offlineSessionIdleTimeout": "offlineSessionIdleTimeout",
      "offlineSessionMaxLifespanEnabled": "offlineSessionMaxLifespanEnabled",
      "offlineSessionMaxLifespan": "offlineSessionMaxLifespan",
      "clientSessionIdleTimeout": "clientSessionIdleTimeout",
      "clientSessionMaxLifespan": "clientSessionMaxLifespan",
      "clientOfflineSessionIdleTimeout": "clientOfflineSessionIdleTimeout",
      "clientOfflineSessionMaxLifespan": "clientOfflineSessionMaxLifespan",
      "accessCodeLifespan": "accessCodeLifespan",
      "accessCodeLifespanUserAction": "accessCodeLifespanUserAction",
      "accessCodeLifespanLogin": "accessCodeLifespanLogin",
      "actionTokenGeneratedByAdminLifespan": "actionTokenGeneratedByAdminLifespan",
      "actionTokenGeneratedByUserLifespan": "actionTokenGeneratedByUserLifespan",
      "oauth2DeviceCodeLifespan": "oauth2DeviceCodeLifespan",
      "oauth2DevicePollingInterval": "oauth2DevicePollingInterval",
      "enabled": "enabled",
      "sslRequired": "sslRequired",
      "registrationAllowed": "registrationAllowed",
      "registrationEmailAsUsername": "registrationEmailAsUsername",
      "rememberMe": "rememberMe",
      "verifyEmail": "verifyEmail",
      "loginWithEmailAllowed": "loginWithEmailAllowed",
      "duplicateEmailsAllowed": "duplicateEmailsAllowed",
      "resetPasswordAllowed": "resetPasswordAllowed",
      "editUsernameAllowed": "editUsernameAllowed",
      "bruteForceProtected": "bruteForceProtected",
      "permanentLockout": "permanentLockout",
      "maxTemporaryLockouts": "maxTemporaryLockouts",
      "bruteForceStrategy": "bruteForceStrategy",
      "maxFailureWaitSeconds": "maxFailureWaitSeconds",
      "minimumQuickLoginWaitSeconds": "minimumQuickLoginWaitSeconds",
      "waitIncrementSeconds": "waitIncrementSeconds",
      "quickLoginCheckMilliSeconds": "quickLoginCheckMilliSeconds",
      "maxDeltaTimeSeconds": "maxDeltaTimeSeconds",
      "failureFactor": "failureFactor",
      "roles": "roles",
      "groups": "groups",
      "defaultRole": "defaultRole",
      "adminPermissionsClient": "adminPermissionsClient",
      "defaultGroups": "defaultGroups",
      "passwordPolicy": "passwordPolicy",
      "otpPolicyType": "otpPolicyType",
      "otpPolicyAlgorithm": "otpPolicyAlgorithm",
      "otpPolicyInitialCounter": "otpPolicyInitialCounter",
      "otpPolicyDigits": "otpPolicyDigits",
      "otpPolicyLookAheadWindow": "otpPolicyLookAheadWindow",
      "otpPolicyPeriod": "otpPolicyPeriod",
      "otpPolicyCodeReusable": "otpPolicyCodeReusable",
      "otpSupportedApplications": "otpSupportedApplications",
      "localizationTexts": "localizationTexts",
      "webAuthnPolicyRpEntityName": "webAuthnPolicyRpEntityName",
      "webAuthnPolicySignatureAlgorithms": "webAuthnPolicySignatureAlgorithms",
      "webAuthnPolicyRpId": "webAuthnPolicyRpId",
      "webAuthnPolicyAttestationConveyancePreference": "webAuthnPolicyAttestationConveyancePreference",
      "webAuthnPolicyAuthenticatorAttachment": "webAuthnPolicyAuthenticatorAttachment",
      "webAuthnPolicyRequireResidentKey": "webAuthnPolicyRequireResidentKey",
      "webAuthnPolicyUserVerificationRequirement": "webAuthnPolicyUserVerificationRequirement",
      "webAuthnPolicyCreateTimeout": "webAuthnPolicyCreateTimeout",
      "webAuthnPolicyAvoidSameAuthenticatorRegister": "webAuthnPolicyAvoidSameAuthenticatorRegister",
      "webAuthnPolicyAcceptableAaguids": "webAuthnPolicyAcceptableAaguids",
      "webAuthnPolicyExtraOrigins": "webAuthnPolicyExtraOrigins",
      "webAuthnPolicyPasswordlessRpEntityName": "webAuthnPolicyPasswordlessRpEntityName",
      "webAuthnPolicyPasswordlessSignatureAlgorithms": "webAuthnPolicyPasswordlessSignatureAlgorithms",
      "webAuthnPolicyPasswordlessRpId": "webAuthnPolicyPasswordlessRpId",
      "webAuthnPolicyPasswordlessAttestationConveyancePreference": "webAuthnPolicyPasswordlessAttestationConveyancePreference",
      "webAuthnPolicyPasswordlessAuthenticatorAttachment": "webAuthnPolicyPasswordlessAuthenticatorAttachment",
      "webAuthnPolicyPasswordlessRequireResidentKey": "webAuthnPolicyPasswordlessRequireResidentKey",
      "webAuthnPolicyPasswordlessUserVerificationRequirement": "webAuthnPolicyPasswordlessUserVerificationRequirement",
      "webAuthnPolicyPasswordlessCreateTimeout": "webAuthnPolicyPasswordlessCreateTimeout",
      "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister": "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister",
      "webAuthnPolicyPasswordlessAcceptableAaguids": "webAuthnPolicyPasswordlessAcceptableAaguids",
      "webAuthnPolicyPasswordlessExtraOrigins": "webAuthnPolicyPasswordlessExtraOrigins",
      "clientProfiles": "clientProfiles",
      "clientPolicies": "clientPolicies",
      "users": "users",
      "federatedUsers": "federatedUsers",
      "scopeMappings": "scopeMappings",
      "clientScopeMappings": "clientScopeMappings",
      "clients": "clients",
      "clientScopes": "clientScopes",
      "defaultDefaultClientScopes": "defaultDefaultClientScopes",
      "defaultOptionalClientScopes": "defaultOptionalClientScopes",
      "browserSecurityHeaders": "browserSecurityHeaders",
      "smtpServer": "smtpServer",
      "userFederationProviders": "userFederationProviders",
      "userFederationMappers": "userFederationMappers",
      "loginTheme": "loginTheme",
      "accountTheme": "accountTheme",
      "adminTheme": "adminTheme",
      "emailTheme": "emailTheme",
      "eventsEnabled": "eventsEnabled",
      "eventsExpiration": "eventsExpiration",
      "eventsListeners": "eventsListeners",
      "enabledEventTypes": "enabledEventTypes",
      "adminEventsEnabled": "adminEventsEnabled",
      "adminEventsDetailsEnabled": "adminEventsDetailsEnabled",
      "identityProviders": "identityProviders",
      "identityProviderMappers": "identityProviderMappers",
      "protocolMappers": "protocolMappers",
      "components": "components",
      "internationalizationEnabled": "internationalizationEnabled",
      "supportedLocales": "supportedLocales",
      "defaultLocale": "defaultLocale",
      "authenticationFlows": "authenticationFlows",
      "authenticatorConfig": "authenticatorConfig",
      "requiredActions": "requiredActions",
      "browserFlow": "browserFlow",
      "registrationFlow": "registrationFlow",
      "directGrantFlow": "directGrantFlow",
      "resetCredentialsFlow": "resetCredentialsFlow",
      "clientAuthenticationFlow": "clientAuthenticationFlow",
      "dockerAuthenticationFlow": "dockerAuthenticationFlow",
      "firstBrokerLoginFlow": "firstBrokerLoginFlow",
      "attributes": "attributes",
      "keycloakVersion": "keycloakVersion",
      "userManagedAccessAllowed": "userManagedAccessAllowed",
      "organizationsEnabled": "organizationsEnabled",
      "organizations": "organizations",
      "verifiableCredentialsEnabled": "verifiableCredentialsEnabled",
      "adminPermissionsEnabled": "adminPermissionsEnabled",
      "oAuth2DeviceCodeLifespan": "oAuth2DeviceCodeLifespan",
      "oAuth2DevicePollingInterval": "oAuth2DevicePollingInterval"
    }
  },
  inputParamsSchema
}

export default tool