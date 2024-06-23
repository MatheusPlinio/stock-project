import { cn } from "@/lib/utils"
import { Card } from "./ui/card"
import { HandCoins } from "lucide-react"
import { Label } from "./ui/label"

const CardBalance = () => {
    return (
        <div>
            <Card className="w-52 h-24 p-2 m-2 flex items-center">
                <div>
                    <HandCoins size={50} />
                </div>
                <div className="m-2 flex flex-col flex-grow">
                    <Label>Saldo Da Conta</Label>
                    <span>R$ 0,00</span>
                </div>
            </Card>
        </div>
    )
}

export { CardBalance }