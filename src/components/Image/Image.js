// import './Image.css';

const Image = (props) => {
  // console.log(props);
  return(
    <div className='imageContainer'>
      <img className='image' src={props.imageUrl} alt=''/>
    </div>
  )
}

export default Image;