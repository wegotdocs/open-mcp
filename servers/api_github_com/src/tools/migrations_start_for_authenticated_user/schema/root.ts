import { z } from "zod"

export const inputParamsSchema = {
  "lock_repositories": z.boolean().describe("Lock the repositories being migrated at the start of the migration").optional(),
  "exclude_metadata": z.boolean().describe("Indicates whether metadata should be excluded and only git source should be included for the migration.").optional(),
  "exclude_git_data": z.boolean().describe("Indicates whether the repository git data should be excluded from the migration.").optional(),
  "exclude_attachments": z.boolean().describe("Do not include attachments in the migration").optional(),
  "exclude_releases": z.boolean().describe("Do not include releases in the migration").optional(),
  "exclude_owner_projects": z.boolean().describe("Indicates whether projects owned by the organization or users should be excluded.").optional(),
  "org_metadata_only": z.boolean().describe("Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags).").optional(),
  "exclude": z.array(z.literal("repositories").describe("Allowed values that can be passed to the exclude param.")).describe("Exclude attributes from the API response to improve performance").optional(),
  "repositories": z.array(z.string().describe("Repository path, owner and name"))
}