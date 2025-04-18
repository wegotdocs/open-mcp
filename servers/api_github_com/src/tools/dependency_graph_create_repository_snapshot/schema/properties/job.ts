import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The external ID of the job."),
  "correlator": z.string().describe("Correlator provides a key that is used to group snapshots submitted over time. Only the \"latest\" submitted snapshot for a given combination of `job.correlator` and `detector.name` will be considered when calculating a repository's current dependencies. Correlator should be as unique as it takes to distinguish all detection runs for a given \"wave\" of CI workflow you run. If you're using GitHub Actions, a good default value for this could be the environment variables GITHUB_WORKFLOW and GITHUB_JOB concatenated together. If you're using a build matrix, then you'll also need to add additional key(s) to distinguish between each submission inside a matrix variation."),
  "html_url": z.string().describe("The url for the job.").optional()
}