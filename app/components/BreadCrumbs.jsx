'use client';
import {usePathname} from 'next/navigation';
//import { MetaData } from 'next';

const BreacCrumbs = () => {

    const pathName = usePathname();

    
    return (
            <div id="breadCrumbs" className="relative pb-5 mb-20 top-20">
                 {/* Render the current route & Create Breadcrumbs  */}
                <span className="p-2 rounded-r-full bg-slate-700 text-purple-400">{pathName}</span>
            </div>
    )
}; export default BreacCrumbs;