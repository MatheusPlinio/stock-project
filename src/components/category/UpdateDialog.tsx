'use client'
import { TUpdateCategorySchema, updateCategorySchema } from "@/types/category/type"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

interface TUpdateDialogProps {
    category: {
        id: string
        name?: string
        description?: string
    }
}

export default function UpdateDialog({ category }: TUpdateDialogProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError
    } = useForm<TUpdateCategorySchema>({
        resolver: zodResolver(updateCategorySchema),
        defaultValues: {
            id: category.id,
            name: category.name,
            description: category.description
        }
    })

    const router = useRouter()

    const [open, setOpen] = useState(false)

    async function onSubmit(data: TUpdateCategorySchema) {
        const response = await fetch(`/api/category/update/${category.id}`, {
            method: "POST",
            body: JSON.stringify({
                id: category.id,
                name: data.name,
                description: data.description
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const responseData = await response.json()
        if (!response.ok) {
            alert("Submmiting form failed")
            setOpen(false)
        }

        if (responseData.errors) {
            const errors = responseData.errors
            if (errors.name) {
                setError("name", {
                    type: "server",
                    message: errors.name
                })
            } else if (errors.description) {
                setError("description", {
                    type: "server",
                    message: errors.description
                })
            }
            setOpen(false)
        } else {
            router.refresh()
            setOpen(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="text-center">
                    <button className="w-full rounded-md hover:bg-indigo-500 hover:text-white transition-all duration-300">Edit</button>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogHeader>
                        <DialogTitle className="text-indigo-500">Update Category</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right text-md text-indigo-500">
                                Name
                            </Label>
                            <Input
                                {...register("name", {
                                    required: "Waiting a name for an category",
                                    minLength: {
                                        value: 3,
                                        message: "Name Category must be at least 3 characteres"
                                    }
                                })}
                                id="name"
                                className="col-span-3 border-none"
                                autoFocus
                            />
                            {errors.name && (
                                <p className="text-red-500">{`${errors.name?.message}`}</p>
                            )}
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right text-md text-indigo-500">
                                Description
                            </Label>
                            <Textarea
                                {...register("description", {
                                    required: "Writting a description",
                                    minLength: {
                                        value: 3,
                                        message: "create a description"
                                    }
                                })}
                                id="description"
                                placeholder="Writting here a description"
                                className="col-span-3 border-none"
                            />
                            {errors.description && (
                                <p className="text-red-500">{`${errors.description?.message}`}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="bg-indigo-500 
                                       hover:bg-indigo-700 
                                       text-white font-bold 
                                       py-2 px-4 rounded transition-all duration-300"
                        >
                            Update
                        </button>
                        <Button className="transition-all duration-300" type="button" onClick={() => setOpen(false)}>
                            Back
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog >
    )
}