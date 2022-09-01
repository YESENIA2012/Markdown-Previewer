import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';

const style = {
  height: 650,
};

const TexttareaContainer = (props) => {
  const { textarea, editorElementmaximized, handleChange, handleEditorClick } =
    props;
  if (editorElementmaximized == false) {
    return (
      <div className="textarea-container">
        <div className="bar-textarea">
          <FontAwesomeIcon
            className="icon-free-code-camp"
            icon={faFreeCodeCamp}
          />
          <p className="text-bar">Editor</p>
          <FontAwesomeIcon
            className="icon-arrow"
            icon={faMaximize}
            onClick={handleEditorClick}
          />
        </div>
        <textarea
          className="editor"
          defaultValue={textarea}
          onChange={handleChange}
        ></textarea>
      </div>
    );
  } else {
    return (
      <div className="textarea-container">
        <div className="bar-textarea">
          <FontAwesomeIcon
            className="icon-free-code-camp"
            icon={faFreeCodeCamp}
          />
          <p className="text-bar">Editor</p>
          <FontAwesomeIcon
            icon={faDownLeftAndUpRightToCenter}
            className="icon-two-arrow"
            onClick={handleEditorClick}
          />
        </div>
        <textarea
          className="editor"
          defaultValue={textarea}
          onChange={handleChange}
          style={style}
        ></textarea>
      </div>
    );
  }
};

export default TexttareaContainer;
