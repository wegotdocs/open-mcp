import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`."),
  "secret_name": z.string().describe("The name of the secret."),
  "encrypted_value": z.string().regex(new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$")).describe("Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-environment-public-key) endpoint."),
  "key_id": z.string().describe("ID of the key you used to encrypt the secret.")
}