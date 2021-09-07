import React from 'react'

function Navbar() {
  return (
    <div 
      style={{ 
        maxWidth: '1180px',
        margin: '20px auto',
        paddingBottom: '10px',
        fontSize: '30px',
        fontWeight: '600',
        color: 'gray',
        borderBottom: '1px solid gray'
      }}
    >
      Github API
    </div>
  )
}

export default React.memo(Navbar);
