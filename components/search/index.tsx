import fetchApi from "../../core/services/fetch.service";
import { useRef } from "react";




export default  function SearchComponent({query}: any) {
  const inputEl = useRef<HTMLInputElement>(null);

  const res = async (val: string) => {
    return await fetchApi("search", val);
  };

  const handleSearch = async (e: any) => {
    if (e.key === "Enter") {
        const res = await fetchApi("search", e.target.value);
        return query(res);
    }
  };

  const handleSubmit = async () => {
         const el = inputEl.current;
         const res = await fetchApi("search", el?.value);
         return query(res);
  };

  const Search = ({...props}) => {
    return (
      <>
        <input
          type="text"
          ref={inputEl}
          onKeyDown={(e) => handleSearch(e)}
          placeholder="search any gif"
        />
        <button onClick={handleSubmit}>OK</button>
      </>
    );
  };

  return <Search />;
}
