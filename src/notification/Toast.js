import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Toast = ({ content, duration, onDismiss }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onDismiss();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  const handleDismiss = () => {
    setVisible(false);
    onDismiss();
  };

  const toastClass = classNames("ui", "positive", "message", {
    visible: visible,
  });

  return (
    <div className={toastClass}>
      <i className="close icon" onClick={handleDismiss} />
      <div className="header">Success!</div>
      <p>{content}</p>
    </div>
  );
};

Toast.propTypes = {
  content: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onDismiss: PropTypes.func,
};

Toast.defaultProps = {
  duration: 3000,
  onDismiss: () => {},
};

export default Toast;
