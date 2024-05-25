'use client'
import { useForm } from "react-hook-form";
import { signinSchema, TSigninSchema } from "../types/nextauth/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import ButtonGithubSignIn from "@/components/ButtonGithubSignIn";

export default function FormSignIn() {

    const route = useRouter()

    const { toast } = useToast()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TSigninSchema>({
        resolver: zodResolver(signinSchema)
    })

    const onSubmit = async (data: TSigninSchema) => {
        const result = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password
        })

        if (result?.ok) {
            route.push('/profile')
        } else {
            toast({
                variant: "destructive",
                title: "Something Wrong",
                description: "There was a problem with you email or password"
            })
        }
    }

    return (
        <div className="w-full max-w-md border-2 rounded-3xl shadow-2xl">
            <div
                className="flex justify-center font-extrabold m-6"
                style={{ fontSize: "125px" }}
            >
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                        {...register("email", {
                            required: errors.email?.message,
                        })}
                        id="email"
                        type="text"
                        placeholder="@gmail.com"
                        className="shadow appearance-none
                                   border rounded w-full
                                   py-2 px-3 text-gray-700
                                   leading-tight focus:outline-none
                                   focus:shadow-outline"
                    />
                </div>
                {errors.email && (
                    <p className="text-red-500">{`${errors.email?.message}`}</p>
                )}
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 
                       text-sm font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        {...register("password", {
                            required: errors.password?.message
                        })}
                        id="password"
                        type="password"
                        placeholder="******************"
                        className="shadow appearance-none
                       border rounded w-full
                       py-2 px-3 text-gray-700
                       leading-tight focus:outline-none
                       focus:shadow-outline"
                    />
                </div>
                {errors.password && (
                    <p className="text-red-500">{`${errors.password?.message}`}</p>
                )}
                <div className="mr-10 ml-10">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-500 hover:bg-blue-700
                                 text-white font-bold py-2 px-4
                                   rounded focus:outline-none 
                                   focus:shadow-outline"
                    >
                        Sign In
                    </button>
                </div>
                <div className="mr-10 ml-10 mt-2">
                    <ButtonGithubSignIn />
                </div>
            </form>
        </div>
    );
}