import { z } from "zod"

export const inputParamsSchema = {
  "apiUrl": z.string().describe("Set api_url to the resource that returns OpenID UserInfo compatible information."),
  "authUrl": z.string().describe("Authentication endpoint of idp."),
  "enabled": z.boolean().describe("enable or disable generic oauth login"),
  "name": z.string().describe("Display name for the oAuth provider").optional(),
  "oauthClientId": z.string().describe("Oauth client id for auth endpoint."),
  "oauthClientSecret": z.string().describe("Oauth client secret for auth endpoint."),
  "roleAttributePath": z.string().describe("Grafana checks for the presence of a role using the JMESPath specified via the role_attribute_path configuration option. The JMESPath is applied to the id_token first. If there is no match, then the UserInfo endpoint specified via the api_url configuration option is tried next. The result after evaluation of the role_attribute_path JMESPath expression should be a valid Grafana role, for example, Viewer, Editor or Admin\nFor example: contains(roles[\\*], 'grafana-admin') && 'Admin' || contains(roles[\\*], 'grafana-editor') && 'Editor' || contains(roles[\\*], 'grafana-viewer') && 'Viewer'"),
  "roleAttributeStrict": z.boolean().describe("If  therole_attribute_path property does not return a role, then the user is assigned the Viewer role by default. You can disable the role assignment by setting role_attribute_strict = true. It denies user access if no role or an invalid role is returned.").optional(),
  "scopes": z.string().describe("Space seperated list of scopes of the token").optional(),
  "tokenUrl": z.string().describe("Token endpoint of the idp."),
  "usePkce": z.boolean().describe("enable or disable Proof Key for Code Exchange").optional()
}