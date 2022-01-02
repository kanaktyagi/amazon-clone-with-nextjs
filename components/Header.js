import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <header>
           <div>
              <div>
                <Image src='https://links.papareact.com/f90'
                  width={150}
                  height={40}
                  objectFit='contain'
                  className='cursor-pointer'
                />
            </div>
           </div>
           <div>
           </div>
        </header>
    )
}

export default Header


