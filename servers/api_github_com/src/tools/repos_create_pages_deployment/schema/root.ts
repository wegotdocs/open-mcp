import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "artifact_id": z.number().describe("The ID of an artifact that contains the .zip or .tar of static assets to deploy. The artifact belongs to the repository. Either `artifact_id` or `artifact_url` are required.").optional(),
  "artifact_url": z.string().describe("The URL of an artifact that contains the .zip or .tar of static assets to deploy. The artifact belongs to the repository. Either `artifact_id` or `artifact_url` are required.").optional(),
  "environment": z.string().describe("The target environment for this GitHub Pages deployment.").optional(),
  "pages_build_version": z.string().describe("A unique string that represents the version of the build for this deployment."),
  "oidc_token": z.string().describe("The OIDC token issued by GitHub Actions certifying the origin of the deployment.")
}