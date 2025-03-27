# @open-mcp/flat_io

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "flat_io": {
      "command": "npx",
      "args": ["-y", "@open-mcp/flat_io"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Environment variables

- `API_KEY`

## Tools

### listclasses

### createclass

### parameters_classes_enroll_enrollmentcode_

### enrollclass

### getclass

### parameters_classes_class_

### updateclass

### parameters_classes_class_activate

### activateclass

### unarchiveclass

### parameters_classes_class_archive

### archiveclass

### listassignments

### parameters_classes_class_assignments

### createassignment

### unarchiveassignment

### parameters_classes_class_assignments_assignment_archive

### archiveassignment

### parameters_classes_class_assignments_assignment_copy

### copyassignment

### getsubmissions

### parameters_classes_class_assignments_assignment_submissions

### createsubmission

### exportsubmissionsreviewsascsv

### parameters_classes_class_assignments_assignment_submissions_csv

### exportsubmissionsreviewsasexcel

### parameters_classes_class_assignments_assignment_submissions_exce

### deletesubmission

### getsubmission

### parameters_classes_class_assignments_assignment_submissions_subm

### editsubmission

### getsubmissioncomments

### parameters_classes_class_assignments_assignment_submissions_subm

### postsubmissioncomment

### deletesubmissioncomment

### parameters_classes_class_assignments_assignment_submissions_subm

### updatesubmissioncomment

### getsubmissionhistory

### parameters_classes_class_assignments_assignment_submissions_subm

### listclassstudentsubmissions

### parameters_classes_class_students_user_submissions

### deleteclassuser

### parameters_classes_class_users_user_

### addclassuser

### listcollections

### createcollection

### deletecollection

### getcollection

### parameters_collections_collection_

### editcollection

### listcollectionscores

### parameters_collections_collection_scores

### deletescorefromcollection

### parameters_collections_collection_scores_score_

### addscoretocollection

### parameters_collections_collection_untrash

### untrashcollection

### getgroupdetails

### parameters_groups_group_

### getgroupscores

### parameters_groups_group_scores

### listgroupusers

### parameters_groups_group_users

### getauthenticateduser

### listorganizationinvitations

### createorganizationinvitation

### removeorganizationinvitation

### parameters_organizations_invitations_invitation_

### listlticredentials

### createlticredentials

### revokelticredentials

### parameters_organizations_lti_credentials_credentials_

### listorganizationusers

### createorganizationuser

### countorgausers

### removeorganizationuser

### parameters_organizations_users_user_

### updateorganizationuser

### createscore

### deletescore

### getscore

### parameters_scores_score_

### editscore

### getscorecollaborators

### parameters_scores_score_collaborators

### addscorecollaborator

### removescorecollaborator

### getscorecollaborator

### parameters_scores_score_collaborators_collaborator_

### getscorecomments

### parameters_scores_score_comments

### postscorecomment

### deletescorecomment

### parameters_scores_score_comments_comment_

### updatescorecomment

### markscorecommentunresolved

### parameters_scores_score_comments_comment_resolved

### markscorecommentresolved

### parameters_scores_score_fork

### forkscore

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/flat_io
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/flat_io`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
