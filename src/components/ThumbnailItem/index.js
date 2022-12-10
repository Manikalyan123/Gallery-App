// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, onViewImage} = props
  const {
    id,

    thumbnailUrl,
    thumbnailAltText,
  } = imagesList

  const onView = () => {
    onViewImage(id)
  }

  return (
    <li className="listorder">
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className="thumbnail"
        onClick={onView}
      />
    </li>
  )
}
export default ThumbnailItem
