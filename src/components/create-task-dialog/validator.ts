'use client'

import { z } from 'zod'

const schema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  flag: z.coerce.boolean().default(false),
})

export type FormProps = z.infer<typeof schema>

export default schema
