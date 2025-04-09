import { z } from "zod"

export const inputParams = {
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "autoExposeSystemEnvs": z.boolean().optional(),
  "autoAssignCustomDomains": z.boolean().optional(),
  "autoAssignCustomDomainsUpdatedBy": z.string().optional(),
  "buildCommand": z.string().max(256).nullable().describe("The build command for this project. When `null` is used this value will be automatically detected").optional(),
  "commandForIgnoringBuildStep": z.string().max(256).nullable().optional(),
  "customerSupportCodeVisibility": z.boolean().describe("Specifies whether customer support can see git source for a deployment").optional(),
  "devCommand": z.string().max(256).nullable().describe("The dev command for this project. When `null` is used this value will be automatically detected").optional(),
  "directoryListing": z.boolean().optional(),
  "framework": z.union([z.literal(null), z.literal("blitzjs"), z.literal("nextjs"), z.literal("gatsby"), z.literal("remix"), z.literal("react-router"), z.literal("astro"), z.literal("hexo"), z.literal("eleventy"), z.literal("docusaurus-2"), z.literal("docusaurus"), z.literal("preact"), z.literal("solidstart-1"), z.literal("solidstart"), z.literal("dojo"), z.literal("ember"), z.literal("vue"), z.literal("scully"), z.literal("ionic-angular"), z.literal("angular"), z.literal("polymer"), z.literal("svelte"), z.literal("sveltekit"), z.literal("sveltekit-1"), z.literal("ionic-react"), z.literal("create-react-app"), z.literal("gridsome"), z.literal("umijs"), z.literal("sapper"), z.literal("saber"), z.literal("stencil"), z.literal("nuxtjs"), z.literal("redwoodjs"), z.literal("hugo"), z.literal("jekyll"), z.literal("brunch"), z.literal("middleman"), z.literal("zola"), z.literal("hydrogen"), z.literal("vite"), z.literal("vitepress"), z.literal("vuepress"), z.literal("parcel"), z.literal("fasthtml"), z.literal("sanity-v3"), z.literal("sanity"), z.literal("storybook")]).nullable().describe("The framework that is being used for this project. When `null` is used no framework is selected").optional(),
  "gitForkProtection": z.boolean().describe("Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed").optional(),
  "gitLFS": z.boolean().describe("Specifies whether Git LFS is enabled for this project.").optional(),
  "installCommand": z.string().max(256).nullable().describe("The install command for this project. When `null` is used this value will be automatically detected").optional(),
  "name": z.string().max(100).describe("The desired name for the project").optional(),
  "nodeVersion": z.enum(["22.x","20.x","18.x","16.x","14.x","12.x","10.x"]).optional(),
  "outputDirectory": z.string().max(256).nullable().describe("The output directory of the project. When `null` is used this value will be automatically detected").optional(),
  "previewDeploymentsDisabled": z.boolean().nullable().describe("Specifies whether preview deployments are disabled for this project.").optional(),
  "publicSource": z.boolean().nullable().describe("Specifies whether the source code and logs of the deployments for this project should be public or not").optional(),
  "rootDirectory": z.string().max(256).nullable().describe("The name of a directory or relative path to the source code of your project. When `null` is used it will default to the project root").optional(),
  "serverlessFunctionRegion": z.string().max(4).nullable().describe("The region to deploy Serverless Functions in this project").optional(),
  "serverlessFunctionZeroConfigFailover": z.boolean().describe("Specifies whether Zero Config Failover is enabled for this project.").optional(),
  "skewProtectionBoundaryAt": z.number().int().gte(0).describe("Deployments created before this absolute datetime have Skew Protection disabled. Value is in milliseconds since epoch to match \\\"createdAt\\\" fields.").optional(),
  "skewProtectionMaxAge": z.number().int().gte(0).describe("Deployments created before this rolling window have Skew Protection disabled. Value is in seconds to match \\\"revalidate\\\" fields.").optional(),
  "sourceFilesOutsideRootDirectory": z.boolean().describe("Indicates if there are source files outside of the root directory").optional(),
  "enablePreviewFeedback": z.boolean().nullable().describe("Opt-in to preview toolbar on the project level").optional(),
  "enableProductionFeedback": z.boolean().nullable().describe("Opt-in to production toolbar on the project level").optional(),
  "enableAffectedProjectsDeployments": z.boolean().describe("Opt-in to skip deployments when there are no changes to the root directory and its dependencies").optional(),
  "oidcTokenConfig": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `oidcTokenConfig` to the tool, first call the tool `expandSchema` with \"/properties/oidcTokenConfig\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>OpenID Connect JSON Web Token generation configuration.</property-description>").optional(),
  "passwordProtection": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `passwordProtection` to the tool, first call the tool `expandSchema` with \"/properties/passwordProtection\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Allows to protect project deployments with a password</property-description>").optional(),
  "ssoProtection": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ssoProtection` to the tool, first call the tool `expandSchema` with \"/properties/ssoProtection\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Ensures visitors to your Preview Deployments are logged into Vercel and have a minimum of Viewer access on your team</property-description>").optional(),
  "trustedIps": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `trustedIps` to the tool, first call the tool `expandSchema` with \"/properties/trustedIps\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Restricts access to deployments based on the incoming request IP address</property-description>").optional(),
  "optionsAllowlist": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `optionsAllowlist` to the tool, first call the tool `expandSchema` with \"/properties/optionsAllowlist\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests</property-description>").optional()
}