import React, { useState } from 'react';
import './ui-search-input.css'


function SearchInput(props: { onSearch: (term: string) => void }) {
  const [search, setSearch] = useState('');
  // TODO: Improve logic
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const engine_url = 'https://duckduckgo.com';

    const is_url =
      /^(((http)|(https)):\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]+\/?([a-zA-Z0-9/?=&%-_]+)?$/;
    const is_ip =
      /^(((http)|(https)):\/\/)?([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}|localhost)(:[0-9]{1,5})?(\/[a-zA-Z0-9/?=&%-_]+)?$/;

    const url_match = search.match(is_url);
    if (url_match !== null)
      return props.onSearch(
        url_match[0].substring(0, 4) == 'http' ? url_match[0] : 'https://' + url_match[0]
      );

    const ip_match = search.match(is_ip);
    if (ip_match !== null)
      return props.onSearch(
        ip_match[0].substring(0, 4) == 'http' ? ip_match[0] : 'http://' + ip_match[0]
      );

    props.onSearch(`${engine_url}/${encodeURIComponent(search)}`);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <label htmlFor="search__box">{'> find /'}</label>
        <input
          onChange={e => setSearch(e.target.value)}
          type="text"
          placeholder="Type Here"
          name="search__box"
          id="search__box"
          autoComplete="off"
          autoFocus
        />
      </form>
    </div>
  );
}

export default SearchInput;
