import { z } from "zod"

export const toolName = `updateproject`
export const toolDescription = `Update an existing project`
export const baseUrl = `https://api.vercel.com`
export const path = `/v9/projects/{idOrName}`
export const method = `patch`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "idOrName"
  ],
  "cookie": [],
  "body": [
    "autoExposeSystemEnvs",
    "autoAssignCustomDomains",
    "autoAssignCustomDomainsUpdatedBy",
    "buildCommand",
    "commandForIgnoringBuildStep",
    "customerSupportCodeVisibility",
    "devCommand",
    "directoryListing",
    "framework",
    "gitForkProtection",
    "gitLFS",
    "installCommand",
    "name",
    "nodeVersion",
    "outputDirectory",
    "previewDeploymentsDisabled",
    "publicSource",
    "rootDirectory",
    "serverlessFunctionRegion",
    "serverlessFunctionZeroConfigFailover",
    "skewProtectionBoundaryAt",
    "skewProtectionMaxAge",
    "sourceFilesOutsideRootDirectory",
    "enablePreviewFeedback",
    "enableProductionFeedback",
    "enableAffectedProjectsDeployments",
    "oidcTokenConfig",
    "passwordProtection",
    "ssoProtection",
    "trustedIps",
    "optionsAllowlist"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "idOrName": z.string().describe("The unique project identifier or the project name"), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "autoExposeSystemEnvs": z.boolean().optional(), "autoAssignCustomDomains": z.boolean().optional(), "autoAssignCustomDomainsUpdatedBy": z.string().optional(), "buildCommand": z.string().max(256).nullable().describe("The build command for this project. When `null` is used this value will be automatically detected").optional(), "commandForIgnoringBuildStep": z.string().max(256).nullable().optional(), "customerSupportCodeVisibility": z.boolean().describe("Specifies whether customer support can see git source for a deployment").optional(), "devCommand": z.string().max(256).nullable().describe("The dev command for this project. When `null` is used this value will be automatically detected").optional(), "directoryListing": z.boolean().optional(), "framework": z.union([z.literal(null), z.literal("blitzjs"), z.literal("nextjs"), z.literal("gatsby"), z.literal("remix"), z.literal("react-router"), z.literal("astro"), z.literal("hexo"), z.literal("eleventy"), z.literal("docusaurus-2"), z.literal("docusaurus"), z.literal("preact"), z.literal("solidstart-1"), z.literal("solidstart"), z.literal("dojo"), z.literal("ember"), z.literal("vue"), z.literal("scully"), z.literal("ionic-angular"), z.literal("angular"), z.literal("polymer"), z.literal("svelte"), z.literal("sveltekit"), z.literal("sveltekit-1"), z.literal("ionic-react"), z.literal("create-react-app"), z.literal("gridsome"), z.literal("umijs"), z.literal("sapper"), z.literal("saber"), z.literal("stencil"), z.literal("nuxtjs"), z.literal("redwoodjs"), z.literal("hugo"), z.literal("jekyll"), z.literal("brunch"), z.literal("middleman"), z.literal("zola"), z.literal("hydrogen"), z.literal("vite"), z.literal("vitepress"), z.literal("vuepress"), z.literal("parcel"), z.literal("fasthtml"), z.literal("sanity-v3"), z.literal("sanity"), z.literal("storybook")]).nullable().describe("The framework that is being used for this project. When `null` is used no framework is selected").optional(), "gitForkProtection": z.boolean().describe("Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed").optional(), "gitLFS": z.boolean().describe("Specifies whether Git LFS is enabled for this project.").optional(), "installCommand": z.string().max(256).nullable().describe("The install command for this project. When `null` is used this value will be automatically detected").optional(), "name": z.string().max(100).describe("The desired name for the project").optional(), "nodeVersion": z.enum(["22.x","20.x","18.x","16.x","14.x","12.x","10.x"]).optional(), "outputDirectory": z.string().max(256).nullable().describe("The output directory of the project. When `null` is used this value will be automatically detected").optional(), "previewDeploymentsDisabled": z.boolean().nullable().describe("Specifies whether preview deployments are disabled for this project.").optional(), "publicSource": z.boolean().nullable().describe("Specifies whether the source code and logs of the deployments for this project should be public or not").optional(), "rootDirectory": z.string().max(256).nullable().describe("The name of a directory or relative path to the source code of your project. When `null` is used it will default to the project root").optional(), "serverlessFunctionRegion": z.string().max(4).nullable().describe("The region to deploy Serverless Functions in this project").optional(), "serverlessFunctionZeroConfigFailover": z.boolean().describe("Specifies whether Zero Config Failover is enabled for this project.").optional(), "skewProtectionBoundaryAt": z.number().int().gte(0).describe("Deployments created before this absolute datetime have Skew Protection disabled. Value is in milliseconds since epoch to match \\\"createdAt\\\" fields.").optional(), "skewProtectionMaxAge": z.number().int().gte(0).describe("Deployments created before this rolling window have Skew Protection disabled. Value is in seconds to match \\\"revalidate\\\" fields.").optional(), "sourceFilesOutsideRootDirectory": z.boolean().describe("Indicates if there are source files outside of the root directory").optional(), "enablePreviewFeedback": z.boolean().nullable().describe("Opt-in to preview toolbar on the project level").optional(), "enableProductionFeedback": z.boolean().nullable().describe("Opt-in to production toolbar on the project level").optional(), "enableAffectedProjectsDeployments": z.boolean().describe("Opt-in to skip deployments when there are no changes to the root directory and its dependencies").optional(), "oidcTokenConfig": z.object({ "enabled": z.boolean().describe("Whether or not to generate OpenID Connect JSON Web Tokens."), "issuerMode": z.enum(["team","global"]).describe("team: `https://oidc.vercel.com/[team_slug]` global: `https://oidc.vercel.com`") }).strict().describe("OpenID Connect JSON Web Token generation configuration.").optional(), "passwordProtection": z.object({ "deploymentType": z.enum(["all","preview","prod_deployment_urls_and_all_previews"]).describe("Specify if the password will apply to every Deployment Target or just Preview"), "password": z.string().max(72).nullable().describe("The password that will be used to protect Project Deployments").optional() }).strict().nullable().describe("Allows to protect project deployments with a password").optional(), "ssoProtection": z.object({ "deploymentType": z.enum(["all","preview","prod_deployment_urls_and_all_previews"]).describe("Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview") }).strict().nullable().describe("Ensures visitors to your Preview Deployments are logged into Vercel and have a minimum of Viewer access on your team").optional(), "trustedIps": z.object({ "deploymentType": z.enum(["all","preview","production","prod_deployment_urls_and_all_previews"]).describe("Specify if the Trusted IPs will apply to every Deployment Target or just Preview"), "addresses": z.array(z.object({ "value": z.string().describe("The IP addresses that are allowlisted. Supports IPv4 addresses and CIDR notations. IPv6 is not supported"), "note": z.string().max(20).describe("An optional note explaining what the IP address or subnet is used for").optional() }).strict()).min(1), "protectionMode": z.enum(["exclusive","additional"]).describe("exclusive: ip match is enough to bypass deployment protection (regardless of other settings). additional: ip must match + any other protection should be also provided (password, vercel auth, shareable link, automation bypass header, automation bypass query param)") }).strict().nullable().describe("Restricts access to deployments based on the incoming request IP address").optional(), "optionsAllowlist": z.object({ "paths": z.array(z.object({ "value": z.string().regex(new RegExp("^/.*")).describe("The regex path that should not be protected by Deployment Protection") }).strict()).min(1).max(5) }).strict().nullable().describe("Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests").optional() }).shape