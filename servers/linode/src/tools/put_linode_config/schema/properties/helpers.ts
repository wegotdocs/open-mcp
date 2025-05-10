import { z } from "zod"

export const inputParams = {
  "devtmpfs_automount": z.boolean().describe("Populates the `/dev` directory early during boot without `udev`.  Defaults to `false`.").optional(),
  "distro": z.boolean().describe("Helps maintain correct `inittab` or `upstart` console device.").optional(),
  "modules_dep": z.boolean().describe("Creates a modules dependency file for the kernel you run.").optional(),
  "network": z.boolean().describe("Set to `true` to automatically configure static networking.").optional(),
  "updatedb_disabled": z.boolean().describe("Set to `true` to disable the `updatedb` cron job to avoid disk thrashing.").optional()
}