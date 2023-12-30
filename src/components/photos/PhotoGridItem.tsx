"use client";

import { Photo } from '@/interfaces/photos-interfaces'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
    photo: Photo
}
const PhotoGridItem = ({ photo }: Props) => {
    const [displayImage, setDisplayImage] = useState(photo.images[0]);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleImageClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='overflow-hidden'>
            <div onClick={handleImageClick}>
                <Image
                    src={`/photos/${displayImage}`}
                    alt='photo'
                    className="w-full object-cover rounded cursor-pointer"
                    width={500}
                    height={500}
                    priority
                    placeholder="empty"
                />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md ' >
                    <div className='max-w-2xl w-full p-4'>
                        <Image
                            src={`/photos/${displayImage}`}
                            alt='photo'
                            className='w-full h-full object-contain'
                            width={1200}
                            height={1200}
                        />
                        <button className='absolute top-4 right-4 text-white text-xl' onClick={handleCloseModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};


export default PhotoGridItem