import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "id": z.string().describe("The r_object_id of queried object."),
  "del-version": z.enum(["SELECTED","UNUSED","ALL"]).describe("Delete options for multi-version document object. * 'selected_version', delete selected version only. * 'non_used_versions', delete non used versions. * 'all_versions', delete all versions.").optional(),
  "del-vd-all": z.string().describe("Whether remove the all the descendants if the object is virtual.").optional()
}