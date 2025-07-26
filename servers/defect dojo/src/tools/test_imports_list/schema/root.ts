import { z } from "zod"

export const inputParamsSchema = {
  "branch_tag": z.string().optional(),
  "build_id": z.string().optional(),
  "commit_hash": z.string().optional(),
  "findings_affected": z.array(z.number().int()).optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "o": z.array(z.enum(["-branch_tag","-build_id","-commit_hash","-created","-id","-modified","-version","branch_tag","build_id","commit_hash","created","id","modified","version"])).describe("Ordering\n\n* `id` - Id\n* `-id` - Id (descending)\n* `created` - Created\n* `-created` - Created (descending)\n* `modified` - Modified\n* `-modified` - Modified (descending)\n* `version` - Version\n* `-version` - Version (descending)\n* `branch_tag` - Branch tag\n* `-branch_tag` - Branch tag (descending)\n* `build_id` - Build id\n* `-build_id` - Build id (descending)\n* `commit_hash` - Commit hash\n* `-commit_hash` - Commit hash (descending)").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "test": z.number().int().optional(),
  "test_import_finding_action__action": z.enum(["C","N","R","U"]).nullable().describe("* `N` - created\n* `C` - closed\n* `R` - reactivated\n* `U` - untouched").optional(),
  "test_import_finding_action__created": z.string().datetime({ offset: true }).optional(),
  "test_import_finding_action__finding": z.number().int().optional(),
  "version": z.string().optional()
}