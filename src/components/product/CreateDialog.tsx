'use client'
import { PlusCircle } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TCreateProductSchema, createProductSchema } from "@/types/product/type"
import { Combobox } from "../ComboBox"

export default function CreateDialog() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
        setError,
        setValue
    } = useForm<TCreateProductSchema>({
        resolver: zodResolver(createProductSchema)
    })

    const selectedCategory = watch("category")
    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [error, setNewError] = useState(null)
    const [frameworks, setFrameworks] = useState<{ id: string, name: string }[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/category/index/')
                if (!res.ok) {
                    throw new Error('Erro na requisição')
                }
                const result = await res.json()
                setFrameworks(result)
            } catch (error: any) {
                setNewError(error.message)
            }
        }
        fetchData()
    }, [])

    async function onSubmit(data: TCreateProductSchema) {
        const response = await fetch("/api/product/store", {
            method: "POST",
            body: JSON.stringify({
                name: data.name,
                category: data.category
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
            } else if (errors.category) {
                setError("category", {
                    type: "server",
                    message: errors.category
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
                        <DialogTitle className="text-indigo-500">Register Product</DialogTitle>
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
                                Category
                            </Label>
                            {/* {Array.isArray(frameworks) && frameworks.length > 0 ? ( */}
                            <Combobox
                                frameworks={frameworks}
                                value={selectedCategory}
                                onSelect={(value) => setValue('category', value)}
                                {...register("category", {
                                    required: "Writting a description",
                                    minLength: {
                                        value: 3,
                                        message: "create a description "
                                    }
                                })}
                            />
                            {/* ) : ( */}
                            {/* <p className="col-span-3 text-red-500">Loading Categories...</p> */}
                            {/* )} */}
                            {errors.category && (
                                <p className="text-red-500">{`${errors.category?.message}`}</p>
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