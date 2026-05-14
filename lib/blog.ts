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
    slug: "building-ai-pipelines-for-ngos",
    title: "Building AI Pipelines for NGOs: From PDF Chaos to Structured Intelligence",
    excerpt:
      "Most NGOs are sitting on years of unstructured PDF reports. Here's how we built an LLM-powered pipeline that extracts structured data and drafts donor narratives automatically.",
    category: "AI & Data",
    date: "2025-03-15",
    readTime: 8,
    coverImage:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
    content: `## The Problem

Across East Africa, NGOs generate thousands of pages of programme reports every year. Field officers write them. Programme managers read them. Donors demand summaries from them. But almost none of this data is structured — it lives in PDFs, locked away from analysis.

## Our Approach

We built a three-stage pipeline using LangChain and OpenAI's API:

1. **Ingestion** — PDF reports are uploaded to a FastAPI endpoint, split into overlapping chunks, and embedded into a vector store.
2. **Extraction** — A structured extraction chain pulls key metrics (beneficiary counts, activity completion rates, geographic coverage) into a validated Pydantic schema.
3. **Generation** — A final chain drafts donor narrative sections based on the extracted data, with citations back to the source document.

## Results

In our pilot with a Kigali-based programme monitoring office, the pipeline reduced manual report processing time by 82%. Programme officers now spend time reviewing and refining drafts rather than writing from scratch.

## Key Lessons

- **Schema design is everything.** The quality of your extracted data depends on how precisely you define what you're looking for. We iterated the schema six times before it was reliable.
- **Human review is non-negotiable.** The pipeline generates drafts, not final outputs. We built the review interface before the extraction pipeline.
- **Chunking strategy matters more than model choice.** Using 800-token chunks with 150-token overlap gave us far better extraction accuracy than the defaults.`,
  },
  {
    slug: "paperless-ngx-deployment-guide",
    title: "Deploying Paperless-NGX for a 200-Person Office: What We Learned",
    excerpt:
      "A complete walkthrough of our Paperless-NGX deployment for a national programme office — from LDAP integration to custom document workflows and staff training.",
    category: "Engineering",
    date: "2025-02-08",
    readTime: 11,
    coverImage:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    content: `## Why Paperless-NGX

For organisations moving from physical or shared-drive document management to a proper DMS, Paperless-NGX hits a rare sweet spot: it's genuinely powerful, self-hostable, and free. For NGOs with tight budgets and data residency concerns, it's often the right call over SaaS alternatives.

## The Deployment Stack

- **VPS**: 4-core, 8GB RAM on a Kigali-based cloud provider (data residency requirement)
- **Stack**: Docker Compose with Paperless-NGX, PostgreSQL, Redis, and Nginx reverse proxy
- **Auth**: LDAP integration with the client's existing Active Directory
- **Backup**: Daily PostgreSQL dumps to S3-compatible storage

## The LDAP Challenge

Paperless-NGX's LDAP support requires careful group-mapping configuration. We found that the \`PAPERLESS_LDAP_GROUPS_FILTER\` variable needed to be explicitly scoped to the OU containing programme staff — a broad filter caused permission escalation issues during testing.

## Training

We ran three half-day training sessions across departments. The key insight: staff didn't need to understand the system architecture. They needed three workflows: upload a document, find a document, share a document. Everything else was noise.

## Results

98% of the organisation's active documents were digitised within 90 days. The remaining 2% were physical-only legal documents that required notarised copies — out of scope for digital-first migration.`,
  },
  {
    slug: "cloud-cost-optimisation-east-africa",
    title: "Cloud Cost Optimisation for East African Organisations",
    excerpt:
      "AWS and GCP pricing structures weren't designed for East African bandwidth costs. Here's how we reduce cloud bills by 40–60% for our clients without sacrificing reliability.",
    category: "Cloud",
    date: "2025-01-20",
    readTime: 7,
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    content: `## The East African Cloud Tax

Running cloud infrastructure in East Africa means paying a hidden premium that most pricing calculators don't surface: data transfer costs to European and US regions are significantly higher than intra-region transfers, and many workloads route through distant availability zones by default.

## Where the Money Goes

In our audits of new client infrastructure, we consistently find the same patterns:

- **Oversized compute**: Dev and staging environments running 24/7 on production-class instances
- **Unoptimised storage**: Hot S3/GCS storage for cold or archival data
- **Data transfer waste**: Application logs and backups routing to distant regions
- **Idle resources**: EIPs, NAT Gateways, and snapshots attached to terminated instances

## Our Optimisation Playbook

1. **Right-size compute** using CloudWatch/Cloud Monitoring actuals, not estimated peaks
2. **Implement auto-scaling** with aggressive scale-down policies for non-production
3. **Move cold data** to Glacier/Archive storage tiers
4. **Deploy a regional cache** (CloudFront or Cloudflare) to reduce origin requests
5. **Audit and delete** unattached volumes, snapshots, and unused Elastic IPs monthly

## Realistic Expectations

For a typical SME or NGO workload, we target 40–60% cost reduction in the first 90 days. Sustained savings require ongoing governance — we recommend monthly cost review as part of any DevOps retainer.`,
  },
  {
    slug: "technology-strategy-for-african-institutions",
    title: "Technology Strategy for African Institutions: Beyond the Pilot Trap",
    excerpt:
      "Why most technology pilots in African institutions fail to scale — and the strategic framework we use to build digital infrastructure that actually sticks.",
    category: "Strategy",
    date: "2024-12-05",
    readTime: 9,
    coverImage:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    content: `## The Pilot Trap

Across East Africa, there are hundreds of technology pilots that never graduated to production systems. Data collection apps that worked for three months, then were abandoned when the champion moved on. Dashboards that were live for one donor reporting cycle, then fell into disrepair. ERP systems that cost six figures to deploy and were never fully adopted.

This isn't a technology problem. It's a strategy problem.

## Why Pilots Fail to Scale

After working with NGOs and government offices across Rwanda, we've identified three consistent failure modes:

**1. No ownership model.** The implementing organisation sees itself as a service provider, not a partner. When the project ends, so does the relationship. There's no internal champion with the authority and budget to maintain the system.

**2. Technology chosen before problem defined.** A donor funds "a data management system." The implementing partner deploys whatever they know how to deploy. The organisation gets a solution to a problem they didn't necessarily have.

**3. Capacity not built, only delivered.** Staff can use the system while the implementing partner is present. Six months later, when something breaks, no one inside the organisation knows how to fix it.

## Our Framework

Before any technology project, we work through four questions:

1. **What decision will this enable?** If the answer is "better data" without a specific decision attached, we push back.
2. **Who owns this after we leave?** We name the internal owner and build the system around their capability, not ours.
3. **What's the failure mode?** We explicitly design the graceful degradation path — what happens when the internet goes down, when the champion leaves, when the budget is cut.
4. **How do we know it's working?** A specific, measurable indicator that the system is delivering value — not uptime, but business impact.

Technology that sticks is technology that was designed to stick from the beginning.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
