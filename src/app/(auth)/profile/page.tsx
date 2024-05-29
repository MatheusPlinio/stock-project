import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function page() {
    return (
        <div className="flex justify-center">
            <Card className="m-4 w-[700px]">
                <CardHeader>
                    <CardTitle className="flex justify-center">
                        <Image
                            src="/avatar.svg"
                            alt=""
                            width={100}
                            height={100}
                        />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    Olá seu perfil tera uma descrição aqui
                </CardContent>
            </Card>
        </div>
    )
}