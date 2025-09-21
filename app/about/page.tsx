export default function AboutPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
      <main className='flex flex-col items-center justify-center flex-1 px-20 text-center'>
        <h1 className='text-6xl font-bold text-gray-900'>
          About Us
        </h1>

        <p className='mt-3 text-2xl'>
          We are a group of dog enthusiasts who created this platform to share our love and knowledge about dogs. Join us and explore the amazing world of dogs.
        </p>
      </main>
    </div>
  )
}