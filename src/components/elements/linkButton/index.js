import Link from 'next/link'
import React from 'react'

const LinkButton = ({
    href,
    title,
    target,
    showArrow,
    className,
    buttonType = "primary"
}) => {
    const buttonTypeClassName = buttonType === "primary" ?
        "border border-secondary bg-secondary shadow" :
        "border border-primary bg-white"

    return <Link
        href={href || "/"}
        target={target || "_self"}
        className={`px-4 py-2 md:py-3 text-primary rounded-xl justify-center items-center gap-2 inline-flex ${buttonTypeClassName} ${className}`}
    >
        <span className="text-center text-base font-medium leading-normal inline-flex overflow-hidden">
            <span>
                {title}
            </span>
        </span>
        {
            showArrow && <span className=''>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.172 10.9997L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997H4V10.9997H16.172Z" fill="#012A36" />
                </svg>
            </span>
        }

    </Link>
}

export default LinkButton