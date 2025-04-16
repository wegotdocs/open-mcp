import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["description","edit_team_name_or_description_access_level","edit_team_visibility_or_trash_team_access_level","endorsed","guest_invite_management_access_level","html_description","join_request_management_access_level","member_invite_management_access_level","name","offset","organization","organization.name","path","permalink_url","team_content_management_access_level","team_member_removal_access_level","uri","visibility"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}