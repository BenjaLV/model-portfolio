import { Photo } from '@/interfaces/photos-interfaces'
import React from 'react'
import PhotoGridItem from './PhotoGridItem';

interface Props {
    photos: Photo[];
}

function PhotosGrid({ photos }: Props) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            {
                photos.map(photo => (
                    <div className='my-1 mx-1'>
                        <PhotoGridItem key={photo.slug} photo={photo} />
                    </div>
                ))
            }
        </div>
    )
}

export default PhotosGrid