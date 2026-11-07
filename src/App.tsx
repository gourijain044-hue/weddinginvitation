import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  Share2, 
  Sparkles,
  Calendar,
  MapPin,
  Clock,
  Heart,
  SlidersHorizontal,
  Eye
} from 'lucide-react';

interface CardItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  demoUrl: string;
}

// Currently we have 1 card template built: Tirupati Sacred Vedic Union
const CARDS: CardItem[] = [
  {
    id: 'tirupati-vedic',
    title: 'Sacred Vedic Union',
    subtitle: 'Tirupati Mandap · Vedic Rituals · Music & RSVP',
    badge: 'Active Template',
    image: '/images/cards/tirupati-cover.webp',
    demoUrl: '/invite.html',
  },
];

export default function App() {
  const currentCard = CARDS[0];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Form State for dynamic invitation link
  const [formData, setFormData] = useState({
    bride: 'Dharani',
    groom: 'Manu',
    date: '19 November 2026',
    time: '07:00 PM',
    functionName: 'Wedding Ceremony & Reception',
    venue: 'BWSSB Rajatha Bhavan',
    address: 'Malleshwaram, Bangalore',
    mapUrl: 'https://maps.google.com/?q=BWSSB+Rajatha+Bhavan+Malleshwaram+Bangalore',
  });

  const generateInviteLink = () => {
    const params = new URLSearchParams({
      bride: formData.bride,
      groom: formData.groom,
      date: formData.date,
      time: formData.time,
      venue: formData.venue,
      address: formData.address,
      map: formData.mapUrl,
    });
    const baseUrl = window.location.origin;
    return `${baseUrl}/invite.html?${params.toString()}`;
  };

  const inviteLink = generateInviteLink();

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-900 font-sans flex flex-col justify-between selection:bg-neutral-900 selection:text-white">
      
      {/* ── HEADER ── */}
      <header className="w-full bg-[#faf9f6] pt-6 pb-4">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Wow Kalyanam Brand Logo */}
          <div className="flex items-center cursor-pointer hover:opacity-90 transition-opacity">
            <img 
              src="/images/wow-kalyanam-logo.png" 
              alt="Wow Kalyanam" 
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>

          {/* Action Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black hover:bg-neutral-800 text-white font-medium text-xs sm:text-[13px] px-5 sm:px-6 py-2.5 rounded-full transition-all active:scale-95 shadow-sm flex items-center gap-2"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Customize Card</span>
          </button>
        </div>

        {/* Notched Architectural Line */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 mt-3">
          <div className="relative h-[10px] border-t border-neutral-300">
            <div className="absolute left-0 top-0 h-2.5 w-[1.5px] bg-neutral-400"></div>
            <div className="absolute right-0 top-0 h-2.5 w-[1.5px] bg-neutral-400"></div>
          </div>
        </div>
      </header>

      {/* ── CENTER STAGE: ONLY THE CARD ── */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 sm:py-10">
        
        {/* Subtle Header */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full inline-block mb-2">
            Wedding Invitation Card
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
            {formData.bride} &amp; {formData.groom}
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Click on the card to customize details and generate your shareable guest link
          </p>
        </div>

        {/* ── THE CARD ── */}
        <div className="flex flex-col items-center">
          <div
            onClick={() => setIsModalOpen(true)}
            className="group relative cursor-pointer w-[280px] sm:w-[330px] md:w-[360px] aspect-[1/1.48] rounded-[26px] overflow-hidden bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.18)] hover:shadow-[0_28px_65px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.02] border border-neutral-200/80 select-none"
          >
            {/* Card Image */}
            <img
              src={currentCard.image}
              alt={currentCard.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none"></div>

            {/* Card Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white/95 backdrop-blur-md text-neutral-900 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>{currentCard.badge}</span>
              </span>
            </div>

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                Click to Customize
              </span>
            </div>

            {/* Bottom Card Info Overlay */}
            <div className="absolute bottom-5 left-5 right-5 text-white z-10 pointer-events-none">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-300 block mb-0.5">
                {currentCard.title}
              </span>
              <h3 className="text-lg font-bold leading-tight">
                {formData.bride} &amp; {formData.groom}
              </h3>
              <p className="text-[11px] text-neutral-200 mt-1 flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-amber-300 shrink-0" />
                <span>{formData.date}</span>
              </p>
            </div>
          </div>

          {/* Quick Action Buttons Below Card */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black hover:bg-neutral-800 text-white font-medium text-xs sm:text-[13px] px-6 py-3 rounded-full transition-all active:scale-95 shadow-md flex items-center gap-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Customize &amp; Create Link</span>
            </button>

            <a
              href={inviteLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 font-medium text-xs sm:text-[13px] px-5 py-3 rounded-full transition-all shadow-sm flex items-center gap-2"
              title="Preview Invitation as a Guest"
            >
              <Eye className="w-3.5 h-3.5 text-neutral-500" />
              <span>Preview Invite</span>
            </a>
          </div>
        </div>

      </main>

      {/* ── MINIMAL FOOTER ── */}
      <footer className="w-full py-4 text-center text-xs text-neutral-400">
        <p>© {new Date().getFullYear()} Wow Kalyanam · Digital Wedding Invitations</p>
      </footer>

      {/* ── MODAL: CUSTOMIZE & GENERATE SHAREABLE LINK ── */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 sm:p-7 border-b border-neutral-100 sticky top-0 bg-white/95 backdrop-blur-md z-10">
              <div className="flex items-center gap-3.5">
                <img 
                  src={currentCard.image} 
                  alt={currentCard.title} 
                  className="w-10 h-14 object-cover rounded-lg border border-neutral-200 shadow-sm"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    Invitation Customizer
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">
                    Customize Wedding Details
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <div className="p-6 sm:p-7 space-y-5">
              
              {/* Couple Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Bride's Name
                  </label>
                  <input
                    type="text"
                    value={formData.bride}
                    onChange={(e) => setFormData({ ...formData, bride: e.target.value })}
                    placeholder="e.g. Dharani"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Groom's Name
                  </label>
                  <input
                    type="text"
                    value={formData.groom}
                    onChange={(e) => setFormData({ ...formData, groom: e.target.value })}
                    placeholder="e.g. Manu"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Wedding Date
                  </label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="e.g. 19 November 2026"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Ceremony Time
                  </label>
                  <input
                    type="text"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    placeholder="e.g. 07:00 PM onwards"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                  />
                </div>
              </div>

              {/* Function Title */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Function / Ceremony Title
                </label>
                <input
                  type="text"
                  value={formData.functionName}
                  onChange={(e) => setFormData({ ...formData, functionName: e.target.value })}
                  placeholder="e.g. Wedding Ceremony & Reception"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                />
              </div>

              {/* Venue Name & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Venue Name
                  </label>
                  <input
                    type="text"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    placeholder="e.g. BWSSB Rajatha Bhavan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Venue City / Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. Malleshwaram, Bangalore"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                  />
                </div>
              </div>

              {/* Google Maps Link */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Google Maps Directions Link
                </label>
                <input
                  type="text"
                  value={formData.mapUrl}
                  onChange={(e) => setFormData({ ...formData, mapUrl: e.target.value })}
                  placeholder="Paste Google Maps URL"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black text-xs font-mono"
                />
              </div>

              {/* Generated Shareable Link Box */}
              <div className="bg-[#f5f5f4] p-4 sm:p-5 rounded-2xl border border-neutral-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-black" />
                    <span>Your Shareable Guest Link</span>
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Ready to send
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={inviteLink}
                    className="flex-1 bg-white px-3 py-2 rounded-xl border border-neutral-300 text-xs text-neutral-600 font-mono select-all focus:outline-none"
                  />
                  <button
                    onClick={handleCopy}
                    className="bg-black hover:bg-neutral-800 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-neutral-500">
                  Guests opening this link land <strong>directly on the full-screen invitation card</strong> with these details, with zero business website elements.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={inviteLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-black hover:bg-neutral-800 text-white font-semibold text-sm py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all text-center"
                >
                  <span>Open &amp; Test Guest View</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-3 rounded-xl border border-neutral-300 hover:border-black text-sm font-semibold text-neutral-700 transition-colors"
                >
                  Done
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
