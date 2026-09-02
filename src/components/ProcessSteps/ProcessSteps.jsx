import React from 'react';
import './ProcessSteps.css';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understand the business, audience, goals, competitors, and requirements.',
    icon: 'bi-search',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'Plan information architecture, user experience, layouts, and visual direction.',
    icon: 'bi-palette',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Build the responsive website or application with clean, maintainable code.',
    icon: 'bi-code-slash',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Test, optimise, deploy, and provide ongoing support after launch.',
    icon: 'bi-rocket-takeoff',
  },
];

export default function ProcessSteps() {
  return (
    <div className="process-steps">
      <div className="process-timeline" aria-hidden="true"></div>
      <div className="row g-4 stagger-group">
        {steps.map((step, index) => (
          <div className="col-md-6 col-lg-3 stagger-item" key={index}>
            <div className="process-step-card">
              <div className="process-step-number">{step.number}</div>
              <div className="process-step-icon">
                <i className={`bi ${step.icon}`} aria-hidden="true"></i>
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
