import Link from 'next/link'
import { ChevronRightIcon } from '@/components/ui/icons'

export default function NotFound() {
  return (
    <section className="section-panel top-gradient-soft min-h-[72vh] px-5 pb-24 pt-44 sm:px-8 lg:px-10 lg:pt-52">
      <div className="mx-auto w-full max-w-4xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">404</p>
        <h1 className="mt-4 font-serif text-[3.2rem] font-normal leading-tight text-black sm:text-[4.5rem]">This page could not be found.</h1>
        <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-[#02a5a2]/15 via-[#02a5a2]/70 to-[#02a5a2]/15" />
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-black/82">The page may have moved, or the link may be incomplete. You can return home or use the navigation above.</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#02a5a2] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_14px_32px_rgba(2,165,162,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#018f8c]">
            Back to home
            <ChevronRightIcon className="h-3.5 w-3.5" />
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#02a5a2]/55 bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-[#02a5a2] shadow-[0_10px_24px_rgba(2,165,162,0.10)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#02a5a2] hover:text-white">
            Contacts
            <ChevronRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
