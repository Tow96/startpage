import { Themes } from '../../shared/data-access-themes';
import './ui-img-container.css'

// TODO: Make artist visible
// TODO: Better image loading
function ImageContainer(props: { theme: Themes }) {
  return (
    <div className="image__container">
      <img src={`/themes/${props.theme}/image.gif`} alt="No image" />
    </div>
  );
}

export default ImageContainer;
