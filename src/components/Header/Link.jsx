import { NavLink } from 'react-router-dom'

const Link = ({ children, ...rest }) => (
  <NavLink
    className="relative header-nav text-base text-gray-900 list"
    {...rest}
  >
    {children}
  </NavLink>
)


export default Link