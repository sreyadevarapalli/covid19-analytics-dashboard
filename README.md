# 🦠 COVID-19 Analytics Dashboard

A full-stack web application for exploring, analyzing, and comparing global COVID-19 statistics through interactive dashboards, charts, filters, and country-level insights.

The application combines a **React + Vite frontend**, **Node.js + Express backend**, **MySQL database integration**, and COVID-19 data APIs to provide an interactive data analytics experience.

---

## 📊 Project Overview

The COVID-19 Analytics Dashboard allows users to explore worldwide COVID-19 statistics in a clear and interactive way.

Users can:

* View global COVID-19 statistics
* Search and filter countries
* Explore country-specific details
* Analyze global and continental statistics
* Compare two countries side by side
* Visualize data through interactive charts
* Understand recovery, mortality, active case, and testing metrics

The project follows a full-stack architecture with a dedicated frontend and backend.

---

## ✨ Features

### 🌍 Global Dashboard

* Total cases
* Total deaths
* Total recovered cases
* Active cases
* Critical cases
* Total tests
* Affected countries
* Top countries by total cases

### 🗺️ Countries Explorer

* Search countries by name
* Filter by continent
* Filter by population range
* Filter by minimum cases
* Filter by maximum cases
* Sort by:

  * Country name
  * Total cases
  * Deaths
  * Recovered cases
  * Population
* Pagination
* Country cards with flags and statistics

### 📌 Country Details

Each country has a dedicated details page containing:

* Country flag
* Country name
* Continent
* Population
* Total cases
* Active cases
* Recovered cases
* Deaths
* Tests
* Per-million statistics

### 📈 Analytics

The Analytics page provides interactive visualizations including:

* Top 30 countries by total cases
* Top 30 countries by active cases
* Top 10 cases distribution
* Top countries by deaths
* Continent-level analysis
* Recovery rate
* Mortality rate
* Active case rate
* Tests per case

### ⚖️ Country Comparison

Compare two countries side by side using:

* Country flags
* Total cases
* Deaths
* Recovered cases
* Active cases
* Population
* Comparison summary
* Interactive comparison charts

### ℹ️ About Page

Provides information about:

* Project purpose
* Main features
* Technologies used
* Data source
* Developer information

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* React Router
* Tailwind CSS
* Recharts

### Backend

* Node.js
* Express.js
* REST API
* CORS
* dotenv

### Database

* MySQL
* mysql2

### Development Tools

* Git
* GitHub
* VS Code
* npm

---

## 🏗️ Project Architecture

```text
covid19-analytics-dashboard/
│
├── frontend/
│   ├── public/
│   │
│   └── src/
│       ├── components/
│       │   ├── analytics/
│       │   ├── compare/
│       │   ├── countries/
│       │   ├── countryDetails/
│       │   ├── dashboard/
│       │   ├── layout/
│       │   ├── search/
│       │   └── ui/
│       │
│       ├── hooks/
│       ├── pages/
│       │   ├── About/
│       │   ├── Analytics/
│       │   ├── Compare/
│       │   ├── Countries/
│       │   ├── CountryDetails/
│       │   └── Dashboard/
│       │
│       ├── services/
│       ├── utils/
│       ├── App.jsx
│       └── main.jsx
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   │
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🔄 Application Flow

```text
COVID-19 Data API
        │
        ▼
   Express Backend
        │
        ├── Global Routes
        ├── Country Routes
        └── Analytics Routes
        │
        ▼
   React Frontend
        │
        ├── Dashboard
        ├── Countries
        ├── Country Details
        ├── Analytics
        ├── Compare
        └── About
```

---

## 🔌 API Endpoints

### Global Statistics

```text
GET /api/global
```

Returns worldwide COVID-19 statistics.

### All Countries

```text
GET /api/countries
```

Returns COVID-19 statistics for all available countries.

### Country Details

```text
GET /api/countries/:country
```

Returns detailed statistics for a specific country.

### Analytics

```text
GET /api/analytics/top-countries
```

Returns analytics data for countries with the highest case counts.

### Health Check

```text
GET /api/health
```

Checks whether the backend server is running.

### Database Test

```text
GET /api/db-test
```

Tests the MySQL database connection.

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sreyadevarapalli/covid19-analytics-dashboard.git
```

```bash
cd covid19-analytics-dashboard
```

---

## 🚀 Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

## 🖥️ Backend Setup

Open a new terminal and navigate to:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

---

## 🗄️ Database Configuration

Create a MySQL database and configure your environment variables.

Create a `.env` file inside the `backend` directory:

```env
PORT=5000

DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=covid19_dashboard
DB_PORT=3306
```

> Never commit your `.env` file to GitHub.

---

## 🔐 Environment Variables

The following environment variables may be required:

```env
PORT=5000
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=3306
```

---

## 📱 Responsive Design

The application is responsive across:

* 📱 Mobile devices
* 📱 Large mobile devices
* 💻 Tablets
* 🖥️ Desktop screens

The UI has been tested across multiple screen sizes to provide a consistent user experience.

---

## 📊 Data Source

COVID-19 statistics are retrieved from the disease.sh COVID-19 data API.

The dashboard transforms the raw data into meaningful visualizations and analytics.

---

## 🔮 Future Enhancements

Planned improvements include:

* [ ] User authentication
* [ ] Historical time-series analysis
* [ ] Date-based filtering
* [ ] Advanced data export
* [ ] PDF report generation
* [ ] CSV data export
* [ ] Advanced caching
* [ ] Automated data synchronization
* [ ] Cloud deployment
* [ ] Improved accessibility
* [ ] Dark mode improvements

---

## 👩‍💻 Developer

### Sreya Devarapalli

Computer Science & Engineering Graduate

* GitHub: https://github.com/sreyadevarapalli
* LinkedIn: https://www.linkedin.com/in/sreya-devarapalli-6b1884238/

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for educational and portfolio purposes.
