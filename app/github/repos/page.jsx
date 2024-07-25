import { FaStar, FaCodeBranch, FaEye} from 'react-icons/fa';
import Link from 'next/link';
import SearchRepos from '../../components/SearchRepos'
async function  fetchRepos() {
    const repo = await fetch('https://api.github.com/users/psychic-kernel/repos'); 

    await new Promise((resolve, reject) => setTimeout(resolve, 1000));

    const repos = await repo.json();
    return repos;
}

const ReposPage = async () => {

    const repos = await fetchRepos();
    // console.log(repos[0].name)
    return (
        <div>
            
            <SearchRepos/>
            

            <ul className="flex flex-col">
                {repos.map(repo => (
                   <li className="relative rounded-sm pl-5 py-5 left-40 my-2 bg-slate-600 shadow-md shadow-cyan-200" key={repo.id}>
                    <Link href={`/code/repos/${repo.name}`}>
                        <span className="inline relative hover:text-cyan-300 ">{repo.name}</span>
                        {/* <p>Description: {repo.description}</p> */}
                        <div className="flex items-center gap-2">
                            
                            <span>
                                <FaStar className="text-yellow-300"/> {repo.stargazers_count}
                            </span>
                            <span>
                                <FaCodeBranch className="text-green-500"/> {repo.forks_count}
                            </span>
                            <span>
                                <FaEye className="text-blue-500"/> {repo.watchers_count}
                            </span>
                        </div>
                    </Link>
                   </li>
                ))}
            </ul>
        </div>
    )
}; export default ReposPage;