import Image from 'next/image'

export default function Header() {
    return (
        <header>
          <div className='flex justify-around items-center my-7'>
    
            <Image 
            src="/logo.svg" 
            width={150} 
            height={200}
            alt='Logo'
            />
  
            <nav className='flex gap-5 text-white'>
              <ul className='border-b-2 border-orange-500'>Inicio</ul>
              <ul>Loja</ul>
              <ul>Kits passados</ul>
              <ul>Produtos</ul>
              <ul>Blog</ul>
            </nav>
          </div>
          <hr className=' border-orange-500'/>
        </header>
    )
  }
  