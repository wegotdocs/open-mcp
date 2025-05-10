import { z } from "zod"

export const inputParams = {
  "allow_auto_disk_resize": z.boolean().describe("Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.").optional(),
  "migration_type": z.enum(["warm","cold"]).describe("Type of migration used in moving to a new host or Linode type.\n\n`warm`: the Linode will not power down until the migration is complete.\nWarm migrations are not available for DC migrations.\n\n`cold`: the Linode will be powered down and migrated. When the migration\nis complete, the Linode will be powered on.").optional(),
  "type": z.string().describe("The ID representing the Linode Type.")
}