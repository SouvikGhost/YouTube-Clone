const VideoCard = ({info}) => {
    if(!info) return null
    const {snippet ,statistics}=info
    const {thumbnails,title,channelTitle}=snippet
  return (
    <div className="shadow-lg w-64 rounded-lg">
        <img className="rounded-lg" src={thumbnails.medium.url} alt="videocardlogo" />
        <ul className="p-3">
            <li className="font-bold py-2">{title}</li>
            <li className="py-1">{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
    </div>
  )
}

export default VideoCard