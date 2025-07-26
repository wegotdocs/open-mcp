import { z } from "zod"

export const inputParamsSchema = {
  "date_joined_after": z.string().date().optional(),
  "date_joined_before": z.string().date().optional(),
  "email": z.string().optional(),
  "first_name": z.string().optional(),
  "id": z.number().int().optional(),
  "is_active": z.boolean().optional(),
  "is_superuser": z.boolean().optional(),
  "last_login_after": z.string().date().optional(),
  "last_login_before": z.string().date().optional(),
  "last_name": z.string().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "o": z.array(z.enum(["-date_joined","-email","-first_name","-is_active","-is_superuser","-last_login","-last_name","-username","date_joined","email","first_name","is_active","is_superuser","last_login","last_name","username"])).describe("Ordering\n\n* `username` - Username\n* `-username` - Username (descending)\n* `last_name` - Last name\n* `-last_name` - Last name (descending)\n* `first_name` - First name\n* `-first_name` - First name (descending)\n* `email` - Email\n* `-email` - Email (descending)\n* `is_active` - Is active\n* `-is_active` - Is active (descending)\n* `is_superuser` - Is superuser\n* `-is_superuser` - Is superuser (descending)\n* `date_joined` - Date joined\n* `-date_joined` - Date joined (descending)\n* `last_login` - Last login\n* `-last_login` - Last login (descending)").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "username": z.string().optional()
}