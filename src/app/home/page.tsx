import PhotosGrid from '@/components/photos/PhotosGrid'
import { data as seedData } from '@/seed/seed'


export default function Home() {
  return (
    <>
      <PhotosGrid photos={seedData.photos} />
    </>
  )
}
