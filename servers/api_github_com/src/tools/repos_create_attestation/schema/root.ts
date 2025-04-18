import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "bundle": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `bundle` to the tool, first call the tool `expandSchema` with \"/properties/bundle\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The attestation's Sigstore Bundle.\nRefer to the [Sigstore Bundle Specification](https://github.com/sigstore/protobuf-specs/blob/main/protos/sigstore_bundle.proto) for more information.</property-description>")
}