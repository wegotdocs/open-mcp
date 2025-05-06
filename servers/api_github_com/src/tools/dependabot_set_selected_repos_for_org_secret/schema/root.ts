import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "selected_repository_ids": z.array(z.number().int()).describe("An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://docs.github.com/rest/dependabot/secrets#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/dependabot/secrets#remove-selected-repository-from-an-organization-secret) endpoints.")
}