import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye, FaFolder} from "react-icons/fa";

async function fetchRepo(name) {
    const response = await fetch(`https://api.github.com/repos/psychic-kernel/${name}/contents`);
    const repo = await response.json();
    return repo;
}

const Repo = async ({ name }) => {
    const repo = await fetchRepo(name);
    //const dirs = repo.filter((item) => item.type === "dir");

    //console.log(dirs);

    return  <>
            {repo.map((repo) => {
                return <div className="relative flex">
                {/* <div>
                    <h3 className="relative inline pb-5">{repo.name}</h3>
                 <p>{repo.description}</p> 
                </div> */}
                <div className="py-3">
                    {/* <FaStar className="text-yellow-300"/> */}
                    <span>{repo.stargazers_count}</span>
                </div>
                <div className="py-3">
                    {/* <FaCodeBranch className="text-green-500"/> */}
                    <span>{repo.forks_count}</span>
                </div>
                <div className="py-3">
                    {/* <FaEye className="text-blue-500"/> */}
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
            })} 
        </>;
}; export default Repo;