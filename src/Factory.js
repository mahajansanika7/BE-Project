import App from "./App";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Factory() {
    const { factoryId } = useParams();
    return(
        
        <div className="container">
        

        <label>Quantity to Supply:</label>
        <input type="text" placeholder="Enter quantity" />
        <label>Delivery Date:</label>
        <input type="date" placeholder="Enter date" />
        
        <div className="back-submit">
            <Link to="/">
                <button>Go Back</button>
            </Link>
            <button type="submit" class="submit-button">Submit</button>
        </div>
        
        
        
        
    </div>
    );
}

export default Factory;
