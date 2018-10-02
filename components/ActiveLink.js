import { withRouter } from 'next/router'

const ActiveLink = ({ children, className, router, href }) => {
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'black' : 'blue'
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} className={className} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)
