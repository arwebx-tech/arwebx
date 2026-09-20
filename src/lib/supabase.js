import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://bgrapvltcfdggvvyastm.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_oaNRz0jJp-mJoiJZQh2HMA_IOXybsS-';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function trackPageView(path = '/') {
  try {
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown';
    const referrer = typeof document !== 'undefined' ? document.referrer : '';

    await supabase.from('page_views').insert([
      {
        page_path: path,
        user_agent: userAgent,
        referrer: referrer,
        created_at: new Date().toISOString(),
      },
    ]);
  } catch (err) {
    console.warn('Page view tracking silent skip:', err);
  }
}

export async function saveContactEnquiry({ firstName, lastName, phone, service, message }) {
  try {
    const { data, error } = await supabase.from('contact_enquiries').insert([
      {
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        service: service,
        message: message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.warn('Error saving enquiry to Supabase:', error);
      return { success: false, error };
    }
    return { success: true, data };
  } catch (err) {
    console.warn('Enquiry save catch error:', err);
    return { success: false, error: err };
  }
}

export async function getAdminAnalytics() {
  try {
    const todayISO = new Date();
    todayISO.setHours(0, 0, 0, 0);

    const { count: totalViews } = await supabase
      .from('page_views')
      .select('*', { count: 'exact', head: true });

    const { count: todayViews } = await supabase
      .from('page_views')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', todayISO.toISOString());

    const { data: enquiries } = await supabase
      .from('contact_enquiries')
      .select('*')
      .order('created_at', { ascending: false });

    const { data: recentViews } = await supabase
      .from('page_views')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    return {
      totalViews: totalViews || 0,
      todayViews: todayViews || 0,
      enquiries: enquiries || [],
      recentViews: recentViews || [],
    };
  } catch (err) {
    console.warn('Admin analytics fetch error:', err);
    return {
      totalViews: 0,
      todayViews: 0,
      enquiries: [],
      recentViews: [],
    };
  }
}
