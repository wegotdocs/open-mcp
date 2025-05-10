import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "pull_number": z.number().int().describe("The number that identifies the pull request."),
  "location": z.string().describe("The requested location for a new codespace. Best efforts are made to respect this upon creation. Assigned by IP if not provided.").optional(),
  "geo": z.enum(["EuropeWest","SoutheastAsia","UsEast","UsWest"]).describe("The geographic area for this codespace. If not specified, the value is assigned by IP. This property replaces `location`, which is closing down.").optional(),
  "client_ip": z.string().describe("IP for location auto-detection when proxying a request").optional(),
  "machine": z.string().describe("Machine type to use for this codespace").optional(),
  "devcontainer_path": z.string().describe("Path to devcontainer.json config to use for this codespace").optional(),
  "multi_repo_permissions_opt_out": z.boolean().describe("Whether to authorize requested permissions from devcontainer.json").optional(),
  "working_directory": z.string().describe("Working directory for this codespace").optional(),
  "idle_timeout_minutes": z.number().int().describe("Time in minutes before codespace stops from inactivity").optional(),
  "display_name": z.string().describe("Display name for this codespace").optional(),
  "retention_period_minutes": z.number().int().describe("Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).").optional()
}