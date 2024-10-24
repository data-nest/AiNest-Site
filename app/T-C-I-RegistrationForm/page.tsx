export const metadata = {
  title: 'AiNEST Internship Registration | Training-Cum-Internship Program',
  description: 'Register for AiNEST’s Training-Cum-Internship Program in Python, JavaScript, and RPA (UiPath). Gain hands-on experience and certification.',
  icons: {
    icon: '/ainestLogo.ico',
  },
  keywords: 'AiNEST internship, training program, RPA internship, Python internship, JavaScript internship, certification',
  robots: 'noindex, follow',
  canonical: 'https://www.ainest.in/T-C-I-RegistrationForm',
}

export default function Page() {
    return (
        <div className="mt-20 h-[86vh] text-white p-0">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScIqvf78FNiQkHFQHMH0ydJTKpmBjWYYPZGQMGgHL28bKDVtA/viewform" className="overflow-hidden w-full h-full">Loading…</iframe>
        </div>
    );
}