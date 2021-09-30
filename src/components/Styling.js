import './../styles/styling.css';   //external css 
import modulecss from './../styles/styling.module.css'
const Styling = () => {
    const styles = {
        color :'yellow',
        backgroundColor:'purple'
    }
    return (
        <div>
            <h1 className="my-heading"> Hello Everyone , External Css </h1>
            <h1 style={{color:'blue', backgroundColor:'black'}}> Inline Css </h1>
            <h1 style={styles}> Internal Css </h1>
            <h1 className={modulecss.success}> Module CSS</h1>
        </div>
    )
}

export default Styling
