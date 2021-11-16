function Student(props) {
    console.warn(props.name)
    return (
        <div style={{ backgroundColor: "dodgerblue" }}>
            <h2>Hello {props.name}</h2>
        </div>
    );
}

export default Student;