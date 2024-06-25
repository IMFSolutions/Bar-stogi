import React from 'react'
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const logo = () => {
  return (
    <div>
      <Link href="/">
            <img src="/upscaled_logo-removebg.png" width={100} height={40} />
          </Link>
    </div>
  )
}

export default logo
