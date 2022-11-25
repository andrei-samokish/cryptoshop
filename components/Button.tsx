function Button(props: ButtonProps): JSX.Element{
    return(
            <button
                className = { `w-[75px] h-[75px] border-[3px] border-black text-center items-center ${props.className}`}
                onChange={props.function}
            >
                {props.title}
            </button>
    )
}

export {Button};