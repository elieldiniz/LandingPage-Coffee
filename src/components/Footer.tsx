import Image from 'next/image'

export default function Footer(){
    return(
        <footer className="">
            <section className='flex justify-around items-center  border-t rounded-full border-orange-500  bg-yellow-950 drop-shadow-2xl'>
                <p className='text-white font-medium'>Além disso, você também receberá mensalmente <br/>um mimo surpresa para deixar a sua <br/>experiência ainda mais gostosa.</p>
                <div className='flex gap-10'>
                <Image 
                src="/Group9.svg" 
                width={150} 
                height={150}
                alt='coffee'
                />

                <Image 
                src="/Group10.svg" 
                width={150} 
                height={150}
                alt='coffee'
                />

                <Image 
                src="/Group11.svg" 
                width={150} 
                height={150}
                alt='coffee'
                />
                
                </div>
            </section>
        </footer>
    )
}