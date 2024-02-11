import {
    BiSearch,
    IoIosColorWand,
    IoMdRose
} from '../svgs/index'


function HomeBar() {
    return (
        <div className="w-full py-[5px] px-5 bg-purple-500">
            <div className="grid grid-cols-3">

                <div className="grid w-fit">
                    <div className='justify-self-center'>
                        <IoMdRose/>
                    </div>
                    <label for="search" className=''>Homepage</label>
                </div>

                <div className="flex place-self-center">
                    <input type="text" id="search" className='rounded-lg outline-none px-[10px]
                    focus:outline-4 focus:outline-offset-4'/>
                    <label for="search" className='border-2 p-[5px]
                    rounded-full ml-2'><BiSearch/></label>
                </div>
                
                <div className="flex place-self-center">
                    <div className="grid w-fit">
                        <div className='justify-self-center'>
                            <IoMdRose/>
                        </div>
                        <label for="search" className=''>Homepage</label>
                    </div>

                    <div className="grid w-fit">
                        <div className='justify-self-center'>
                            <IoMdRose/>
                        </div>
                        <label for="search" className=''>Homepage</label>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default HomeBar;