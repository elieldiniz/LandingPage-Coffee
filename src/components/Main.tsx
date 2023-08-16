import Image from 'next/image'

export default function Main(){
    return (
        <main>
            <section className='flex justify-around items-center mb-20 mt-20'>
                <div>
                <Image 
                src="/Group.svg" 
                width={500} 
                height={200}
                alt='Logo'
                />
                </div>
                <div>
                    <p className='text-orange-400 mt-2'>CAFES ESPECIAIS TODO MES</p>
                    <h1 className='text-white font-bold text-7xl mt-2'>Cafe Nao e <br/>so uma bebida</h1>
                    <p className='text-white mt-2'>Ao entrar para o Clube Veroo,todo mês você <br/>
                        receberá uma box com o café inédito do mês,<br/>
                        recém torrado e produzido por pequenos <br/>
                        produtores de todo o país.
                    </p>
                    <div className='bg-orange-400 w-36 h-10 flex justify-center items-center rounded-2xl text-black font-medium mt-2 hover:text-white cursor-pointer border hover:border-orange-800 hover:border-2'>
                        <p>ASSINE E RECEBA</p>
                    </div>
                </div>
            </section>
        </main>
    )
}