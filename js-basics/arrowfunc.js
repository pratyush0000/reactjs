export default function doSomething(){
    console.log(1)
}


export const doSome = () =>{
    console.log(2)
}


<button onClick={
    () => {
        console.log(1)
    }
}>

</button>