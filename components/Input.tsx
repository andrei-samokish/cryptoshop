
function Input({width, height, placeholder, round, on_change, on_submit}: InputProps):JSX.Element{
    return(
        <input
            className = {`w-[${width}] h-[${height}] rounded-[${round}]`}
            type = "text"
            placeholder={placeholder}
            onChange = {on_change}
            onSubmit = {on_submit}
        />
    )
}

export {Input};