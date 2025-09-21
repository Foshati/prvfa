import Link from 'next/link';

// Option 1: Using a simple SVG icon component
const TelegramIcon = () => (
  <svg width='15' height='15' viewBox='0 0 24 24' fill='currentColor' className='inline-block'>
    <path d='M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.302 1.539-1.124 1.818-1.124 1.818s-.632.304-1.796-.302c0 0-2.436-1.567-3.956-2.888-.256-.216-.431-.601.302-.908 0 0 3.58-3.287 4.03-3.692.304-.304.169-.491-.234-.234-.65.415-4.259 2.888-5.188 3.517 0 0-.896.555-2.564.058 0 0-1.425-.896.994-1.858 0 0 6.587-3.24 7.526-3.956.938-.717 1.906.717 1.906.717z' />
  </svg>
);

const GithubIcon = () => (
  <svg
    width='17'
    height='17'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    data-name='Layer 1'
    fill='currentColor'
    className='inline-block'
  >
    <path d='M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z' />
  </svg>
);

export const Footer = () => {
  return (
    <footer className='p-3 bg-background border-t text-center font-sans'>
      <div className='m-4 text-sm font-medium'>
        {/* Copyright Text (Hidden on Mobile) */}
        <p className='text-xs'>
          Copyright &copy; 2024 - All right reserved by{' '}
          <span className='inline-flex items-center gap-2'>
            <span className='cursor-pointer hover:text-yellow-600'>Foshati</span>
            <Link
              href='https://t.me/foshati'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-yellow-600 inline-flex items-center'
            >
              <TelegramIcon />
            </Link>
            <Link
              href='https://github.com/Foshati'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-yellow-600 inline-flex items-center'
            >
              <GithubIcon />
            </Link>
          </span>
        </p>

        {/* Responsive Links and Mode Toggle */}
        <div className='flex justify-center items-center gap-3 lg:gap-10 mt-3 text-xs font-thin'>
          {/* Show only the first 3 links on mobile */}
          <Link href='https://ditfa.com' className='hover:text-yellow-600'>
            Ditfa
          </Link>
          <Link href='https://teamtem.com' className='hover:text-yellow-600'>
            Teamtem
          </Link>
          <Link href='https://t.teljoo.com/' className='hover:text-yellow-600'>
            T.Teljoo
          </Link>

          {/* Hide the fourth link on mobile */}
          <Link href='https://foshati.com' className='hidden lg:inline hover:text-yellow-600'>
            Foshati
          </Link>
        </div>
      </div>
    </footer>
  );
};
