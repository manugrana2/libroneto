import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledBackButton = styled(IconButton)({
  position: 'fixed',
  left: 0,
  bottom: 10,
  zIndex:3,
});

const StyledForwardButton = styled(IconButton)({
  position: 'fixed',
  right: 0,
  bottom: 10,
  zIndex:3,
});

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [historyIndex, setHistoryIndex] = useState(0);
  const [historyStack, setHistoryStack] = useState([location.pathname]);

  useEffect(() => {
    if (location.pathname !== historyStack[historyIndex]) {
      setHistoryStack((prevHistoryStack) => [...prevHistoryStack.slice(0, historyIndex + 1), location.pathname]);
      setHistoryIndex((prevIndex) => prevIndex + 1);
    }
  }, [location.pathname, historyIndex, historyStack]);

  const goBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      navigate(historyStack[newIndex]);
    }
  };

  const goForward = () => {
    if (historyIndex < historyStack.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      navigate(historyStack[newIndex]);
    }
  };

  return (
    <div>
      <StyledBackButton onClick={goBack}>
        <ArrowBack />
      </StyledBackButton>
      <StyledForwardButton onClick={goForward}>
        <ArrowForward />
      </StyledForwardButton>
    </div>
  );
};
