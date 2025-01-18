const Foote = () => {
    return (
      <footer className="bg-[#1C1D1F] text-white py-10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-4">Certifications by Issuer</h3>
            <ul className="space-y-2">
              <li>Amazon Web Services (AWS) Certifications</li>
              <li>Six Sigma Certifications</li>
              <li>Microsoft Certifications</li>
              <li>Cisco Certifications</li>
              <li>Tableau Certifications</li>
              <li>See all Certifications</li>
            </ul>
          </div>
  
          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-4">Certifications by Skill</h3>
            <ul className="space-y-2">
              <li>Cybersecurity Certification</li>
              <li>Project Management Certification</li>
              <li>Cloud Certification</li>
              <li>Data Analytics Certification</li>
              <li>HR Management Certification</li>
              <li>See all Certifications</li>
            </ul>
          </div>
  
          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-4">Web Development</h3>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Angular</li>
              <li>Java</li>
            </ul>
          </div>
  
          {/* Column 4 */}
          <div>
            <h3 className="font-bold mb-4">Data Science</h3>
            <ul className="space-y-2">
              <li>Data Science</li>
              <li>Python</li>
              <li>Machine Learning</li>
              <li>ChatGPT</li>
              <li>Deep Learning</li>
            </ul>
          </div>
  
          {/* Column 5 */}
          <div>
            <h3 className="font-bold mb-4">IT Certifications</h3>
            <ul className="space-y-2">
              <li>Amazon AWS</li>
              <li>AWS Certified Cloud Practitioner</li>
              <li>AZ-900: Microsoft Azure Fundamentals</li>
              <li>AWS Certified Solutions Architect - Associate</li>
              <li>Kubernetes</li>
            </ul>
          </div>
  
          {/* Column 6 */}
          <div>
            <h3 className="font-bold mb-4">Leadership</h3>
            <ul className="space-y-2">
              <li>Leadership</li>
              <li>Management Skills</li>
              <li>Project Management</li>
              <li>Personal Productivity</li>
              <li>Emotional Intelligence</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="border-t bg-[#101112] border-gray-700 mt-8 pt-6">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>About us</li>
                <li>Careers</li>
                <li>Contact us</li>
                <li>Blog</li>
                <li>Investors</li>
              </ul>
            </div>
  
            {/* Discovery */}
            <div>
              <h3 className="font-bold mb-4">Discovery</h3>
              <ul className="space-y-2">
                <li>Get the app</li>
                <li>Teach on</li>
                <li>Plans and Pricing</li>
                <li>Affiliate</li>
                <li>Help and Support</li>
              </ul>
            </div>
  
            {/* Legal */}
            <div>
              <h3 className="font-bold mb-4">Legal & Accessibility</h3>
              <ul className="space-y-2">
                <li>Accessibility statement</li>
                <li>Privacy policy</li>
                <li>Sitemap</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Foote;
  