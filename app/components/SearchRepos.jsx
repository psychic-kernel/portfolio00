import { FaSearch } from "react-icons/fa";

const SearchRepos = () => {
    return (
        <div className="relative">
            
            <span className="relative inline">
                <FaSearch className="inherit ml-4 top-5"/>
                <input className="relative inline rounded-md mx-3 my-3 pl-3 text-cyan-900" type="search" placeholder="Search by name"/> 
            </span>
        </div>
    )
}; export default SearchRepos;