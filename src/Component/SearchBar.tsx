import { GameQueryContext, useGameQuery } from "@/Contexts/GameQueryContext";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

// interface SearchBarProps {
//   onSearch: (searchText: string) => void;
// }

const SearchBar = (
  // { onSearch }: SearchBarProps
) => {
  const searchTextRef = useRef<HTMLInputElement>(null);
  const { GameQuery, setGameQuery } = useGameQuery();

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (searchTextRef.current) {
          setGameQuery({ ...GameQuery, searchText: searchTextRef.current.value });
        }
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={searchTextRef}
          type="text"
          placeholder="Search games....."
          variant={"outline"}
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
