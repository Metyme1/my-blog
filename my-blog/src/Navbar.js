const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>my Blog</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create" style={{ 
            color: 'white', 
            backgroundColor: ' rgb(197, 108, 7)',
            borderRadius: '8px' 
          }}>New Blog</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;