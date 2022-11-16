import jsPDF from "jspdf";
import { useState } from "react";
import ReactDOMServer from "react-dom/server";
import Teste from './Teste'

export default function App() {

const [text, setText] = useState('');


  const exportPDF = () => {

    let element = (
      <Teste text={text} />
    );

    const doc = new jsPDF("p", "pt", "letter");

    doc.html(ReactDOMServer.renderToString(element), {
      callback: function (doc) {
        // doc.save('download.pdf')
        // doc.output // conteudo
        const pdf = doc.output('datauri')
        console.log(pdf);
      }
    });
  };

  return (
    <div className="App">
      <button onClick={() => setText('teste')}>Add Text</button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={exportPDF}>export</button>
    </div>
  );
}
