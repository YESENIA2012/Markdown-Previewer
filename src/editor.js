import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';

let heightTextareaElement = {};
let openIconStyles = {};
let closeIconStyles = {};

const TextAreaContainer = (props) => {
  const { textarea, editorElementMaximized, handleChange, handleEditorClick } =
    props;

  if (editorElementMaximized) {
    heightTextareaElement = {
      height: 650,
    };
    openIconStyles = { display: 'none' };
    closeIconStyles = { display: 'inline' };
  } else {
    heightTextareaElement = {};
    openIconStyles = {};
    closeIconStyles = { display: 'none' };
  }

  return (
    <div className="textarea-container">
      <div className="bar-textarea">
        <FontAwesomeIcon
          className="icon-free-code-camp"
          icon={faFreeCodeCamp}
        />
        <p className="text-bar">Editor</p>
        <FontAwesomeIcon
          className="open-icon"
          style={openIconStyles}
          icon={faMaximize}
          onClick={handleEditorClick}
        />
        <FontAwesomeIcon
          className="closed-icon"
          style={closeIconStyles}
          icon={faDownLeftAndUpRightToCenter}
          onClick={handleEditorClick}
        />
      </div>
      <textarea
        className="editor"
        style={heightTextareaElement}
        defaultValue={textarea}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaContainer;
