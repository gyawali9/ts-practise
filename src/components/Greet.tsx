type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
  return (
    <div>
        <h1>
            {props.isLoggedIn ? 
                `Welcome ${props.name}, you have ${props.messageCount} message counts.`
                 :
                 `Welcome Guest`   
        }
        </h1>
    </div>
  )
}
