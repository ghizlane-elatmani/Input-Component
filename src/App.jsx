import Input from "./component/Input";
import Footer from "./component/Footer";
import "./css/App.css";
import { MdPhone } from "react-icons/md";
import { MdLock } from "react-icons/md";

function App() {
  return (
    <div className="container">
      <h1>Inputs</h1>
      <div className="card">
        <div className="wrapper">
          <p className="description">{"<Input />"}</p>
          <Input />
        </div>
      </div>

      <div className="card">
        <div className="wrapper">
          <p className="description">{"<Input error />"}</p>
          <Input error />
        </div>
      </div>

      <div className="card">
        <div className="wrapper">
          <p className="description">{"<Input disabled />"}</p>
          <Input disabled />
        </div>
      </div>

      <div className="card grid">
        <div className="wrapper">
          <p className="description">
            {"<Input helperText='Some interesting text'/>"}
          </p>
          <Input helperText="Some interesting text" />
        </div>

        <div className="wrapper">
          <p className="description">
            {"<Input helperText='Some interesting text'/>"}
          </p>
          <Input helperText="Some interesting text" error />
        </div>
      </div>

      <div className="card grid">
        <div className="wrapper">
          <p className="description">{"<Input startIcon'/>"}</p>
          <Input startIcon={<MdPhone />} />
        </div>

        <div className="wrapper">
          <p className="description">{"<Input endIcon />"}</p>
          <Input endIcon={<MdLock />} />
        </div>
      </div>

      <div className="card">
        <div className="wrapper">
          <p className="description">{"<Input value='text' />"}</p>
          <Input value="text" />
        </div>
      </div>

      <div className="card grid">
        <div className="wrapper">
          <p className="description">{"<Input size='sm'/>"}</p>
          <Input size="sm" />
        </div>

        <div className="wrapper">
          <p className="description">{"<Input size='md' />"}</p>
          <Input size="md" />
        </div>
      </div>

      <div className="card">
        <div className="wrapper">
          <p className="description">{"<Input fullWidth/>"}</p>
          <Input fullWidth />
        </div>
      </div>

      <div className="card">
        <div className="wrapper">
          <p className="description">{"<Input multiline row='4'/>"}</p>
          <Input multiline={5} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
