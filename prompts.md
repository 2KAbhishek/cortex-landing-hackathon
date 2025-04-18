1. Initial prompt:

```markdown
You are an expert product manager, help me write a prompt that will help me define a PRD for the following requirement:

As a org team member, I want to be able to search for something and then get the response powered by all of the data my org has access to with source links

this will be a centralized platform that has access to all of the organizational sources, for example: Slack, Confluence, JIRA, Google Drive with room to integrate more sources in future

It can use MCP (Model context protocol), APIs and other ways to access the data
```

2. Prompt used for PRD

```markdown
Write a Product Requirements Document (PRD) for a centralized organizational search platform.

User Story:
As an org team member, I want to be able to search for something and get a comprehensive response, powered by all the data my organization has access to, with clear source links.

Scope and Features:

The platform should search across multiple organizational data sources such as:

Slack messages (public and private channels if permissions allow)

Confluence documents and pages

JIRA issues and tickets

Google Drive files (Docs, Sheets, PDFs, etc.)

Other sources should be pluggable via APIs or protocols in the future

Responses should cite specific source links with timestamps or file references

The system can use MCP (Model Context Protocol), native APIs, or custom connectors to access data

Must have scalable architecture for adding new data sources

Role-based access control for different visibility levels

Search should be semantic/natural language based, not just keyword match

Include in the PRD:

Problem Statement

Goals & Non-Goals

Target Users

Functional Requirements

Non-functional Requirements (e.g., performance, scalability, security)

Data Source Integration Plan (MCP, APIs, Connectors)

UX Flows (search input, results display, filtering, source preview)

Technical Constraints

Metrics for Success

Open Questions & Risks
```

3. Prompt used for v0:

```markdown
Build a clean, modern, responsive landing page using React and Tailwind CSS for a centralized organizational search platform.

Structure the page using the Pain → Solution → Gain framework and target employees at fast-moving tech companies who struggle to find information across tools like Slack, JIRA, Confluence, and Google Drive.

Page Structure:

1. Hero Section

- Headline: “Your Organization’s Brain—Finally Searchable.”
- Subtext: “Stop digging through Slack, Confluence, JIRA, and Drive. One search bar to rule them all.”
- CTA: “Get Early Access”
- Background: Gradient or tech-style abstract
- Include an interactive search mockup with sample data and citations

2. Pain Section

- Headline: “You spend hours hunting for answers.”
- Icons or bullets showing pain points:
  - “Buried Slack threads”
  - “Forgotten Confluence pages”
  - “Old JIRA ticket from two sprints ago”
  - “Lost docs in shared Drives”

3. Solution Section

- Headline: “One search box. Every source.”
- Copy: “We index Slack, Confluence, JIRA, and Drive to give you precise answers with citations and previews.”
- Include a search UI mockup with citations, timestamps, and file previews
- Secondary CTA: “See it in action”

4. Gain Section

- Headline: “Know more. Work faster.”
- Cards for benefits:
  - Semantic AI search
  - Role-based access control
  - Source previews and links
  - Secure and fast

5. Persona-Based Use Cases

- Headline: “Built for Everyone in the Org”
- Cards:
  - Engineer → “Found the old migration plan”
  - PM → “Historical sprint goals in seconds”
  - Support → “Bug tickets instantly surfaced”

6. Security & Privacy Section

- Headline: “Enterprise-Grade Security”
- Icons or badges for:
  - OAuth/SSO
  - Role-based access
  - SOC2/ISO readiness
  - “We never store your data”

7. Integrations Strip

- Logos: Slack, Confluence, JIRA, Google Drive, GitHub

8. Competitor Comparison Table

- Headline: “Better than internal tools”
- Columns: This product vs. Notion AI, Workspace search, Guru
- Rows: Semantic search, multi-source, citations, access control, etc.

9. Testimonials Section

- Quotes from users with name, title, avatar
- Focus on speed, clarity, time saved

10. Sticky CTA

- Persistent “Get Early Access” button
- Footer with links: About, Security, Docs, Contact

Use elegant layout, whitespace, and soft colors with strong hierarchy. Prioritize clarity, speed, and trust.
```
