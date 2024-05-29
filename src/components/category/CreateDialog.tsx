'use client'
import { PlusCircle } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createCategorySchema, TCreateCategorySchema } from "@/types/category/type"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "../ui/textarea"

export default function CreateDialog() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError
    } = useForm<TCreateCategorySchema>({
        resolver: zodResolver(createCategorySchema)
    })

    const router = useRouter()

    const [open, setOpen] = useState(false)

    async function onSubmit(data: TCreateCategorySchema) {
        const response = await fetch("/api/category/store", {
            method: "POST",
            body: JSON.stringify({
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
                <PlusCircle className="cursor-pointer hover:size-7 transition-all duration-300" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogHeader>
                        <DialogTitle className="text-indigo-500">Create Category</DialogTitle>
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
                                        message: "create a description "
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
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            className="bg-indigo-500 
                                       hover:bg-indigo-700 
                                       text-white font-bold 
                                       py-2 px-4 rounded transition-all duration-300"
                        >
                            Create
                        </Button>
                        <Button className="transition-all duration-300" type="button" onClick={() => setOpen(false)}>
                            Back
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog >
    )
}