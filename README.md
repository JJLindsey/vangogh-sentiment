# Van Gogh Pro: Posthumous Cultural Impact & Sentiment Analysis Dashboard

### Project Overview
Fullstack analytical dashboard built with **Vue 3** and **Node.js** to quantify the "Posthumous Popularity Paradox" of Vincent Van Gogh. This tool bridges 150 years of academic art-historical research with modern sentiment analysis to visualize how a rejected 19th-century artist became a 21st-century commercial powerhouse.

### Architecture & Tech Stack
- **Frontend:** Vue 3 (Composition API) + Vite + Chart.js
- **Backend:** Node.js + Express (API Gateway & NLP Engine)
- **State Management:** Vue 3 Reactive Store / Service Pattern
- **NLP:** Sentiment analysis library for processing historical critiques
- **Environment:** npm run concurrently for unified Fullstack development

## Data Sources
### Public Sentiment (NLP)
Processed qualitative historical critiques through an Express-based sentiment engine to generate quantitative "Legacy Scores."
- Representative data based on social media patterns
- Demonstrates sentiment analysis techniques

### Art Historical/Academic Reception (Quantative)
Fetched and aggregated publications vie Google Scholar API to map scholarly interest trends
- Google Scholar academic publications
- Historical exhibition records

### Brand Collaborations (Structured Data)
Normalized 50+ points of official partnership data from the Van Gogh Museum into a structured schema (Category, Reach, Impact).
- Source: vangoghmuseum.nl

### Key Engineering Challenges
#### 1. The ETL Pipeline: From Research to Relational Data
**Challenge:** Transforming disparate data—ranging from 1920s exhibition records to 2024 LEGO brand partnerships—into a unified, chart-ready format.
**Solution:** Built a robust **Data Service Layer** in `artHistoricalData.js` that normalizes heterogeneous metadata (e.g., mapping qualitative "Impact" levels to quantitative "Commercialization Scores").

#### 2. Scalable Mock API Integration
**Challenge:** Simulating a production environment without a live database.
**Solution:** Architected a **Decoupled Service Pattern**. By exporting data through structured functions like `calculateCommercializationScore()`, the frontend remains agnostic of the data source, allowing for a seamless future migration to a REST or GraphQL API.

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

