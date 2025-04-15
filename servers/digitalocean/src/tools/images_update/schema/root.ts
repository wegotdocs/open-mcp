import { z } from "zod"

export const inputParamsSchema = {
  "image_id": z.number().int().describe("A unique number that can be used to identify and reference a specific image."),
  "name": z.string().describe("The display name that has been given to an image.  This is what is shown in the control panel and is generally a descriptive title for the image in question.").optional(),
  "distribution": z.enum(["Arch Linux","CentOS","CoreOS","Debian","Fedora","Fedora Atomic","FreeBSD","Gentoo","openSUSE","RancherOS","Rocky Linux","Ubuntu","Unknown"]).describe("The name of a custom image's distribution. Currently, the valid values are  `Arch Linux`, `CentOS`, `CoreOS`, `Debian`, `Fedora`, `Fedora Atomic`,  `FreeBSD`, `Gentoo`, `openSUSE`, `RancherOS`, `Rocky Linux`, `Ubuntu`, and `Unknown`.  Any other value will be accepted but ignored, and `Unknown` will be used in its place.").optional(),
  "description": z.string().describe("An optional free-form text field to describe an image.").optional()
}