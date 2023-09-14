import './ui-main.css';

import usePageLinkStore from '../../shared/data-access-links/links.store';
import useTheme from '../../shared/data-access-themes';

import SearchInput from '../ui-search-input';
import ImageContainer from '../ui-img-container';
import LinkViewer from '../ui-links';

function MainScreen() {
  const links = usePageLinkStore(s => s.links);
  const { theme } = useTheme();
  const handleSearch = (term: string) => {
    window.open(term, '_blank', 'noreferrer');
  };

  // if (spinner) return <div>Loading...</div>;

  return (
    <>
      <div className="main">
        <div className="bg"></div>
        <div className="card">
          <div className="content">
            <ImageContainer theme={theme} />
            <LinkViewer links={links} />
          </div>
          <SearchInput onSearch={handleSearch} />
        </div>
      </div>
    </>
  );
}

export default MainScreen;
