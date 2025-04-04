# @open-mcp/vercel

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/vercel add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/vercel add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/vercel add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "vercel": {
      "command": "npx",
      "args": ["-y", "@open-mcp/vercel"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Tools

### readaccessgroup

```ts
{
  "idOrName": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### updateaccessgroup

```ts
{
  "idOrName": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string().regex(new RegExp("^[A-z0-9_ -]+$")).max(50).describe("The name of the access group").optional(),
  "projects": z.array(z.object({ "projectId": z.string().max(256).describe("The ID of the project."), "role": z.union([z.literal("ADMIN"), z.literal("PROJECT_VIEWER"), z.literal("PROJECT_DEVELOPER"), z.literal(null)]).nullable().describe("The project role that will be added to this Access Group. \\\"null\\\" will remove this project level role.") }).strict()).optional(),
  "membersToAdd": z.array(z.string()).describe("List of members to add to the access group.").optional(),
  "membersToRemove": z.array(z.string()).describe("List of members to remove from the access group.").optional()
}
```

### deleteaccessgroup

```ts
{
  "idOrName": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### listaccessgroupmembers

```ts
{
  "idOrName": z.string().describe("The ID or name of the Access Group."),
  "limit": z.number().int().gte(1).lte(100).describe("Limit how many access group members should be returned.").optional(),
  "next": z.string().describe("Continuation cursor to retrieve the next page of results.").optional(),
  "search": z.string().describe("Search project members by their name, username, and email.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### listaccessgroups

```ts
{
  "projectId": z.string().describe("Filter access groups by project.").optional(),
  "search": z.string().describe("Search for access groups by name.").optional(),
  "membersLimit": z.number().int().gte(1).lte(100).describe("Number of members to include in the response.").optional(),
  "projectsLimit": z.number().int().gte(1).lte(100).describe("Number of projects to include in the response.").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("Limit how many access group should be returned.").optional(),
  "next": z.string().describe("Continuation cursor to retrieve the next page of results.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### createaccessgroup

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string().regex(new RegExp("^[A-z0-9_ -]+$")).max(50).describe("The name of the access group"),
  "projects": z.array(z.object({ "projectId": z.string().max(256).describe("The ID of the project."), "role": z.enum(["ADMIN","PROJECT_VIEWER","PROJECT_DEVELOPER"]).nullable().describe("The project role that will be added to this Access Group. \\\"null\\\" will remove this project level role.") }).strict()).optional(),
  "membersToAdd": z.array(z.string()).describe("List of members to add to the access group.").optional()
}
```

### listaccessgroupprojects

```ts
{
  "idOrName": z.string().describe("The ID or name of the Access Group."),
  "limit": z.number().int().gte(1).lte(100).describe("Limit how many access group projects should be returned.").optional(),
  "next": z.string().describe("Continuation cursor to retrieve the next page of results.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### createaccessgroupproject

```ts
{
  "accessGroupIdOrName": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "projectId": z.string().max(256).describe("The ID of the project."),
  "role": z.enum(["ADMIN","PROJECT_VIEWER","PROJECT_DEVELOPER"]).describe("The project role that will be added to this Access Group.")
}
```

### readaccessgroupproject

```ts
{
  "accessGroupIdOrName": z.string(),
  "projectId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### updateaccessgroupproject

```ts
{
  "accessGroupIdOrName": z.string(),
  "projectId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "role": z.enum(["ADMIN","PROJECT_VIEWER","PROJECT_DEVELOPER"]).describe("The project role that will be added to this Access Group.")
}
```

### deleteaccessgroupproject

```ts
{
  "accessGroupIdOrName": z.string(),
  "projectId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### recordevents

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "x-artifact-client-ci": z.string().max(50).describe("The continuous integration or delivery environment where this artifact is downloaded.").optional(),
  "x-artifact-client-interactive": z.number().int().gte(0).lte(1).describe("1 if the client is an interactive shell. Otherwise 0").optional()
}
```

### status

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### uploadartifact

```ts
{
  "hash": z.string().describe("The artifact hash"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "Content-Length": z.number().describe("The artifact size in bytes"),
  "x-artifact-duration": z.number().describe("The time taken to generate the uploaded artifact in milliseconds.").optional(),
  "x-artifact-client-ci": z.string().max(50).describe("The continuous integration or delivery environment where this artifact was generated.").optional(),
  "x-artifact-client-interactive": z.number().int().gte(0).lte(1).describe("1 if the client is an interactive shell. Otherwise 0").optional(),
  "x-artifact-tag": z.string().max(600).describe("The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header \`x-artifact-tag\`").optional()
}
```

### downloadartifact

```ts
{
  "hash": z.string().describe("The artifact hash"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "x-artifact-client-ci": z.string().max(50).describe("The continuous integration or delivery environment where this artifact is downloaded.").optional(),
  "x-artifact-client-interactive": z.number().int().gte(0).lte(1).describe("1 if the client is an interactive shell. Otherwise 0").optional()
}
```

### artifactexists

```ts
{
  "hash": z.string().describe("The artifact hash"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### artifactquery

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "hashes": z.array(z.string()).describe("artifact hashes")
}
```

### createcheck

```ts
{
  "deploymentId": z.string().describe("The deployment to create the check for."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string().max(100).describe("The name of the check being created"),
  "path": z.string().max(255).describe("Path of the page that is being checked").optional(),
  "blocking": z.boolean().describe("Whether the check should block a deployment from succeeding"),
  "detailsUrl": z.string().describe("URL to display for further details").optional(),
  "externalId": z.string().describe("An identifier that can be used as an external reference").optional(),
  "rerequestable": z.boolean().describe("Whether a user should be able to request for the check to be rerun if it fails").optional()
}
```

### getallchecks

```ts
{
  "deploymentId": z.string().describe("The deployment to get all checks for"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getcheck

```ts
{
  "deploymentId": z.string().describe("The deployment to get the check for."),
  "checkId": z.string().describe("The check to fetch"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### updatecheck

```ts
{
  "deploymentId": z.string().describe("The deployment to update the check for."),
  "checkId": z.string().describe("The check being updated"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string().max(100).describe("The name of the check being created").optional(),
  "path": z.string().max(255).describe("Path of the page that is being checked").optional(),
  "status": z.enum(["running","completed"]).describe("The current status of the check").optional(),
  "conclusion": z.enum(["canceled","failed","neutral","succeeded","skipped"]).describe("The result of the check being run").optional(),
  "detailsUrl": z.string().describe("A URL a user may visit to see more information about the check").optional(),
  "output": z.object({ "metrics": z.object({ "FCP": z.object({ "value": z.number().nullable().describe("First Contentful Paint value"), "previousValue": z.number().describe("Previous First Contentful Paint value to display a delta").optional(), "source": z.literal("web-vitals") }), "LCP": z.object({ "value": z.number().nullable().describe("Largest Contentful Paint value"), "previousValue": z.number().describe("Previous Largest Contentful Paint value to display a delta").optional(), "source": z.literal("web-vitals") }), "CLS": z.object({ "value": z.number().nullable().describe("Cumulative Layout Shift value"), "previousValue": z.number().describe("Previous Cumulative Layout Shift value to display a delta").optional(), "source": z.literal("web-vitals") }), "TBT": z.object({ "value": z.number().nullable().describe("Total Blocking Time value"), "previousValue": z.number().describe("Previous Total Blocking Time value to display a delta").optional(), "source": z.literal("web-vitals") }), "virtualExperienceScore": z.object({ "value": z.number().int().gte(0).lte(100).nullable().describe("The calculated Virtual Experience Score value, between 0 and 100"), "previousValue": z.number().int().gte(0).lte(100).describe("A previous Virtual Experience Score value to display a delta, between 0 and 100").optional(), "source": z.literal("web-vitals") }).optional() }).strict().describe("Metrics about the page").optional() }).describe("The results of the check Run").optional(),
  "externalId": z.string().describe("An identifier that can be used as an external reference").optional()
}
```

### rerequestcheck

```ts
{
  "deploymentId": z.string().describe("The deployment to rerun the check for."),
  "checkId": z.string().describe("The check to rerun"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### delete_data_cache_purge_all

```ts
{
  "projectIdOrName": z.string()
}
```

### patch_data_cache_billing_settings

```ts
{
  "excessBillingEnabled": z.boolean().optional()
}
```

### updateprojectdatacache

```ts
{
  "projectId": z.string().describe("The unique project identifier"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "disabled": z.boolean().describe("Enable or disable data cache for the project - default: false").optional()
}
```

### getdeploymentevents

```ts
z.object({ "idOrUrl": z.string().describe("The unique identifier or hostname of the deployment."), "direction": z.enum(["backward","forward"]).describe("Order of the returned events based on the timestamp."), "follow": z.union([z.literal(0), z.literal(1)]).describe("When enabled, this endpoint will return live events as they happen.").optional(), "limit": z.number().describe("Maximum number of events to return. Provide \`-1\` to return all available logs.").optional(), "name": z.string().describe("Deployment build ID.").optional(), "since": z.number().describe("Timestamp for when build logs should be pulled from.").optional(), "until": z.number().describe("Timestamp for when the build logs should be pulled up until.").optional(), "statusCode": z.any().superRefine((x, ctx) => {
    const schemas = [z.number(), z.string()];
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
  }).describe("HTTP status code range to filter events by.").optional(), "delimiter": z.union([z.literal(0), z.literal(1)]).optional(), "builds": z.union([z.literal(0), z.literal(1)]).optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape
```

### update_integration_deployment_action

```ts
{
  "deploymentId": z.string(),
  "integrationConfigurationId": z.string(),
  "resourceId": z.string(),
  "action": z.string(),
  "status": z.enum(["running","succeeded","failed"]).optional(),
  "statusText": z.string().optional(),
  "outcomes": z.array(z.object({ "kind": z.literal("resource-secrets"), "secrets": z.array(z.object({ "name": z.string(), "value": z.string() }).strict()) }).strict()).optional()
}
```

### getdeployment

```ts
{
  "idOrUrl": z.string().describe("The unique identifier or hostname of the deployment."),
  "withGitRepoInfo": z.string().describe("Whether to add in gitRepo information.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### createdeployment

```ts
{
  "forceNew": z.enum(["0","1"]).describe("Forces a new deployment even if there is a previous similar deployment").optional(),
  "skipAutoDetectionConfirmation": z.enum(["0","1"]).describe("Allows to skip framework detection so the API would not fail to ask for confirmation").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "customEnvironmentSlugOrId": z.string().describe("Deploy to a custom environment, which will override the default environment").optional(),
  "deploymentId": z.string().describe("An deployment id for an existing deployment to redeploy").optional(),
  "files": z.array(z.object({ "data": z.string().describe("The file content, it could be either a \`base64\` (useful for images, etc.) of the files or the plain content for source code"), "encoding": z.enum(["base64","utf-8"]).describe("The file content encoding, it could be either a base64 (useful for images, etc.) of the files or the plain text for source code.").optional(), "file": z.string().describe("The file name including the whole path") }).strict().describe("Used in the case you want to inline a file inside the request")).describe("A list of objects with the files to be deployed").optional(),
  "gitMetadata": z.object({ "remoteUrl": z.string().describe("The git repository's remote origin url").optional(), "commitAuthorName": z.string().describe("The name of the author of the commit").optional(), "commitMessage": z.string().describe("The commit message").optional(), "commitRef": z.string().describe("The branch on which the commit was made").optional(), "commitSha": z.string().describe("The hash of the commit").optional(), "dirty": z.boolean().describe("Whether or not there have been modifications to the working tree since the latest commit").optional() }).strict().describe("Populates initial git metadata for different git providers.").optional(),
  "gitSource": z.union([z.object({ "ref": z.string(), "repoId": z.number(), "sha": z.string().optional(), "type": z.literal("github") }), z.object({ "org": z.string(), "ref": z.string(), "repo": z.string(), "sha": z.string().optional(), "type": z.literal("github") }), z.object({ "projectId": z.number(), "ref": z.string(), "sha": z.string().optional(), "type": z.literal("gitlab") }), z.object({ "ref": z.string(), "repoUuid": z.string(), "sha": z.string().optional(), "type": z.literal("bitbucket"), "workspaceUuid": z.string().optional() }), z.object({ "owner": z.string(), "ref": z.string(), "sha": z.string().optional(), "slug": z.string(), "type": z.literal("bitbucket") })]).describe("Defines the Git Repository source to be deployed. This property can not be used in combination with \`files\`.").optional(),
  "meta": z.record(z.string().max(65536)).describe("An object containing the deployment's metadata. Multiple key-value pairs can be attached to a deployment").optional(),
  "monorepoManager": z.string().nullable().describe("The monorepo manager that is being used for this deployment. When \`null\` is used no monorepo manager is selected").optional(),
  "name": z.string().describe("A string with the project name used in the deployment URL"),
  "project": z.string().describe("The target project identifier in which the deployment will be created. When defined, this parameter overrides name").optional(),
  "projectSettings": z.object({ "buildCommand": z.string().max(256).nullable().describe("The build command for this project. When \`null\` is used this value will be automatically detected").optional(), "commandForIgnoringBuildStep": z.string().max(256).nullable().optional(), "devCommand": z.string().max(256).nullable().describe("The dev command for this project. When \`null\` is used this value will be automatically detected").optional(), "framework": z.union([z.literal(null), z.literal("blitzjs"), z.literal("nextjs"), z.literal("gatsby"), z.literal("remix"), z.literal("react-router"), z.literal("astro"), z.literal("hexo"), z.literal("eleventy"), z.literal("docusaurus-2"), z.literal("docusaurus"), z.literal("preact"), z.literal("solidstart-1"), z.literal("solidstart"), z.literal("dojo"), z.literal("ember"), z.literal("vue"), z.literal("scully"), z.literal("ionic-angular"), z.literal("angular"), z.literal("polymer"), z.literal("svelte"), z.literal("sveltekit"), z.literal("sveltekit-1"), z.literal("ionic-react"), z.literal("create-react-app"), z.literal("gridsome"), z.literal("umijs"), z.literal("sapper"), z.literal("saber"), z.literal("stencil"), z.literal("nuxtjs"), z.literal("redwoodjs"), z.literal("hugo"), z.literal("jekyll"), z.literal("brunch"), z.literal("middleman"), z.literal("zola"), z.literal("hydrogen"), z.literal("vite"), z.literal("vitepress"), z.literal("vuepress"), z.literal("parcel"), z.literal("fasthtml"), z.literal("sanity-v3"), z.literal("sanity"), z.literal("storybook")]).nullable().describe("The framework that is being used for this project. When \`null\` is used no framework is selected").optional(), "installCommand": z.string().max(256).nullable().describe("The install command for this project. When \`null\` is used this value will be automatically detected").optional(), "nodeVersion": z.enum(["22.x","20.x","18.x","16.x","14.x","12.x","10.x","8.10.x"]).describe("Override the Node.js version that should be used for this deployment").optional(), "outputDirectory": z.string().max(256).nullable().describe("The output directory of the project. When \`null\` is used this value will be automatically detected").optional(), "rootDirectory": z.string().max(256).nullable().describe("The name of a directory or relative path to the source code of your project. When \`null\` is used it will default to the project root").optional(), "serverlessFunctionRegion": z.string().max(4).nullable().describe("The region to deploy Serverless Functions in this project").optional(), "sourceFilesOutsideRootDirectory": z.boolean().describe("Indicates if there are source files outside of the root directory, typically used for monorepos").optional() }).strict().describe("Project settings that will be applied to the deployment. It is required for the first deployment of a project and will be saved for any following deployments").optional(),
  "target": z.string().describe("Either not defined, \`staging\`, \`production\`, or a custom environment identifier. If \`staging\`, a staging alias in the format \`<project>-<team>.vercel.app\` will be assigned. If \`production\`, any aliases defined in \`alias\` will be assigned. If omitted, the target will be \`preview\`.").optional(),
  "withLatestCommit": z.boolean().describe("When \`true\` and \`deploymentId\` is passed in, the sha from the previous deployment's \`gitSource\` is removed forcing the latest commit to be used.").optional()
}
```

### canceldeployment

```ts
{
  "id": z.string().describe("The unique identifier of the deployment."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### buydomain

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string().describe("The domain name to purchase."),
  "expectedPrice": z.number().describe("The price you expect to be charged for the purchase.").optional(),
  "renew": z.boolean().describe("Indicates whether the domain should be automatically renewed.").optional(),
  "country": z.string().describe("The country of the domain registrant"),
  "orgName": z.string().describe("The company name of the domain registrant").optional(),
  "firstName": z.string().describe("The first name of the domain registrant"),
  "lastName": z.string().describe("The last name of the domain registrant"),
  "address1": z.string().describe("The street address of the domain registrant"),
  "city": z.string().describe("The city of the domain registrant"),
  "state": z.string().describe("The state of the domain registrant"),
  "postalCode": z.string().describe("The postal code of the domain registrant"),
  "phone": z.string().describe("The phone number of the domain registrant"),
  "email": z.string().describe("The email of the domain registrant")
}
```

### checkdomainprice

```ts
{
  "name": z.string().describe("The name of the domain for which the price needs to be checked."),
  "type": z.enum(["new","renewal","transfer","redemption"]).describe("In which status of the domain the price needs to be checked.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### checkdomainstatus

```ts
{
  "name": z.string().describe("The name of the domain for which we would like to check the status."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getrecords

```ts
{
  "domain": z.string(),
  "limit": z.string().describe("Maximum number of records to list from a request.").optional(),
  "since": z.string().describe("Get records created after this JavaScript timestamp.").optional(),
  "until": z.string().describe("Get records created before this JavaScript timestamp.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### createrecord

```ts
{
  "domain": z.string().describe("The domain used to create the DNS record."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "type": z.enum(["A","AAAA","ALIAS","CAA","CNAME","HTTPS","MX","SRV","TXT","NS"]).describe("The type of record, it could be one of the valid DNS records.").optional()
}
```

### updaterecord

```ts
{
  "recordId": z.string().describe("The id of the DNS record"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "additionalProperties": z.any().optional(),
  "name": z.string().nullable().describe("The name of the DNS record").optional(),
  "value": z.string().nullable().describe("The value of the DNS record").optional(),
  "type": z.enum(["A","AAAA","ALIAS","CAA","CNAME","HTTPS","MX","SRV","TXT","NS"]).nullable().describe("The type of the DNS record").optional(),
  "ttl": z.number().int().gte(60).lte(2147483647).nullable().describe("The Time to live (TTL) value of the DNS record").optional(),
  "mxPriority": z.number().int().nullable().describe("The MX priority value of the DNS record").optional(),
  "srv": z.object({ "target": z.string().max(255).nullable(), "weight": z.number().int().nullable(), "port": z.number().int().nullable(), "priority": z.number().int().nullable() }).strict().nullable().optional(),
  "https": z.object({ "priority": z.number().int().nullable(), "target": z.string().max(255).nullable(), "params": z.string().nullable().optional() }).strict().nullable().optional(),
  "comment": z.string().max(500).describe("A comment to add context on what this DNS record is for").optional()
}
```

### removerecord

```ts
{
  "domain": z.string(),
  "recordId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getdomaintransfer

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getdomainconfig

```ts
{
  "domain": z.string().describe("The name of the domain."),
  "strict": z.enum(["true","false"]).describe("When true, the response will only include the nameservers assigned directly to the specified domain. When false and there are no nameservers assigned directly to the specified domain, the response will include the nameservers of the domain's parent zone.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getdomain

```ts
{
  "domain": z.string().describe("The name of the domain."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getdomains

```ts
{
  "limit": z.number().describe("Maximum number of domains to list from a request.").optional(),
  "since": z.number().describe("Get domains created after this JavaScript timestamp.").optional(),
  "until": z.number().describe("Get domains created before this JavaScript timestamp.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### createortransferdomain

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "method": z.string().describe("The domain operation to perform. It can be either \`add\` or \`transfer-in\`.").optional()
}
```

### patchdomain

```ts
{
  "domain": z.string().optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### deletedomain

```ts
{
  "domain": z.string().describe("The name of the domain."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getconfigurablelogdrain

```ts
{
  "id": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### deleteconfigurablelogdrain

```ts
{
  "id": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getalllogdrains

```ts
{
  "projectId": z.string().regex(new RegExp("^[a-zA-z0-9_]+$")).optional(),
  "projectIdOrName": z.string().optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### createconfigurablelogdrain

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "deliveryFormat": z.enum(["json","ndjson"]).describe("The delivery log format"),
  "url": z.string().url().regex(new RegExp("^(http|https)?://")).describe("The log drain url"),
  "headers": z.record(z.string()).describe("Headers to be sent together with the request").optional(),
  "projectIds": z.array(z.string().regex(new RegExp("^[a-zA-z0-9_]+$"))).min(1).max(50).optional(),
  "sources": z.array(z.enum(["static","lambda","build","edge","external","firewall"])).min(1),
  "environments": z.array(z.enum(["preview","production"])).min(1).optional(),
  "secret": z.string().describe("Custom secret of log drain").optional(),
  "samplingRate": z.number().gte(0.01).lte(1).describe("The sampling rate for this log drain. It should be a percentage rate between 0 and 100. With max 2 decimal points").optional(),
  "name": z.string().describe("The custom name of this log drain.").optional()
}
```

### getedgeconfigs

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### createedgeconfig

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "b_slug": z.string().regex(new RegExp("^[\\\\w-]+$")).max(64),
  "items": z.record(z.any()).optional()
}
```

### getedgeconfig

```ts
{
  "edgeConfigId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### updateedgeconfig

```ts
{
  "edgeConfigId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "b_slug": z.string().regex(new RegExp("^[\\\\w-]+$")).max(64)
}
```

### deleteedgeconfig

```ts
{
  "edgeConfigId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getedgeconfigitems

```ts
{
  "edgeConfigId": z.string().regex(new RegExp("^ecfg_")),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### patchedgeconfigitems

```ts
{
  "edgeConfigId": z.string().regex(new RegExp("^ecfg_")),
  "dryRun": z.string().optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "items": z.array(z.object({ "operation": z.enum(["create","update","upsert","delete"]).optional(), "key": z.string().regex(new RegExp("^[\\\\w-]+$")).max(256).optional(), "value": z.any().optional(), "description": z.string().max(512).optional() }).and(z.union([z.object({ "operation": z.literal("create").optional() }), z.object({ "operation": z.enum(["update","upsert"]).optional() }), z.object({ "operation": z.enum(["update","upsert"]).optional() }), z.object({ "operation": z.literal("delete").optional() })]))),
  "definition": z.any()
}
```

### getedgeconfigschema

```ts
{
  "edgeConfigId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### patchedgeconfigschema

```ts
{
  "edgeConfigId": z.string(),
  "dryRun": z.string().optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "definition": z.any()
}
```

### deleteedgeconfigschema

```ts
{
  "edgeConfigId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getedgeconfigitem

```ts
{
  "edgeConfigId": z.string().regex(new RegExp("^ecfg_")),
  "edgeConfigItemKey": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getedgeconfigtokens

```ts
{
  "edgeConfigId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### deleteedgeconfigtokens

```ts
{
  "edgeConfigId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "tokens": z.array(z.string())
}
```

### getedgeconfigtoken

```ts
{
  "edgeConfigId": z.string(),
  "token": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### createedgeconfigtoken

```ts
{
  "edgeConfigId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "label": z.string().max(52)
}
```

### getedgeconfigbackup

```ts
{
  "edgeConfigId": z.string(),
  "edgeConfigBackupVersionId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getedgeconfigbackups

```ts
{
  "edgeConfigId": z.string(),
  "next": z.string().optional(),
  "limit": z.number().gte(0).lte(50).optional(),
  "metadata": z.string().optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### listuserevents

```ts
{
  "limit": z.number().describe("Maximum number of items which may be returned.").optional(),
  "since": z.string().describe("Timestamp to only include items created since then.").optional(),
  "until": z.string().describe("Timestamp to only include items created until then.").optional(),
  "types": z.string().describe("Comma-delimited list of event \\\"types\\\" to filter the results by.").optional(),
  "userId": z.string().describe("When retrieving events for a Team, the \`userId\` parameter may be specified to filter events generated by a specific member of the Team.").optional(),
  "withPayload": z.string().describe("When set to \`true\`, the response will include the \`payload\` field for each event.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### get_account_info

```ts
{
  "integrationConfigurationId": z.string()
}
```

### get_member

```ts
{
  "integrationConfigurationId": z.string(),
  "memberId": z.string()
}
```

### create_event

```ts
{
  "integrationConfigurationId": z.string(),
  "event": z.object({ "type": z.literal("installation.updated"), "billingPlanId": z.string().describe("The installation-level billing plan ID").optional() }).strict()
}
```

### submit_billing_data

```ts
{
  "integrationConfigurationId": z.string(),
  "timestamp": z.string().datetime({ offset: true }).describe("Server time of your integration, used to determine the most recent data for race conditions & updates. Only the latest usage data for a given day, week, and month will be kept."),
  "eod": z.string().datetime({ offset: true }).describe("End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. This tells us which day the usage data is for, and also allows for your \\\"end of day\\\" to be different from UTC 00:00:00. eod must be within the period dates, and cannot be older than 24h earlier from our server's current time."),
  "period": z.object({ "start": z.string().datetime({ offset: true }), "end": z.string().datetime({ offset: true }) }).strict().describe("Period for the billing cycle. The period end date cannot be older than 24 hours earlier than our current server's time."),
  "billing": z.array(z.object({ "billingPlanId": z.string().describe("Partner's billing plan ID."), "resourceId": z.string().describe("Partner's resource ID.").optional(), "start": z.string().datetime({ offset: true }).describe("Start and end are only needed if different from the period's start/end.").optional(), "end": z.string().datetime({ offset: true }).describe("Start and end are only needed if different from the period's start/end.").optional(), "name": z.string().describe("Line item name."), "details": z.string().describe("Line item details.").optional(), "price": z.string().regex(new RegExp("^[0-9]+(\\\\.[0-9]+)?$")).describe("Price per unit."), "quantity": z.number().describe("Quantity of units."), "units": z.string().describe("Units of the quantity."), "total": z.string().regex(new RegExp("^[0-9]+(\\\\.[0-9]+)?$")).describe("Total amount.") }).strict()).describe("Billing data (interim invoicing data)."),
  "usage": z.array(z.object({ "resourceId": z.string().describe("Partner's resource ID.").optional(), "name": z.string().describe("Metric name."), "type": z.enum(["total","interval","rate"]).describe("\\n              Type of the metric.\\n              - total: measured total value, such as Database size\\n              - interval: usage during the period, such as i/o or number of queries.\\n              - rate: rate of usage, such as queries per second.\\n            "), "units": z.string().describe("Metric units. Example: \\\"GB\\\""), "dayValue": z.number().describe("Metric value for the day. Could be a final or an interim value for the day."), "periodValue": z.number().describe("Metric value for the billing period. Could be a final or an interim value for the period."), "planValue": z.number().describe("The limit value of the metric for a billing period, if a limit is defined by the plan.").optional() }).strict())
}
```

### submit_invoice

```ts
{
  "integrationConfigurationId": z.string(),
  "externalId": z.string().optional(),
  "invoiceDate": z.string().datetime({ offset: true }).describe("Invoice date. Must be within the period's start and end."),
  "memo": z.string().describe("Additional memo for the invoice.").optional(),
  "period": z.object({ "start": z.string().datetime({ offset: true }), "end": z.string().datetime({ offset: true }) }).strict().describe("Subscription period for this billing cycle."),
  "items": z.array(z.object({ "resourceId": z.string().describe("Partner's resource ID.").optional(), "billingPlanId": z.string().describe("Partner's billing plan ID."), "start": z.string().datetime({ offset: true }).describe("Start and end are only needed if different from the period's start/end.").optional(), "end": z.string().datetime({ offset: true }).describe("Start and end are only needed if different from the period's start/end.").optional(), "name": z.string(), "details": z.string().optional(), "price": z.string().regex(new RegExp("^[0-9]+(\\\\.[0-9]+)?$")).describe("Currency amount as a decimal string."), "quantity": z.number(), "units": z.string(), "total": z.string().regex(new RegExp("^[0-9]+(\\\\.[0-9]+)?$")).describe("Currency amount as a decimal string.") }).strict()),
  "discounts": z.array(z.object({ "resourceId": z.string().describe("Partner's resource ID.").optional(), "billingPlanId": z.string().describe("Partner's billing plan ID."), "start": z.string().datetime({ offset: true }).describe("Start and end are only needed if different from the period's start/end.").optional(), "end": z.string().datetime({ offset: true }).describe("Start and end are only needed if different from the period's start/end.").optional(), "name": z.string(), "details": z.string().optional(), "amount": z.string().regex(new RegExp("^[0-9]+(\\\\.[0-9]+)?$")).describe("Currency amount as a decimal string.") }).strict()).optional(),
  "test": z.object({ "validate": z.boolean().optional(), "result": z.enum(["paid","notpaid"]).optional() }).strict().describe("Test mode").optional()
}
```

### get_invoice

```ts
{
  "integrationConfigurationId": z.string(),
  "invoiceId": z.string()
}
```

### update_invoice

```ts
{
  "integrationConfigurationId": z.string(),
  "invoiceId": z.string(),
  "action": z.literal("refund"),
  "reason": z.string().describe("Refund reason."),
  "total": z.string().regex(new RegExp("^[0-9]+(\\\\.[0-9]+)?$")).describe("The total amount to be refunded. Must be less than or equal to the total amount of the invoice.")
}
```

### submit_prepayment_balances

```ts
{
  "integrationConfigurationId": z.string(),
  "timestamp": z.string().datetime({ offset: true }).describe("Server time of your integration, used to determine the most recent data for race conditions & updates. Only the latest usage data for a given day, week, and month will be kept."),
  "balances": z.array(z.object({ "resourceId": z.string().describe("Partner's resource ID, exclude if credits are tied to the installation and not an individual resource.").optional(), "credit": z.string().describe("A human-readable description of the credits the user currently has, e.g. \\\"2,000 Tokens\\\"").optional(), "nameLabel": z.string().describe("The name of the credits, for display purposes, e.g. \\\"Tokens\\\"").optional(), "currencyValueInCents": z.number().describe("The dollar value of the credit balance, in USD and provided in cents, which is used to trigger automatic purchase thresholds.") }).strict().describe("A credit balance for a particular token type"))
}
```

### update_resource_secrets

```ts
{
  "integrationConfigurationId": z.string(),
  "integrationProductIdOrSlug": z.string(),
  "resourceId": z.string(),
  "secrets": z.array(z.object({ "name": z.string(), "value": z.string(), "prefix": z.string().optional() }).strict()),
  "partial": z.boolean().describe("If true, will only update the provided secrets").optional()
}
```

### update_resource_secrets_by_id

```ts
{
  "integrationConfigurationId": z.string(),
  "resourceId": z.string(),
  "secrets": z.array(z.object({ "name": z.string(), "value": z.string(), "prefix": z.string().optional() }).strict()),
  "partial": z.boolean().describe("If true, will only update the provided secrets").optional()
}
```

### import_resource

```ts
{
  "integrationConfigurationId": z.string(),
  "resourceId": z.string(),
  "productId": z.string(),
  "name": z.string(),
  "status": z.enum(["ready","pending","suspended","resumed","uninstalled","error"]),
  "metadata": z.record(z.any()).optional(),
  "billingPlan": z.object({ "id": z.string(), "type": z.enum(["prepayment","subscription"]), "name": z.string(), "paymentMethodRequired": z.boolean().optional() }).catchall(z.any()).optional(),
  "notification": z.object({ "level": z.enum(["info","warn","error"]), "title": z.string(), "message": z.string().optional(), "href": z.string().url().optional() }).optional(),
  "secrets": z.array(z.object({ "name": z.string(), "value": z.string(), "prefix": z.string().optional() }).strict()).optional()
}
```

### getconfigurations

```ts
{
  "view": z.enum(["account","project"]),
  "installationType": z.enum(["marketplace","external"]).optional(),
  "integrationIdOrSlug": z.string().describe("ID of the integration").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getconfiguration

```ts
{
  "id": z.string().describe("ID of the configuration to check"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### deleteconfiguration

```ts
{
  "id": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### exchange_sso_token

```ts
{
  "code": z.string().describe("The sensitive code received from Vercel"),
  "state": z.string().describe("The state received from the initialization request").optional(),
  "client_id": z.string().describe("The integration client id"),
  "client_secret": z.string().describe("The integration client secret"),
  "redirect_uri": z.string().describe("The integration redirect URI").optional()
}
```

### getintegrationlogdrains

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### createlogdrain

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string().regex(new RegExp("^[A-z0-9_ -]+$")).max(100).describe("The name of the log drain"),
  "projectIds": z.array(z.string().regex(new RegExp("^[a-zA-z0-9_]+$"))).min(1).max(50).optional(),
  "secret": z.string().regex(new RegExp("^[A-z0-9_ -]+$")).max(100).describe("A secret to sign log drain notification headers so a consumer can verify their authenticity").optional(),
  "deliveryFormat": z.enum(["json","ndjson","syslog"]).describe("The delivery log format").optional(),
  "url": z.string().url().regex(new RegExp("^(https?|syslog\\\\+tls|syslog)://")).describe("The url where you will receive logs. The protocol must be \`https://\` or \`http://\` when type is \`json\` and \`ndjson\`, and \`syslog+tls:\` or \`syslog:\` when the type is \`syslog\`."),
  "sources": z.array(z.enum(["static","lambda","build","edge","external","firewall"])).min(1).optional(),
  "headers": z.record(z.string()).describe("Headers to be sent together with the request").optional(),
  "environments": z.array(z.enum(["preview","production"])).min(1).optional()
}
```

### deleteintegrationlogdrain

```ts
{
  "id": z.string().describe("ID of the log drain to be deleted"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### gitnamespaces

```ts
{
  "host": z.string().describe("The custom Git host if using a custom Git provider, like GitHub Enterprise Server").optional(),
  "provider": z.enum(["github","github-custom-host","gitlab","bitbucket"]).optional()
}
```

### searchrepo

```ts
{
  "query": z.string().optional(),
  "namespaceId": z.union([z.string(), z.number()]).nullable().optional(),
  "provider": z.enum(["github","github-custom-host","gitlab","bitbucket"]).optional(),
  "installationId": z.string().optional(),
  "host": z.string().describe("The custom Git host if using a custom Git provider, like GitHub Enterprise Server").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### queryexperimentationitems

```ts
{
  "resourceId": z.string().optional()
}
```

### post_v1_installations_integrationconfigurationid_resources_resou

```ts
{
  "integrationConfigurationId": z.string(),
  "resourceId": z.string(),
  "items": z.array(z.object({ "id": z.string().max(1024), "slug": z.string().max(1024), "origin": z.string().max(2048), "category": z.enum(["experiment","flag"]).optional(), "name": z.string().max(1024).optional(), "description": z.string().max(1024).optional(), "isArchived": z.boolean().optional(), "createdAt": z.number().optional(), "updatedAt": z.number().optional() }).strict()).max(50)
}
```

### patch_v1_installations_integrationconfigurationid_resources_reso

```ts
{
  "integrationConfigurationId": z.string(),
  "resourceId": z.string(),
  "itemId": z.string(),
  "slug": z.string().max(1024),
  "origin": z.string().max(2048),
  "name": z.string().max(1024).optional(),
  "category": z.enum(["experiment","flag"]).optional(),
  "description": z.string().max(1024).optional(),
  "isArchived": z.boolean().optional(),
  "createdAt": z.number().optional(),
  "updatedAt": z.number().optional()
}
```

### delete_v1_installations_integrationconfigurationid_resources_res

```ts
{
  "integrationConfigurationId": z.string(),
  "resourceId": z.string(),
  "itemId": z.string()
}
```

### head_v1_installations_integrationconfigurationid_resources_resou

```ts
{
  "integrationConfigurationId": z.string(),
  "resourceId": z.string()
}
```

### put_v1_installations_integrationconfigurationid_resources_resour

```ts
{
  "integrationConfigurationId": z.string(),
  "resourceId": z.string(),
  "data": z.record(z.any())
}
```

### getprojectmembers

```ts
{
  "idOrName": z.string().describe("The ID or name of the Project."),
  "limit": z.number().int().gte(1).lte(100).describe("Limit how many project members should be returned").optional(),
  "since": z.number().int().describe("Timestamp in milliseconds to only include members added since then.").optional(),
  "until": z.number().int().describe("Timestamp in milliseconds to only include members added until then.").optional(),
  "search": z.string().describe("Search project members by their name, username, and email.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### addprojectmember

```ts
{
  "idOrName": z.string().describe("The ID or name of the Project."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "uid": z.string().max(256).describe("The ID of the team member that should be added to this project.").optional(),
  "username": z.string().max(256).describe("The username of the team member that should be added to this project.").optional(),
  "email": z.string().email().describe("The email of the team member that should be added to this project.").optional(),
  "role": z.enum(["ADMIN","PROJECT_DEVELOPER","PROJECT_VIEWER"]).describe("The project role of the member that will be added.")
}
```

### removeprojectmember

```ts
{
  "idOrName": z.string().describe("The ID or name of the Project."),
  "uid": z.string().describe("The user ID of the member."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getprojects

```ts
{
  "from": z.string().describe("Query only projects updated after the given timestamp").optional(),
  "gitForkProtection": z.enum(["1","0"]).describe("Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed").optional(),
  "limit": z.string().describe("Limit the number of projects returned").optional(),
  "search": z.string().describe("Search projects by the name field").optional(),
  "repo": z.string().describe("Filter results by repo. Also used for project count").optional(),
  "repoId": z.string().describe("Filter results by Repository ID.").optional(),
  "repoUrl": z.string().describe("Filter results by Repository URL.").optional(),
  "excludeRepos": z.string().describe("Filter results by excluding those projects that belong to a repo").optional(),
  "edgeConfigId": z.string().describe("Filter results by connected Edge Config ID").optional(),
  "edgeConfigTokenId": z.string().describe("Filter results by connected Edge Config Token ID").optional(),
  "deprecated": z.boolean().optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### createproject

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "buildCommand": z.string().max(256).nullable().describe("The build command for this project. When \`null\` is used this value will be automatically detected").optional(),
  "commandForIgnoringBuildStep": z.string().max(256).nullable().optional(),
  "devCommand": z.string().max(256).nullable().describe("The dev command for this project. When \`null\` is used this value will be automatically detected").optional(),
  "environmentVariables": z.array(z.object({ "key": z.string().describe("Name of the ENV variable"), "target": z.enum(["production","preview","development"]).describe("Deployment Target or Targets in which the ENV variable will be used"), "gitBranch": z.string().max(250).describe("If defined, the git branch of the environment variable (must have target=preview)").optional(), "type": z.enum(["system","secret","encrypted","plain","sensitive"]).describe("Type of the ENV variable").optional(), "value": z.string().describe("Value for the ENV variable") })).describe("Collection of ENV Variables the Project will use").optional(),
  "framework": z.union([z.literal(null), z.literal("blitzjs"), z.literal("nextjs"), z.literal("gatsby"), z.literal("remix"), z.literal("react-router"), z.literal("astro"), z.literal("hexo"), z.literal("eleventy"), z.literal("docusaurus-2"), z.literal("docusaurus"), z.literal("preact"), z.literal("solidstart-1"), z.literal("solidstart"), z.literal("dojo"), z.literal("ember"), z.literal("vue"), z.literal("scully"), z.literal("ionic-angular"), z.literal("angular"), z.literal("polymer"), z.literal("svelte"), z.literal("sveltekit"), z.literal("sveltekit-1"), z.literal("ionic-react"), z.literal("create-react-app"), z.literal("gridsome"), z.literal("umijs"), z.literal("sapper"), z.literal("saber"), z.literal("stencil"), z.literal("nuxtjs"), z.literal("redwoodjs"), z.literal("hugo"), z.literal("jekyll"), z.literal("brunch"), z.literal("middleman"), z.literal("zola"), z.literal("hydrogen"), z.literal("vite"), z.literal("vitepress"), z.literal("vuepress"), z.literal("parcel"), z.literal("fasthtml"), z.literal("sanity-v3"), z.literal("sanity"), z.literal("storybook")]).describe("The framework that is being used for this project. When \`null\` is used no framework is selected").optional(),
  "gitRepository": z.object({ "repo": z.string().describe("The name of the git repository. For example: \\\"vercel/next.js\\\""), "type": z.enum(["github","gitlab","bitbucket"]).describe("The Git Provider of the repository") }).describe("The Git Repository that will be connected to the project. When this is defined, any pushes to the specified connected Git Repository will be automatically deployed").optional(),
  "installCommand": z.string().max(256).nullable().describe("The install command for this project. When \`null\` is used this value will be automatically detected").optional(),
  "name": z.string().max(100).describe("The desired name for the project"),
  "outputDirectory": z.string().max(256).nullable().describe("The output directory of the project. When \`null\` is used this value will be automatically detected").optional(),
  "publicSource": z.boolean().nullable().describe("Specifies whether the source code and logs of the deployments for this project should be public or not").optional(),
  "rootDirectory": z.string().max(256).nullable().describe("The name of a directory or relative path to the source code of your project. When \`null\` is used it will default to the project root").optional(),
  "serverlessFunctionRegion": z.string().max(4).nullable().describe("The region to deploy Serverless Functions in this project").optional(),
  "serverlessFunctionZeroConfigFailover": z.boolean().describe("Specifies whether Zero Config Failover is enabled for this project.").optional(),
  "oidcTokenConfig": z.object({ "enabled": z.boolean().describe("Whether or not to generate OpenID Connect JSON Web Tokens."), "issuerMode": z.enum(["team","global"]).describe("team: \`https://oidc.vercel.com/[team_slug]\` global: \`https://oidc.vercel.com\`") }).strict().describe("OpenID Connect JSON Web Token generation configuration.").optional(),
  "enableAffectedProjectsDeployments": z.boolean().describe("Opt-in to skip deployments when there are no changes to the root directory and its dependencies").optional()
}
```

### getproject

```ts
z.object({ "idOrName": z.any().superRefine((x, ctx) => {
    const schemas = [z.string(), z.boolean()];
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
  }).describe("The unique project identifier or the project name"), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape
```

### updateproject

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "autoExposeSystemEnvs": z.boolean().optional(),
  "autoAssignCustomDomains": z.boolean().optional(),
  "autoAssignCustomDomainsUpdatedBy": z.string().optional(),
  "buildCommand": z.string().max(256).nullable().describe("The build command for this project. When \`null\` is used this value will be automatically detected").optional(),
  "commandForIgnoringBuildStep": z.string().max(256).nullable().optional(),
  "customerSupportCodeVisibility": z.boolean().describe("Specifies whether customer support can see git source for a deployment").optional(),
  "devCommand": z.string().max(256).nullable().describe("The dev command for this project. When \`null\` is used this value will be automatically detected").optional(),
  "directoryListing": z.boolean().optional(),
  "framework": z.union([z.literal(null), z.literal("blitzjs"), z.literal("nextjs"), z.literal("gatsby"), z.literal("remix"), z.literal("react-router"), z.literal("astro"), z.literal("hexo"), z.literal("eleventy"), z.literal("docusaurus-2"), z.literal("docusaurus"), z.literal("preact"), z.literal("solidstart-1"), z.literal("solidstart"), z.literal("dojo"), z.literal("ember"), z.literal("vue"), z.literal("scully"), z.literal("ionic-angular"), z.literal("angular"), z.literal("polymer"), z.literal("svelte"), z.literal("sveltekit"), z.literal("sveltekit-1"), z.literal("ionic-react"), z.literal("create-react-app"), z.literal("gridsome"), z.literal("umijs"), z.literal("sapper"), z.literal("saber"), z.literal("stencil"), z.literal("nuxtjs"), z.literal("redwoodjs"), z.literal("hugo"), z.literal("jekyll"), z.literal("brunch"), z.literal("middleman"), z.literal("zola"), z.literal("hydrogen"), z.literal("vite"), z.literal("vitepress"), z.literal("vuepress"), z.literal("parcel"), z.literal("fasthtml"), z.literal("sanity-v3"), z.literal("sanity"), z.literal("storybook")]).nullable().describe("The framework that is being used for this project. When \`null\` is used no framework is selected").optional(),
  "gitForkProtection": z.boolean().describe("Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed").optional(),
  "gitLFS": z.boolean().describe("Specifies whether Git LFS is enabled for this project.").optional(),
  "installCommand": z.string().max(256).nullable().describe("The install command for this project. When \`null\` is used this value will be automatically detected").optional(),
  "name": z.string().max(100).describe("The desired name for the project").optional(),
  "nodeVersion": z.enum(["22.x","20.x","18.x","16.x","14.x","12.x","10.x"]).optional(),
  "outputDirectory": z.string().max(256).nullable().describe("The output directory of the project. When \`null\` is used this value will be automatically detected").optional(),
  "previewDeploymentsDisabled": z.boolean().nullable().describe("Specifies whether preview deployments are disabled for this project.").optional(),
  "publicSource": z.boolean().nullable().describe("Specifies whether the source code and logs of the deployments for this project should be public or not").optional(),
  "rootDirectory": z.string().max(256).nullable().describe("The name of a directory or relative path to the source code of your project. When \`null\` is used it will default to the project root").optional(),
  "serverlessFunctionRegion": z.string().max(4).nullable().describe("The region to deploy Serverless Functions in this project").optional(),
  "serverlessFunctionZeroConfigFailover": z.boolean().describe("Specifies whether Zero Config Failover is enabled for this project.").optional(),
  "skewProtectionBoundaryAt": z.number().int().gte(0).describe("Deployments created before this absolute datetime have Skew Protection disabled. Value is in milliseconds since epoch to match \\\"createdAt\\\" fields.").optional(),
  "skewProtectionMaxAge": z.number().int().gte(0).describe("Deployments created before this rolling window have Skew Protection disabled. Value is in seconds to match \\\"revalidate\\\" fields.").optional(),
  "sourceFilesOutsideRootDirectory": z.boolean().describe("Indicates if there are source files outside of the root directory").optional(),
  "enablePreviewFeedback": z.boolean().nullable().describe("Opt-in to preview toolbar on the project level").optional(),
  "enableProductionFeedback": z.boolean().nullable().describe("Opt-in to production toolbar on the project level").optional(),
  "enableAffectedProjectsDeployments": z.boolean().describe("Opt-in to skip deployments when there are no changes to the root directory and its dependencies").optional(),
  "oidcTokenConfig": z.object({ "enabled": z.boolean().describe("Whether or not to generate OpenID Connect JSON Web Tokens."), "issuerMode": z.enum(["team","global"]).describe("team: \`https://oidc.vercel.com/[team_slug]\` global: \`https://oidc.vercel.com\`") }).strict().describe("OpenID Connect JSON Web Token generation configuration.").optional(),
  "passwordProtection": z.object({ "deploymentType": z.enum(["all","preview","prod_deployment_urls_and_all_previews"]).describe("Specify if the password will apply to every Deployment Target or just Preview"), "password": z.string().max(72).nullable().describe("The password that will be used to protect Project Deployments").optional() }).strict().nullable().describe("Allows to protect project deployments with a password").optional(),
  "ssoProtection": z.object({ "deploymentType": z.enum(["all","preview","prod_deployment_urls_and_all_previews"]).describe("Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview") }).strict().nullable().describe("Ensures visitors to your Preview Deployments are logged into Vercel and have a minimum of Viewer access on your team").optional(),
  "trustedIps": z.object({ "deploymentType": z.enum(["all","preview","production","prod_deployment_urls_and_all_previews"]).describe("Specify if the Trusted IPs will apply to every Deployment Target or just Preview"), "addresses": z.array(z.object({ "value": z.string().describe("The IP addresses that are allowlisted. Supports IPv4 addresses and CIDR notations. IPv6 is not supported"), "note": z.string().max(20).describe("An optional note explaining what the IP address or subnet is used for").optional() }).strict()).min(1), "protectionMode": z.enum(["exclusive","additional"]).describe("exclusive: ip match is enough to bypass deployment protection (regardless of other settings). additional: ip must match + any other protection should be also provided (password, vercel auth, shareable link, automation bypass header, automation bypass query param)") }).strict().nullable().describe("Restricts access to deployments based on the incoming request IP address").optional(),
  "optionsAllowlist": z.object({ "paths": z.array(z.object({ "value": z.string().regex(new RegExp("^/.*")).describe("The regex path that should not be protected by Deployment Protection") }).strict()).min(1).max(5) }).strict().nullable().describe("Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests").optional()
}
```

### deleteproject

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### createcustomenvironment

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "b_slug": z.string().max(32).describe("The slug of the custom environment to create.").optional(),
  "description": z.string().max(256).describe("Description of the custom environment. This is optional.").optional(),
  "branchMatcher": z.object({ "type": z.enum(["equals","startsWith","endsWith"]).describe("Type of matcher. One of \\\"equals\\\", \\\"startsWith\\\", or \\\"endsWith\\\"."), "pattern": z.string().max(100).describe("Git branch name or portion thereof.") }).describe("How we want to determine a matching branch. This is optional.").optional(),
  "copyEnvVarsFrom": z.string().describe("Where to copy environment variables from. This is optional.").optional()
}
```

### get_v9_projects_idorname_custom_environments

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "gitBranch": z.string().describe("Fetch custom environments for a specific git branch").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getcustomenvironment

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "environmentSlugOrId": z.string().describe("The unique custom environment identifier within the project"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### updatecustomenvironment

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "environmentSlugOrId": z.string().describe("The unique custom environment identifier within the project"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "b_slug": z.string().max(32).describe("The slug of the custom environment.").optional(),
  "description": z.string().max(256).describe("Description of the custom environment. This is optional.").optional(),
  "branchMatcher": z.object({ "type": z.enum(["equals","startsWith","endsWith"]).describe("Type of matcher. One of \\\"equals\\\", \\\"startsWith\\\", or \\\"endsWith\\\"."), "pattern": z.string().max(100).describe("Git branch name or portion thereof.") }).nullable().describe("How we want to determine a matching branch. This is optional.").optional()
}
```

### removecustomenvironment

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "environmentSlugOrId": z.string().describe("The unique custom environment identifier within the project"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "deleteUnassignedEnvironmentVariables": z.boolean().describe("Delete Environment Variables that are not assigned to any environments.").optional()
}
```

### getprojectdomains

```ts
z.object({ "idOrName": z.any().superRefine((x, ctx) => {
    const schemas = [z.string(), z.number().int()];
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
  }).describe("The unique project identifier or the project name"), "production": z.enum(["true","false"]).describe("Filters only production domains when set to \`true\`."), "target": z.enum(["production","preview"]).describe("Filters on the target of the domain. Can be either \\\"production\\\", \\\"preview\\\"").optional(), "customEnvironmentId": z.string().describe("The unique custom environment identifier within the project").optional(), "gitBranch": z.string().describe("Filters domains based on specific branch.").optional(), "redirects": z.enum(["true","false"]).describe("Excludes redirect project domains when \\\"false\\\". Includes redirect project domains when \\\"true\\\" (default)."), "redirect": z.string().describe("Filters domains based on their redirect target.").optional(), "verified": z.enum(["true","false"]).describe("Filters domains based on their verification status.").optional(), "limit": z.number().describe("Maximum number of domains to list from a request (max 100).").optional(), "since": z.number().describe("Get domains created after this JavaScript timestamp.").optional(), "until": z.number().describe("Get domains created before this JavaScript timestamp.").optional(), "order": z.enum(["ASC","DESC"]).describe("Domains sort order by createdAt"), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape
```

### getprojectdomain

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "domain": z.string().describe("The project domain name"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### updateprojectdomain

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "domain": z.string().describe("The project domain name"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "gitBranch": z.string().max(250).nullable().describe("Git branch to link the project domain").optional(),
  "redirect": z.string().nullable().describe("Target destination domain for redirect").optional(),
  "redirectStatusCode": z.union([z.literal(null), z.literal(301), z.literal(302), z.literal(307), z.literal(308)]).nullable().describe("Status code for domain redirect").optional()
}
```

### removeprojectdomain

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "domain": z.string().describe("The project domain name"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### addprojectdomain

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string().describe("The project domain name"),
  "gitBranch": z.string().max(250).nullable().describe("Git branch to link the project domain").optional(),
  "customEnvironmentId": z.string().describe("The unique custom environment identifier within the project").optional(),
  "redirect": z.string().nullable().describe("Target destination domain for redirect").optional(),
  "redirectStatusCode": z.union([z.literal(null), z.literal(301), z.literal(302), z.literal(307), z.literal(308)]).nullable().describe("Status code for domain redirect").optional()
}
```

### verifyprojectdomain

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "domain": z.string().describe("The domain name you want to verify"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### filterprojectenvs

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "gitBranch": z.string().max(250).describe("If defined, the git branch of the environment variable to filter the results (must have target=preview)").optional(),
  "decrypt": z.enum(["true","false"]).describe("If true, the environment variable value will be decrypted").optional(),
  "source": z.string().describe("The source that is calling the endpoint.").optional(),
  "customEnvironmentId": z.string().describe("The unique custom environment identifier within the project").optional(),
  "customEnvironmentSlug": z.string().describe("The custom environment slug (name) within the project").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### createprojectenv

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "upsert": z.string().describe("Allow override of environment variable if it already exists").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getprojectenv

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "id": z.string().describe("The unique ID for the environment variable to get the decrypted value."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### removeprojectenv

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "id": z.string().describe("The unique environment variable identifier"),
  "customEnvironmentId": z.string().describe("The unique custom environment identifier within the project").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### editprojectenv

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "id": z.string().describe("The unique environment variable identifier"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "key": z.string().describe("The name of the environment variable").optional(),
  "target": z.array(z.enum(["production","preview","development"])).describe("The target environment of the environment variable").optional(),
  "gitBranch": z.string().max(250).nullable().describe("If defined, the git branch of the environment variable (must have target=preview)").optional(),
  "type": z.enum(["system","secret","encrypted","plain","sensitive"]).describe("The type of environment variable").optional(),
  "value": z.string().describe("The value of the environment variable").optional(),
  "customEnvironmentIds": z.array(z.string()).describe("The custom environments that the environment variable should be synced to").optional(),
  "comment": z.string().max(500).describe("A comment to add context on what this env var is for").optional()
}
```

### createprojecttransferrequest

```ts
{
  "idOrName": z.string().describe("The ID or name of the project to transfer."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "callbackUrl": z.string().describe("The URL to send a webhook to when the transfer is accepted.").optional(),
  "callbackSecret": z.string().describe("The secret to use to sign the webhook payload with HMAC-SHA256.").optional()
}
```

### acceptprojecttransferrequest

```ts
{
  "code": z.string().describe("The code of the project transfer request."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "newProjectName": z.string().max(100).describe("The desired name for the project").optional(),
  "paidFeatures": z.object({ "concurrentBuilds": z.number().int().nullable().optional(), "passwordProtection": z.boolean().nullable().optional(), "previewDeploymentSuffix": z.boolean().nullable().optional() }).strict().optional()
}
```

### updateprojectprotectionbypass

```ts
{
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "revoke": z.object({ "secret": z.string().describe("Automation bypass to revoked"), "regenerate": z.boolean().describe("Whether or not a new automation bypass should be created after the provided secret is revoked") }).describe("Optional instructions for revoking and regenerating a automation bypass").optional(),
  "generate": z.object({ "secret": z.string().regex(new RegExp("^[a-zA-Z0-9]{32}$")).describe("Optional value of the secret to generate").optional() }).describe("Generate a new secret. If neither generate or revoke are provided, a new random secret will be generated.").optional()
}
```

### requestpromote

```ts
{
  "projectId": z.string(),
  "deploymentId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### listpromotealiases

```ts
{
  "projectId": z.string(),
  "limit": z.number().lte(100).describe("Maximum number of aliases to list from a request (max 100).").optional(),
  "since": z.number().describe("Get aliases created after this epoch timestamp.").optional(),
  "until": z.number().describe("Get aliases created before this epoch timestamp.").optional(),
  "failedOnly": z.boolean().describe("Filter results down to aliases that failed to map to the requested deployment").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### pauseproject

```ts
{
  "projectId": z.string().describe("The unique project identifier"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### unpauseproject

```ts
{
  "projectId": z.string().describe("The unique project identifier"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### updateattackchallengemode

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "projectId": z.string(),
  "attackModeEnabled": z.boolean(),
  "attackModeActiveUntil": z.number().nullable().optional()
}
```

### putfirewallconfig

```ts
{
  "projectId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "firewallEnabled": z.boolean(),
  "managedRules": z.record(z.union([z.any().refine((value) => !z.any().safeParse(value).success, "Invalid input: Should NOT be valid against schema"), z.object({ "active": z.boolean(), "action": z.enum(["log","challenge","deny"]).optional(), "ruleGroups": z.record(z.object({ "active": z.boolean().optional(), "action": z.enum(["log","challenge","deny"]).optional() }).strict()).optional() }).strict()])).optional(),
  "crs": z.object({ "sd": z.object({ "active": z.boolean(), "action": z.enum(["deny","log"]) }).strict().optional(), "ma": z.object({ "active": z.boolean(), "action": z.enum(["deny","log"]) }).strict().optional(), "lfi": z.object({ "active": z.boolean(), "action": z.enum(["deny","log"]) }).strict().optional(), "rfi": z.object({ "active": z.boolean(), "action": z.enum(["deny","log"]) }).strict().optional(), "rce": z.object({ "active": z.boolean(), "action": z.enum(["deny","log"]) }).strict().optional(), "php": z.object({ "active": z.boolean(), "action": z.enum(["deny","log"]) }).strict().optional(), "gen": z.object({ "active": z.boolean(), "action": z.enum(["deny","log"]) }).strict().optional(), "xss": z.object({ "active": z.boolean(), "action": z.enum(["deny","log"]) }).strict().optional(), "sqli": z.object({ "active": z.boolean(), "action": z.enum(["deny","log"]) }).strict().optional(), "sf": z.object({ "active": z.boolean(), "action": z.enum(["deny","log"]) }).strict().optional(), "java": z.object({ "active": z.boolean(), "action": z.enum(["deny","log"]) }).strict().optional() }).strict().optional(),
  "rules": z.array(z.object({ "id": z.string().optional(), "name": z.string().max(160), "description": z.string().max(256).optional(), "active": z.boolean(), "conditionGroup": z.array(z.object({ "conditions": z.array(z.object({ "type": z.enum(["host","path","method","header","query","cookie","target_path","raw_path","ip_address","region","protocol","scheme","environment","user_agent","geo_continent","geo_country","geo_country_region","geo_city","geo_as_number","ja4_digest","ja3_digest","rate_limit_api_id"]), "op": z.enum(["re","eq","neq","ex","nex","inc","ninc","pre","suf","sub","gt","gte","lt","lte"]), "neg": z.boolean().optional(), "key": z.string().optional(), "value": z.union([z.string(), z.array(z.string()).max(75), z.number()]).optional() }).strict()).max(65) }).strict()).max(25), "action": z.object({ "mitigate": z.object({ "action": z.enum(["log","challenge","deny","bypass","rate_limit","redirect"]), "rateLimit": z.union([z.object({ "algo": z.enum(["fixed_window","token_bucket"]), "window": z.number(), "limit": z.number(), "keys": z.array(z.string()), "action": z.union([z.enum(["log","challenge","deny","rate_limit"]), z.null()]).optional() }).strict(), z.null()]).optional(), "redirect": z.union([z.object({ "location": z.string(), "permanent": z.boolean() }).strict(), z.null()]).optional(), "actionDuration": z.string().nullable().optional(), "bypassSystem": z.boolean().nullable().optional() }).strict().optional() }).strict() }).strict()).optional(),
  "ips": z.array(z.object({ "id": z.string().optional(), "hostname": z.string(), "ip": z.string(), "notes": z.string().optional(), "action": z.enum(["deny","challenge","log","bypass"]) }).strict()).optional()
}
```

### updatefirewallconfig

```ts
{
  "projectId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getfirewallconfig

```ts
{
  "projectId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getactiveattackstatus

```ts
{
  "projectId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getbypassip

```ts
{
  "projectId": z.string(),
  "limit": z.number().lte(128).optional(),
  "sourceIp": z.string().max(49).describe("Filter by source IP").optional(),
  "domain": z.string().regex(new RegExp("([a-z]+[a-z.]+)$")).max(2544).describe("Filter by domain").optional(),
  "projectScope": z.boolean().describe("Filter by project scoped rules").optional(),
  "offset": z.string().max(2560).describe("Used for pagination. Retrieves results after the provided id").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### addbypassip

```ts
{
  "projectId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "domain": z.string().regex(new RegExp("([a-z]+[a-z.]+)$")).max(2544).optional(),
  "projectScope": z.boolean().describe("If the specified bypass will apply to all domains for a project.").optional(),
  "sourceIp": z.string().optional(),
  "allSources": z.boolean().optional(),
  "ttl": z.number().describe("Time to live in milliseconds").optional(),
  "note": z.string().max(500).optional()
}
```

### removebypassip

```ts
{
  "projectId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "domain": z.string().regex(new RegExp("([a-z]+[a-z.]+)$")).max(2544).optional(),
  "projectScope": z.boolean().optional(),
  "sourceIp": z.string().optional(),
  "allSources": z.boolean().optional(),
  "note": z.string().max(500).optional()
}
```

### getteammembers

```ts
{
  "limit": z.number().gte(1).describe("Limit how many teams should be returned").optional(),
  "since": z.number().describe("Timestamp in milliseconds to only include members added since then.").optional(),
  "until": z.number().describe("Timestamp in milliseconds to only include members added until then.").optional(),
  "search": z.string().describe("Search team members by their name, username, and email.").optional(),
  "role": z.enum(["OWNER","MEMBER","DEVELOPER","VIEWER","BILLING","CONTRIBUTOR"]).describe("Only return members with the specified team role.").optional(),
  "excludeProject": z.string().describe("Exclude members who belong to the specified project.").optional(),
  "eligibleMembersForProjectId": z.string().describe("Include team members who are eligible to be members of the specified project.").optional()
}
```

### inviteusertoteam

```ts
{
  "uid": z.string().describe("The id of the user to invite").optional(),
  "email": z.string().email().describe("The email address of the user to invite").optional(),
  "role": z.enum(["OWNER","MEMBER","DEVELOPER","SECURITY","BILLING","VIEWER","CONTRIBUTOR"]).describe("The role of the user to invite"),
  "projects": z.array(z.object({ "projectId": z.string().max(64).describe("The ID of the project."), "role": z.enum(["ADMIN","PROJECT_VIEWER","PROJECT_DEVELOPER"]).describe("Sets the project roles for the invited user") }).strict()).optional()
}
```

### requestaccesstoteam

```ts
{
  "joinedFrom": z.object({ "origin": z.enum(["import","teams","github","gitlab","bitbucket","feedback","organization-teams"]).describe("The origin of the request."), "commitId": z.string().describe("The commit sha if the origin is a git provider.").optional(), "repoId": z.string().describe("The ID of the repository for the given Git provider.").optional(), "repoPath": z.string().describe("The path to the repository for the given Git provider.").optional(), "gitUserId": z.string().describe("The ID of the Git account of the user who requests access.").optional(), "gitUserLogin": z.string().describe("The login name for the Git account of the user who requests access.").optional() }).strict()
}
```

### getteamaccessrequest

```ts
{
  "userId": z.string().optional()
}
```

### jointeam

```ts
{
  "inviteCode": z.string().describe("The invite code to join the team.").optional()
}
```

### updateteammember

```ts
{
  "uid": z.string().describe("The ID of the member."),
  "confirmed": z.literal(true).describe("Accept a user who requested access to the team.").optional(),
  "role": z.string().describe("The role in the team of the member."),
  "projects": z.array(z.object({ "projectId": z.string().max(256).describe("The ID of the project."), "role": z.union([z.literal("ADMIN"), z.literal("PROJECT_VIEWER"), z.literal("PROJECT_DEVELOPER"), z.literal(null)]).nullable().describe("The project role of the member that will be added. \\\"null\\\" will remove this project level role.") }).strict()).optional(),
  "joinedFrom": z.object({ "ssoUserId": z.null().optional() }).strict().optional()
}
```

### removeteammember

```ts
{
  "uid": z.string().describe("The user ID of the member."),
  "newDefaultTeamId": z.string().describe("The ID of the team to set as the new default team for the Northstar user.").optional()
}
```

### getteam

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().optional()
}
```

### patchteam

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of."),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "avatar": z.string().describe("The hash value of an uploaded image.").optional(),
  "description": z.string().max(140).describe("A short text that describes the team.").optional(),
  "emailDomain": z.string().nullable().optional(),
  "name": z.string().max(256).describe("The name of the team.").optional(),
  "previewDeploymentSuffix": z.string().nullable().describe("Suffix that will be used for all preview deployments.").optional(),
  "regenerateInviteCode": z.boolean().describe("Create a new invite code and replace the current one.").optional(),
  "saml": z.object({ "enforced": z.boolean().describe("Require that members of the team use SAML Single Sign-On.").optional(), "roles": z.record(z.union([z.enum(["OWNER","MEMBER","DEVELOPER","SECURITY","BILLING","VIEWER","CONTRIBUTOR"]), z.object({ "accessGroupId": z.string().regex(new RegExp("^ag_[A-z0-9_ -]+$")) }).strict()])).describe("Directory groups to role or access group mappings.").optional() }).strict().optional(),
  "b_slug": z.string().describe("A new slug for the team.").optional(),
  "enablePreviewFeedback": z.string().describe("Enable preview toolbar: one of on, off or default.").optional(),
  "enableProductionFeedback": z.string().describe("Enable production toolbar: one of on, off or default.").optional(),
  "sensitiveEnvironmentVariablePolicy": z.string().describe("Sensitive environment variable policy: one of on, off or default.").optional(),
  "remoteCaching": z.object({ "enabled": z.boolean().describe("Enable or disable remote caching for the team.").optional() }).strict().describe("Whether or not remote caching is enabled for the team").optional(),
  "hideIpAddresses": z.boolean().describe("Display or hide IP addresses in Monitoring queries.").optional(),
  "hideIpAddressesInLogDrains": z.boolean().describe("Display or hide IP addresses in Log Drains.").optional()
}
```

### getteams

```ts
{
  "limit": z.number().describe("Maximum number of Teams which may be returned.").optional(),
  "since": z.number().describe("Timestamp (in milliseconds) to only include Teams created since then.").optional(),
  "until": z.number().describe("Timestamp (in milliseconds) to only include Teams created until then.").optional()
}
```

### createteam

```ts
{
  "slug": z.string().max(48).describe("The desired slug for the Team"),
  "name": z.string().max(256).describe("The desired name for the Team. It will be generated from the provided slug if nothing is provided").optional(),
  "attribution": z.object({ "sessionReferrer": z.string().describe("Session referrer").optional(), "landingPage": z.string().describe("Session landing page").optional(), "pageBeforeConversionPage": z.string().describe("Referrer to the signup page").optional(), "utm": z.object({ "utmSource": z.string().describe("UTM source").optional(), "utmMedium": z.string().describe("UTM medium").optional(), "utmCampaign": z.string().describe("UTM campaign").optional(), "utmTerm": z.string().describe("UTM term").optional() }).optional() }).describe("Attribution information for the session or current page").optional()
}
```

### deleteteam

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of."),
  "newDefaultTeamId": z.string().describe("Id of the team to be set as the new default team").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "reasons": z.array(z.object({ "slug": z.string().describe("Idenitifier slug of the reason why the team is being deleted."), "description": z.string().describe("Description of the reason why the team is being deleted.") }).strict().describe("An object describing the reason why the team is being deleted.")).describe("Optional array of objects that describe the reason why the team is being deleted.").optional()
}
```

### deleteteaminvitecode

```ts
{
  "inviteId": z.string().describe("The Team invite code ID.")
}
```

### uploadfile

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "Content-Length": z.number().describe("The file size in bytes").optional(),
  "x-vercel-digest": z.string().max(40).describe("The file SHA1 used to check the integrity").optional(),
  "x-now-digest": z.string().max(40).describe("The file SHA1 used to check the integrity").optional(),
  "x-now-size": z.number().describe("The file size as an alternative to \`Content-Length\`").optional()
}
```

### listauthtokens

```ts

```

### createauthtoken

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string(),
  "expiresAt": z.number().optional()
}
```

### getauthtoken

```ts
{
  "tokenId": z.string().describe("The identifier of the token to retrieve. The special value \\\"current\\\" may be supplied, which returns the metadata for the token that the current HTTP request is authenticated with.")
}
```

### deleteauthtoken

```ts
{
  "tokenId": z.string().describe("The identifier of the token to invalidate. The special value \\\"current\\\" may be supplied, which invalidates the token that the HTTP request was authenticated with.")
}
```

### getauthuser

```ts

```

### requestdelete

```ts
{
  "reasons": z.array(z.object({ "slug": z.string().describe("Idenitifier slug of the reason why the User account is being deleted."), "description": z.string().describe("Description of the reason why the User account is being deleted.") }).strict().describe("An object describing the reason why the User account is being deleted.")).describe("Optional array of objects that describe the reason why the User account is being deleted.").optional()
}
```

### createwebhook

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "url": z.string().url().regex(new RegExp("^https?://")),
  "events": z.array(z.enum(["budget.reached","budget.reset","domain.created","deployment.created","deployment.error","deployment.canceled","deployment.succeeded","deployment.ready","deployment.check-rerequested","deployment.promoted","deployment.integration.action.start","deployment.integration.action.cancel","deployment.integration.action.cleanup","edge-config.created","edge-config.deleted","edge-config.items.updated","firewall.attack","integration-configuration.permission-upgraded","integration-configuration.removed","integration-configuration.scope-change-confirmed","integration-resource.project-connected","integration-resource.project-disconnected","project.created","project.removed","deployment-checks-completed","deployment-ready","deployment-prepared","deployment-error","deployment-check-rerequested","deployment-canceled","project-created","project-removed","domain-created","deployment","integration-configuration-permission-updated","integration-configuration-removed","integration-configuration-scope-change-confirmed","marketplace.invoice.created","marketplace.invoice.paid","marketplace.invoice.notpaid","marketplace.invoice.refunded","observability.anomaly","test-webhook"])).min(1),
  "projectIds": z.array(z.string().regex(new RegExp("^[a-zA-z0-9_]+$"))).min(1).max(50).optional()
}
```

### getwebhooks

```ts
{
  "projectId": z.string().regex(new RegExp("^[a-zA-z0-9_]+$")).optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getwebhook

```ts
{
  "id": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### deletewebhook

```ts
{
  "id": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### listdeploymentaliases

```ts
{
  "id": z.string().describe("The ID of the deployment the aliases should be listed for"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### assignalias

```ts
{
  "id": z.string().describe("The ID of the deployment the aliases should be listed for"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "alias": z.string().describe("The alias we want to assign to the deployment defined in the URL").optional(),
  "redirect": z.string().nullable().describe("The redirect property will take precedence over the deployment id from the URL and consists of a hostname (like test.com) to which the alias should redirect using status code 307").optional()
}
```

### listaliases

```ts
z.object({ "domain": z.any().superRefine((x, ctx) => {
    const schemas = [z.array(z.any()), z.string()];
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
  }).describe("Get only aliases of the given domain name").optional(), "from": z.number().describe("Get only aliases created after the provided timestamp").optional(), "limit": z.number().describe("Maximum number of aliases to list from a request").optional(), "projectId": z.string().describe("Filter aliases from the given \`projectId\`").optional(), "since": z.number().describe("Get aliases created after this JavaScript timestamp").optional(), "until": z.number().describe("Get aliases created before this JavaScript timestamp").optional(), "rollbackDeploymentId": z.string().describe("Get aliases that would be rolled back for the given deployment").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape
```

### getalias

```ts
{
  "idOrAlias": z.string().describe("The alias or alias ID to be retrieved"),
  "from": z.number().describe("Get the alias only if it was created after the provided timestamp").optional(),
  "projectId": z.string().describe("Get the alias only if it is assigned to the provided project ID").optional(),
  "since": z.number().describe("Get the alias only if it was created after this JavaScript timestamp").optional(),
  "until": z.number().describe("Get the alias only if it was created before this JavaScript timestamp").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### deletealias

```ts
{
  "aliasId": z.string().describe("The ID or alias that will be removed"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### get_certs

```ts

```

### getcertbyid

```ts
{
  "id": z.string().describe("The cert id"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### removecert

```ts
{
  "id": z.string().describe("The cert id to remove"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### issuecert

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "cns": z.array(z.string()).describe("The common names the cert should be issued for").optional()
}
```

### uploadcert

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "ca": z.string().describe("The certificate authority"),
  "key": z.string().describe("The certificate key"),
  "cert": z.string().describe("The certificate"),
  "skipValidation": z.boolean().describe("Skip validation of the certificate").optional()
}
```

### listdeploymentfiles

```ts
{
  "id": z.string().describe("The unique deployment identifier"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getdeploymentfilecontents

```ts
{
  "id": z.string().describe("The unique deployment identifier"),
  "fileId": z.string().describe("The unique file identifier"),
  "path": z.string().describe("Path to the file to fetch (only for Git deployments)").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getdeployments

```ts
{
  "app": z.string().describe("Name of the deployment.").optional(),
  "from": z.number().describe("Gets the deployment created after this Date timestamp. (default: current time)").optional(),
  "limit": z.number().describe("Maximum number of deployments to list from a request.").optional(),
  "projectId": z.string().describe("Filter deployments from the given ID or name.").optional(),
  "target": z.string().describe("Filter deployments based on the environment.").optional(),
  "to": z.number().describe("Gets the deployment created before this Date timestamp. (default: current time)").optional(),
  "users": z.string().describe("Filter out deployments based on users who have created the deployment.").optional(),
  "since": z.number().describe("Get Deployments created after this JavaScript timestamp.").optional(),
  "until": z.number().describe("Get Deployments created before this JavaScript timestamp.").optional(),
  "state": z.string().describe("Filter deployments based on their state (\`BUILDING\`, \`ERROR\`, \`INITIALIZING\`, \`QUEUED\`, \`READY\`, \`CANCELED\`)").optional(),
  "rollbackCandidate": z.boolean().describe("Filter deployments based on their rollback candidacy").optional(),
  "branch": z.string().describe("Filter deployments based on the branch name").optional(),
  "sha": z.string().describe("Filter deployments based on the SHA").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### deletedeployment

```ts
{
  "id": z.string().describe("The ID of the deployment to be deleted"),
  "url": z.string().describe("A Deployment or Alias URL. In case it is passed, the ID will be ignored").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### getsecrets

```ts
{
  "id": z.string().describe("Filter out secrets based on comma separated secret ids.").optional(),
  "projectId": z.string().describe("Filter out secrets that belong to a project.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### createsecret

```ts
{
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string().describe("The name of the secret (max 100 characters)."),
  "value": z.string().describe("The value of the new secret."),
  "decryptable": z.boolean().describe("Whether the secret value can be decrypted after it has been created.").optional()
}
```

### renamesecret

```ts
{
  "name": z.string().describe("The name of the secret."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "b_name": z.string().describe("The name of the new secret.")
}
```

### getsecret

```ts
{
  "idOrName": z.string().describe("The name or the unique identifier to which the secret belongs to."),
  "decrypt": z.enum(["true","false"]).describe("Whether to try to decrypt the value of the secret. Only works if \`decryptable\` has been set to \`true\` when the secret was created.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

### deletesecret

```ts
{
  "idOrName": z.string().describe("The name or the unique identifier to which the secret belongs to."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}
```

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/vercel
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/vercel`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
