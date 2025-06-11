import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "location_id": z.number().int(),
  "installer_type": z.enum(["WINDOWS_MSI","MAC_DMG","MAC_PKG","LINUX_DEB","LINUX_RPM","LINUX_ARM64_DEB","LINUX_ARMV7A_DEB","LINUX_ARM64_RPM","LINUX_ARMV7A_RPM"])
}