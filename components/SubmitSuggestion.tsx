export default function SubmitSuggestion () {
    return <div className="mt-8 ml-[3px]">
        <span className="uppercase font-bold text-sm tracking-widest">Something missing?</span>
        <br />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScmvcD0naOd-szpeldPMTc0A7nwWClaNATS3VsXlm6J1Xo_tw/viewform?fbzx=149335141180928481&pli=1"
            className="uppercase text-xs flex flex-row justify-between p-2">
            <span className="pl-2">Submit a suggestion</span>
            <img src="/img/arrow-right.svg"
                className="link-arrow w-4"/>
        </a>
    </div>
};