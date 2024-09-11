const RatingStars = ({rating}) => {
 
  const stars = [];
  for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? '#FFD700'  : '#d1d5db' }} className={`ri-star${i <= rating ? '-fill' : '-line'}`}></span>
      )  
  }

  return (
    <div className='product__rating'>
        {stars}
    </div>
  )
}

export default RatingStars