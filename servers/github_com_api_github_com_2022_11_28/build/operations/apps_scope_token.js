import { z } from "zod";
export const toolName = `apps_scope_token`;
export const toolDescription = `Create a scoped access token`;
export const baseUrl = `https://github.com`;
export const path = `/applications/{client_id}/token/scoped`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "client_id": z.string().describe("The client ID of the GitHub app.") }).optional(), "body": z.object({ "access_token": z.string().describe("The access token used to authenticate to the GitHub API."), "permissions": z.object({ "actions": z.enum(["read", "write"]).describe("The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts.").optional(), "administration": z.enum(["read", "write"]).describe("The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation.").optional(), "checks": z.enum(["read", "write"]).describe("The level of permission to grant the access token for checks on code.").optional(), "contents": z.enum(["read", "write"]).describe("The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges.").optional(), "deployments": z.enum(["read", "write"]).describe("The level of permission to grant the access token for deployments and deployment statuses.").optional(), "environments": z.enum(["read", "write"]).describe("The level of permission to grant the access token for managing repository environments.").optional(), "issues": z.enum(["read", "write"]).describe("The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones.").optional(), "members": z.enum(["read", "write"]).describe("The level of permission to grant the access token for organization teams and members.").optional(), "metadata": z.enum(["read", "write"]).describe("The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata.").optional(), "organization_administration": z.enum(["read", "write"]).describe("The level of permission to grant the access token to manage access to an organization.").optional(), "organization_announcement_banners": z.enum(["read", "write"]).describe("The level of permission to grant the access token to view and manage announcement banners for an organization.").optional(), "organization_custom_roles": z.enum(["read", "write"]).describe("The level of permission to grant the access token for custom repository roles management. This property is in beta and is subject to change.").optional(), "organization_hooks": z.enum(["read", "write"]).describe("The level of permission to grant the access token to manage the post-receive hooks for an organization.").optional(), "organization_packages": z.enum(["read", "write"]).describe("The level of permission to grant the access token for organization packages published to GitHub Packages.").optional(), "organization_plan": z.literal("read").describe("The level of permission to grant the access token for viewing an organization's plan.").optional(), "organization_projects": z.enum(["read", "write", "admin"]).describe("The level of permission to grant the access token to manage organization projects and projects beta (where available).").optional(), "organization_secrets": z.enum(["read", "write"]).describe("The level of permission to grant the access token to manage organization secrets.").optional(), "organization_self_hosted_runners": z.enum(["read", "write"]).describe("The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization.").optional(), "organization_user_blocking": z.enum(["read", "write"]).describe("The level of permission to grant the access token to view and manage users blocked by the organization.").optional(), "packages": z.enum(["read", "write"]).describe("The level of permission to grant the access token for packages published to GitHub Packages.").optional(), "pages": z.enum(["read", "write"]).describe("The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds.").optional(), "pull_requests": z.enum(["read", "write"]).describe("The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges.").optional(), "repository_announcement_banners": z.enum(["read", "write"]).describe("The level of permission to grant the access token to view and manage announcement banners for a repository.").optional(), "repository_hooks": z.enum(["read", "write"]).describe("The level of permission to grant the access token to manage the post-receive hooks for a repository.").optional(), "repository_projects": z.enum(["read", "write", "admin"]).describe("The level of permission to grant the access token to manage repository projects, columns, and cards.").optional(), "secret_scanning_alerts": z.enum(["read", "write"]).describe("The level of permission to grant the access token to view and manage secret scanning alerts.").optional(), "secrets": z.enum(["read", "write"]).describe("The level of permission to grant the access token to manage repository secrets.").optional(), "security_events": z.enum(["read", "write"]).describe("The level of permission to grant the access token to view and manage security events like code scanning alerts.").optional(), "single_file": z.enum(["read", "write"]).describe("The level of permission to grant the access token to manage just a single file.").optional(), "statuses": z.enum(["read", "write"]).describe("The level of permission to grant the access token for commit statuses.").optional(), "team_discussions": z.enum(["read", "write"]).describe("The level of permission to grant the access token to manage team discussions and related comments.").optional(), "vulnerability_alerts": z.enum(["read", "write"]).describe("The level of permission to grant the access token to manage Dependabot alerts.").optional(), "workflows": z.literal("write").describe("The level of permission to grant the access token to update GitHub Actions workflow files.").optional() }).describe("The permissions granted to the user-to-server access token.").optional(), "repositories": z.array(z.string()).describe("The list of repository names to scope the user-to-server access token to. `repositories` may not be specified if `repository_ids` is specified.").optional(), "repository_ids": z.array(z.number().int()).describe("The list of repository IDs to scope the user-to-server access token to. `repository_ids` may not be specified if `repositories` is specified.").optional(), "target": z.string().describe("The name of the user or organization to scope the user-to-server access token to. **Required** unless `target_id` is specified.").optional(), "target_id": z.number().int().describe("The ID of the user or organization to scope the user-to-server access token to. **Required** unless `target` is specified.").optional() }).optional() }).shape;
