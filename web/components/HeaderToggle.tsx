import Link from 'next/link'

export interface IHeaderToggle {
  name: string
  url: string
  className?: string
  activeTab?: boolean
}

export default function HeaderToggle({ name, url, className = '', activeTab = false }: IHeaderToggle) {
  const toggleClassName = `${
    activeTab ? 'bg-gradient' : 'bg-black/[0.4]'
  } py-2 flex align-center text-white text-sm justify-center w-[120px] ${className}`

  return (
    <Link className={toggleClassName} href={url}>
      {name}
    </Link>
  )
}
