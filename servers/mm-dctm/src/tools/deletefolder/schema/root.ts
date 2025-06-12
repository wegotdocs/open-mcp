import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "id": z.string().describe("The r_object_id of queried object."),
  "del-non-empty": z.string().describe("Ensures whether to delete the folder instance when it is not empty. * 'true', would delete the folder and all of its descendants. * 'false', would not delete the folder instance only.").optional(),
  "del-all-links": z.string().describe("Ensures whether to unlink the links on folder instance and all its descendants when deleted. * 'true', would delete the folder and all descendants, regardless of other folders into which they are linked * 'false', would unlink folder descendants from the folder being deleted if the folder descendants have links to other folders, and to remove folder descendants that are only linked to the folder being deleted.").optional()
}