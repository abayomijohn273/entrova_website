import LinkButton from '@/components/elements/linkButton'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../../public/images/svg/logo.svg"

const Header = () => {
    return (
        <header className={`sticky top-0 z-10 w-full overflow-hidden mx-auto bg-white`}>
            <nav className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto py-4 md:py-5'>
                <div className='w-full flex flex-row justify-between items-center'>
                    <div className=''>
                        <Link href={"/"}>
                            <Image src={Logo} alt="entrova" />
                            <span className='sr-only'>entrova</span>
                        </Link>
                    </div>

                    <div className='flex flex-1 justify-end'>
                        <div className={`flex items-center space-x-4`}>
                            <div className='hidden md:block'>
                                <LinkButton className="px-8" title={"Book A Demo"} />
                            </div>
                            <div className=''>
                                <LinkButton title={"Log In"} buttonType='' showArrow />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header