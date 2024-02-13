import {
    BiSearch,
    IoIosColorWand,
    IoMdRose,
    FaFrog,
    MdOutlineMenuBook,
    GiSpottedMushroom,
    GiAcid,
    GiMagicBroom,
    RiAccountCircleLine,
    RiAccountCircleFill
} from '../svgs/index'


function HomeBar() {
    return (
        <div className="w-full py-2 hover:py-[5px] px-5 bg-purple-500 group/navBar transition">
            <div className="grid grid-cols-3 gap-4">

                <div className="grid w-fit px-7 group-hover/navBar:px-0">
                    <div className='justify-self-center'>
                        <IoMdRose className='w-6 h-6'/>
                    </div>
                    <label for="search" className='text-white hidden group-hover/navBar:flex'>Homepage</label>
                </div>

                <div className="flex place-self-center mx-10">
                    <input type="text" id="search" className='rounded-lg outline-none px-[10px]
                    focus:outline-4 focus:outline-offset-4'/>
                    <label for="search" className='border-2 p-[5px]
                    rounded-full ml-2'><BiSearch/></label>
                </div>

                <div className="flex place-self-center gap-10 group-hover/navBar:gap-5">


                    <div className="grid w-fit">
                        <div className='justify-self-center' id='varinhas'>
                            <IoIosColorWand className='w-6 h-6'/>
                        </div>
                        <label for="varinhas" className='text-white hidden group-hover/navBar:flex'>Varinhas</label>
                    </div>

                    <div className="grid w-fit">
                        <div className='justify-self-center' id='vassouras'>
                            <GiMagicBroom className='w-6 h-6'/>
                        </div>
                        <label for="vassouras" className='text-white hidden group-hover/navBar:flex'>Vassouras</label>
                    </div>

                    <div className="grid w-fit">
                        <div className='justify-self-center' id='pocoes'>
                            <GiAcid className='w-6 h-6'/>
                        </div>
                        <label for="pocoes" className='text-white hidden group-hover/navBar:flex'>Poções</label>
                    </div>

                    <div className="grid w-fit">
                        <div className='justify-self-center' id='animais'>
                            <FaFrog className='w-6 h-6'/>
                        </div>
                        <label for="animais" className='text-white hidden group-hover/navBar:flex'>Animais</label>
                    </div>

                    <div className="grid w-fit">
                        <div className='justify-self-center' id='ingredientes'>
                            <GiSpottedMushroom className='w-6 h-6'/>
                        </div>
                        <label for="ingredientes" className='text-white hidden group-hover/navBar:flex'>Ingredientes</label>
                    </div>

                    <div className="grid w-fit">
                        <div className='justify-self-center' id='livros'>
                            <MdOutlineMenuBook className='w-6 h-6'/>
                        </div>
                        <label for="livros" className='text-white hidden group-hover/navBar:flex'>Livros</label>
                    </div>

                    <div className="flex place-self-center">
                        <div className='justify-self-end' id='conta'>
                            <RiAccountCircleLine className='w-7 h-7'/>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default HomeBar;