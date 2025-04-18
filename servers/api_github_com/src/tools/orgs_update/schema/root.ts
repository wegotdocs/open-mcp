import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "billing_email": z.string().describe("Billing email address. This address is not publicized.").optional(),
  "company": z.string().describe("The company name.").optional(),
  "email": z.string().describe("The publicly visible email address.").optional(),
  "twitter_username": z.string().describe("The Twitter username of the company.").optional(),
  "location": z.string().describe("The location.").optional(),
  "name": z.string().describe("The shorthand name of the company.").optional(),
  "description": z.string().describe("The description of the company. The maximum size is 160 characters.").optional(),
  "has_organization_projects": z.boolean().describe("Whether an organization can use organization projects.").optional(),
  "has_repository_projects": z.boolean().describe("Whether repositories that belong to the organization can use repository projects.").optional(),
  "default_repository_permission": z.enum(["read","write","admin","none"]).describe("Default permission level members have for organization repositories.").optional(),
  "members_can_create_repositories": z.boolean().describe("Whether of non-admin organization members can create repositories. **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details.").optional(),
  "members_can_create_internal_repositories": z.boolean().describe("Whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see \"[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)\" in the GitHub Help documentation.").optional(),
  "members_can_create_private_repositories": z.boolean().describe("Whether organization members can create private repositories, which are visible to organization members with permission. For more information, see \"[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)\" in the GitHub Help documentation.").optional(),
  "members_can_create_public_repositories": z.boolean().describe("Whether organization members can create public repositories, which are visible to anyone. For more information, see \"[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)\" in the GitHub Help documentation.").optional(),
  "members_allowed_repository_creation_type": z.enum(["all","private","none"]).describe("Specifies which types of repositories non-admin organization members can create. `private` is only available to repositories that are part of an organization on GitHub Enterprise Cloud. \n**Note:** This parameter is closing down and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See the parameter deprecation notice in the operation description for details.").optional(),
  "members_can_create_pages": z.boolean().describe("Whether organization members can create GitHub Pages sites. Existing published sites will not be impacted.").optional(),
  "members_can_create_public_pages": z.boolean().describe("Whether organization members can create public GitHub Pages sites. Existing published sites will not be impacted.").optional(),
  "members_can_create_private_pages": z.boolean().describe("Whether organization members can create private GitHub Pages sites. Existing published sites will not be impacted.").optional(),
  "members_can_fork_private_repositories": z.boolean().describe("Whether organization members can fork private organization repositories.").optional(),
  "web_commit_signoff_required": z.boolean().describe("Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface.").optional(),
  "blog": z.string().optional(),
  "secret_scanning_push_protection_custom_link_enabled": z.boolean().describe("Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection.").optional(),
  "secret_scanning_push_protection_custom_link": z.string().describe("If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret.").optional(),
  "deploy_keys_enabled_for_repositories": z.boolean().describe("Controls whether or not deploy keys may be added and used for repositories in the organization.").optional()
}