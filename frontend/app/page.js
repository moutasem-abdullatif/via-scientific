'use client';

import { useState } from 'react';

import Card from './components/Card';
import Table from './components/Table';
import InputPills from './components/InputPills';
import Popup from './components/Popup';

export default function Home() {
  const [geneData, setGeneData] = useState([]);
  const [geneStats, setGeneStats] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const fetchGenes = async (geneNames) => {
    const response = await fetch('http://x.xyz.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ geneNames: geneNames.map((gn) => gn.name) }),
    });
    const data = await response.json();
    setGeneData(data.results);
  };

  const fetchStats = async (geneCode) => {
    const response = await fetch(`http://x.xyz.com/${geneCode}?withStats=true&withOutliers=true`, {
      method: 'GET',
    });

    const data = await response.json();
    setGeneStats(data.results);
    setIsPopupOpen(true);
  };

  const closeModal = () => {
    setIsPopupOpen(false);
    setGeneStats(null);
  };

  return (
    <>
      <Card>
        <InputPills onSearch={fetchGenes} />
      </Card>
      {!!geneData && geneData.length ? (
        <Card>
          <Table geneData={geneData} onGetGeneData={fetchStats} />
        </Card>
      ) : (
        <></>
      )}
      <Popup isOpen={isPopupOpen} onClose={closeModal} geneDetails={geneStats} />
    </>
  );
}
