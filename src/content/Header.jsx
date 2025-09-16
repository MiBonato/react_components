import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/buttons', label: 'Buttons' },
  { to: '/modals', label: 'Modals' },
  // add all pages
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const baseLink =
    'px-3 py-2 rounded-md text-sm font-medium transition-colors'
  const active =
    'bg-blue-600 text-white'
  const idle =
    'text-gray-700 hover:bg-gray-100'

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-14">
          <div className="font-bold">React Components</div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? active : idle}`
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden pb-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? active : idle}`
                  }
                  onClick={() => setOpen(false)}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
