import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "tag_name": z.string().describe("The tag name for the release. This can be an existing tag or a new one."),
  "target_commitish": z.string().describe("Specifies the commitish value that will be the target for the release's tag. Required if the supplied tag_name does not reference an existing tag. Ignored if the tag_name already exists.").optional(),
  "previous_tag_name": z.string().describe("The name of the previous tag to use as the starting point for the release notes. Use to manually specify the range for the set of changes considered as part this release.").optional(),
  "configuration_file_path": z.string().describe("Specifies a path to a file in the repository containing configuration settings used for generating the release notes. If unspecified, the configuration file located in the repository at '.github/release.yml' or '.github/release.yaml' will be used. If that is not present, the default configuration will be used.").optional()
}