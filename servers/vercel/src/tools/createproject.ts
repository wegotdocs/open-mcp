import { z } from "zod"

export const toolName = `createproject`
export const toolDescription = `Create a new project`
export const baseUrl = `https://api.vercel.com`
export const path = `/v11/projects`
export const method = `post`
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
  "path": [],
  "cookie": [],
  "body": [
    "buildCommand",
    "commandForIgnoringBuildStep",
    "devCommand",
    "environmentVariables",
    "framework",
    "gitRepository",
    "installCommand",
    "name",
    "outputDirectory",
    "publicSource",
    "rootDirectory",
    "serverlessFunctionRegion",
    "serverlessFunctionZeroConfigFailover",
    "oidcTokenConfig",
    "enableAffectedProjectsDeployments"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "buildCommand": z.string().max(256).nullable().describe("The build command for this project. When `null` is used this value will be automatically detected").optional(), "commandForIgnoringBuildStep": z.string().max(256).nullable().optional(), "devCommand": z.string().max(256).nullable().describe("The dev command for this project. When `null` is used this value will be automatically detected").optional(), "environmentVariables": z.array(z.object({ "key": z.string().describe("Name of the ENV variable"), "target": z.enum(["production","preview","development"]).describe("Deployment Target or Targets in which the ENV variable will be used"), "gitBranch": z.string().max(250).describe("If defined, the git branch of the environment variable (must have target=preview)").optional(), "type": z.enum(["system","secret","encrypted","plain","sensitive"]).describe("Type of the ENV variable").optional(), "value": z.string().describe("Value for the ENV variable") })).describe("Collection of ENV Variables the Project will use").optional(), "framework": z.union([z.literal(null), z.literal("blitzjs"), z.literal("nextjs"), z.literal("gatsby"), z.literal("remix"), z.literal("react-router"), z.literal("astro"), z.literal("hexo"), z.literal("eleventy"), z.literal("docusaurus-2"), z.literal("docusaurus"), z.literal("preact"), z.literal("solidstart-1"), z.literal("solidstart"), z.literal("dojo"), z.literal("ember"), z.literal("vue"), z.literal("scully"), z.literal("ionic-angular"), z.literal("angular"), z.literal("polymer"), z.literal("svelte"), z.literal("sveltekit"), z.literal("sveltekit-1"), z.literal("ionic-react"), z.literal("create-react-app"), z.literal("gridsome"), z.literal("umijs"), z.literal("sapper"), z.literal("saber"), z.literal("stencil"), z.literal("nuxtjs"), z.literal("redwoodjs"), z.literal("hugo"), z.literal("jekyll"), z.literal("brunch"), z.literal("middleman"), z.literal("zola"), z.literal("hydrogen"), z.literal("vite"), z.literal("vitepress"), z.literal("vuepress"), z.literal("parcel"), z.literal("fasthtml"), z.literal("sanity-v3"), z.literal("sanity"), z.literal("storybook")]).describe("The framework that is being used for this project. When `null` is used no framework is selected").optional(), "gitRepository": z.object({ "repo": z.string().describe("The name of the git repository. For example: \\\"vercel/next.js\\\""), "type": z.enum(["github","gitlab","bitbucket"]).describe("The Git Provider of the repository") }).describe("The Git Repository that will be connected to the project. When this is defined, any pushes to the specified connected Git Repository will be automatically deployed").optional(), "installCommand": z.string().max(256).nullable().describe("The install command for this project. When `null` is used this value will be automatically detected").optional(), "name": z.string().max(100).describe("The desired name for the project"), "outputDirectory": z.string().max(256).nullable().describe("The output directory of the project. When `null` is used this value will be automatically detected").optional(), "publicSource": z.boolean().nullable().describe("Specifies whether the source code and logs of the deployments for this project should be public or not").optional(), "rootDirectory": z.string().max(256).nullable().describe("The name of a directory or relative path to the source code of your project. When `null` is used it will default to the project root").optional(), "serverlessFunctionRegion": z.string().max(4).nullable().describe("The region to deploy Serverless Functions in this project").optional(), "serverlessFunctionZeroConfigFailover": z.boolean().describe("Specifies whether Zero Config Failover is enabled for this project.").optional(), "oidcTokenConfig": z.object({ "enabled": z.boolean().describe("Whether or not to generate OpenID Connect JSON Web Tokens."), "issuerMode": z.enum(["team","global"]).describe("team: `https://oidc.vercel.com/[team_slug]` global: `https://oidc.vercel.com`") }).strict().describe("OpenID Connect JSON Web Token generation configuration.").optional(), "enableAffectedProjectsDeployments": z.boolean().describe("Opt-in to skip deployments when there are no changes to the root directory and its dependencies").optional() }).shape