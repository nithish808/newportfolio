import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ki3a06h",      // 🔴 YOUR SERVICE ID
        "template_g460hdk",     // 🔴 YOUR TEMPLATE ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "4fSyu5OYc4dy9IjMd"    // 🔴 YOUR PUBLIC KEY
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Mail send aagala ❌");
      });
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'nithishkumar8595@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Salem, Tamil Nadu, India' },
    { icon: '💼', label: 'LinkedIn', value: 'v-nithish-kumar-aa2234291' },
  ];

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto z-10 max-w-6xl">

        {/* ===== TITLE ===== */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-6xl font-bold text-center"
        >
          Get in <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-gray-400 text-center mt-2 mb-14 text-base md:text-lg"
        >
          Have a project in mind? Let&apos;s talk about it.
        </motion.p>

        {/* ===== CONTENT ===== */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT SIDE – INFO */}
          <div className="space-y-6">
            {contactInfo.map((contact, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="glass-card p-6 flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-2xl">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  <p className="text-foreground font-semibold">{contact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="glass-card p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <p className="text-2xl text-primary font-bold">
                  Message Sent Successfully!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground focus:outline-none"
                  />
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground focus:outline-none"
                  />
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground resize-none focus:outline-none"
                  />
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 gradient-primary rounded-xl font-semibold"
                >
                  SEND MESSAGE
                </motion.button>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
