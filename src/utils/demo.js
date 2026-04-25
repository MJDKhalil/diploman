// When NEXT_PUBLIC_API_URL is not set the app runs in demo mode.
// All form submissions are intercepted and a notice is shown instead.
export const DEMO_MODE = !process.env.NEXT_PUBLIC_API_URL;

export const DEMO_ALERT_MSG = 'Demo mode — form submissions are disabled in this portfolio demo.';
