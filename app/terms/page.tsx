import { siteConfig } from '@/lib/site'
import { Section, SectionHeading } from '@/components/ui/Section'

export const metadata = { title: 'Terms & Conditions | Michele Tagliani' }

export default function TermsPage() {
  return (
    <Section className="top-gradient-soft">
      <SectionHeading eyebrow="Legal" title="Terms & Conditions" />
      <div className="prose-site mt-8 text-lg leading-8 text-black">
        <p>These Terms & Conditions explain how this website and Michele Tagliani’s nutrition, naturopathy, ADHD coaching and related services are provided. By using this website, booking a call or purchasing a programme, you agree to these terms.</p>

        <h2>About the services</h2>
        <p>Michele Tagliani provides nutrition, naturopathy, health coaching and ADHD-informed lifestyle support. Services are educational and supportive in nature and are designed to help you understand patterns, make realistic changes and support your wellbeing.</p>

        <h2>Not emergency or medical care</h2>
        <p>The information on this website and in sessions is not emergency care and should not replace medical diagnosis, urgent medical treatment or advice from your GP, consultant, psychiatrist or other regulated healthcare provider.</p>
        <p>If you have urgent symptoms, a medical emergency or concerns about medication, seek medical advice from an appropriate healthcare professional.</p>

        <h2>Bookings and discovery calls</h2>
        <p>Discovery calls are an opportunity to discuss your situation and whether working together feels like the right fit. A discovery call does not create a client relationship unless a programme or service is agreed and booked.</p>

        <h2>Programmes and payments</h2>
        <p>Programme fees, formats and what is included will be shown on the relevant programme page or confirmed in writing before you begin. Payment terms, payment plans and due dates should be agreed before the programme starts.</p>
        <p>Programme places may only be confirmed once the required payment or agreed deposit has been received.</p>

        <h2>Cancellations and rescheduling</h2>
        <p>If you need to reschedule an appointment, please give as much notice as possible. Late cancellations, missed appointments or repeated rescheduling may affect your programme rhythm and may still be charged, depending on the terms agreed at booking.</p>

        <h2>Your responsibilities</h2>
        <p>You are responsible for giving accurate and complete information, telling me about relevant health conditions, medication, supplements, allergies, pregnancy, test results or medical advice, and checking with your doctor or specialist where needed.</p>
        <p>You are responsible for deciding whether to follow any suggestions and for seeking medical advice before making changes that could affect a medical condition, medication or treatment plan.</p>

        <h2>Results</h2>
        <p>Every person responds differently. No specific outcome, diagnosis, cure, weight change, symptom change or health result is guaranteed.</p>

        <h2>Online appointments</h2>
        <p>Most consultations are delivered online by secure video call. You are responsible for having a suitable internet connection, private space and device for the session.</p>

        <h2>In-person appointments</h2>
        <p>In-person appointments may be available by discussion, depending on suitability and availability. Any location, travel arrangements or additional terms should be agreed before the appointment.</p>

        <h2>Resources and intellectual property</h2>
        <p>Materials, plans, recipes, handouts, worksheets, website copy and programme resources are provided for your personal use only. They must not be copied, shared, sold, adapted or used commercially without written permission.</p>

        <h2>Website information</h2>
        <p>Website content is provided for general information only. I aim to keep it accurate and useful, but it may not reflect your individual circumstances and should not be relied on as personal advice.</p>

        <h2>Links to other websites</h2>
        <p>This website may include links to third-party websites, booking systems, payment providers, social platforms or resources. I am not responsible for the content, privacy practices or availability of third-party websites.</p>

        <h2>Privacy</h2>
        <p>Personal information is handled in line with the Privacy Policy. By contacting me, booking a call or working with me, you acknowledge that relevant personal information may be used to respond to your enquiry or provide the service requested.</p>

        <h2>Changes to these terms</h2>
        <p>These terms may be updated from time to time. The latest version will be published on this page.</p>

        <h2>Contact</h2>
        <p>If you have questions about these terms, contact {siteConfig.contactEmail}.</p>
      </div>
    </Section>
  )
}
