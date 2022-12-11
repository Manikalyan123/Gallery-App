// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, onViewImage, isTrue} = props
  const {
    id,

    thumbnailUrl,
    thumbnailAltText,
  } = imagesList

  const onView = () => {
    onViewImage(id)
  }

  const classes = isTrue ? 'noOpaque' : 'thumbnail'

  return (
    <li className="listorder">
      <button type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`${classes}`}
          onClick={onView}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
