const Box = (props) => {
    return (
        <div style={{ height: props.boxSize, width: props.boxSize, backgroundColor: `${props.setBoxColor}` }}>
        </div>
    );
};

export default Box;