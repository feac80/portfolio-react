import React from 'react'
// import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <footer className="bg-dark text-white p-4 text-center">
      Web Developer  © Copyright {new Date().getFullYear()}          
    </footer>
   
  )
}

export default Footer; 

// Footer.propTypes = {
//     title: PropTypes.string,
// };