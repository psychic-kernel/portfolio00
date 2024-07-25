import Link from 'next/link';
import {FaFolder, FaApple} from "react-icons/fa";

async function fetchRepoContents(name){
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(`https://api.github.com/repos/psychic-kernel/${name}/contents`);
    console.log("CONTENT TYPE",name);
    
    const  contents = await response.json();
    return contents;

}

const RepoDirs = async ({name}) => {
   
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((item) => item.type === "dir");
    console.log(dirs);


    return (
        <div className="relative block bottom-40 ">
            
                {dirs.map((dir) => {
                    return  <ul>
                            <FaApple className="text-cyan-200 relative top-4"/>
                            <li className="ml-5 shadow-xl">
                                <Link href={`/repos/${dir.name}`} key={dir.name}>
                                    <FaFolder className="text-yellow-400"/>
                                    {dir.path}
                                </Link>
                            </li>
                        </ul>
                
                })}
        </div>
    );
}; export default RepoDirs;