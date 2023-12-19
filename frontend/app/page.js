'use client';

import { useState } from 'react';

import Card from './components/Card';
import Table from './components/Table';
import InputPills from './components/InputPills';

export default function Home() {
  const [geneData, setGeneData] = useState([]);

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

  return (
    <>
      <Card>
        <InputPills onSearch={fetchGenes} />
      </Card>
      {!!geneData && geneData.length ? (
        <Card>
          <Table geneData={geneData} />
        </Card>
      ) : (
        <></>
      )}
    </>
  );
}
