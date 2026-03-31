import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Users, AlertTriangle, Scale } from "lucide-react";
import logo from "@/assets/logo.png";

const TermsConditions = () => (
  <div className="min-h-screen bg-background">
    {/* Header */}
    <header className="glass sticky top-0 z-50 border-b border-border">
      <div className="container flex items-center gap-4 h-16">
        <Link to="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft size={18} /> Back
        </Link>
        <img src={logo} alt="PRANA-G AI" className="h-7 ml-auto" />
      </div>
    </header>

    <main className="container py-12 max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
          <FileText size={24} className="text-foreground" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground">Last updated: March 29, 2026</p>
        </div>
      </div>

      <div className="prose prose-sm max-w-none space-y-8">
        <section>
          <h2 className="font-display text-xl font-semibold flex items-center gap-2 mb-3">
            <Scale size={18} className="text-primary" /> Acceptance of Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            By downloading, installing, or using the PRANAG-AI mobile application ("App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use the App. These Terms constitute a legally binding agreement between you and PRANAG-AI Technologies ("Company").
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold flex items-center gap-2 mb-3">
            <Users size={18} className="text-primary" /> Eligibility
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>You must be at least 18 years of age to use this App.</li>
            <li>You must provide accurate, current, and complete registration information.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You accept responsibility for all activities that occur under your account.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold mb-3">Use of Services</h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">Permitted Use:</strong> PRANAG-AI is intended for livestock health monitoring, diagnostics, and management. You may use the App solely for its intended agricultural and veterinary purposes.</p>
            <p><strong className="text-foreground">AI Diagnostics Disclaimer:</strong> The AI-powered health assessments, predictions, and recommendations provided by PRANAG-AI are for informational purposes only and do not constitute professional veterinary advice. Always consult a qualified veterinarian for medical decisions regarding your livestock.</p>
            <p><strong className="text-foreground">Muzzle-ID System:</strong> The biometric identification system creates unique digital identities for livestock. You are responsible for ensuring the accuracy of initial scans and associated animal information.</p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold mb-3">Prohibited Activities</h2>
          <p className="text-muted-foreground mb-3">You agree NOT to:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Use the App for any unlawful purpose or in violation of any applicable laws</li>
            <li>Attempt to reverse-engineer, decompile, or disassemble the App or its AI models</li>
            <li>Manipulate or falsify biometric data, health records, or diagnostic results</li>
            <li>Use the App to commit insurance fraud or misrepresent livestock identity</li>
            <li>Share your account access with unauthorized parties</li>
            <li>Interfere with or disrupt the App's functionality or servers</li>
            <li>Collect or harvest data from other users without consent</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold mb-3">Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            All content, features, AI models, algorithms, and functionality of PRANAG-AI are owned by PRANAG-AI Technologies and are protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial agricultural purposes. This license does not include the right to modify, distribute, or create derivative works.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold mb-3">Data Ownership</h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>You retain ownership of the livestock data and health records you create through the App. By using PRANAG-AI, you grant us a non-exclusive license to use anonymized and aggregated data to improve our AI models and services.</p>
            <p>Biometric muzzle-print data is stored securely and associated exclusively with your account unless you authorize sharing for insurance or veterinary purposes.</p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold flex items-center gap-2 mb-3">
            <AlertTriangle size={18} className="text-secondary" /> Limitation of Liability
          </h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>PRANAG-AI is provided "as is" and "as available." We make no warranties regarding the accuracy of AI diagnostics, predictions, or health assessments.</p>
            <p>To the maximum extent permitted by law, PRANAG-AI Technologies shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App, including but not limited to livestock health outcomes, financial losses, or data loss.</p>
            <p>Our total liability shall not exceed the amount you paid for the App services in the 12 months preceding the claim.</p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold mb-3">Offline Functionality</h2>
          <p className="text-muted-foreground leading-relaxed">
            PRANAG-AI is designed to function offline using edge AI technology. While core features work without internet connectivity, certain features such as cloud sync, data backup, and real-time updates require an active internet connection. We are not liable for any discrepancies in data that may occur during offline use.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold mb-3">Termination</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to suspend or terminate your account at any time for violation of these Terms. Upon termination, your right to use the App ceases immediately. You may export your livestock data before account closure. Data retention post-termination follows our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold mb-3">Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold mb-3">Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may modify these Terms at any time. Material changes will be communicated via the App or email at least 30 days before taking effect. Continued use after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="p-5 rounded-xl bg-card border border-border">
          <h2 className="font-display text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions about these Terms, contact us at:<br />
            <strong className="text-foreground">Email:</strong> legal@pranag-ai.com<br />
            <strong className="text-foreground">Address:</strong> PRANAG-AI Technologies, India
          </p>
        </section>
      </div>
    </main>
  </div>
);

export default TermsConditions;
