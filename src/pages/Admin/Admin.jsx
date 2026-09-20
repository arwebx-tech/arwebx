import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import SEOHead from '../../components/SEOHead/SEOHead';
import { getAdminAnalytics } from '../../lib/supabase';
import './Admin.css';

const DEFAULT_ADMIN_PASSCODE = 'Arwebx@0096';

const SQL_SETUP_SCRIPT = `-- Run this script in Supabase SQL Editor (supabase.com -> SQL Editor) to create tables instantly!

-- 1. Create page_views table
CREATE TABLE IF NOT EXISTS public.page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL DEFAULT '/',
  user_agent TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create contact_enquiries table
CREATE TABLE IF NOT EXISTS public.contact_enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT,
  phone TEXT NOT NULL,
  service TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Enable RLS and create public insert policy
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert on page_views" ON public.page_views;
DROP POLICY IF EXISTS "Allow public select on page_views" ON public.page_views;
DROP POLICY IF EXISTS "Allow public insert on contact_enquiries" ON public.contact_enquiries;
DROP POLICY IF EXISTS "Allow public select on contact_enquiries" ON public.contact_enquiries;

CREATE POLICY "Allow public insert on page_views" ON public.page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select on page_views" ON public.page_views FOR SELECT USING (true);
CREATE POLICY "Allow public insert on contact_enquiries" ON public.contact_enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select on contact_enquiries" ON public.contact_enquiries FOR SELECT USING (true);
`;

