import Link from 'next/link';
const Brand = () => {
    return (
        <div id="logo" className="relative block w-fit rounded-full p-1 text-3xl bg-zinc-400 bg-opacity-50 text-cyan-300 shadow-[0px_0px_10px_rgba(211,253,255,0.3)] center shadow-cyan-100 ">
            <Link href="/">Portfolio</Link>
        </div>
    )
}; export default Brand;