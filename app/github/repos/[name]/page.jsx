import {Suspense} from 'react';
import Link from 'next/link';
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
const RepoPage = ({params: {name}}) => {
    return (
        <div className="relative block">
            {/* <h2>{params.name}</h2> */}
            {/* <h2>{name}</h2> */}
            <Link href='/code/repos' className="p-1 rounded-md bg-blue-700">
                Back To Repos
            </Link> 
            <Suspense fallback={<div>Loading...</div>}>
                <Repo name={name} />
            </Suspense>
            
            {/* WATCH RATE LIMIT */}
            <RepoDirs name={name} />
        </div>
    );
}; export default RepoPage;