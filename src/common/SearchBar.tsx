import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full rounded-md border border-border bg-transparent px-4 py-2 flex flex-row items-center">
      <input
        type="text"
        placeholder="Search"
        className="flex-1 text-sm text-foreground outline-none focus:border-accent"
      />
      <Search className="w-4 h-4 text-slate-500" />
    </div>
  );
};

export default SearchBar;
