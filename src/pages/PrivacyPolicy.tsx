import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Server, Fingerprint, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    {/* Header */}
    <header className="glass sticky top-0 z-50 border-b border-border">
      <div className="container flex items-center gap-4 h-16">
        <Link to="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft size={18} /> Back
        </Link>
        <img src={logo} alt="PRANAG-AI" className="h-7 ml-auto" />
      </div>
    </header>

    <main className="container py-12 max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
          <Shield size={24} className="text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: March 29, 2026</p>
        </div>
      </div>

      <div className="prose prose-sm max-w-none space-y-8">
        <section>
          <h2 className="font-display text-xl font-semibold flex items-center gap-2 mb-3">
            <Lock size={18} className="text-primary" /> Introduction
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            PRANAG-AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services. By using PRANAG-AI, you consent to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold flex items-center gap-2 mb-3">
            <Fingerprint size={18} className="text-primary" /> Information We Collect
          </h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, and location data provided during registration.</p>
            <p><strong className="text-foreground">Livestock Data:</strong> Animal biometric data (muzzle prints), health records, vaccination records, breeding cycle information, and diagnostic scan results.</p>
            <p><strong className="text-foreground">Device Information:</strong> Device type, operating system, unique device identifiers, and mobile network information.</p>
            <p><strong className="text-foreground">Usage Data:</strong> App interaction data, feature usage patterns, scan frequency, and diagnostic history.</p>
            <p><strong className="text-foreground">Acoustic Data:</strong> Audio recordings captured during health diagnostic scans, processed locally on-device.</p>
            <p><strong className="text-foreground">Spatial Data:</strong> Motion and gait analysis data captured through device sensors during mobility health assessments.</p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold flex items-center gap-2 mb-3">
            <Server size={18} className="text-primary" /> How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Provide AI-powered livestock health diagnostics and predictions</li>
            <li>Create and maintain unique digital identities for livestock via Muzzle-ID</li>
            <li>Generate health reports, alerts, and preventive care recommendations</li>
            <li>Improve our AI models and diagnostic accuracy</li>
            <li>Facilitate livestock insurance verification and record-keeping</li>
            <li>Send health notifications and emergency alerts</li>
            <li>Provide customer support and respond to inquiries</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold flex items-center gap-2 mb-3">
            <ShieldCheck size={18} className="text-primary" /> Data Security
          </h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>We implement industry-standard security measures to protect your data:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">AES-256 Encryption:</strong> All biometric and health data is encrypted at rest and in transit.</li>
              <li><strong className="text-foreground">On-Device Processing:</strong> Core AI diagnostics run locally on your device via TinyML — data never leaves your phone unless you choose to sync.</li>
              <li><strong className="text-foreground">Fraud-Proof Authentication:</strong> Biometric muzzle-print verification prevents unauthorized access to animal records.</li>
              <li><strong className="text-foreground">No Third-Party Sharing:</strong> We do not sell, trade, or rent your personal or livestock data to third parties.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold mb-3">Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain your personal and livestock data for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting our support team. Upon account deletion, all associated data will be permanently removed within 30 days.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold mb-3">Your Rights</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Access, correct, or delete your personal data</li>
            <li>Export your livestock health records</li>
            <li>Opt out of non-essential data collection</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold mb-3">Children's Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            PRANAG-AI does not knowingly collect information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete it immediately.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold mb-3">Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any material changes through the app or via email. Your continued use of PRANAG-AI after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="p-5 rounded-xl bg-card border border-border">
          <h2 className="font-display text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about this Privacy Policy, contact us at:<br />
            <strong className="text-foreground">Email:</strong> privacy@pranag-ai.com<br />
            <strong className="text-foreground">Address:</strong> PRANAG-AI Technologies, India
          </p>
        </section>
      </div>
    </main>
  </div>
);

export default PrivacyPolicy;
