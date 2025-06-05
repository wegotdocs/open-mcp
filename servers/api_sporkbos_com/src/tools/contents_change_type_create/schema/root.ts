import { z } from "zod"

export const inputParamsSchema = {
  "ulid": z.string(),
  "content_type": z.enum(["Decision","Glossary","Goal","Guide","Knowledge","Meeting","Note","Parking","Project","Series","Survey","Task","Metric","None"]).describe("* `Decision` - Key Decision\n* `Glossary` - Glossary\n* `Goal` - Goal\n* `Guide` - Guide\n* `Knowledge` - Knowledge\n* `Meeting` - Meeting Minutes\n* `Note` - Note\n* `Parking` - Parking Lot\n* `Project` - Project\n* `Series` - Series\n* `Survey` - Survey\n* `Task` - Task\n* `Metric` - Metric\n* `None` - None").optional(),
  "guide_type": z.enum(["Dream","Why","Purpose","Vision","Mission","Value","Strategy","Target","Guarantee","Process","USP","None"]).describe("* `Dream` - We Dream Big\n* `Why` - Our Why\n* `Purpose` - Purpose for Being\n* `Vision` - Vision of the Future\n* `Mission` - We are on a Mission\n* `Value` - The Core Values\n* `Strategy` - Strategic Plans\n* `Target` - Our Target Market\n* `Guarantee` - What We Stand For\n* `Process` - Following the Process\n* `USP` - Unique Selling Proposition\n* `None` - None").optional()
}