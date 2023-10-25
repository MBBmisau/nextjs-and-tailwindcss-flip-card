import Image from "next/image";
import refactoringUI from "@/public/refactoringUI.png";

export default function FlipCard() {
  return (
    <div className="perspective group bg-slate-700 rounded-lg">
      <div className="relative w-60 h-80 overflow-hidden rounded-lg cursor-pointer transition-all delay-100 duration-700 preserve-3d group-hover:rotate-y-180">
        <FlipCardFront />
        <FlipCardBack />
      </div>
    </div>
  );
}

function FlipCardFront() {
  return (
    <div className="absolute inset-0  backspace-hidden preserve-3d transition-all duration-100 delay-300 group-hover:opacity-0 group-hover:-z-10 z-20 bg-blue-500">
      {/* content */}
      <Image src={refactoringUI} alt="" width={240} height={320} />
    </div>
  );
}

function FlipCardBack() {
  return (
    <div className="absolute inset-0 rotate-y-180 backspace-hidden transition-all z-10 bg-slate-800">
      {/* content */}
      <div className="py-2 px-3 flex flex-col items-center">
        <h2 className="font-bold text-center text-white text-2xl">
          Refactoring UI
        </h2>
        <h3 className="font-semibold text-lg text-slate-100 pt-2">Authors</h3>
        <p className="text-xs text-slate-200 pt-0">
          <span>Adam Wathan</span> <br />
          <span>Steve Schoger</span>
        </p>
        <div className="pt-3">
          <p className="text- italic text-center text-slate-400 pt-0">
            Learn how to design beautiful user interfaces by yourself using
            specific tactics explained from a developer's point-of-view.
          </p>
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <a
            href="https://www.refactoringui.com"
            className="font-bold text-sm text-white bg-slate-800 transition-transform duration-700 delay-200 hover:scale-x-125"
          >
            <span className="flex items-baseline space-x-1 justify-center">
              <span>More info</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 15"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3 stroke-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </a>
          <a
            href="https://www.refactoringui.com/#get-refactoring-ui"
            className="w-full py-3 px-10 text-center font-bold text-sm text-slate-800 rounded-lg bg-white shadow-md transition-all hover:shadow-lg hover:scale-110 duration-700 delay-200 shadow-slate-500 hover:shadow-slate-300"
            target="_blank"
            rel="noopener"
          >
            Buy now
          </a>
        </div>
      </div>
      {/* End content */}
    </div>
  );
}
