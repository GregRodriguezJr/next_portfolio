import React from "react";
import dashboardImg from "../public/assets/dashboard.png";
import ProjectDetails from "../components/ProjectDetails";

const Dashboard = () => {
  const techStack = [
    'HTML/CSS',
    'JavaScript',
    'jQuery',
    'Bootstrap',
    'CoinGecko API',
    'GitHub Pages'
  ]

  return (
    <ProjectDetails
      bgImg={dashboardImg}
      title="Crypto Dashboard"
      subtitle="A Cryptocurreny Aggregator"
      description="Crypto Dashboard is a web application that aggregates over 13,000
      crypto currencies. Designed and implemented front-end and backend
      API capabilities & functionality so users can interact with the
      price chart to see the history of a chosen coin. Users can click
      links inside the table to provide additional information inside a
      modal. Users can search by coin name to display an information card,
      while getting coin name suggestions."
      techArr={techStack}
      demoUrl='https://gregrodriguezjr.github.io/crypto_dashboard_v2/'
      codeUrl='https://github.com/GregRodriguezJr/crypto_dashboard_v2'
    />
  );
};

export default Dashboard;
