import { z } from "zod";
export const toolName = `createdeployment`;
export const toolDescription = `Create a new deployment`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v13/deployments`;
export const method = `post`;
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
    "query": [
        "forceNew",
        "skipAutoDetectionConfirmation",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "customEnvironmentSlugOrId",
        "deploymentId",
        "files",
        "gitMetadata",
        "gitSource",
        "meta",
        "monorepoManager",
        "name",
        "project",
        "projectSettings",
        "target",
        "withLatestCommit"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "forceNew": z.enum(["0", "1"]).describe("Forces a new deployment even if there is a previous similar deployment").optional(), "skipAutoDetectionConfirmation": z.enum(["0", "1"]).describe("Allows to skip framework detection so the API would not fail to ask for confirmation").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "customEnvironmentSlugOrId": z.string().describe("Deploy to a custom environment, which will override the default environment").optional(), "deploymentId": z.string().describe("An deployment id for an existing deployment to redeploy").optional(), "files": z.array(z.object({ "data": z.string().describe("The file content, it could be either a `base64` (useful for images, etc.) of the files or the plain content for source code"), "encoding": z.enum(["base64", "utf-8"]).describe("The file content encoding, it could be either a base64 (useful for images, etc.) of the files or the plain text for source code.").optional(), "file": z.string().describe("The file name including the whole path") }).strict().describe("Used in the case you want to inline a file inside the request")).describe("A list of objects with the files to be deployed").optional(), "gitMetadata": z.object({ "remoteUrl": z.string().describe("The git repository's remote origin url").optional(), "commitAuthorName": z.string().describe("The name of the author of the commit").optional(), "commitMessage": z.string().describe("The commit message").optional(), "commitRef": z.string().describe("The branch on which the commit was made").optional(), "commitSha": z.string().describe("The hash of the commit").optional(), "dirty": z.boolean().describe("Whether or not there have been modifications to the working tree since the latest commit").optional() }).strict().describe("Populates initial git metadata for different git providers.").optional(), "gitSource": z.union([z.object({ "ref": z.string(), "repoId": z.number(), "sha": z.string().optional(), "type": z.literal("github") }), z.object({ "org": z.string(), "ref": z.string(), "repo": z.string(), "sha": z.string().optional(), "type": z.literal("github") }), z.object({ "projectId": z.number(), "ref": z.string(), "sha": z.string().optional(), "type": z.literal("gitlab") }), z.object({ "ref": z.string(), "repoUuid": z.string(), "sha": z.string().optional(), "type": z.literal("bitbucket"), "workspaceUuid": z.string().optional() }), z.object({ "owner": z.string(), "ref": z.string(), "sha": z.string().optional(), "slug": z.string(), "type": z.literal("bitbucket") })]).describe("Defines the Git Repository source to be deployed. This property can not be used in combination with `files`.").optional(), "meta": z.record(z.string().max(65536)).describe("An object containing the deployment's metadata. Multiple key-value pairs can be attached to a deployment").optional(), "monorepoManager": z.string().nullable().describe("The monorepo manager that is being used for this deployment. When `null` is used no monorepo manager is selected").optional(), "name": z.string().describe("A string with the project name used in the deployment URL"), "project": z.string().describe("The target project identifier in which the deployment will be created. When defined, this parameter overrides name").optional(), "projectSettings": z.object({ "buildCommand": z.string().max(256).nullable().describe("The build command for this project. When `null` is used this value will be automatically detected").optional(), "commandForIgnoringBuildStep": z.string().max(256).nullable().optional(), "devCommand": z.string().max(256).nullable().describe("The dev command for this project. When `null` is used this value will be automatically detected").optional(), "framework": z.union([z.literal(null), z.literal("blitzjs"), z.literal("nextjs"), z.literal("gatsby"), z.literal("remix"), z.literal("react-router"), z.literal("astro"), z.literal("hexo"), z.literal("eleventy"), z.literal("docusaurus-2"), z.literal("docusaurus"), z.literal("preact"), z.literal("solidstart-1"), z.literal("solidstart"), z.literal("dojo"), z.literal("ember"), z.literal("vue"), z.literal("scully"), z.literal("ionic-angular"), z.literal("angular"), z.literal("polymer"), z.literal("svelte"), z.literal("sveltekit"), z.literal("sveltekit-1"), z.literal("ionic-react"), z.literal("create-react-app"), z.literal("gridsome"), z.literal("umijs"), z.literal("sapper"), z.literal("saber"), z.literal("stencil"), z.literal("nuxtjs"), z.literal("redwoodjs"), z.literal("hugo"), z.literal("jekyll"), z.literal("brunch"), z.literal("middleman"), z.literal("zola"), z.literal("hydrogen"), z.literal("vite"), z.literal("vitepress"), z.literal("vuepress"), z.literal("parcel"), z.literal("fasthtml"), z.literal("sanity-v3"), z.literal("sanity"), z.literal("storybook")]).nullable().describe("The framework that is being used for this project. When `null` is used no framework is selected").optional(), "installCommand": z.string().max(256).nullable().describe("The install command for this project. When `null` is used this value will be automatically detected").optional(), "nodeVersion": z.enum(["22.x", "20.x", "18.x", "16.x", "14.x", "12.x", "10.x", "8.10.x"]).describe("Override the Node.js version that should be used for this deployment").optional(), "outputDirectory": z.string().max(256).nullable().describe("The output directory of the project. When `null` is used this value will be automatically detected").optional(), "rootDirectory": z.string().max(256).nullable().describe("The name of a directory or relative path to the source code of your project. When `null` is used it will default to the project root").optional(), "serverlessFunctionRegion": z.string().max(4).nullable().describe("The region to deploy Serverless Functions in this project").optional(), "sourceFilesOutsideRootDirectory": z.boolean().describe("Indicates if there are source files outside of the root directory, typically used for monorepos").optional() }).strict().describe("Project settings that will be applied to the deployment. It is required for the first deployment of a project and will be saved for any following deployments").optional(), "target": z.string().describe("Either not defined, `staging`, `production`, or a custom environment identifier. If `staging`, a staging alias in the format `<project>-<team>.vercel.app` will be assigned. If `production`, any aliases defined in `alias` will be assigned. If omitted, the target will be `preview`.").optional(), "withLatestCommit": z.boolean().describe("When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used.").optional() }).shape;
