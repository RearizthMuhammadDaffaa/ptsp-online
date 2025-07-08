
import { render, screen } from '@testing-library/react'
import Menu from '../components/homepage/Menu'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

// Mock data
vi.mock('../utils/data', () => ({
  dataMenu: [
    {
      img: 'menuIcon_1.png',
      title: 'Panjar Biaya Perkara',
      link: 'panjar',
    },
    {
      img: 'menuIcon_2.png',
      title: 'Syarat Berperkara',
      link: 'syarat-berperkara',
    },
    {
      img: 'menuIcon_3.png',
      title: 'Chat Online',
      link: 'https://tawk.to/chat/67287ead4304e3196adcc31a/1ibr2tmj6',
    },
  ],
}))

describe('Menu Component', () => {
  it('Render Menu dan juga Masuk ke halaman chat tawk.to', () => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    )

    expect(screen.getByText('Panjar Biaya Perkara')).toBeInTheDocument()
    expect(screen.getByText('Syarat Berperkara')).toBeInTheDocument()
    expect(screen.getByText('Chat Online')).toBeInTheDocument()

    const chatLink = screen.getByText('Chat Online').closest('a')
    expect(chatLink).toHaveAttribute(
      'href',
      'https://tawk.to/chat/67287ead4304e3196adcc31a/1ibr2tmj6'
    )
  })
})