function CountUp({ end = 0, duration = 1200 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const endVal = Number(end) || 0;
    if (endVal === 0) {
      setCount(0);
      return;
    }

    let startTime = null;
    let frameId;
    const animDuration = Math.min(duration, Math.max(600, endVal * 70));

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / animDuration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(ease * endVal);

      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setCount(endVal);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('arwebx_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('enquiries');
  const [copiedSql, setCopiedSql] = useState(false);

  const [analytics, setAnalytics] = useState({
    totalViews: 0,
    todayViews: 0,
    enquiries: [],
    recentViews: [],
  });

  const loadData = async () => {
    setLoading(true);
    const data = await getAdminAnalytics();
    setAnalytics(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    const inputVal = passcode.trim();

    if (inputVal === DEFAULT_ADMIN_PASSCODE) {
      sessionStorage.setItem('arwebx_admin_auth', 'true');
      localStorage.setItem('arwebx_is_admin', 'true');
      setIsAuthenticated(true);
      toast.success('Welcome to ARWEBX Arunchand!');
      return;
    }

    toast.error('Incorrect password');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('arwebx_admin_auth');
    setIsAuthenticated(false);
  };

  const copySqlToClipboard = () => {
    navigator.clipboard.writeText(SQL_SETUP_SCRIPT);
    setCopiedSql(true);
    toast.info('SQL script copied to clipboard!');
    setTimeout(() => setCopiedSql(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-page container-fluid px-3 px-md-5">
        <SEOHead
          title="Admin Login | ARWEBX"
          description="ARWEBX Secret Admin Dashboard"
          canonical="https://arwebx.vercel.app/admin"
        />

        <div className="admin-login-wrapper">
          <div className="admin-login-card">
            <div className="admin-logo-badge">
              <i className="bi bi-shield-lock-fill"></i>
              ADMIN LOGIN
            </div>

            <form onSubmit={handleLogin}>
              <div className="form-floating-outlined">
                <input
                  type="password"
                  className="form-control"
                  id="adminPasswordOutlined"
                  placeholder=" "
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  required
                />
                <label htmlFor="adminPasswordOutlined">Enter Password</label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Verifying...
                  </>
                ) : (
                  <>
                    Login
                    <i className="bi bi-arrow-right ms-2"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page container-fluid px-3 px-md-5">
      <SEOHead
        title="Admin Dashboard | ARWEBX"
        description="ARWEBX Secret Admin Analytics & Enquiries Dashboard"
        canonical="https://arwebx.vercel.app/admin"
      />

      <div className="admin-header">
        <div className="admin-title-group">
          <h1>
            <i className="bi bi-speedometer2 me-2 text-primary"></i>
            Analytics & Leads
          </h1>
          <p>Live website traffic metrics & client enquiry history</p>
        </div>

        <div className="admin-header-actions">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={loadData}
            disabled={loading}
          >
            <i className={`bi bi-arrow-clockwise me-1 ${loading ? 'spin' : ''}`}></i>
            Refresh Data
          </button>

          <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right me-1"></i>
            Logout
          </button>
        </div>
      </div>

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon icon-blue">
            <i className="bi bi-eye-fill"></i>
          </div>
          <div className="admin-stat-info">
            <span className="admin-stat-value">
              <CountUp end={analytics.totalViews} />
            </span>
            <span className="admin-stat-label">Total Page Views</span>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon icon-green">
            <i className="bi bi-person-check-fill"></i>
          </div>
          <div className="admin-stat-info">
            <span className="admin-stat-value">
              <CountUp end={analytics.todayViews} />
            </span>
            <span className="admin-stat-label">Today's Visitors</span>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon icon-purple">
            <i className="bi bi-chat-left-quote-fill"></i>
          </div>
          <div className="admin-stat-info">
            <span className="admin-stat-value">
              <CountUp end={analytics.enquiries.length} />
            </span>
            <span className="admin-stat-label">Total Client Enquiries</span>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon icon-orange">
            <i className="bi bi-hdd-network-fill"></i>
          </div>
          <div className="admin-stat-info">
            <span className="admin-stat-value">Active</span>
            <span className="admin-stat-label">Supabase Database</span>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <div className="btn-group">
            <button
              className={`btn btn-sm ${activeTab === 'enquiries' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setActiveTab('enquiries')}
            >
              <i className="bi bi-envelope-fill me-1"></i>
              Client Leads (<CountUp end={analytics.enquiries.length} duration={600} />)
            </button>

            <button
              className={`btn btn-sm ${activeTab === 'views' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setActiveTab('views')}
            >
              <i className="bi bi-activity me-1"></i>
              Recent Page Activity
            </button>

            <button
              className={`btn btn-sm ${activeTab === 'sql' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setActiveTab('sql')}
            >
              <i className="bi bi-database-fill-gear me-1"></i>
              Database Setup SQL
            </button>
          </div>
        </div>

        {activeTab === 'enquiries' && (
          <div>
            {analytics.enquiries.length === 0 ? (
              <div className="text-center py-4 text-muted">
                <i className="bi bi-inbox fs-1 d-block mb-2"></i>
                No client enquiries logged yet. Form submissions will appear here automatically!
              </div>
            ) : (
              analytics.enquiries.map((enquiry, idx) => (
                <div
                  key={enquiry.id || idx}
                  className="enquiry-row-card"
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <div className="enquiry-row-header">
                    <div>
                      <h4 className="enquiry-name">
                        {enquiry.first_name} {enquiry.last_name}
                      </h4>
                      <div className="text-muted small">
                        <i className="bi bi-calendar3 me-1"></i>
                        {new Date(enquiry.created_at).toLocaleString('en-IN')}
                      </div>
                    </div>

                    <span className="enquiry-service-badge">
                      {enquiry.service || 'General Enquiry'}
                    </span>
                  </div>

                  <div className="enquiry-message-box">
                    <strong>Message: </strong> {enquiry.message || 'No message attached.'}
                  </div>

                  <div className="enquiry-actions">
                    {/\d{5,}/.test(enquiry.phone) ? (
                      <>
                        <a
                          href={`tel:${enquiry.phone}`}
                          className="btn-enquiry-call"
                        >
                          <i className="bi bi-telephone-fill"></i>
                          Call {enquiry.phone}
                        </a>

                        <a
                          href={`https://wa.me/${enquiry.phone.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-enquiry-wa"
                        >
                          <i className="bi bi-whatsapp"></i>
                          WhatsApp Client
                        </a>
                      </>
                    ) : (
                      <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2">
                        <i className="bi bi-whatsapp me-1"></i>
                        {enquiry.phone || 'Initiated via Floating Widget'}
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'views' && (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Page Path</th>
                  <th>Timestamp</th>
                  <th>User Agent</th>
                </tr>
              </thead>
              <tbody>
                {analytics.recentViews.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="text-center text-muted py-4">
                      No page views logged yet.
                    </td>
                  </tr>
                ) : (
                  analytics.recentViews.map((item, idx) => (
                    <tr key={item.id || idx}>
                      <td>
                        <code>{item.page_path}</code>
                      </td>
                      <td>{new Date(item.created_at).toLocaleString('en-IN')}</td>
                      <td className="text-truncate" style={{ maxWidth: '280px' }}>
                        {item.user_agent}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'sql' && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted small">
                Copy and run this SQL script in your <strong>Supabase Dashboard -&gt; SQL Editor</strong> to create the tables instantly!
              </p>
              <button
                className="btn btn-sm btn-outline-success"
                onClick={copySqlToClipboard}
              >
                <i className={`bi ${copiedSql ? 'bi-check-lg' : 'bi-clipboard'} me-1`}></i>
                {copiedSql ? 'Copied to Clipboard!' : 'Copy SQL Script'}
              </button>
            </div>

            <pre className="sql-box">{SQL_SETUP_SCRIPT}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
