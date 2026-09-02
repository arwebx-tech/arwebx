import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead/SEOHead';
import './Agreement.css';

const sections = [
  {
    title: 'Project Scope',
    content:
      'The scope of work will be defined and agreed upon before the project begins. This includes the number of pages, features, functionality, and deliverables. Any work outside the agreed scope may require additional time and cost, which will be discussed and approved before proceeding.',
  },
  {
    title: 'Deliverables',
    content:
      'Deliverables will be as outlined in the project proposal or scope document. This typically includes design mockups, a responsive website or web application, and any agreed-upon documentation. Deliverables are provided in digital format unless otherwise agreed.',
  },
  {
    title: 'Timeline',
    content:
      'A project timeline will be established at the start of the engagement. Timelines are estimates and depend on the complexity of the project, timely feedback, and provision of required content and assets by the client. Delays caused by late client feedback or missing assets may extend the timeline.',
  },
  {
    title: 'Client Responsibilities',
    content:
      'The client is responsible for providing all required content (text, images, logos, branding assets) in a timely manner. The client is also responsible for reviewing deliverables and providing clear, consolidated feedback within agreed timeframes. Delays in client deliverables may impact the project timeline.',
  },
  {
    title: 'Payment Terms',
    content:
      'Payment terms will be outlined in the project proposal. Typically, an upfront deposit is required before work begins, with the remaining balance due upon project completion or at agreed milestones. Work will not be delivered until full payment is received unless otherwise agreed.',
  },
  {
    title: 'Revision Policy',
    content:
      'A reasonable number of revisions are included in the project scope. Revisions refer to minor adjustments to the agreed design or content — not fundamental redesigns or scope changes. Additional revisions beyond the agreed number may be subject to additional charges.',
  },
  {
    title: 'Content & Assets',
    content:
      'The client must ensure they have the right to use all content, images, and assets provided for the project. ARWEBX is not responsible for copyright issues arising from client-supplied content. If stock images, fonts, or other licensed assets are required, the costs will be discussed and agreed upon.',
  },
  {
    title: 'Third-Party Services',
    content:
      'If the project requires third-party services, tools, or integrations (such as payment processors, email services, or analytics platforms), the client is responsible for any associated subscription costs and terms of service. ARWEBX will assist with integration but is not responsible for third-party service availability or pricing changes.',
  },
  {
    title: 'Hosting & Domain',
    content:
      'Unless specifically included in the project scope, the client is responsible for arranging and paying for their own hosting and domain registration. ARWEBX can recommend suitable hosting providers and assist with deployment, but ongoing hosting costs are the client\'s responsibility.',
  },
  {
    title: 'Maintenance & Support',
    content:
      'Post-launch maintenance and support are not automatically included unless agreed upon. ARWEBX can offer ongoing maintenance packages for updates, security patches, content changes, and performance monitoring. Terms and pricing for maintenance will be discussed separately.',
  },
  {
    title: 'Cancellation / Termination',
    content:
      'Either party may terminate the agreement with written notice. In the event of cancellation, the client will be billed for all work completed up to the date of termination. Any deposit paid is non-refundable, as it covers initial planning, research, and time reserved for the project.',
  },
  {
    title: 'Intellectual Property',
    content:
      'Upon full payment, the client receives ownership of the final deliverables (custom design and code). ARWEBX retains the right to showcase the project in its portfolio unless otherwise agreed. Third-party components (open-source libraries, licensed assets) remain subject to their respective licences.',
  },
  {
    title: 'Approval & Sign-off',
    content:
      'The client will be asked to approve key milestones (design, development, final review) before the project moves to the next phase. Final sign-off confirms that the deliverables meet the agreed requirements. Changes requested after sign-off may be treated as new scope.',
  },
];

export default function Agreement() {
  return (
    <>
      <SEOHead
        title="Freelance Web Development Agreement | ARWEBX"
        description="Review the ARWEBX freelance web development project working terms covering scope, payment, revisions, intellectual property, and more."
        canonical="https://arwebx.in/agreement"
      />

      {/* Agreement Content */}
      <section className="agreement-content" aria-label="Agreement sections">
        <div className="container-fluid px-3 px-md-5">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="agreement-card reveal-up stagger-group">
                {sections.map((section, index) => (
                  <div className="agreement-section stagger-item" key={index}>
                    <h2 className="agreement-section-title">
                      <span className="agreement-section-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {section.title}
                    </h2>
                    <p className="agreement-section-content">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="agreement-cta" aria-label="Discuss your project">
        <div className="container-fluid px-3 px-md-5 text-center reveal-up">
          <h2 className="agreement-cta-title">Ready to discuss your project?</h2>
          <p className="agreement-cta-desc">
            Get in touch and let's talk about how we can work together.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg agreement-cta-btn">
            Discuss Your Project
            <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
