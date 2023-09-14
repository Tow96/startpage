import { LinkType, PageLink } from '../../shared/data-access-links/links.utils';
import './ui-links.css';

const Header = (props: { header: PageLink }) => <h3>{props.header.name}</h3>;
const Link = (props: { link: PageLink }) => (
  <li>
    <a href={props.link.ref} target="_blank">
      {props.link.name}
    </a>
  </li>
);

function LinkViewer(props: { links: PageLink[] }) {
  return (
    <ul className="link-viewer">
      {props.links.map((link, i) =>
        link.type === LinkType.HEADER ? (
          <Header key={i} header={link} />
        ) : (
          <Link key={i} link={link} />
        )
      )}
    </ul>
  );
}

export default LinkViewer;
