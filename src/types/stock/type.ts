import { z } from 'zod'

export const createStockSchema = z.object({
    barcode: z.string().min(3, "Need a barcode"),
    product_id: z.string().min(3, "Need set a product"),
    fabrication_date: z.date().refine((date) => !isNaN(date.getTime()), {
        message: "Invalid date format"
    }),
    expiration_date: z.date().refine((date) => !isNaN(date.getTime()), {
        message: "Invalid date format"
    })
})

export const updateStockSchema = z.object({
    id: z.string(),
    name: z.string().min(3, "Need a name for Product"),
    category: z.string().min(3, "Need set a category")
})

export type TCreateStockSchema = z.infer<typeof createStockSchema>
export type TUpdateStockSchema = z.infer<typeof updateStockSchema>