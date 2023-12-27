"use client";

import { Photo } from '@/interfaces/photos-interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface Props {
    photo: Photo
}

const PhotoGridItem = ({ photo }: Props) => {

    const [displayImage, setDisplayImage] = useState(photo.images[0]);

    return (
        <div className='overflow-hidden'>
            <Link href={`/photos/${photo.slug}`}>
                <Image src={`/photos/${displayImage}`} alt='photo' className="w-full object-cover"
                    width={500}
                    height={500} />
            </Link>
        </div>
    )
}

export default PhotoGridItem