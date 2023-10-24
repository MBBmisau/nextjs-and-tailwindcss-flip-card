import Image from "next/image"

export default function FlipCard() {
    return(
        <div className="perspective group bg-slate-700 rounded-lg">
            <div className="relative w-60 h-80 overflow-hidden rounded-lg cursor-pointer transition-all delay-100 duration-700 preserve-3d group-hover:rotate-y-180">
                <FlipCardFront />
                <FlipCardBack />
            </div>
        </div>
    )
}

function FlipCardFront() {
    return (
        <div className="absolue inset-0  backspace-hidden preserve-3d transition-all duration-100 delay-300 group-hover:opacity-0 group-hover:-z-10 z-20 bg-blue-500">
            {/* content */}
            <Image 
              src="https://www.refactoringui.com/_next/static/media/book.5380927448c9872170bbc9fc9e5828c4.png"
              alt=""
            />
        </div>
    )
}

function FlipCardBack() {

}