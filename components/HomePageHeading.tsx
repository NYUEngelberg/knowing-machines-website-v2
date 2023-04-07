type Props = {
    text: string
}

export default function HomePageHeading ({text}:Props) {
    return <div className="w-full relative mt-[4px]">
        <div className="absolute top-[-3px] left-0 h-[3px] w-[40px] bg-black"></div>
        <div className="absolute top-[-3px] right-0 h-[3px] w-[272px] bg-black"></div>
        <div className="p-3 px-4 md:pl-[40px] text-lg uppercase font-bold border-[1px] border-r-0 border-black">
            {text}
        </div>
    </div>;
};