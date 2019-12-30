import * as µReact from "./µReact/index";
import { Task } from "./Task";

interface IListState {
  text: string;
  tasks: string[];
}

export class List extends µReact.Component<{}, IListState> {
  state = {
    text: "",
    tasks: ["Drink apple juice", "Eat vegetables"]
  };

  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div style={containerStyle}>
        <h3>µReact Todo list</h3>
        <form>
          <input
            type="text"
            name="task"
            value={this.state.text}
            style={textInputStyle}
            onchange={event => {
              if (event.target.value) {
                this.setState({ text: event.target.value });
              }
            }}
          />
          <input
            type="button"
            value="Add"
            style={buttonStyle}
            onclick={() => {
              if (this.state.text == "") return;
              this.setState({
                text: "",
                tasks: [...this.state.tasks, this.state.text]
              });
            }}
          />
        </form>
        {this.state.tasks.map(task => (
          <Task task={task} />
        ))}
      </div>
    );
  }
}

const containerStyle = {
  backgroundColor: "white",
  width: "500px",
  textAlign: "center",
  margin: "auto",
  padding: "1rem",
  boxShadow: "1px 1px 17px 1px rgba(0,0,0,.16)",
  borderRadius: "0.7rem"
};

const textInputStyle = {
  minHeight: "1.8rem",
  border: "solid lightgray 1px",
  borderRadius: "0.2rem",
  paddingLeft: "0.3rem"
};

const buttonStyle = {
  fontWeight: "bold",
  marginLeft: "1rem",
  minHeight: "2rem"
  // padding: "0.5rem",
  // border: "none",
  // borderRadius: "0.7rem"
  // backgroundColor: "#5aff15",
  // backgroundImage: "linear-gradient(315deg, #5aff15 0%, #5aff15 74%)",
  // boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
  // cursor: "pointer"
};
