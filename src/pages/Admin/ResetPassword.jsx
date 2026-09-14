import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SEOHead from '../../components/SEOHead/SEOHead';
import { supabase, updateUserPassword } from '../../lib/supabase';
import './Admin.css';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(true);

  useEffect(() => {
    // Check if Supabase session is established from email recovery link
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      // If no session and hash doesn't contain access_token, link might be invalid/expired
      const hasHashToken = window.location.hash.includes('access_token') || window.location.hash.includes('type=recovery');
      
      if (!data.session && !hasHashToken) {
        setIsTokenValid(false);
        toast.error('Password reset link is invalid or has expired. Please request a new link.');
      }
    };

    checkSession();

    // Listen for auth state recovery event
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setIsTokenValid(true);
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match. Please verify both fields.');
      return;
    }

    setLoading(true);

    const result = await updateUserPassword(newPassword);

    setLoading(false);

    if (result.success) {
      toast.success('Your admin password has been reset successfully! Redirecting...');
      setNewPassword('');
      setConfirmPassword('');
      
      // Also mark admin session storage for seamless login
      sessionStorage.setItem('arwebx_admin_auth', 'true');

      setTimeout(() => {
        navigate('/admin');
      }, 2000);
    } else {
      toast.error(result.error || 'Failed to reset password. The link may have expired.');
    }
  };

  return (
    <div className="admin-page container-fluid px-3 px-md-5">
      <SEOHead
        title="Reset Admin Password | ARWEBX"
        description="Reset your ARWEBX Admin Password securely."
        canonical="https://arwebx.vercel.app/admin/reset-password"
      />

      <div className="admin-login-wrapper">
        <div className="admin-login-card">
          <div className="admin-logo-badge">
            <i className="bi bi-shield-lock-fill"></i>
            ARWEBX ADMIN
          </div>
          <h2>Reset Password</h2>
          <p>Enter your new password below to update your admin credentials.</p>

          {!isTokenValid ? (
            <div className="text-center mt-3">
              <button
                className="btn btn-primary w-100"
                onClick={() => navigate('/admin')}
              >
                Return to Admin Login
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* New Password */}
              <div className="form-floating-outlined">
                <input
                  id="newPassword"
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder=" "
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={6}
                  disabled={loading || !!successMsg}
                />
                <label htmlFor="newPassword">New Password</label>
              </div>

              {/* Confirm Password */}
              <div className="form-floating-outlined">
                <input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder=" "
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  disabled={loading || !!successMsg}
                />
                <label htmlFor="confirmPassword">Confirm New Password</label>
              </div>

              {/* Show / Hide Toggle */}
              <div className="form-check mb-3 text-start">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="showPassCheck"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
                <label className="form-check-label small text-muted user-select-none" htmlFor="showPassCheck">
                  Show passwords
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 mt-2"
                disabled={loading || !!successMsg}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Updating Password...
                  </>
                ) : (
                  <>
                    Update Password
                    <i className="bi bi-check2-circle ms-2"></i>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
