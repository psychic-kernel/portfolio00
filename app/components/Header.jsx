import Link from 'next/link';
import Brand from '../components/Brand';

const Header = () => {
    return (
        <header className="">
            <div className="relative block top-20 z-50">
                <Brand />
            </div>
            <div className="fixed top-5 p-5 z-10">
                {/* <div id="logo" className="fixed rounded-lg p-1 top-10 ml-60 text-3xl shadow-2xl shadow-slate-100">
                    <Link href="/">Portfolio</Link>
                </div> */}
                
                <div className="fixed top-0 left-52">
                    <ul className="flex flex-nowrap rounded-lg shadow-md p-3 bg-zinc-800 opacity-80">
                        <li className="mx-10 text-cyan-300 rounded-lg p-1 hover:bg-green-400 hover:text-cyan-900">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="mx-10 text-cyan-300 rounded-lg p-1 hover:bg-green-400 hover:text-cyan-900">
                            <Link href="/about/my_work">My Work</Link>
                        </li>
                        <li className="mx-10 text-cyan-300 rounded-lg p-1 hover:bg-green-400 hover:text-cyan-900">
                            <Link href="/github/repos">My GitHub</Link>
                        </li>
                        <li className="mx-10 text-cyan-300 rounded-lg p-1 hover:bg-green-400 hover:text-cyan-900">
                            <Link href="/github/repos">My GitHub</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}; export default Header;