import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Box } from '@mui/material';

const experiences = [
  {
    title: 'UI/UX Design Internship',
    company: 'The Virtual CTO',
    date: 'May 2025 - July 2025',
    description: 'Created user-friendly websites based on project requirements. I conducted user research, built personas, and designed responsive wireframes. Refined layouts for intuitive navigation and visual appeal, incorporating features like dashboards and event management to enhance the user experience.'
  },
  {
    title: 'Upcoming',
    company: '_____',
    date: '_____',
  },
];

function Experience() {
  return (
    <section className="experience" id="experience" style={{ fontFamily: 'Noto Serif' }}>
      <h2 style={{ color: 'var(--text)', textAlign: 'center', fontSize: '30px', marginBottom: '30px' }}>Experience</h2>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Timeline position="alternate">
          {experiences.map((exp, idx) => (
            <TimelineItem
              key={idx}
              className="timeline-fadein"
              style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
            >
              <TimelineSeparator>
                <TimelineDot color="primary">
                  {idx === 0 ? <span role="img" aria-label="palette">🎨</span> : null}
                </TimelineDot>
                {idx < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <div style={{ color: 'var(--experience-title)', fontWeight: 'bold', fontSize: '18px', fontFamily: 'Noto Serif' }}>{exp.title}</div>
                <div style={{ color: 'var(--text)', fontSize: '15px', fontFamily: 'Noto Serif' }}>{exp.company} | {exp.date}</div>
                {exp.description && <div style={{ color: 'var(--text)', fontSize: '14px', fontFamily: 'Noto Serif' }}>{exp.description}</div>}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </section>
  );
}

export default Experience;
