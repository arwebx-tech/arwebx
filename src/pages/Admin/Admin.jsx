import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import SEOHead from '../../components/SEOHead/SEOHead';
import { getAdminAnalytics, updateContactEnquiry, deleteContactEnquiry } from '../../lib/supabase';
import './Admin.css';

const DEFAULT_ADMIN_PASSCODE = import.meta.env.VITE_ADMIN_PASSCODE || 'Arwebx@0096';

const SQL_SETUP_SCRIPT = `-- Run this script in Supabase SQL Editor (supabase.com -> SQL Editor) to create tables instantly!

-- 1. Create page_views table
CREATE TABLE IF NOT EXISTS public.page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL DEFAULT '/',
  user_agent TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create contact_enquiries table (includes status column)
CREATE TABLE IF NOT EXISTS public.contact_enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT,
  phone TEXT NOT NULL,
  service TEXT,
  message TEXT,
  status TEXT DEFAULT 'Pending',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Enable RLS and create public policies
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert on page_views" ON public.page_views;
DROP POLICY IF EXISTS "Allow public select on page_views" ON public.page_views;
DROP POLICY IF EXISTS "Allow public insert on contact_enquiries" ON public.contact_enquiries;
DROP POLICY IF EXISTS "Allow public select on contact_enquiries" ON public.contact_enquiries;
DROP POLICY IF EXISTS "Allow public update on contact_enquiries" ON public.contact_enquiries;
DROP POLICY IF EXISTS "Allow public delete on contact_enquiries" ON public.contact_enquiries;

CREATE POLICY "Allow public insert on page_views" ON public.page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select on page_views" ON public.page_views FOR SELECT USING (true);
CREATE POLICY "Allow public insert on contact_enquiries" ON public.contact_enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select on contact_enquiries" ON public.contact_enquiries FOR SELECT USING (true);
CREATE POLICY "Allow public update on contact_enquiries" ON public.contact_enquiries FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Allow public delete on contact_enquiries" ON public.contact_enquiries FOR DELETE USING (true);
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
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('enquiries');
  const [copiedSql, setCopiedSql] = useState(false);

  const [analytics, setAnalytics] = useState({
    totalViews: 0,
    todayViews: 0,
    enquiries: [],
    recentViews: [],
  });

  const [filterStatus, setFilterStatus] = useState('All');
  const [editingEnquiry, setEditingEnquiry] = useState(null);
  const [isSavingEdit, setIsSavingEdit] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(null);

  const loadData = async (silent = true) => {
    if (!silent) setIsRefreshing(true);
    else setLoading(true);

    try {
      const startTime = Date.now();
      const data = await getAdminAnalytics();

      // Ensure smooth visible animation for manual clicks
      if (!silent) {
        const elapsed = Date.now() - startTime;
        if (elapsed < 400) {
          await new Promise((resolve) => setTimeout(resolve, 400 - elapsed));
        }
      }

      setAnalytics(data);
      setLastRefreshed(new Date());
    } catch (err) {
      console.error('Refresh error:', err);
      if (!silent) {
        toast.error('Failed to refresh data. Please try again.');
      }
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData(true);
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    const inputVal = passcode.trim();

    if (inputVal === DEFAULT_ADMIN_PASSCODE) {
      sessionStorage.setItem('arwebx_admin_auth', 'true');
      localStorage.setItem('arwebx_is_admin', 'true');
      setPasscode('');
      setShowPassword(false);
      setIsAuthenticated(true);
      toast.success('Welcome to ARWEBX Arunchand!');
      return;
    }

    setPasscode('');
    setShowPassword(false);
    toast.error('Incorrect password');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('arwebx_admin_auth');
    localStorage.removeItem('arwebx_is_admin');
    setPasscode('');
    setShowPassword(false);
    setAnalytics({
      totalViews: 0,
      todayViews: 0,
      enquiries: [],
      recentViews: [],
    });
    setEditingEnquiry(null);
    setIsAuthenticated(false);
    toast.info('Logged out successfully');
  };

  const handleStatusChange = async (id, newStatus, currentStatus) => {
    if (currentStatus && newStatus === currentStatus) return;

    setAnalytics((prev) => ({
      ...prev,
      enquiries: prev.enquiries.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      ),
    }));

    const res = await updateContactEnquiry(id, { status: newStatus });
    if (!res.success) {
      toast.error('Failed to update status in Supabase');
      loadData();
    }
  };

  const handleOpenEdit = (enquiry) => {
    setEditingEnquiry({
      id: enquiry.id,
      first_name: enquiry.first_name || '',
      last_name: enquiry.last_name || '',
      phone: enquiry.phone || '',
      service: enquiry.service || 'Business Website',
      status: enquiry.status || 'Pending',
      message: enquiry.message || '',
    });
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editingEnquiry) return;
    setIsSavingEdit(true);

    const { id, first_name, last_name, phone, service, status, message } = editingEnquiry;
    const res = await updateContactEnquiry(id, {
      first_name,
      last_name,
      phone,
      service,
      status,
      message,
    });

    setIsSavingEdit(false);
    if (res.success) {
      setAnalytics((prev) => ({
        ...prev,
        enquiries: prev.enquiries.map((item) =>
          item.id === id
            ? { ...item, first_name, last_name, phone, service, status, message }
            : item
        ),
      }));
      setEditingEnquiry(null);
      toast.success('Project details updated in Supabase!');
    } else {
      toast.error('Failed to update project in Supabase');
    }
  };

  const handleDelete = async (enquiry) => {
    const clientName = `${enquiry.first_name || ''} ${enquiry.last_name || ''}`.trim() || 'this enquiry';
    if (!window.confirm(`Are you sure you want to permanently delete "${clientName}" from Supabase?`)) {
      return;
    }

    setDeletingId(enquiry.id);
    const res = await deleteContactEnquiry(enquiry.id);
    setDeletingId(null);

    if (res.success) {
      setAnalytics((prev) => ({
        ...prev,
        enquiries: prev.enquiries.filter((item) => item.id !== enquiry.id),
      }));
      toast.success('Enquiry permanently deleted from Supabase!');
    } else {
      toast.error('Failed to delete enquiry from Supabase');
    }
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

            <form onSubmit={handleLogin} autoComplete="off">
              <div className="form-floating-outlined password-input-wrap">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="adminPasswordOutlined"
                  placeholder=" "
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  autoComplete="new-password"
                  required
                />
                <label htmlFor="adminPasswordOutlined">Enter Password</label>
                <button
                  type="button"
                  className="btn-toggle-password"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  tabIndex={-1}
                >
                  <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
                </button>
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

  const filteredEnquiries = analytics.enquiries.filter(
    (e) => filterStatus === 'All' || (e.status || 'Pending') === filterStatus
  );
  const pendingCount = analytics.enquiries.filter((e) => (e.status || 'Pending') === 'Pending').length;
  const inProgressCount = analytics.enquiries.filter((e) => e.status === 'In Progress').length;
  const completedCount = analytics.enquiries.filter((e) => e.status === 'Completed').length;

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
          {lastRefreshed && (
            <span className="text-muted small me-1 d-none d-sm-inline">
              <i className="bi bi-clock-history me-1"></i>
              Updated {lastRefreshed.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </span>
          )}

          <button
            className="btn btn-outline-primary btn-sm d-inline-flex align-items-center"
            onClick={() => loadData(false)}
            disabled={loading || isRefreshing}
            title="Refresh analytics and client leads"
          >
            {isRefreshing ? (
              <>
                <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                <span>Refreshing...</span>
              </>
            ) : (
              <>
                <i className="bi bi-arrow-clockwise me-1"></i>
                <span>Refresh Data</span>
              </>
            )}
          </button>

          <button className="btn btn-outline-danger btn-sm d-inline-flex align-items-center" onClick={handleLogout}>
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
            <div className="enquiry-filter-bar">
              <div className="filter-pills">
                <button
                  type="button"
                  className={`filter-pill ${filterStatus === 'All' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('All')}
                >
                  All Leads ({analytics.enquiries.length})
                </button>
                <button
                  type="button"
                  className={`filter-pill status-pending ${filterStatus === 'Pending' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('Pending')}
                >
                  🟡 Pending ({pendingCount})
                </button>
                <button
                  type="button"
                  className={`filter-pill status-in-progress ${filterStatus === 'In Progress' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('In Progress')}
                >
                  🔵 In Progress ({inProgressCount})
                </button>
                <button
                  type="button"
                  className={`filter-pill status-completed ${filterStatus === 'Completed' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('Completed')}
                >
                  🟢 Completed ({completedCount})
                </button>
              </div>
            </div>

            {analytics.enquiries.length === 0 ? (
              <div className="text-center py-5 text-muted">
                <i className="bi bi-inbox fs-1 d-block mb-2"></i>
                No client enquiries logged yet. Form submissions will appear here automatically!
              </div>
            ) : filteredEnquiries.length === 0 ? (
              <div className="text-center py-5 text-muted">
                <i className="bi bi-filter-circle fs-1 d-block mb-2"></i>
                No enquiries with status <strong>"{filterStatus}"</strong> found.
              </div>
            ) : (
              filteredEnquiries.map((enquiry, idx) => {
                  const currentStatus = enquiry.status || 'Pending';
                  return (
                    <div
                      key={enquiry.id || idx}
                      className={`enquiry-row-card status-border-${currentStatus.toLowerCase().replace(/\s+/g, '-')}`}
                      style={{ animationDelay: `${idx * 80}ms` }}
                    >
                      <div className="enquiry-row-header">
                        <div>
                          <div className="d-flex align-items-center gap-2 flex-wrap">
                            <h4 className="enquiry-name">
                              {enquiry.first_name} {enquiry.last_name}
                            </h4>
                            <span className={`status-badge status-${currentStatus.toLowerCase().replace(/\s+/g, '-')}`}>
                              {currentStatus === 'Completed'
                                ? '✓ Completed'
                                : currentStatus === 'In Progress'
                                ? '⚡ In Progress'
                                : '⏳ Pending'}
                            </span>
                          </div>
                          <div className="text-muted small mt-1">
                            <i className="bi bi-calendar3 me-1"></i>
                            {new Date(enquiry.created_at).toLocaleString('en-IN')}
                          </div>
                        </div>

                        <div className="enquiry-header-badges">
                          <span className="enquiry-service-badge">
                            {enquiry.service || 'General Enquiry'}
                          </span>

                          <select
                            className={`enquiry-status-select status-${currentStatus.toLowerCase().replace(/\s+/g, '-')}`}
                            value={currentStatus}
                            onChange={(e) => handleStatusChange(enquiry.id, e.target.value, currentStatus)}
                            title="Click to change project status directly"
                          >
                            <option value="Pending">🟡 Pending</option>
                            <option value="In Progress">🔵 In Progress</option>
                            <option value="Completed">🟢 Completed</option>
                          </select>
                        </div>
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
                              {enquiry.phone}
                            </a>

                            <a
                              href={`https://wa.me/${enquiry.phone.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-enquiry-wa"
                            >
                              <i className="bi bi-whatsapp"></i>
                              WhatsApp
                            </a>
                          </>
                        ) : (
                          <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2">
                            <i className="bi bi-whatsapp me-1"></i>
                            {enquiry.phone || 'Initiated via Floating Widget'}
                          </span>
                        )}

                        <button
                          type="button"
                          className="btn-enquiry-edit"
                          onClick={() => handleOpenEdit(enquiry)}
                          title="Edit client or project details"
                        >
                          <i className="bi bi-pencil-square"></i>
                          Edit Project
                        </button>

                        <button
                          type="button"
                          className="btn-enquiry-delete"
                          onClick={() => handleDelete(enquiry)}
                          disabled={deletingId === enquiry.id}
                          title="Permanently delete from Supabase"
                        >
                          {deletingId === enquiry.id ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-1"></span>
                              Deleting...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-trash3-fill"></i>
                              Delete
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })
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

      {editingEnquiry && (
        <div className="admin-modal-backdrop" onClick={() => setEditingEnquiry(null)}>
          <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">
                <i className="bi bi-pencil-square text-primary me-2"></i>
                Edit Project & Lead Details
              </h3>
              <button
                type="button"
                className="admin-modal-close"
                onClick={() => setEditingEnquiry(null)}
                aria-label="Close edit modal"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="admin-modal-form">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-semibold">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingEnquiry.first_name}
                    onChange={(e) =>
                      setEditingEnquiry({ ...editingEnquiry, first_name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Last Name / Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingEnquiry.last_name}
                    onChange={(e) =>
                      setEditingEnquiry({ ...editingEnquiry, last_name: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingEnquiry.phone}
                    onChange={(e) =>
                      setEditingEnquiry({ ...editingEnquiry, phone: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-semibold">Service</label>
                  <select
                    className="form-select"
                    value={editingEnquiry.service}
                    onChange={(e) =>
                      setEditingEnquiry({ ...editingEnquiry, service: e.target.value })
                    }
                  >
                    <option value="Business Website">Business Website</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Clinic Website">Clinic Website</option>
                    <option value="Packers & Movers Website">Packers & Movers Website</option>
                    <option value="Restaurant Website">Restaurant Website</option>
                    <option value="Custom Web App">Custom Web App</option>
                    <option value="Direct WhatsApp Chat">Direct WhatsApp Chat</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold">Project Status</label>
                  <select
                    className="form-select fw-semibold"
                    value={editingEnquiry.status || 'Pending'}
                    onChange={(e) =>
                      setEditingEnquiry({ ...editingEnquiry, status: e.target.value })
                    }
                  >
                    <option value="Pending">🟡 Pending (Not Started / Under Review)</option>
                    <option value="In Progress">🔵 In Progress (Work Ongoing)</option>
                    <option value="Completed">🟢 Completed (Project Finished)</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold">Project Message / Notes</label>
                  <textarea
                    rows="3"
                    className="form-control"
                    value={editingEnquiry.message}
                    onChange={(e) =>
                      setEditingEnquiry({ ...editingEnquiry, message: e.target.value })
                    }
                    placeholder="Enter project requirements, notes, or updates..."
                  ></textarea>
                </div>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setEditingEnquiry(null)}
                  disabled={isSavingEdit}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSavingEdit}
                >
                  {isSavingEdit ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Saving to Supabase...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-check2-circle me-1"></i>
                      Save to Supabase
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
