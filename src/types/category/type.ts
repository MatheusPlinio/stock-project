import { z } from 'zod'

export const createCategorySchema = z.object({
    name: z.string().min(3, "Need a name for Category"),
    description: z.string().min(3, "Need a description"),
})

export const updateCategorySchema = z.object({
    id: z.string(),
    name: z.string().min(3, "Need a name for Category"),
    description: z.string().min(3, "Need a description")
})

export type TCreateCategorySchema = z.infer<typeof createCategorySchema>
export type TUpdateCategorySchema = z.infer<typeof updateCategorySchema>