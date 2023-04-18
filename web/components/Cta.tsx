import { MouseEventHandler, ReactNode } from 'react'
import LoadingIcon from './icons/LoadingIcon'

export interface ICta {
  className?: string
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'submit' | 'reset' | 'button'
  btnColor?: 'primary' | 'outline' | 'transparent'
  loadingMessage?: string
}

const BTN_COLOR_CLASSES = {
  primary: 'bg-ctaPrimary shadow-ctaPrimary',
  outline: 'bg-ctaOutline shadow-ctaOutline',
  transparent: 'bg-transparent text-blue-light',
}

export default function Cta({
  className = '',
  disabled = false,
  loading = false,
  onClick = () => {},
  btnType = 'button',
  btnColor = 'primary',
  loadingMessage,
  children,
}: ICta) {
  const ctaClassName = `flex items-center justify-center text-white text-cta py-3.5 rounded w-full ${
    disabled || loading ? 'bg-purple-disabled opacity-40 text-border-input' : BTN_COLOR_CLASSES[btnColor]
  } ${className}`
  const style: any = {
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  }

  if (btnColor === 'outline') {
    style.backdropFilter = 'blur(4px)'
  }

  return (
    <button className={ctaClassName} onClick={onClick} type={btnType} style={style} disabled={disabled}>
      {loading && loadingMessage && <div className="mr-2">{loadingMessage}</div>}
      {loading ? <LoadingIcon className="animate-spin" /> : children}
    </button>
  )
}
