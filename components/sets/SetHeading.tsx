type Props = {
    title: string
    date: string
}

export default function SetHeding ({title, date}: Props) {
    return (<div className="mx-auto sm:max-w-[332px] items-center font-bold">
        <h2 className="text-center border-b-[3px] border-black p-2 text-lg">{title}</h2>
        <h2 className="text-center p-2 text-xs">{date}</h2>
    </div>);
};