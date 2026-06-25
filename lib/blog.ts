export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  coverImage: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-digitize-ngo-field-data-collection-rwanda",
    title: "How to Digitize NGO Field Data Collection in Rwanda (Without Losing Your Team)",
    excerpt:
      "Paper-based field data collection is costing Rwandan NGOs weeks of manual entry every quarter. Here is the practical, low-bandwidth approach we use to move teams off paper — without a six-figure budget.",
    category: "Engineering",
    date: "2025-04-10",
    readTime: 10,
    coverImage:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
    content: `## The Real Cost of Paper-Based Data Collection

Most NGOs operating in Rwanda and across East Africa know their paper-based data collection is a problem. What they underestimate is how expensive it actually is. A typical programme with 20 field officers submitting weekly forms spends 3–5 staff days per week on data entry alone — not including the errors introduced during transcription, the delays in reporting, and the donor queries that follow.

We have worked with programme offices in Kigali, Huye, and Musanze that were spending more time managing data than acting on it. This guide covers the practical approach we use when moving those teams to digital collection — one that works with Rwanda's connectivity realities, not against them.

## Step 1: Audit Before You Build

The most common mistake is jumping to a tool before understanding the actual data flows. Before recommending any platform, we spend two to four hours mapping:

- **Who collects what data, where, and how often.** Field officers on motorcycles in Gicumbi have different constraints than programme managers sitting in a Kigali office.
- **What happens to the data after collection.** Is it aggregated? Sent to a donor template? Loaded into a dashboard? The downstream use determines the schema.
- **What connectivity exists at collection points.** 2G coverage in rural Rwanda is reliable enough for SMS-based forms and offline-first apps. It is not reliable enough for a cloud-synced spreadsheet that requires a live connection to save.

Document this in a one-page data flow diagram before touching any software.

## Step 2: Choose the Right Tool for Your Context

There is no single right answer, but here is how we frame the decision for Rwandan NGOs:

**KoboToolbox** is our default recommendation for most programme monitoring use cases. It is free for humanitarian organisations, has robust offline support, generates standard XLSForm schemas, and integrates well with Power BI and other reporting tools. The learning curve for field officers is low — forms look familiar.

**ODK Collect** is worth considering when you need more control over your data infrastructure or have a technical team capable of managing a self-hosted server. It uses the same XLSForm standard as KoboToolbox, so skills transfer.

**Google Forms + Sheets** works for small teams with reliable internet. We recommend against it for serious programme monitoring because it has no offline mode, limited logic support, and no built-in data validation at the field level.

**Custom mobile apps** are only justified when you have genuinely complex workflows — branching logic, photo capture, GPS coordinates, or integration with existing systems. We have built these for clients. They take 6–12 weeks and cost significantly more. Do not start here.

## Step 3: Design Forms That Field Officers Will Actually Complete

A technically perfect form that field officers find confusing will produce worse data than a simple paper form. We follow three rules:

**Keep it under 15 questions per session.** If a form takes more than 8 minutes to complete, completion rates drop. Split long surveys across multiple collection points if necessary.

**Use select-one and select-multiple wherever possible.** Free text introduces errors, inconsistency, and requires manual cleaning. Every field that can be a dropdown should be a dropdown.

**Build validation logic into the form, not the spreadsheet.** Require numeric fields to fall within plausible ranges. Flag if a beneficiary count exceeds the catchment population. Catch errors at the point of entry — not three months later during donor reporting.

## Step 4: Plan for Connectivity, Not Against It

The offline-first principle is non-negotiable in Rwanda's field contexts. Every form should be downloadable and completable with no internet connection. Data should sync automatically when a connection becomes available.

Both KoboToolbox and ODK handle this natively. What you need to ensure:

- **Regular sync schedules.** Field officers should open the app and sync at least once per day when they have connectivity — typically in the evening when they return to areas with better coverage.
- **Storage management.** Forms with photo capture fill device storage quickly. Set a clear policy: photos are synced and deleted from the device within 48 hours.
- **Duplicate prevention.** Offline sync can create duplicate submissions if an officer submits a form, loses connection, and submits again. KoboToolbox handles this at the record level — verify this is enabled in your project settings.

## Step 5: Train for Three Scenarios, Not Ten

Staff training consistently fails when it tries to cover every possible situation. We train for exactly three:

1. **Normal operation:** Open the app, complete a form, sync.
2. **No internet:** Complete the form offline, understand that it will sync later.
3. **Something looks wrong:** Who to call, how to flag a data issue without deleting or overwriting the record.

Everything else — admin settings, form rebuilding, server management — is trained separately with the designated data focal point, not the whole team.

## What to Expect in the First 90 Days

In our deployments across Rwandan NGOs, the first three months typically look like this:

- **Weeks 1–4:** High support demand. Officers forget to sync. Forms have logic errors discovered in the field. Expect daily check-ins with the data focal point.
- **Weeks 5–8:** Stabilisation. Completion rates normalise. The data focal point is handling queries independently.
- **Weeks 9–12:** The real test — first full reporting cycle using digital data. This is where you discover whether your form design actually matches the donor template.

Plan for this arc. Do not judge the success of the digitisation at week two.

## The Bottom Line

Digitizing field data collection in Rwanda is not primarily a technology challenge. It is a change management challenge with a technology component. The tools are mature, affordable, and proven. The hard work is in the form design, the training, and the first reporting cycle after go-live.

If you are a programme director in Kigali wondering where to start, start with the audit. Two hours of mapping your current data flows will save you six months of fixing the wrong system.`,
  },
  {
    slug: "open-source-erp-small-businesses-east-africa",
    title: "Open Source ERP for Small Businesses in East Africa: A Practical Guide",
    excerpt:
      "ERPNext, Odoo Community, and Dolibarr each have a place in the East African SME market. Here is how to choose the right one, avoid the implementation traps, and go live without a six-figure budget.",
    category: "Engineering",
    date: "2025-03-01",
    readTime: 12,
    coverImage:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    content: `## Why Most Rwandan SMEs Are Still Running on Spreadsheets

Walk into almost any growing SME in Kigali — a trading company in Remera, a manufacturing business in Kicukiro, a logistics firm handling regional transport — and you will likely find the same operational picture: QuickBooks for accounting, a shared Excel file for inventory, WhatsApp for sales coordination, and a folder of PDFs for HR records.

This works until it doesn't. The moment a business crosses 10–15 staff, or starts managing multiple product lines, or tries to produce a management report without two days of manual aggregation, the spreadsheet stack starts breaking down visibly.

The good news: there are mature, genuinely capable open-source ERP platforms that East African SMEs can deploy without paying Oracle or SAP licensing fees. The bad news: choosing and implementing the wrong one is expensive and demoralising.

This guide is based on implementations we have completed across Rwanda, Uganda, and Kenya.

## The Three Platforms Worth Considering

### ERPNext / Frappe

ERPNext is our default recommendation for most East African SMEs. It is built on the Frappe framework, has a strong community, and covers accounting, inventory, manufacturing, HR, CRM, and project management in a single system.

**What makes it a strong fit for East Africa:**
- Built-in multi-currency and multi-company support (critical for businesses operating across EAC borders)
- Active development community with African contributors
- Frappe Cloud offers affordable hosted deployment with no infrastructure overhead
- The accounting module is genuinely IFRS-compliant, which matters for RRA reporting

**Where it struggles:**
- The interface has a steep learning curve for staff not comfortable with software
- Customisation requires Python and Frappe framework knowledge — you need a developer for non-trivial modifications
- Documentation quality varies significantly by module

### Odoo Community Edition

Odoo Community is powerful and has a polished interface, but the licensing model requires careful attention. The Community Edition is genuinely free. The Enterprise Edition — which includes the full module set — is subscription-based and expensive for SMEs.

**What makes it worth considering:**
- The interface is the cleanest of the three — staff adoption is typically faster
- Strong e-commerce and point-of-sale modules, useful for retail businesses
- Large global partner network, meaning local implementation support is available in Kigali

**Where it struggles:**
- The most useful modules (accounting, manufacturing, inventory) are split between Community and Enterprise in ways that often force businesses toward the paid version
- Odoo's business model is to make you pay eventually. Factor this into long-term cost projections.

### Dolibarr

Dolibarr is the right choice for small businesses that need basic ERP functionality — invoicing, stock management, CRM, HR — without the implementation complexity of ERPNext or Odoo.

**What makes it a strong fit:**
- Simpler to deploy and maintain than the other two
- Lower staff training overhead
- Adequate for businesses under 20 staff with straightforward operations

**Where it struggles:**
- Limited manufacturing support
- Less active development compared to ERPNext and Odoo
- Will likely be outgrown by a business scaling beyond 30–40 staff

## The Implementation Variables That Actually Matter

Choosing the platform is 20% of the challenge. The other 80% is implementation. These are the variables that determine success:

**Data migration quality.** Moving historical data from spreadsheets into an ERP is painstaking work. Every customer record, every product, every open transaction needs to be mapped and validated. In our implementations, data migration typically takes 30–40% of total project time. Clients who underestimate this go live with dirty data and spend months cleaning it up.

**Chart of accounts alignment.** The standard ERPNext and Odoo charts of accounts are not designed for Rwanda's RRA requirements. Before go-live, the chart of accounts needs to be reviewed against your current accounting structure and the RRA reporting categories. This is accountant work, not developer work — bring in your accountant early.

**User roles and permissions.** Who can see supplier prices? Who can approve purchase orders? Who can run payroll? Define this on paper before configuring the system. Systems configured with overly broad permissions create audit and compliance problems within six months.

**The go-live strategy.** We recommend parallel running — operating both the old system and the new ERP simultaneously for one full accounting period (one month minimum, one quarter preferred). This is operationally painful. It is the single best way to catch configuration errors before they become financial errors.

## Realistic Cost Expectations

For a Kigali-based SME implementing ERPNext:

- **Self-hosted on a VPS (Frappe Cloud or DigitalOcean):** $30–80/month infrastructure cost
- **Implementation partner fees:** RWF 3–8 million for a standard deployment (accounting, inventory, HR), depending on complexity and data migration scope
- **Staff training:** 2–3 days per department, typically included in implementation fees
- **Ongoing support:** Budget for 5–10 hours/month of support in the first year

The total cost of ownership over three years is typically 60–80% lower than a comparable proprietary ERP with equivalent capability.

## The Honest Advice

Open-source ERP is not free. It is free-as-in-no-licence-fees. Implementation, customisation, training, and support have real costs. The businesses that succeed with it treat it as a strategic infrastructure investment, not a cost-cutting measure.

If you are a business owner in Kigali evaluating ERP options, the first conversation to have is with your accountant and your operations manager — not a software vendor. Define what you need the system to do before anyone opens a demo environment.`,
  },
  {
    slug: "ai-tools-limited-internet-connectivity-east-africa",
    title: "AI Tools That Work With Limited Internet Connectivity in East Africa",
    excerpt:
      "Most AI tools assume fast, reliable internet. East African organisations do not always have that. Here is how we deploy AI solutions that work under bandwidth constraints — including offline-capable models and smart caching strategies.",
    category: "AI & Data",
    date: "2025-01-28",
    readTime: 9,
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    content: `## The Connectivity Reality in East Africa

Rwanda has made remarkable progress in internet infrastructure. Kigali has reliable fibre. Coverage across secondary cities is expanding. But for organisations whose operations extend beyond the capital — NGOs running field programmes, government offices in district headquarters, agricultural businesses with rural operations — connectivity remains variable, expensive, or both.

This creates a specific challenge for AI adoption. Most enterprise AI tools — OpenAI, Google Gemini, Microsoft Copilot — are cloud-first architectures that assume always-on, low-latency internet. When that assumption breaks, the tool fails.

We have spent the last two years figuring out which AI deployments hold up under East African connectivity conditions and which ones don't. This is what we've learned.

## Category 1: Document Intelligence (High Value, Achievable Offline-First)

Document processing — extracting information from PDFs, classifying files, generating summaries — is one of the highest-value AI use cases for East African organisations. Programme reports, grant applications, procurement documents, legal agreements: these are all amenable to AI-assisted processing.

**The connectivity challenge:** Sending hundreds of pages of documents to a cloud API every time you need to process them is expensive and slow on constrained bandwidth.

**The offline-first solution:** Small, quantized language models (Llama 3.1 8B, Mistral 7B, Phi-3) can run on a modest server — 16GB RAM, a mid-range GPU — and be deployed on-premise or on a local network. These models are capable enough for document summarisation, information extraction, and classification tasks. They do not require an internet connection after the initial setup.

In our deployment for a Kigali-based programme monitoring office, we ran a quantized Llama model on a local server. Field staff submitted documents over the organisation's local network. The processing happened entirely on-premise. Internet was only required for the initial model download and occasional model updates.

**What you give up:** The cutting-edge capability of GPT-4 or Claude Opus. For most document processing tasks in NGO and government contexts, this trade-off is acceptable — the difference in output quality is noticeable but not critical.

## Category 2: Data Analysis and Reporting (Cacheable, Bandwidth-Efficient)

Organisations that need AI-assisted data analysis — running natural language queries against a database, generating narrative summaries of programme data, identifying anomalies in financial reports — have a viable path that minimises bandwidth use.

**The approach:** Pre-process data locally. Send only structured queries and small result sets to cloud APIs. Cache results aggressively.

A dashboard that refreshes once per day and caches the AI-generated narrative summaries uses a fraction of the bandwidth of a system that queries an LLM on every page load. For most reporting use cases, daily refresh is sufficient.

**Tools that work well in this pattern:**
- **LangChain with SQLite or PostgreSQL:** Run the database locally. Use LangChain's SQL agent to translate natural language to SQL. Only the small SQL query and result set need to leave the local network.
- **Ollama:** Runs open-source models locally with a straightforward API. Swap in cloud models when internet is available; fall back to local models when it is not.
- **LlamaIndex:** Excellent for building document search and Q&A systems over local document collections. Works entirely offline once the index is built.

## Category 3: Translation and Language Processing (Cloud-Dependent, But Efficient)

For East African organisations working across Kinyarwanda, Swahili, and English, AI translation is a genuinely high-value capability. This is one area where local models are not yet competitive — the cloud APIs (Google Translate, DeepL, GPT-4) have meaningfully better Kinyarwanda and Swahili performance.

**The bandwidth-efficient approach:** Batch translation requests. Instead of translating documents in real time, queue them for overnight processing when internet rates are lower and bandwidth is less constrained. A 50-page document is around 25,000 tokens — approximately $0.05 at GPT-4o pricing. The cost is manageable; the bandwidth is the constraint to design around.

## Category 4: Voice and Speech (Emerging, Handle with Care)

Automatic speech recognition for Kinyarwanda and other East African languages has improved significantly in the last two years. Whisper (OpenAI's open-source model) handles Kinyarwanda reasonably well and can run locally.

This opens up use cases around voice-to-text for field data collection, meeting transcription in local languages, and audio report processing.

**The honest caveat:** Accuracy on accented or code-switched speech (Kinyarwanda mixed with French or English, common in Kigali) is still imperfect. Build a human review step into any production workflow that uses speech recognition for data collection.

## The Architecture Principle: Local-First, Cloud-Augmented

The pattern that works consistently across these categories is **local-first, cloud-augmented**: do as much processing as possible on local infrastructure, use cloud APIs selectively for tasks that genuinely require frontier model capability, and design graceful degradation so the system continues to function when connectivity is unavailable.

This is not a compromise position. For many East African deployment contexts, it is the correct architecture regardless of connectivity — because it also addresses data residency concerns, reduces API costs, and makes the system more predictable to operate.

## Getting Started

If you are an IT manager or CTO at an East African organisation looking to deploy AI capabilities, the practical starting point is identifying one high-volume, repetitive document task — report processing, form extraction, document classification — and running a local model pilot on that specific task.

The investment is modest: a mid-range server or a cloud VM, two to four weeks of integration work, and a clear definition of what success looks like. The learning from that pilot informs every subsequent AI deployment.`,
  },
  {
    slug: "how-to-choose-software-vendor-kigali",
    title: "How to Choose a Software Vendor in Kigali: What to Ask Before You Sign",
    excerpt:
      "Rwanda's technology sector is growing fast and not every vendor delivers what they promise. Here is the framework we recommend to any organisation evaluating software development partners in Kigali.",
    category: "Strategy",
    date: "2024-12-15",
    readTime: 8,
    coverImage:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    content: `## The Kigali Software Market in 2025

Rwanda's ICT sector has grown substantially over the last decade. There are genuine, capable software development firms in Kigali — teams that have delivered production systems for banks, government agencies, NGOs, and regional businesses. There are also a significant number of less experienced teams who present confidently and deliver poorly.

For an organisation with limited technical capacity evaluating vendors, distinguishing between these two categories is genuinely difficult. This guide gives you the framework we would recommend to a friend running a Kigali-based organisation who asked us how to evaluate a software vendor.

## The Four Questions That Matter Before Anything Else

Before looking at portfolios, pricing, or timelines, these four questions will tell you more than anything else:

**1. Can you show me a system you built that is currently in production?**

Not a mockup. Not a demo environment. A live system, in use by real users, that you can observe. Ask for a reference contact at the client — someone you can call independently, not someone the vendor has coached.

If a vendor cannot name three live production systems with contactable references, stop the conversation. This is the single most important filter.

**2. Who specifically will be working on my project, and what have they built?**

Many firms win business through a senior team and deliver through junior staff. You are entitled to know exactly who will be writing your code, and to see their individual work. Ask for GitHub profiles or code samples from the people who will be assigned to your project — not the team lead presenting in the sales meeting.

**3. What happens when something breaks after delivery?**

Production software breaks. Servers go down, edge cases surface, integrations fail. A vendor who has no clear answer to post-delivery support is a vendor whose incentives end at delivery. Ask specifically: what is the SLA for a critical bug? How is support priced after the project closes? Who is the contact?

**4. What technology will you use, and why?**

A competent vendor should be able to explain why they are recommending a specific technology stack for your use case. Not just "we use React and Node.js" — but why those choices serve your organisation's specific context. If the answer is "it's what we know," that is honest but worth probing. If the answer is a sophisticated technical justification, it is a good sign you are talking to people who think carefully.

## Red Flags That Should End the Conversation

**They cannot give you a fixed price or a milestone-based payment structure.** A vendor who insists on time-and-materials billing for a project with a defined scope is transferring risk to you. Legitimate vendors can estimate and commit to scope.

**The proposal arrives within 24 hours and is generic.** A thoughtful proposal takes time. A proposal that could have been written before the discovery call is a template, not evidence of understanding your problem.

**They do not ask about your existing systems, data, or constraints.** A vendor who does not ask about what you are currently using, what data needs to migrate, what integrations are required, or what the regulatory environment is — is not planning to build for your actual situation.

**They promise features that sound like magic.** "AI-powered" everything. "Blockchain for data security." Technology name-dropping without functional specificity is a reliable signal of a team that has learned to sell, not build.

**They have no local tax registration or formal business structure.** You should be able to verify that the firm is a registered Rwandan company, has an RDB registration number, and can issue you a proper invoice. This protects you contractually and financially.

## What a Good Vendor Selection Process Looks Like

Based on projects we have seen go well and projects we have seen go badly, this is the process we recommend:

**Week 1 — Scope definition.** Write a one to two page brief describing what you need. Not a technical specification — a business problem statement. What you need to be able to do that you cannot do now. Who uses the system and how often. What success looks like in 12 months.

**Week 2 — Market scan.** Identify four to six vendors through RDB directories, peer referrals, and LinkedIn. Request proposals from all of them using your brief. Do not accept verbal proposals.

**Week 3 — Reference calls.** For any vendor whose written proposal looks credible, call their references independently. Ask the reference three specific questions: did they deliver on time, how did they handle problems, would you hire them again?

**Week 4 — Technical assessment.** For your top two vendors, ask for a half-day technical workshop — paid if necessary — where they walk through their proposed architecture for your problem. This separates vendors who understand your problem from vendors who have memorised a sales script.

**Decision.** Choose on competence and references, not price. A vendor who costs 30% more and has three verifiable references delivering comparable systems is a better choice than the lowest bidder with a portfolio of mockups.

## The Honest Context

Kigali has capable software firms. The difficulty is that they are not always easy to find through the normal channels — the most capable teams are often busy and do less aggressive marketing than newer firms still building their client base.

Ask your peers. The best referral you can get is from an organisation similar to yours that has completed a project with a vendor in the last 18 months and is satisfied with what they got. Rwanda's professional community is tight enough that these conversations are accessible.

Do not rush the vendor selection. The cost of a failed software project — not just financially, but in staff time and organisational credibility — is significantly higher than the cost of spending an extra four weeks choosing the right partner.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
