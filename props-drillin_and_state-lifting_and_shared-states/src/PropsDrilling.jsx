export function Parent(){
    const userName = "Umesh Jadav";
    return <Child name={userName} />
}

function Child({name}){
    return <GrandChild name={name} />
}

function GrandChild({name}){
    return <h2>User name: {name}</h2>
}