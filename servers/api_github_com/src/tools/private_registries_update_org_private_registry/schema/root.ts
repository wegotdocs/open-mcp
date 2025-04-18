import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "secret_name": z.string().describe("The name of the secret."),
  "registry_type": z.literal("maven_repository").describe("The registry type.").optional(),
  "username": z.string().nullable().describe("The username to use when authenticating with the private registry. This field should be omitted if the private registry does not require a username for authentication.").optional(),
  "encrypted_value": z.string().regex(new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$")).describe("The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/rest/private-registries/organization-configurations#get-private-registries-public-key-for-an-organization) endpoint.").optional(),
  "key_id": z.string().describe("The ID of the key you used to encrypt the secret.").optional(),
  "visibility": z.enum(["all","private","selected"]).describe("Which type of organization repositories have access to the private registry. `selected` means only the repositories specified by `selected_repository_ids` can access the private registry.").optional(),
  "selected_repository_ids": z.array(z.number().int()).describe("An array of repository IDs that can access the organization private registry. You can only provide a list of repository IDs when `visibility` is set to `selected`. This field should be omitted if `visibility` is set to `all` or `private`.").optional()
}