import { z } from 'zod'

export const createProductSchema = z.object({
    name: z.string().min(3, "Need a name for Product"),
    category: z.string().min(3, "Need set a category"),
    attributes: z.array(z.object({
        attribute: z.string(),
        value: z.string()
    })).optional()
})

export const updateProductSchema = z.object({
    id: z.string(),
    name: z.string().min(3, "Need a name for Product"),
    category: z.string().min(3, "Need set a category")
})

export type TCreateProductSchema = z.infer<typeof createProductSchema>
export type TUpdateProductSchema = z.infer<typeof updateProductSchema>