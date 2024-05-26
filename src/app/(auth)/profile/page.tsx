import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </CardContent>
            </Card>
        </div>
    )
}