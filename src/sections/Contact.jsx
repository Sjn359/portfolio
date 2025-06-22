import { useState } from "react";
import Input from "../components/ui/input";
import Textarea from "../components/ui/textarea";
// import Button from "../components/ui/button";
import { Mail, LinkedIn, GitHub, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setSubmitMessage("Yay! Thanks for reaching out! 💕");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Let's Be Friends! 💌
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Drop Me a Line</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMessage && (
                <p
                  className={`text-sm ${
                    submitStatus === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">
              Other Ways to Reach Me
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                I'd love to hear from you! Whether you want to collaborate, ask
                a question, or just say hi — my inbox is always open!
              </p>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-pink-500 mr-2" />
                <a
                  href="mailto:hello@salmajahan.com"
                  className="text-pink-500 hover:underline"
                >
                  hello@salmajahan.com
                </a>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-3">
                  Let's connect:
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-pink-100 p-2 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedIn className="h-5 w-5 text-pink-500" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-pink-100 p-2 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <GitHub className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-pink-100 p-2 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 text-blue-500" />
                  </a>
                </div>
              </div>

              <p className="pt-4 text-gray-700">
                Currently available for freelance projects — and always up for a
                chat about code, design, or life! ☕
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
