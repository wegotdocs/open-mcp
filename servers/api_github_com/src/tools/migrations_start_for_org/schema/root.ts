import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "repositories": z.array(z.string()).describe("A list of arrays indicating which repositories should be migrated."),
  "lock_repositories": z.boolean().describe("Indicates whether repositories should be locked (to prevent manipulation) while migrating data.").optional(),
  "exclude_metadata": z.boolean().describe("Indicates whether metadata should be excluded and only git source should be included for the migration.").optional(),
  "exclude_git_data": z.boolean().describe("Indicates whether the repository git data should be excluded from the migration.").optional(),
  "exclude_attachments": z.boolean().describe("Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).").optional(),
  "exclude_releases": z.boolean().describe("Indicates whether releases should be excluded from the migration (to reduce migration archive file size).").optional(),
  "exclude_owner_projects": z.boolean().describe("Indicates whether projects owned by the organization or users should be excluded. from the migration.").optional(),
  "org_metadata_only": z.boolean().describe("Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags).").optional(),
  "exclude": z.array(z.literal("repositories")).describe("Exclude related items from being returned in the response in order to improve performance of the request.").optional()
}