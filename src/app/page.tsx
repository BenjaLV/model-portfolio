import PhotosGrid from '@/components/photos/PhotosGrid'
import { data as seedData } from '@/seed/seed'
import HomeLayout from './homeLayout/homeLayout'
import Head from 'next/head'




export default function Home() {
  return (
    <>
      <HomeLayout>
        <PhotosGrid photos={seedData.photos} />
      </HomeLayout>
    </>
  )
}
