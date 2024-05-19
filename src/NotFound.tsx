import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='container mx-auto mt-48'>
      <div className='mb-4 text-center'>
        <h2 className='text-center text-8xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>404</h2>
        <p className='font-medium mt-5 mb-5'>
          Sorry, the page you are looking for does not exist.<br />
          It might have been moved or deleted.
        </p>
        <Link className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' to='/'>Return to Editor</Link>
      </div>
    </div>
  )
}

export default NotFound