import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>{JSON.stringify(toDos)}</ul>
        </>
    );
}

// store와 component를 connect로 연결하여 store의 state를 가져옴
function mapStateToProps(state) {
    return { toDos: state };
}

export default connect(mapStateToProps)(Home);