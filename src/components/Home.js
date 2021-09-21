function Home() {
    return (
       <MyInfo />           //this is called nested components
    )
}

function MyInfo (){
    return(
        <div>
            <h1>Hello I Am XYZ doe</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam aperiam, nisi ad tempore facilis accusamus error dolores sequi quisquam quae.</p>
            <p>I am A developer</p>
        </div>
    );
}
export {Home};          //this is named export 