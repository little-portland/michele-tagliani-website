import { siteConfig } from '@/lib/site'
import { Section, SectionHeading } from '@/components/ui/Section'

export const metadata = { title: 'Privacy Policy | Michele Tagliani' }

export default function PrivacyPage() {
  return (
    <Section className="top-gradient-soft">
      <SectionHeading eyebrow="Legal" title="Privacy Policy" />
      <div className="prose-site mt-8 text-lg leading-8 text-black">
        <p>This Privacy Policy explains how Michele Tagliani collects, uses and protects personal information when you visit this website, contact me, book a call, join a mailing list or work with me as a client.</p>

        <h2>Who is responsible for your information</h2>
        <p>Michele Tagliani is responsible for the personal information collected through this website and through enquiries about nutrition, naturopathy, ADHD coaching and related services.</p>
        <p>You can contact me at {siteConfig.contactEmail} if you have questions about this policy or how your information is handled.</p>

        <h2>Information I may collect</h2>
        <p>I may collect information you choose to provide, including your name, email address, phone number, booking details, enquiry details, health goals and information you share in forms, emails, calls or consultations.</p>
        <p>If you become a client, I may also collect health and lifestyle information that is relevant to the support you have requested, such as symptoms, medical history, nutrition, sleep, digestion, hormones, stress, medication, supplements and family context where relevant.</p>

        <h2>How I use your information</h2>
        <p>I use your information to respond to enquiries, arrange discovery calls, provide services, keep appropriate client records, send agreed resources or email updates, manage bookings and payments, maintain website security and improve the way this website works.</p>

        <h2>Legal basis for using your information</h2>
        <p>I use personal information where it is necessary to respond to your request, prepare for or deliver a service, meet legal or professional obligations, protect legitimate business interests, or where you have given consent, such as signing up to receive email updates.</p>
        <p>Health information is treated with additional care and is only used where it is necessary for the service you have requested or where you have clearly chosen to share it with me.</p>

        <h2>Email updates</h2>
        <p>If you join my mailing list, I will use your email address to send the updates or resources you requested. You can unsubscribe at any time using the link in the email or by contacting me.</p>

        <h2>Cookies and analytics</h2>
        <p>This website may use cookies or similar technologies to make the site work, understand how people use it and improve the experience. Non-essential cookies should only be used where appropriate consent has been collected.</p>

        <h2>Who your information may be shared with</h2>
        <p>I may use trusted service providers to help operate this website, manage bookings, send emails, process payments, store client records or provide video calls. These providers should only use your information for the service they provide to me.</p>
        <p>I may also share information if required by law, regulation, safeguarding responsibilities, professional obligations or to protect legal rights.</p>

        <h2>How long information is kept</h2>
        <p>I keep personal information only for as long as necessary for the purpose it was collected, including enquiry management, service delivery, legal, tax, insurance, professional and record-keeping requirements.</p>

        <h2>Your rights</h2>
        <p>You may have the right to ask for access to your personal information, correction of inaccurate information, deletion, restriction, objection to certain uses, portability, or withdrawal of consent where consent is the basis for processing.</p>
        <p>To make a request, contact {siteConfig.contactEmail}. You also have the right to complain to the UK Information Commissioner’s Office if you are unhappy with how your information is handled.</p>

        <h2>Security</h2>
        <p>I take reasonable steps to protect personal information from loss, misuse, unauthorised access, disclosure or alteration. No website or email system is completely secure, so please avoid sending highly sensitive information by email unless requested through an appropriate secure process.</p>

        <h2>Changes to this policy</h2>
        <p>This policy may be updated from time to time. The latest version will be published on this page.</p>
      </div>
    </Section>
  )
}
