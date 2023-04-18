import { useRouter } from 'next/router'
import Cta from './Cta'
import HeaderToggle from './HeaderToggle'
import Logo from './Logo'

export interface IHeader {
  toggle?: boolean
  currentTab?: 'play' | 'prizes'
  showBackButton?: boolean
}

export default function Header({ toggle = true, currentTab = 'play', showBackButton = true }: IHeader) {
  const router = useRouter()

  return (
    <div className="pb-4 pt-12 flex items-center flex-col w-full relative">
      <Logo className="mb-2" />
      <div
        className="flex bg-toggle p-px"
        style={{
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
      >
        {toggle && (
          <>
            <HeaderToggle activeTab={currentTab === 'play'} className="rounded-l" name="Play" url="/" />
            <HeaderToggle activeTab={currentTab === 'prizes'} className="rounded-r" name="My Prizes" url="/prizes" />
          </>
        ) || showBackButton && (
          <Cta
            className="!text-sm !py-2 !px-3 absolute !w-fit left-0 top-1/2 -translate-y-2/4"
            onClick={() => router.back()}
            btnColor="outline"
          >
            Back
          </Cta>
        )}
      </div>
    </div>
  )
}
