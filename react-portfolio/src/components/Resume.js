import React from 'react';
import resumeExample from '../assets/resume.png'

const ResumeLink = () => {
  return (
    <a href={resumeExample} download>
      Download Resume (example)
    </a>
  );
};

export default ResumeLink;