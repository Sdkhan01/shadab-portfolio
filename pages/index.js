import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Head>
        <title>Shadab Khan | Data Analyst & ML Developer</title>
        <meta
          name="description"
          content="Portfolio of Shadab Khan - Data Analyst, Power BI, Python, SQL, ML"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* HEADER */}
      <header className="bg-gradient-to-r from-sky-800 to-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl font-bold">
              SK
            </div>
            <div>
              <h1 className="text-2xl font-extrabold">Shadab Khan</h1>
              <p className="text-sm opacity-90">
                Data Analyst • ML Developer • Power BI & SQL
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <a
              href="#resume"
              className="bg-white/10 px-3 py-2 rounded-md hover:bg-white/20 transition"
            >
              Download CV
            </a>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">
              I turn business data into clear insights and deployable ML
              solutions.
            </h2>
            <p className="mt-4 text-slate-700">
              I build interactive Power BI dashboards, write reliable SQL
              pipelines, craft production-ready Python models, and deploy
              lightweight ML services. I focus on business impact — helping
              companies make decisions with confidence.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#projects"
                className="bg-sky-600 text-white px-4 py-2 rounded-md shadow hover:bg-sky-700 transition"
              >
                See Projects
              </a>
              <a
                href="#contact"
                className="border border-slate-300 px-4 py-2 rounded-md hover:bg-slate-100 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="bg-white p-3 rounded shadow">
                <div className="text-sm font-semibold">Power BI</div>
                <div className="text-2xl font-bold mt-1">Dashboards</div>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <div className="text-sm font-semibold">Python</div>
                <div className="text-2xl font-bold mt-1">Data & ML</div>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <div className="text-sm font-semibold">SQL</div>
                <div className="text-2xl font-bold mt-1">Pipelines</div>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <div className="text-sm font-semibold">Deployment</div>
                <div className="text-2xl font-bold mt-1">APIs & Apps</div>
              </div>
            </div>
          </div>

          {/* DASHBOARD PREVIEW */}
          <div className="relative">
            <div className="rounded-2xl bg-white shadow-lg p-6">
              <div className="text-xs text-slate-500">Sample Dashboard</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3 rounded">
                  <div className="text-xs text-slate-400">Total Revenue</div>
                  <div className="text-lg font-bold">₹ 6.25M</div>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <div className="text-xs text-slate-400">Net Profit</div>
                  <div className="text-lg font-bold">₹ 5.54M</div>
                </div>
                <div className="col-span-2 bg-gradient-to-r from-emerald-50 to-sky-50 rounded p-3">
                  <div className="text-xs text-slate-500">Monthly Revenue</div>
                  <div className="h-28 bg-white rounded mt-2 flex items-end">
                    <div className="h-16 w-3 bg-sky-600 mx-1 rounded" />
                    <div className="h-20 w-3 bg-sky-400 mx-1 rounded" />
                    <div className="h-14 w-3 bg-emerald-500 mx-1 rounded" />
                    <div className="h-18 w-3 bg-sky-700 mx-1 rounded" />
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-slate-600">
                Preview of an operations dashboard — revenue, staff performance
                and area insights.
              </div>
            </div>

            <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-gradient-to-br from-sky-600 to-emerald-400 opacity-70 blur-xl" />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="mt-12 bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold">About Me</h3>
          <p className="mt-3 text-slate-700">
            I am a data analyst and machine learning developer with practical
            experience building BI dashboards, writing SQL for data pipelines,
            training and deploying ML models, and delivering analytics that
            drive decisions. I work end-to-end — from raw data to results you
            can act on.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">
              <div className="text-sm text-slate-500">Experience</div>
              <div className="text-lg font-semibold mt-1">
                Dashboard & ML projects
              </div>
            </div>
            <div className="p-4 border rounded">
              <div className="text-sm text-slate-500">Tools</div>
              <div className="text-lg font-semibold mt-1">
                Power BI, Excel, Python, SQL
              </div>
            </div>
            <div className="p-4 border rounded">
              <div className="text-sm text-slate-500">Focus</div>
              <div className="text-lg font-semibold mt-1">
                Business insights & production deployment
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Selected Projects</h3>
            <div className="text-sm text-slate-500">
              More case studies available on request
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <article className="bg-white rounded shadow p-4 hover:shadow-lg transition">
              <div className="text-xs text-slate-400">Business Intelligence</div>
              <h4 className="text-lg font-semibold mt-1">
                Urban Wash — Operations Dashboard
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Built end-to-end Power BI dashboard for a multiarea car wash —
                revenue, area insights, staff performance, and customer
                analytics. Delivered .pbix with documentation.
              </p>
              <ul className="mt-3 text-xs text-slate-500 space-y-1">
                <li>Power BI, DAX, Data modeling</li>
                <li>Data cleaning & Excel automation</li>
                <li>Actionable insights for marketing & staffing</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a className="text-sky-600 text-sm" href="#contact">
                  Request Demo
                </a>
                <a className="text-slate-500 text-sm" href="#">
                  View Case
                </a>
              </div>
            </article>

            {/* Project 2 */}
            <article className="bg-white rounded shadow p-4 hover:shadow-lg transition">
              <div className="text-xs text-slate-400">E-commerce Analytics</div>
              <h4 className="text-lg font-semibold mt-1">
                Multiplatform Sales Dashboard
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Consolidated Amazon, Flipkart and Meesho sales into a single
                dashboard showing platform performance, top SKUs and trend
                forecasts.
              </p>
              <ul className="mt-3 text-xs text-slate-500 space-y-1">
                <li>ETL from CSVs, transformations</li>
                <li>Revenue & profitability analysis</li>
                <li>Growth recommendations</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a className="text-sky-600 text-sm" href="#contact">
                  Request Demo
                </a>
                <a className="text-slate-500 text-sm" href="#">
                  View Case
                </a>
              </div>
            </article>

            {/* ✅ FIXED Project 3 */}
            <article className="bg-white rounded shadow p-4 hover:shadow-lg transition">
              <div className="text-xs text-slate-400">ML & Deployment</div>
              <h4 className="text-lg font-semibold mt-1">
                Price Prediction Model (Prototype)
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Built a model to predict product prices using Python and
                scikit-learn, wrapped in a Flask API for easy integration with
                dashboards or apps.
              </p>
              <ul className="mt-3 text-xs text-slate-500 space-y-1">
                <li>Feature engineering, training & validation</li>
                <li>Flask API + Docker-ready</li>
                <li>Basic monitoring suggestions</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a className="text-sky-600 text-sm" href="#contact">
                  Request Demo
                </a>
                <a className="text-slate-500 text-sm" href="#">
                  View Repo
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mt-12 bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold">Skills & Tools</h3>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 border rounded">Power BI & DAX</div>
            <div className="p-4 border rounded">
              Python (Pandas & scikit-learn)
            </div>
            <div className="p-4 border rounded">SQL (MySQL / PostgreSQL)</div>
            <div className="p-4 border rounded">Flask / Streamlit</div>
            <div className="p-4 border rounded">Excel & Pivot Tables</div>
            <div className="p-4 border rounded">Data Cleaning & ETL</div>
            <div className="p-4 border rounded">Model Deployment</div>
            <div className="p-4 border rounded">Git & Version Control</div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mt-12 bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="mt-3 text-slate-700">
            Interested in a demo or project? Reach out and I’ll respond within
            24 hours.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-slate-500">Email</div>
              <div className="font-medium">
                khanshadab7860000@gmail.com
              </div>

              <div className="mt-4 text-sm text-slate-500">Location</div>
              <div className="font-medium">Lucknow, India</div>

              <div className="mt-4 text-sm text-slate-500">GitHub</div>
              <div className="font-medium">
                <a
                  href="https://github.com/shadab-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline"
                >
                  github.com/shadab-khan
                </a>
              </div>
            </div>

            <form className="p-4 border rounded bg-slate-50">
              <label className="text-sm">Your Name</label>
              <input
                type="text"
                className="w-full mt-2 p-2 rounded border"
                placeholder="Name"
              />
              <label className="text-sm mt-3 block">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-2 rounded border"
                placeholder="Email"
              />
              <label className="text-sm mt-3 block">Message</label>
              <textarea
                className="w-full mt-2 p-2 rounded border"
                rows={4}
                placeholder="Project details or message"
              />
              <div className="mt-3">
                <button
                  type="submit"
                  className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 text-center text-sm text-slate-500 pb-10">
          © {new Date().getFullYear()} Shadab Khan — Data Analyst & ML
          Developer
        </footer>
      </main>
    </div>
  );
}
