function BookCard({ title, image, pubid, onClick, selected, imageSize = 'default' }) {
    return (
        <div
      onClick={() => onClick(pubid)}
      className={`w-31 h-auto rounded flex flex-col items-center justify-start overflow-hidden drop-shadow-sm cursor-pointer ${
  selected ? 'ring-2 ring-red' : ''
}`}
    >
      <div className="w-full aspect-[3/4] flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`rounded object-cover transition-transform duration-500 ease-in-out hover:scale-110 ${
            imageSize === 'small' ? 'w-13 h-14.5' : 'w-full h-full'
          } ${selected ? 'scale-110' : ''}`}
        />
      </div>
      <p className="mt-2 text-center text-sm font-medium text-black line-clamp-2">{title}</p>
        
    </div>
          
        

    )
  }
export default BookCard