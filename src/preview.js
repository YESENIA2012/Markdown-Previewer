import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';

const ContainerPreview = (props) => {
  const { textarea, previewElementMaximized, handlePreviewClick } = props;

  if (previewElementMaximized == false) {
    return (
      <section className="container-preview">
        <div className="bar-box">
          <FontAwesomeIcon
            className="icon-free-code-camp"
            icon={faFreeCodeCamp}
          />
          <p className="text-bar">Previewer</p>
          <FontAwesomeIcon
            className="icon-arrow"
            icon={faMaximize}
            onClick={handlePreviewClick}
          />
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
            <code>{textarea}</code>
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
            <a target={'_blank'} href="https://www.freecodecamp.org">
              links
            </a>
            , and
          </p>
          <blockquote>
            <p>Block Quotes!</p>
          </blockquote>
          <p>And if you want to get really crazy, even tables:</p>
          <div className="container-tablet">
            <div className="row-1">
              <div className="element-row-1">Wild Header</div>
              <div className="element-row-1">Crazy Header</div>
              <div className="element-row-1">Another Header?</div>
            </div>
            <div className="row-2">
              <div className="element-row-2">Your content can</div>
              <div className="element-row-2">be here, and it</div>
              <div className="element-row-2">can be here...</div>
            </div>
            <div className="row-3">
              <div className="element-row-3">And here.</div>
              <div className="element-row-3">Okay.</div>
              <div className="element-row-3">I think we get it.</div>
            </div>
          </div>
          <ul>
            <li className="element-ul-li-1">And of course there are lists</li>
            <li className="element-ul-li-2">Some are bulleted</li>
            <li className="element-ul-li-3">
              With different indentation levels
            </li>
            <li className="element-ul-li-4">That look like this</li>
          </ul>
          <ol>
            <li>And there are numbered lists too</li>
            <li>Use just 1s if you want</li>
            <li>And last but least, let's not forget embedded images:</li>
          </ol>
          <p className="container-img">
            <img
              src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg"
              alt="freeCodeCamp Logo"
            ></img>
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="container-preview">
        <div className="bar-box">
          <FontAwesomeIcon
            className="icon-free-code-camp"
            icon={faFreeCodeCamp}
          />
          <p className="text-bar">Previewer</p>
          <FontAwesomeIcon
            icon={faDownLeftAndUpRightToCenter}
            className="icon-two-arrow"
            onClick={handlePreviewClick}
          />
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
            <code>{textarea}</code>
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
            <a target={'_blank'} href="https://www.freecodecamp.org">
              links
            </a>
            , and
          </p>
          <blockquote>
            <p>Block Quotes!</p>
          </blockquote>
          <p>And if you want to get really crazy, even tables:</p>
          <div className="container-tablet">
            <div className="row-1">
              <div className="element-row-1">Wild Header</div>
              <div className="element-row-1">Crazy Header</div>
              <div className="element-row-1">Another Header?</div>
            </div>
            <div className="row-2">
              <div className="element-row-2">Your content can</div>
              <div className="element-row-2">be here, and it</div>
              <div className="element-row-2">can be here...</div>
            </div>
            <div className="row-3">
              <div className="element-row-3">And here.</div>
              <div className="element-row-3">Okay.</div>
              <div className="element-row-3">I think we get it.</div>
            </div>
          </div>
          <ul>
            <li className="element-ul-li-1">And of course there are lists</li>
            <li className="element-ul-li-2">Some are bulleted</li>
            <li className="element-ul-li-3">
              With different indentation levels
            </li>
            <li className="element-ul-li-4">That look like this</li>
          </ul>
          <ol>
            <li>And there are numbered lists too</li>
            <li>Use just 1s if you want</li>
            <li>And last but least, let's not forget embedded images:</li>
          </ol>
          <p className="container-img">
            <img
              src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg"
              alt="freeCodeCamp Logo"
            ></img>
          </p>
        </div>
      </section>
    );
  }
};

export default ContainerPreview;
