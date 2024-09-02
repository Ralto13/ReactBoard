import { Link } from 'react-router-dom'

export default function Navigation() {

  return (
      <nav className='flex'>
        <div className='logo'>home logo</div>
          <Link to="/">홈</Link>
          <Link to="/login">로그인</Link>
          <Link to="/board">게시판</Link>
      </nav>
  )
  
};
