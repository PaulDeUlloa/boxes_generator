const Box = (props) => {
    return (
        <div className=" m-2 " style={{ height: props.boxSize, width: props.boxSize, backgroundColor: `${props.setBoxColor}` }}>
        </div>
    );
};

export default Box;