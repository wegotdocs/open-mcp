import { z } from "zod"

export const inputParams = {
  "allow_auto_disk_resize": z.boolean().describe("Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.").optional()
}