
const Button = () => {
    // Componente funcional
    const handleClick = (num) =>
        console.log("Cliquei no botão", num);


    return (
        <button onClick={handleClick}>Button</button>
        //<button onClick={() => handleClick()}>Button</button>
        //<button onClick={() => handleClick(1)}>Button</button>
    )
}

export default Button