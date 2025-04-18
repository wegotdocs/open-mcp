import { z } from "zod"

export const inputParamsSchema = {
  "package_type": z.enum(["npm","maven","rubygems","docker","nuget","container"]).describe("The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry."),
  "package_name": z.string().describe("The name of the package."),
  "package_version_id": z.number().int().describe("Unique identifier of the package version.")
}