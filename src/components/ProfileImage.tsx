import Image from "next/image";

export default function ProfileImage(){
    return(
        <div>
            <Image 
                className="rounded-full"
                alt="gif-programmer"
                src="/web-programmer.webp"
                width={750}
                height={750}
            />
        </div>
    )
}