function Download({archive, title}){
    return(
        <div>
            <a href={archive} download="Catalogo Tuppeware" className="flex justify-evenly gap-1 items-center shadow-xl bg-white  h-10 rounded-full text-[#E8CEAB] text-center font-bold border-2 border-[#E8CEAB] hover:bg-[#E8CEAB]/75 hover:text-white">
                {title}
            </a>
        </div>
    )
}
export default Download