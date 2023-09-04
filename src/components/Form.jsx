import { useState } from "react";

const Form = (props) => {
    const [color, setBoxColor] = useState("");
    const [size, setSize] = useState(125);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getBoxData({ color: color, size: parseInt(size) });
        setBoxColor("");
        setSize(125);
    };

    return(
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <div>Color</div>
                        <div>
                            <input 
                                className ="form-control"
                                type="text"
                                onChange={(e) => setBoxColor (e.target.value)}
                                value={color}
                            />
                        </div>
                    </div>
                    <div>
                        <div>Size (px)</div>
                        <div>
                            <input 
                                className ="form-control"
                                type="number"
                                onChange={(e) => setSize (e.target.value)}
                                value={size}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-success">Add Colored Box</button>
                </div>
            </form>
        </div>
    );
    

};

export default Form;