//criar uma forma com os tipos especificos
type GreetingProps = {
    name: string;
}
const Greeting = ({ name }: GreetingProps) => {
    return (
        <div>Greeting {name}!</div>
    )
}

export default Greeting