import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_update",
  "toolDescription": "Update an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "billing_email": "billing_email",
      "company": "company",
      "email": "email",
      "twitter_username": "twitter_username",
      "location": "location",
      "name": "name",
      "description": "description",
      "has_organization_projects": "has_organization_projects",
      "has_repository_projects": "has_repository_projects",
      "default_repository_permission": "default_repository_permission",
      "members_can_create_repositories": "members_can_create_repositories",
      "members_can_create_internal_repositories": "members_can_create_internal_repositories",
      "members_can_create_private_repositories": "members_can_create_private_repositories",
      "members_can_create_public_repositories": "members_can_create_public_repositories",
      "members_allowed_repository_creation_type": "members_allowed_repository_creation_type",
      "members_can_create_pages": "members_can_create_pages",
      "members_can_create_public_pages": "members_can_create_public_pages",
      "members_can_create_private_pages": "members_can_create_private_pages",
      "members_can_fork_private_repositories": "members_can_fork_private_repositories",
      "web_commit_signoff_required": "web_commit_signoff_required",
      "blog": "blog",
      "secret_scanning_push_protection_custom_link_enabled": "secret_scanning_push_protection_custom_link_enabled",
      "secret_scanning_push_protection_custom_link": "secret_scanning_push_protection_custom_link",
      "deploy_keys_enabled_for_repositories": "deploy_keys_enabled_for_repositories"
    }
  },
  inputParamsSchema
}

export default tool