import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
      <main className='flex flex-col items-center justify-center flex-1 px-20 text-center'>
        <h1 className='text-6xl font-bold text-gray-900'>
          Welcome to the Dog World!
        </h1>

        <p className='mt-3 text-2xl'>
          Discover the world of dogs, learn about different breeds and tips for dog care.
        </p>

        <div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
          <Link href='/about'>
            <a className='p-6 mt-6 text-left border w-72 rounded-xl hover:text-blue-600 focus:text-blue-600'>
              <h3 className='text-2xl font-bold'>About &rarr;</h3>
              <p className='mt-4 text-xl'>Learn more about us.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}