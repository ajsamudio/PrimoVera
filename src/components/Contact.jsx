export default function Contact() {
  return (
    <section className="contact-section" id="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <p className="contact-intro">
        We're glad you're here.<br />
        PrimoVera works with clients seeking professional architectural, engineering, construction,
        and property management solutions.<br />
        Please complete the form below and our team will get back to you within 1–2 business days.
        <br />
        <span className="contact-note">
          Note: We prioritize serious project inquiries. For partnership, vendor, or job inquiries,
          please use the appropriate email below.
        </span>
      </p>

      <form
        className="contact-form"
        action="https://formsubmit.co/info@primovera.net"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="hidden" name="_subject" value="New Project Inquiry — PrimoVera" />
        <input type="hidden" name="_next" value="https://www.primovera.net/" />
        <input type="text" name="_honey" style={{ display: 'none' }} />
        <div className="form-group">
          <label htmlFor="full-name">Full Name *</label>
          <input type="text" id="full-name" name="full-name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" />
        </div>

        <div className="form-group">
          <label htmlFor="service">Service Interested In *</label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>Select a service</option>
            <option value="architectural-design">Architectural Design</option>
            <option value="engineering">Engineering</option>
            <option value="construction">Construction</option>
            <option value="property-management">Property Management</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="project-details">Project Type / Details *</label>
          <textarea
            id="project-details"
            name="project-details"
            rows="5"
            placeholder="Briefly describe your project, location, and goals"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="timeline">Timeline or Start Date</label>
          <input type="text" id="timeline" name="timeline" />
        </div>

        <div className="form-group">
          <label htmlFor="budget">Budget Range</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="" disabled>Select a budget range</option>
            <option value="<1m Pesos">&lt; ₱1,000,000</option>
            <option value="1m-10m Pesos">₱1,000,000 – ₱10,000,000</option>
            <option value="10m-50m Pesos">₱10,000,000 – ₱50,000,000</option>
            <option value="50m Pesos+">₱50,000,000+</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="file-upload">Attach a File (JPEG, PNG or PDF)</label>
          <input
            type="file"
            id="file-upload"
            name="attachment"
            accept="image/png,image/jpeg,application/pdf"
          />
        </div>

        <button type="submit" className="submit-btn">Submit Inquiry</button>
      </form>
    </section>
  )
}
