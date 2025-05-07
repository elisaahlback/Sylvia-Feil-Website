function BookCard({ title, image, pubid, onClick, selected, imageSize = 'default' }) {
    return (
        <div
      onClick={() => onClick(pubid)}
      className={`w-31 h-45 bg-[#c0bebe] rounded flex items-center justify-center overflow-hidden drop-shadow-sm cursor-pointer ${
  selected ? 'ring-2 ring-red' : ''
}`}
    >
        <img src={image} alt={title} className={`object-cover transition-transform duration-500 ease-in-out hover:scale-110 ${
  imageSize === 'small' ? 'w-13 h-14.5' : 'w-full h-full'
} ${selected ? 'scale-110' : ''}`}
        />
    </div>
          
        

    )
  }
export default BookCard