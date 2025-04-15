import { z } from "zod"

export const inputParamsSchema = {
  "registry_name": z.string().describe("The name of a container registry."),
  "repository_name": z.string().describe("The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`."),
  "manifest_digest": z.string().describe("The manifest digest of a container registry repository tag.")
}