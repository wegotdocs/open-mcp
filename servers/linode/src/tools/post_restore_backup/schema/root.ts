import { z } from "zod"

export const inputParams = {
  "linode_id": z.number().int().describe("The ID of the Linode to restore a Backup to."),
  "overwrite": z.boolean().describe("If `true`, deletes all Disks and Configs on the target Linode before restoring.\n\nIf `false`, and the Disk image size is larger than the available space on the Linode, an error message indicating insufficient space is returned.").optional()
}