import { z } from "zod"

export const inputParams = {
  "app_id": z.string().describe("The app ID"),
  "deployment_id": z.string().describe("The ID of the deployment to rollback to.").optional(),
  "skip_pin": z.boolean().describe("Whether to skip pinning the rollback deployment. If false, the rollback deployment will be pinned and any new deployments including Auto Deploy on Push hooks will be disabled until the rollback is either manually committed or reverted via the CommitAppRollback or RevertAppRollback endpoints respectively. If true, the rollback will be immediately committed and the app will remain unpinned.").optional()
}