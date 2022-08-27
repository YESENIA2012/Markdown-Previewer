import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const styleOne = {
  display: 'none',
};

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: placeholder,
      editorElementmaximized: false,
      previewElementMaximized: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorClick = this.handleEditorClick.bind(this);
    this.handlePreviewClick = this.handleEditorClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      textarea: event.target.value,
    });
  }

  handleEditorClick() {
    this.setState({
      editorElementmaximized: !this.state.editorElementmaximized,
    });
    console.log(this.state.editorElementmaximized);
  }

  handlePreviewClick() {
    console.log('paola');
    this.setState({
      previewElementMaximized: !this.state.previewElementMaximized,
    });
  }

  componentDidMount() {
    document
      .querySelector('.iconArrow1')
      .addEventListener('click', this.handleEditorClick);
    document
      .querySelector('.iconArrow2')
      .addEventListener('click', this.handlePreviewClick);
  }

  render() {
    if (this.state.editorElementmaximized == true) {
      document.querySelector('.container').classList.add('minContainer');
      document.querySelector('.editor').classList.add('maxEditor');
      document.querySelector('.containerPreview').style.display =
        styleOne.display;
    } else if (this.state.previewElementMaximized == true) {
      document.querySelector('.editor').style.display = styleOne.display;
    }

    return (
      <div className="container">
        <div className="textTareaContainer">
          <div className="barTextarea">
            <FontAwesomeIcon
              className="iconFreeCodeCamp"
              icon={faFreeCodeCamp}
            />
            <p className="pBar">Editor</p>
            <FontAwesomeIcon className="iconArrow1" icon={faMaximize} />
          </div>
          <textarea
            className="editor"
            defaultValue={this.state.textarea}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <Contentwindow textarea={this.state.textarea} />
      </div>
    );
  }
}

class Contentwindow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="containerPreview">
        <div className="barBox">
          <FontAwesomeIcon className="iconFreeCodeCamp" icon={faFreeCodeCamp} />
          <p className="pBar">Previewer</p>
          <FontAwesomeIcon className="iconArrow2" icon={faMaximize} />
        </div>
        <div className="box">
          <h1>Welcome to my React Markdown Previewer!</h1>
          <h2>This is a sub-heading...</h2>
          <h3>And here's some other cool stuff:</h3>
          <p>
            Heres some code, <code>&lt;div&gt;&lt;/div&gt;</code>, between 2
            backticks.
          </p>
          <pre className="preview">
            <code>{this.props.textarea}</code>
          </pre>
          <p>
            You can also make text <strong>bold</strong>... whao!
            <br />
            Or <em>italic</em>.
            <br />
            Or... wait for it... <strong>both!</strong>
            <br />
            And feel free to go crazy
            <del>crossing stuff out</del>
          </p>
          <p>
            There's also{' '}
            <a target="_blank" href="https://www.freecodecamp.org">
              links
            </a>
            , and
          </p>
          <blockquote>
            <p>Block Quotes!</p>
          </blockquote>
          <p>And if you want to get really crazy, even tables:</p>
          <div className="containerTablet">
            <div className="containerTitle">
              <div className="title">Wild Header</div>
              <div className="title">Crazy Header</div>
              <div className="title">Another Header?</div>
            </div>
            <div className="row1">
              <div className="element-Row-1">Your content can</div>
              <div className="element-Row-1">be here, and it</div>
              <div className="element-Row-1">can be here...</div>
            </div>
            <div className="row2">
              <div className="element-Row-2">And here.</div>
              <div className="element-Row-2">Okay.</div>
              <div className="element-Row-2">I think we get it.</div>
            </div>
          </div>
        </div>
        <ul>
          <li className="element-ul-li-1">And of course there are lists</li>
          <li className="element-ul-li-2">Some are bulleted</li>
          <li className="element-ul-li-3">With different indentation levels</li>
          <li className="element-ul-li-4">That look like this</li>
        </ul>
        <ol>
          <li>And there are numbered lists too</li>
          <li>Use just 1s if you want</li>
          <li>And last but least, let's not forget embedded images:</li>
        </ol>
        <p className="containerImg">
          <img
            src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg"
            alt="freeCodeCamp Logo"
          ></img>
        </p>
      </section>
    );
  }
}

export default Editor;
