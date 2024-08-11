

5.
/** Can you explain the problem with the following code, and how to fix
it. **/
class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.handleAddCount = this.handleAddCount.bind(this);
    }
    handleAddCount() {
        /*
        * reason:
        在 React 中，setState 是一個異步操作，並且在多次調用 setState 時，React 可能會將這些調用合併成一次批處理操作。
        因此，this.state.count 在連續調用的 setState 中不會立即更新，這意味著每次調用 setState 都會基於相同的初始 state。
        * fix:
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        * 
        通過傳入一個函數給 setState，該函數會接收上一個狀態值 prevState 作為參數，這樣可以確保每次更新都基於最新的state
        */
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleAddCount}>Add</button>
            </div>
        );
    }
}
ReactDOM.render(
    <Count />,
    document.getElementById('root')
);
